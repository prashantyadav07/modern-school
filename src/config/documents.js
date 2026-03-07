import { ShieldCheck, Award, CheckCircle, Building2, GraduationCap, FileText, Landmark, Users, Calendar, DollarSign, Flame } from 'lucide-react';

import certificate from '../assets/certifiacte.png'
import trustimg from '../assets/trustimg.png'
import affilation from '../assets/affilation.png'
import commite from "../assets/commite.png"
import gemini from "../assets/gemini.png"
import Landpapers from "../assets/Landpapers.jpg"
import feeimg from "../assets/feecollg.png"
import modenc from "../assets/clc.png"
import popupImg from '../assets/pop up.jpeg';

export const documents = [
    {
        title: "Trust Deed",
        subtitle: "Legal Documentation",
        description: "Official trust deed document establishing the institution's legal foundation.",
        pdfUrl: "/downloads/js.pdf",
        fileName: "js.pdf",
        iconName: "FileText",
        iconColor: "text-purple-600",
        image: trustimg
    },
    {
        title: "Management Committee",
        subtitle: "Governing Body",
        description: "Details of the management committee members and their roles.",
        pdfUrl: "/downloads/mdm.pdf",
        fileName: "mdm.pdf",
        iconName: "Users",
        iconColor: "text-orange-600",
        image: commite
    },
    {
        title: "MSU AFFILIATION",
        subtitle: "University Recognition",
        description: "Official affiliation certificate from Maa Shakumbhari University, Saharanpur.",
        pdfUrl: "/downloads/msuaffilation.pdf",
        fileName: "msuaf.pdf",
        iconName: "Building2",
        iconColor: "text-indigo-600",
        image: affilation
    },
    {
        title: "Land Record",
        subtitle: "Property Documentation",
        description: "Official land records and property documents of the institution.",
        pdfUrl: "/downloads/land.pdf",
        pdfUrl2: "/downloads/land1.pdf",
        fileName: "land.pdf, land1.pdf",
        iconName: "Landmark",
        iconColor: "text-green-600",
        image: Landpapers
    },
    {
        title: "Academic Calendar",
        subtitle: "Academic Year Schedule",
        description: "Complete academic calendar with important dates and events for the current session.",
        pdfUrl: "/downloads/calendar.pdf",
        fileName: "calendar.pdf",
        iconName: "Calendar",
        iconColor: "text-rose-600",
        image: modenc
    },
    {
        title: "Fee Structure",
        subtitle: "Fee Details",
        description: "Detailed fee structure for all courses and programs offered by the institution.",
        pdfUrl: "/downloads/college_fee_image.jfif",
        fileName: "college_fee.jpg",
        iconName: "DollarSign",
        iconColor: "text-amber-600",
        image: feeimg
    },
    {
        title: "Faculty Registry",
        subtitle: "Staff Credentials",
        description: "Complete list of teaching staff with their educational qualifications.",
        pdfUrl: "/downloads/faculty.pdf",
        fileName: "faculty_list.pdf",
        iconName: "GraduationCap",
        iconColor: "text-sky-600",
        image: gemini
    },
    {
        title: "AISHE Certificate",
        subtitle: "Academic Session 2023-24",
        description: "All India Survey on Higher Education certification for institutional recognition.",
        pdfUrl: "/downloads/AISHE_Certificate_(2023-24).pdf",
        fileName: "AISHE_Certificate_2023-24.pdf",
        iconName: "Award",
        iconColor: "text-emerald-600",
        image: certificate
    },
    {
        title: "Financial Data",
        subtitle: "Financial Records",
        description: "Official financial statements and records of the institution.",
        pdfUrl: "/downloads/JS_COLLGE_STATEMENT.pdf",
        fileName: "JS COLLGE STATEMENT.pdf",
        iconName: "FileText",
        iconColor: "text-teal-600",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1000"
    },
    {
        title: "Announcement and Notification",
        subtitle: "Latest Updates",
        description: "Important announcements and examination notifications for students.",
        options: [
            { title: "EXTERNAL EXAM ANNOUNCEMENT", pdfUrl: "/downloads/EXTERNAL_EXAM_ANNOUCEMENT_2025-26.pdf", fileName: "External_Exam.pdf" },
            { title: "INTERNAL EXAM ANNOUNCEMENT B.A.", pdfUrl: "/downloads/INTERNAL_EXAM_ANNOUNCEMENT_B.A._2025-26.pdf", fileName: "Internal_Exam_BA.pdf" },
            { title: "INTERNAL EXAM ANNOUNCEMENT B.S.C", pdfUrl: "/downloads/INTERNAL_EXAM_ANNOUNCEMENT_B.S.C_2025-26.pdf", fileName: "Internal_Exam_BSC.pdf" },
            { title: "OFFICIAL NOTIFICATION IMAGE", pdfUrl: popupImg, fileName: "Notification_Image.jpg" }
        ],
        iconName: "CheckCircle",
        iconColor: "text-blue-600",
        image: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&q=80&w=1000"
    },
    {
        title: "Balance Sheet",
        subtitle: "Financial Statements",
        description: "Official financial statements and balance sheet of the institution.",
        pdfUrl: "/downloads/balance_sheet.pdf",
        fileName: "balance sheet.pdf",
        iconName: "FileText",
        iconColor: "text-teal-600",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1000"
    },
    {
        title: "Building Approval and NOC",
        subtitle: "Infrastructure Compliance",
        description: "Official building approval and No Objection Certificate documents.",
        pdfUrl: "/downloads/Building_Approval_and_NOC.pdf",
        fileName: "Building Approval and NOC.pdf",
        iconName: "Building2",
        iconColor: "text-indigo-600",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000"
    },
    {
        title: "Fee Refund Policy",
        subtitle: "Student Fee Rules",
        description: "Official policy regarding fee refunds for students.",
        pdfUrl: "/downloads/Fee_Refund_Policy.pdf",
        fileName: "Fee Refund Policy.pdf",
        iconName: "DollarSign",
        iconColor: "text-emerald-600",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1000"
    },
    {
        title: "Anti-Ragging Committee",
        subtitle: "Safety & Compliance",
        description: "Details of the anti-ragging committee members and regulations.",
        pdfUrl: "/downloads/ANTI_RAGGING_COMMITTEE_(1).pdf",
        fileName: "Anti ragging committee.pdf",
        iconName: "ShieldCheck",
        iconColor: "text-red-600",
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1000"
    },
    {
        title: "Fire Safety Certificate",
        subtitle: "Campus Safety",
        description: "Official fire safety certificate issued by the department.",
        pdfUrl: "/downloads/Fire_certificate.pdf",
        fileName: "Fire certificate.pdf",
        iconName: "Flame",
        iconColor: "text-orange-600",
        image: "https://images.unsplash.com/photo-1524419986249-348e8fa6ad4a?auto=format&fit=crop&q=80&w=1000"
    },
    {
        title: "Internal Quality Assurance Cell",
        subtitle: "Quality Standards",
        description: "Ensuring continuous improvement and maintaining quality standards.",
        pdfUrl: "/downloads/INTERNAL_QUALITY_ASSURANCE_CELL_(IQAC).pdf",
        fileName: "Internal Quality Assurance Cell.pdf",
        iconName: "ShieldCheck",
        iconColor: "text-blue-600",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000"
    },
    {
        title: "Student Grievance Redressal Cell",
        subtitle: "Student Support",
        description: "Mechanism for students to raise concerns and seek redressal.",
        pdfUrl: "/downloads/STUDENT_GRIVANCE_REDRESSAL_CELL.pdf",
        fileName: "Grievance Redressal Cell (1).pdf",
        iconName: "Users",
        iconColor: "text-purple-600",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1000"
    },
    {
        title: "SC/ST Welfare Cell",
        subtitle: "Equal Opportunity",
        description: "Committee for the welfare and equal opportunity of SC/ST students.",
        pdfUrl: "/downloads/CELL_FOR_SC,ST,OBC,EWS,MINORITY_STUDENTS.pdf",
        fileName: "Cell for SC.pdf",
        iconName: "ShieldCheck",
        iconColor: "text-indigo-600",
        image: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&q=80&w=1000"
    },
    {
        title: "Internal Complaint Committee",
        subtitle: "Prevention & Redressal",
        description: "Committee dedicated to the prevention of sexual harassment and ensuring a safe environment.",
        pdfUrl: "/downloads/INTERNAL_COMPLAINT_COMMITTEE_(2).pdf",
        fileName: "Internal Complaint Committee.pdf",
        iconName: "Users",
        iconColor: "text-rose-600",
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1000"
    },
    {
        title: "RTI Compliance ",
        subtitle: "Right to Information",
        description: `This institution is committed to transparency and accountability in accordance with the provisions of the Right to Information Act, 2005.

The details of the Central Public Information Officer (CPIO) and the First Appellate Authority (FAA) are provided below for seeking information under the RTI Act.

Applicants may submit their RTI application to the CPIO of the institution. In case of non-receipt of information within the prescribed time or dissatisfaction with the response, an appeal may be filed before the First Appellate Authority within 30 days as per the RTI Act, 2005.`,
        pdfUrl: "/downloads/JS_College_RTI_Compliance.pdf",
        fileName: "JS_College_RTI_Compliance.pdf",
        iconName: "Users",
        iconColor: "text-rose-600",
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1000"
    }
];
