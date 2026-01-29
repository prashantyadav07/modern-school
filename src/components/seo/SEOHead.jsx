/**
 * SEOHead Component
 * Reusable component for managing meta tags using react-helmet-async
 * 
 * Usage:
 * <SEOHead 
 *   title="Page Title" 
 *   description="Page description"
 *   canonicalUrl="https://www.jscollegeofeducation.com/page"
 * />
 */

import React from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';
import { siteConfig } from '../../config/site.config';

const SEOHead = ({
    title,
    description,
    keywords,
    canonicalUrl,
    ogType = "website",
    ogImage,
    noIndex = false,
    children
}) => {
    const {
        name: siteName,
        siteUrl,
        defaultSEO,
        address,
        geo,
        contact
    } = siteConfig;

    // Use defaults if not provided
    const pageTitle = title || defaultSEO.title;
    const pageDescription = description || defaultSEO.description;
    const pageKeywords = keywords || defaultSEO.keywords;
    const pageCanonical = canonicalUrl || siteUrl;
    const pageOgImage = ogImage || `${siteUrl}${siteConfig.ogImage}`;

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{pageTitle}</title>
            <meta name="title" content={pageTitle} />
            <meta name="description" content={pageDescription} />
            <meta name="keywords" content={pageKeywords} />

            {/* Canonical URL */}
            <link rel="canonical" href={pageCanonical} />

            {/* Robots */}
            {noIndex ? (
                <meta name="robots" content="noindex, nofollow" />
            ) : (
                <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
            )}

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={pageCanonical} />
            <meta property="og:title" content={pageTitle} />
            <meta property="og:description" content={pageDescription} />
            <meta property="og:image" content={pageOgImage} />
            <meta property="og:site_name" content={siteName} />
            <meta property="og:locale" content="en_IN" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={pageCanonical} />
            <meta name="twitter:title" content={pageTitle} />
            <meta name="twitter:description" content={pageDescription} />
            <meta name="twitter:image" content={pageOgImage} />

            {/* Geo Tags for Local SEO */}
            <meta name="geo.region" content="IN-UP" />
            <meta name="geo.placename" content={address.locality} />
            <meta name="geo.position" content={`${geo.latitude};${geo.longitude}`} />
            <meta name="ICBM" content={`${geo.latitude}, ${geo.longitude}`} />

            {/* Additional SEO Tags */}
            <meta name="author" content={siteName} />
            <meta name="publisher" content={siteName} />
            <meta name="copyright" content={`© ${new Date().getFullYear()} ${siteName}`} />
            <meta name="language" content="English" />
            <meta name="revisit-after" content="7 days" />
            <meta name="distribution" content="global" />
            <meta name="rating" content="general" />

            {/* Contact Info in Meta */}
            <meta name="contact" content={contact.email} />

            {/* Theme Color */}
            <meta name="theme-color" content="#1e40af" />
            <meta name="msapplication-TileColor" content="#1e40af" />

            {/* Allow custom children meta tags */}
            {children}
        </Helmet>
    );
};

export default SEOHead;
