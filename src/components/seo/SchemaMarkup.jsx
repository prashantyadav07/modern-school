/**
 * SchemaMarkup Component
 * Renders JSON-LD structured data for SEO
 * 
 * Includes:
 * - EducationalOrganization schema
 * - LocalBusiness schema
 * - WebSite schema
 */

import React from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';
import { siteConfig } from '../../config/site.config';

const SchemaMarkup = ({ pageType = 'website', additionalSchema }) => {
    const {
        name,
        siteUrl,
        contact,
        address,
        geo,
        defaultSEO,
        organization,
        courses
    } = siteConfig;

    // Educational Organization Schema
    const educationalOrganizationSchema = {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        "@id": `${siteUrl}/#organization`,
        "name": name,
        "alternateName": "JSCE",
        "url": siteUrl,
        "logo": `${siteUrl}/assets/logo1.png`,
        "image": `${siteUrl}/assets/college.webp`,
        "description": defaultSEO.description,
        "email": contact.email,
        "telephone": contact.phone[0],
        "address": {
            "@type": "PostalAddress",
            "streetAddress": address.streetAddress,
            "addressLocality": address.locality,
            "addressRegion": address.region,
            "postalCode": address.postalCode,
            "addressCountry": address.countryCode
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": geo.latitude,
            "longitude": geo.longitude
        },
        "areaServed": {
            "@type": "GeoCircle",
            "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": geo.latitude,
                "longitude": geo.longitude
            },
            "geoRadius": "50000"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Academic Programs",
            "itemListElement": courses.map((course, index) => ({
                "@type": "Course",
                "name": course.name,
                "description": course.description,
                "provider": {
                    "@type": "EducationalOrganization",
                    "name": name
                }
            }))
        }
    };

    // Local Business Schema (for "near me" searches)
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": `${siteUrl}/#localbusiness`,
        "name": name,
        "image": `${siteUrl}/assets/college.webp`,
        "url": siteUrl,
        "telephone": contact.phone[0],
        "email": contact.email,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": address.streetAddress,
            "addressLocality": address.locality,
            "addressRegion": address.region,
            "postalCode": address.postalCode,
            "addressCountry": address.countryCode
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": geo.latitude,
            "longitude": geo.longitude
        },
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "09:00",
                "closes": "17:00"
            }
        ],
        "priceRange": "$$",
        "paymentAccepted": "Cash, Bank Transfer"
    };

    // Website Schema
    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        "url": siteUrl,
        "name": name,
        "description": defaultSEO.description,
        "publisher": {
            "@id": `${siteUrl}/#organization`
        },
        "potentialAction": {
            "@type": "SearchAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": `${siteUrl}/?s={search_term_string}`
            },
            "query-input": "required name=search_term_string"
        }
    };

    // Breadcrumb Schema Generator
    const generateBreadcrumbSchema = (items) => ({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url
        }))
    });

    // Combine all schemas
    const schemas = [
        educationalOrganizationSchema,
        localBusinessSchema,
        websiteSchema
    ];

    // Add additional schema if provided
    if (additionalSchema) {
        schemas.push(additionalSchema);
    }

    return (
        <Helmet>
            {schemas.map((schema, index) => (
                <script
                    key={index}
                    type="application/ld+json"
                >
                    {JSON.stringify(schema)}
                </script>
            ))}
        </Helmet>
    );
};

// Export breadcrumb generator for use in pages
export const createBreadcrumbSchema = (items) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": item.url
    }))
});

export default SchemaMarkup;
