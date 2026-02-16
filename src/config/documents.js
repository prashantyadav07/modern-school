import { ShieldCheck, Award, CheckCircle, Building2, GraduationCap, FileText, Landmark, Users, Calendar, DollarSign, Flame } from 'lucide-react';

import facultyPDF from '../assets/faculty.pdf';
import aishePDF from '../assets/AISHE Certificate (2023-24).pdf';
import certificate from '../assets/certifiacte.png'
import trustimg from '../assets/trustimg.png'
import affilation from '../assets/affilation.png'
import commite from "../assets/commite.png"
import gemini from "../assets/gemini.png"
import Landpapers from "../assets/Landpapers.jpg"
import feeimg from "../assets/feecollg.png"
import modenc from "../assets/clc.png"
import popupImg from '../assets/pop up.jpeg';

// New PDF imports
import trustDeedPDF from '../assets/js.pdf';
import managementCommitteePDF from '../assets/mdm.pdf';
import msuAffiliationPDF from '../assets/msuaffilation.pdf';
import landRecordPDF from '../assets/land.pdf';
import landRecord1PDF from '../assets/land1.pdf';
import calendarPDF from '../assets/calendar.pdf';
import feeStructureImage from '../assets/college fee image.jfif';
import financialDataPDF from '../assets/JS COLLGE STATEMENT.pdf';
import externalExamPDF from '../assets/EXTERNAL EXAM ANNOUCEMENT 2025-26.pdf';
import internalExamBAPDF from '../assets/INTERNAL EXAM ANNOUNCEMENT B.A. 2025-26.pdf';
import internalExamBSCPDF from '../assets/INTERNAL EXAM ANNOUNCEMENT B.S.C 2025-26.pdf';
import balanceSheetPDF from '../assets/balance sheet.pdf';
import buildingApprovalPDF from '../assets/Building Approval and NOC.pdf';
import feeRefundPDF from '../assets/Fee Refund Policy.pdf';
import antiRaggingPDF from '../assets/ANTI RAGGING COMMITTEE (1).pdf';
import fireCertificatePDF from '../assets/Fire certificate.pdf';
import iqacPDF from '../assets/INTERNAL QUALITY ASSURANCE CELL (IQAC).pdf';
import grievancePDF from '../assets/STUDENT GRIVANCE REDRESSAL CELL.pdf';
import scCellPDF from '../assets/CELL FOR SC,ST,OBC,EWS,MINORITY STUDENTS.pdf';
import iccPDF from '../assets/INTERNAL COMPLAINT COMMITTEE (2).pdf';
import rti from '../assets/rti.pdf';

