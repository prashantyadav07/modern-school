/**
 * Page-wise SEO Configuration
 * Contains meta titles, descriptions, and keywords for each page
 */

import { siteConfig } from '../../config/site.config';

const BASE_URL = siteConfig.siteUrl;

export const seoConfig = {
    home: {
        title: "J.S. College of Education | B.A. & B.Sc. College in Muzaffarnagar, UP",
        description: "J.S. College of Education, Muzaffarnagar - Premier  UGC approved institution offering B.A. and B.Sc. courses. Quality education with experienced faculty in Uttar Pradesh. Admissions open 2024-25.",
        keywords: "J.S. College of Education, education college muzaffarnagar, BA college UP, BSc college muzaffarnagar, teacher training institute,  UGC approved college",
        canonicalUrl: `${BASE_URL}/`,
        ogType: "website"
    },

    about: {
        title: "About Us - J.S. College of Education | Our History, Mission & Vision",
        description: "Learn about J.S. College of Education's rich history, mission, vision and values.  UGC approved institution committed to excellence in teacher education in Muzaffarnagar, UP.",
        keywords: "about j.s. college, college history, education mission,  UGC approved, muzaffarnagar college",
        canonicalUrl: `${BASE_URL}/about`,
        ogType: "website"
    },

    academics: {
        title: "Academics - J.S. College of Education | Programs & Curriculum",
        description: "Explore academic programs at J.S. College of Education. Comprehensive curriculum, modern teaching methods, and quality education for aspiring educators.",
        keywords: "academics, education programs, curriculum, teaching methods, academic excellence",
        canonicalUrl: `${BASE_URL}/academics`,
        ogType: "website"
    },

    courses: {
        title: "Courses - B.A. & B.Sc. Programs | J.S. College of Education",
        description: "Explore B.A. and B.Sc. courses at J.S. College of Education, Muzaffarnagar. Detailed information on eligibility, duration, syllabus, and career opportunities.",
        keywords: "BA course, BSc course, undergraduate programs, course eligibility, degree courses muzaffarnagar",
        canonicalUrl: `${BASE_URL}/academics/courses`,
        ogType: "website"
    },

    faculty: {
        title: "Our Faculty - Experienced Teachers | J.S. College of Education",
        description: "Meet our dedicated faculty members at J.S. College of Education. Highly qualified and experienced teaching staff committed to student success.",
        keywords: "faculty members, teachers, professors, teaching staff, experienced educators",
        canonicalUrl: `${BASE_URL}/academics/faculty`,
        ogType: "website"
    },

    admissions: {
        title: "Admissions 2024-25 - Apply Now | J.S. College of Education",
        description: "Admissions open for 2024-25 at J.S. College of Education, Muzaffarnagar. Check eligibility, fee structure, application process, and important dates.",
        keywords: "college admission, admission 2024-25, apply online, admission process, fee structure, eligibility criteria",
        canonicalUrl: `${BASE_URL}/admissions`,
        ogType: "website"
    },

    facilities: {
        title: "Campus Facilities & Infrastructure | J.S. College of Education",
        description: "State-of-the-art facilities at J.S. College of Education - modern classrooms, library, computer lab, and more. Explore our campus infrastructure.",
        keywords: "campus facilities, college infrastructure, library, computer lab, classrooms, sports facilities",
        canonicalUrl: `${BASE_URL}/facilities`,
        ogType: "website"
    },

    gallery: {
        title: "Photo Gallery - Campus & Events | J.S. College of Education",
        description: "Browse the photo gallery of J.S. College of Education. Campus views, events, celebrations, and student activities captured in pictures.",
        keywords: "college gallery, campus photos, college events, student activities, cultural programs",
        canonicalUrl: `${BASE_URL}/gallery`,
        ogType: "website"
    },

    authenticity: {
        title: "Authenticity & Certificates | J.S. College of Education",
        description: "View official documents,  UGC approval, AISHE certificate, affiliation documents, and authenticity certificates of J.S. College of Education.",
        keywords: "college certificates,  UGC approval, AISHE certificate, affiliation, authenticity documents",
        canonicalUrl: `${BASE_URL}/authenticity`,
        ogType: "website"
    },

    inquiry: {
        title: "Inquiry & Enquiry | J.S. College of Education",
        description: "Have questions? Submit your inquiry to J.S. College of Education. Our team will respond promptly to your queries about admissions, courses, and more.",
        keywords: "college inquiry, admission enquiry, contact college, ask questions",
        canonicalUrl: `${BASE_URL}/inquiry`,
        ogType: "website"
    },

    contact: {
        title: "Contact Us - Location & Phone | J.S. College of Education",
        description: "Contact J.S. College of Education, Muzaffarnagar. Address: Rajpur-Chhajpur, Kandhala Budhana Road. Phone: +91 9759378701, +91 8273737248. Email: j.seducationcollege@gmail.com",
        keywords: "contact college, college address, phone number, email, location muzaffarnagar, directions",
        canonicalUrl: `${BASE_URL}/contact`,
        ogType: "website"
    }
};

export default seoConfig;
