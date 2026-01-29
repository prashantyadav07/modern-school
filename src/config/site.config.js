/**
 * Site-wide configuration for J.S. College of Education
 * Used for SEO, schema markup, and consistent data across the app
 */

export const siteConfig = {
    // Site Identity
    name: "J.S. College of Education",
    shortName: "JSCE",
    tagline: "Shaping Future Educators Since Establishment",

    // Domain Configuration
    siteUrl: "https://www.jscollegeofeducation.com",
    alternateDomain: "https://jscollegeofeducation.com",

    // Contact Information
    contact: {
        phone: ["+91 8273737248"],
        email: "j.seducationcollege@gmail.com",
        whatsapp: "+91 8273737248"
    },

    // Physical Address
    address: {
        streetAddress: "Rajpur-Chhajpur, Kandhala Budhana Road",
        locality: "Muzaffarnagar",
        region: "Uttar Pradesh",
        postalCode: "251001",
        country: "India",
        countryCode: "IN"
    },

    // Geo Coordinates (Muzaffarnagar)
    geo: {
        latitude: "29.4727",
        longitude: "77.7085"
    },

    // Social Media (add URLs when available)
    social: {
        facebook: "",
        instagram: "",
        twitter: "",
        youtube: ""
    },

    // Courses Offered
    courses: [
        {
            name: "Bachelor of Arts (B.A.)",
            code: "BA",
            duration: "3 Years",
            description: "Undergraduate degree program in Arts"
        },
        {
            name: "Bachelor of Science (B.Sc.)",
            code: "BSC",
            duration: "3 Years",
            description: "Undergraduate degree program in Science"
        }
    ],

    // Organization Details
    organization: {
        type: "EducationalOrganization",
        foundingYear: "",
        affiliation: "Maa Shakambhari University, Saharanpur",
        accreditation: "NCTE Approved"
    },

    // Default SEO
    defaultSEO: {
        title: "J.S. College of Education | B.A. & B.Sc. College in Muzaffarnagar",
        description: "J.S. College of Education, Muzaffarnagar - NCTE approved institution offering B.A. and B.Sc. courses. Quality education with experienced faculty. Admissions open for 2024-25.",
        keywords: "J.S. College of Education, B.A. College Muzaffarnagar, B.Sc. College Muzaffarnagar, Education College UP, Teacher Training Institute, NCTE Approved College"
    },

    // Open Graph Image
    ogImage: "/assets/college.webp"
};

export default siteConfig;