export const documents = [
    {
        title: "Trust Deed",
        subtitle: "Legal Documentation",
        description: "Official trust deed document establishing the institution's legal foundation.",
        pdfUrl: trustDeedPDF,
        fileName: "js.pdf",
        iconName: "FileText",
        iconColor: "text-purple-600",
        image: trustimg
    },
    {
        title: "Management Committee",
        subtitle: "Governing Body",
        description: "Details of the management committee members and their roles.",
        pdfUrl: managementCommitteePDF,
        fileName: "mdm.pdf",
        iconName: "Users",
        iconColor: "text-orange-600",
        image: commite
    },
    {
        title: "MSU AFFILIATION",
        subtitle: "University Recognition",
        description: "Official affiliation certificate from Maa Shakumbhari University, Saharanpur.",
        pdfUrl: msuAffiliationPDF,
        fileName: "msuaf.pdf",
        iconName: "Building2",
        iconColor: "text-indigo-600",
        image: affilation
    },
    {
        title: "Land Record",
        subtitle: "Property Documentation",
        description: "Official land records and property documents of the institution.",
        pdfUrl: landRecordPDF,
        pdfUrl2: landRecord1PDF,
        fileName: "land.pdf, land1.pdf",
        iconName: "Landmark",
        iconColor: "text-green-600",
        image: Landpapers
    },
    {
        title: "Academic Calendar",
        subtitle: "Academic Year Schedule",
        description: "Complete academic calendar with important dates and events for the current session.",
        pdfUrl: calendarPDF,
        fileName: "calendar.pdf",
        iconName: "Calendar",
        iconColor: "text-rose-600",
        image: modenc
    },
    {
        title: "Fee Structure",
        subtitle: "Fee Details",
        description: "Detailed fee structure for all courses and programs offered by the institution.",
        pdfUrl: feeStructureImage,
        fileName: "college_fee.jpg",
        iconName: "DollarSign",
        iconColor: "text-amber-600",
        image: feeimg
    },
    {
        title: "Faculty Registry",
        subtitle: "Staff Credentials",
        description: "Complete list of teaching staff with their educational qualifications.",
        pdfUrl: facultyPDF,
        fileName: "faculty_list.pdf",
        iconName: "GraduationCap",
        iconColor: "text-sky-600",
        image: gemini
    },
    {
        title: "AISHE Certificate",
        subtitle: "Academic Session 2023-24",
        description: "All India Survey on Higher Education certification for institutional recognition.",
        pdfUrl: aishePDF,
        fileName: "AISHE_Certificate_2023-24.pdf",
        iconName: "Award",
        iconColor: "text-emerald-600",
        image: certificate
    },
    {
        title: "Financial Data",
        subtitle: "Financial Records",
        description: "Official financial statements and records of the institution.",
        pdfUrl: financialDataPDF,
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
            { title: "EXTERNAL EXAM ANNOUNCEMENT", pdfUrl: externalExamPDF, fileName: "External_Exam.pdf" },
            { title: "INTERNAL EXAM ANNOUNCEMENT B.A.", pdfUrl: internalExamBAPDF, fileName: "Internal_Exam_BA.pdf" },
            { title: "INTERNAL EXAM ANNOUNCEMENT B.S.C", pdfUrl: internalExamBSCPDF, fileName: "Internal_Exam_BSC.pdf" },
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
        pdfUrl: balanceSheetPDF,
        fileName: "balance sheet.pdf",
        iconName: "FileText",
        iconColor: "text-teal-600",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1000"
    },
    {
        title: "Building Approval and NOC",
        subtitle: "Infrastructure Compliance",
        description: "Official building approval and No Objection Certificate documents.",
        pdfUrl: buildingApprovalPDF,
        fileName: "Building Approval and NOC.pdf",
        iconName: "Building2",
        iconColor: "text-indigo-600",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000"
    },
    {
        title: "Fee Refund Policy",
        subtitle: "Student Fee Rules",
        description: "Official policy regarding fee refunds for students.",
        pdfUrl: feeRefundPDF,
        fileName: "Fee Refund Policy.pdf",
        iconName: "DollarSign",
        iconColor: "text-emerald-600",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1000"
    },
    {
        title: "Anti-Ragging Committee",
        subtitle: "Safety & Compliance",
        description: "Details of the anti-ragging committee members and regulations.",
        pdfUrl: antiRaggingPDF,
        fileName: "Anti ragging committee.pdf",
        iconName: "ShieldCheck",
        iconColor: "text-red-600",
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1000"
    },
    {
        title: "Fire Safety Certificate",
        subtitle: "Campus Safety",
        description: "Official fire safety certificate issued by the department.",
        pdfUrl: fireCertificatePDF,
        fileName: "Fire certificate.pdf",
        iconName: "Flame",
        iconColor: "text-orange-600",
        image: "https://images.unsplash.com/photo-1524419986249-348e8fa6ad4a?auto=format&fit=crop&q=80&w=1000"
    },
    {
        title: "Internal Quality Assurance Cell",
        subtitle: "Quality Standards",
        description: "Ensuring continuous improvement and maintaining quality standards.",
        pdfUrl: iqacPDF,
        fileName: "Internal Quality Assurance Cell.pdf",
        iconName: "ShieldCheck",
        iconColor: "text-blue-600",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000"
    },
    {
        title: "Student Grievance Redressal Cell",
        subtitle: "Student Support",
        description: "Mechanism for students to raise concerns and seek redressal.",
        pdfUrl: grievancePDF,
        fileName: "Grievance Redressal Cell (1).pdf",
        iconName: "Users",
        iconColor: "text-purple-600",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1000"
    },
    {
        title: "SC/ST Welfare Cell",
        subtitle: "Equal Opportunity",
        description: "Committee for the welfare and equal opportunity of SC/ST students.",
        pdfUrl: scCellPDF,
        fileName: "Cell for SC.pdf",
        iconName: "ShieldCheck",
        iconColor: "text-indigo-600",
        image: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&q=80&w=1000"
    },
    {
        title: "Internal Complaint Committee",
        subtitle: "Prevention & Redressal",
        description: "Committee dedicated to the prevention of sexual harassment and ensuring a safe environment.",
        pdfUrl: iccPDF,
        fileName: "Internal Complaint Committee.pdf",
        iconName: "Users",
        iconColor: "text-rose-600",
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1000"
    },
    {
        title: "RTI Compliance ",
        subtitle: "Right to Information",
        description: "Right to Information Act, 2005",
        pdfUrl: rti,
        fileName: "RTI.pdf",
        iconName: "Users",
        iconColor: "text-rose-600",
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1000"
    }
];
