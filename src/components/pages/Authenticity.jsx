import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // 1. Added Import
import { ShieldCheck, Award, CheckCircle, FileCheck, Building2, GraduationCap, FileText, ChevronRight, ExternalLink, Landmark, Users, X, Download, Calendar, DollarSign, Flame } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { SEOHead, seoConfig } from '../seo';

import facultyPDF from '../../assets/faculty.pdf';
import aishePDF from '../../assets/AISHE Certificate (2023-24).pdf';
import certificate from '../../assets/certifiacte.png'
import trustimg from '../../assets/trustimg.png'
import affilation from '../../assets/affilation.png'
import commite from "../../assets/commite.png"
import gemini from "../../assets/gemini.png"
import Landpapers from "../../assets/Landpapers.jpg"
import feeimg from "../../assets/feecollg.png"
import modenc from "../../assets/clc.png"
import popupImg from '../../assets/pop up.jpeg';

// New PDF imports
import trustDeedPDF from '../../assets/js.pdf';
import managementCommitteePDF from '../../assets/mdm.pdf';
import msuAffiliationPDF from '../../assets/msuaffilation.pdf';
import landRecordPDF from '../../assets/land.pdf';
import landRecord1PDF from '../../assets/land1.pdf';
import calendarPDF from '../../assets/calendar.pdf';
import feePDF from '../../assets/fee.pdf';
import feeStructureImage from '../../assets/college fee image.jfif';
import financialDataPDF from '../../assets/JS COLLGE STATEMENT.pdf';
import externalExamPDF from '../../assets/EXTERNAL EXAM ANNOUCEMENT 2025-26.pdf';
import internalExamBAPDF from '../../assets/INTERNAL EXAM ANNOUNCEMENT B.A. 2025-26.pdf';
import internalExamBSCPDF from '../../assets/INTERNAL EXAM ANNOUNCEMENT B.S.C 2025-26.pdf';
import balanceSheetPDF from '../../assets/balance sheet.pdf';
import buildingApprovalPDF from '../../assets/Building Approval and NOC.pdf';
import feeRefundPDF from '../../assets/Fee Refund Policy.pdf';
import antiRaggingPDF from '../../assets/Anti ragging committee.pdf';
import fireCertificatePDF from '../../assets/Fire certificate.pdf';
import iqacPDF from '../../assets/Internal Quality Assurance Cell.pdf';
import grievancePDF from '../../assets/Grievance Redressal Cell (1).pdf';

const customFontStyle = {
  fontFamily: "'Neue Montreal Regular', sans-serif",
  fontWeight: 600,
  fontStyle: "normal",
};

const Authenticity = () => {
  const [showPDFModal, setShowPDFModal] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', subtitle: '', options: [] });
  const navigate = useNavigate(); // 2. Added Hook for navigation

  // NOTE: Certifications section removed/commented out from grid based on your request 
  // to focus on document cards with images, but keeping the array if you need it later.
  const certifications = [
    { icon: <ShieldCheck size={32} />, title: "Government Recognized", description: "recognized by State Education Board" },
    { icon: <Award size={32} />, title: "CBSE Affiliation", description: "Fully affiliated with CBSE" },
    // ... others
  ];

  const documents = [
    {
      title: "Trust Deed",
      subtitle: "Legal Documentation",
      description: "Official trust deed document establishing the institution's legal foundation.",
      pdfUrl: trustDeedPDF,
      fileName: "js.pdf",
      icon: <FileText className="w-5 h-5 text-purple-600" />,
      image: trustimg
    },
    {
      title: "Management Committee",
      subtitle: "Governing Body",
      description: "Details of the management committee members and their roles.",
      pdfUrl: managementCommitteePDF,
      fileName: "mdm.pdf",
      icon: <Users className="w-5 h-5 text-orange-600" />,
      image: commite
    },
    {
      title: "MSU AFFILIATION",
      subtitle: "University Recognition",
      description: "Official affiliation certificate from Maa  Shakumbhari University, Saharanpur.",
      pdfUrl: msuAffiliationPDF,
      fileName: "msuaf.pdf",
      icon: <Building2 className="w-5 h-5 text-indigo-600" />,
      image: affilation
    },
    {
      title: "Land Record",
      subtitle: "Property Documentation",
      description: "Official land records and property documents of the institution.",
      pdfUrl: landRecordPDF,
      pdfUrl2: landRecord1PDF,
      fileName: "land.pdf, land1.pdf",
      icon: <Landmark className="w-5 h-5 text-green-600" />,
      image: Landpapers
    },
    {
      title: "Academic Calendar",
      subtitle: "Academic Year Schedule",
      description: "Complete academic calendar with important dates and events for the current session.",
      pdfUrl: calendarPDF,
      fileName: "calendar.pdf",
      icon: <Calendar className="w-5 h-5 text-rose-600" />,
      image: modenc
    },
    {
      title: "Fee Structure",
      subtitle: "Fee Details",
      description: "Detailed fee structure for all courses and programs offered by the institution.",
      pdfUrl: feeStructureImage,
      fileName: "college_fee.jpg",
      icon: <DollarSign className="w-5 h-5 text-amber-600" />,
      image: feeimg
    },
    {
      title: "Faculty Registry",
      subtitle: "Staff Credentials",
      description: "Complete list of teaching staff with their educational qualifications.",
      pdfUrl: facultyPDF,
      fileName: "faculty_list.pdf",
      icon: <GraduationCap className="w-5 h-5 text-sky-600" />,
      // Image: Teacher / Classroom
      image: gemini
    },
    {
      title: "AISHE Certificate",
      subtitle: "Academic Session 2023-24",
      description: "All India Survey on Higher Education certification for institutional recognition.",
      pdfUrl: aishePDF,
      fileName: "AISHE_Certificate_2023-24.pdf",
      icon: <Award className="w-5 h-5 text-emerald-600" />,
      // Image: Clear Certificate / Diploma Scroll (FIXED)
      image: certificate
    },
    {
      title: "Financial Data",
      subtitle: "Financial Records",
      description: "Official financial statements and records of the institution.",
      pdfUrl: financialDataPDF,
      fileName: "JS COLLGE STATEMENT.pdf",
      icon: <FileText className="w-5 h-5 text-teal-600" />,
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "Announcement and Notification",
      subtitle: "Latest Updates",
      description: "Important announcements and examination notifications for students.",
      // Custom options for the modal
      options: [
        { title: "EXTERNAL EXAM ANNOUNCEMENT", pdfUrl: externalExamPDF, fileName: "External_Exam.pdf" },
        { title: "INTERNAL EXAM ANNOUNCEMENT B.A.", pdfUrl: internalExamBAPDF, fileName: "Internal_Exam_BA.pdf" },
        { title: "INTERNAL EXAM ANNOUNCEMENT B.S.C", pdfUrl: internalExamBSCPDF, fileName: "Internal_Exam_BSC.pdf" }
      ],
      icon: <CheckCircle className="w-5 h-5 text-blue-600" />,
      image: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "Balance Sheet",
      subtitle: "Financial Statements",
      description: "Official financial statements and balance sheet of the institution.",
      pdfUrl: balanceSheetPDF,
      fileName: "balance sheet.pdf",
      icon: <FileText className="w-5 h-5 text-teal-600" />,
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "Building Approval and NOC",
      subtitle: "Infrastructure Compliance",
      description: "Official building approval and No Objection Certificate documents.",
      pdfUrl: buildingApprovalPDF,
      fileName: "Building Approval and NOC.pdf",
      icon: <Building2 className="w-5 h-5 text-indigo-600" />,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "Fee Refund Policy",
      subtitle: "Student Fee Rules",
      description: "Official policy regarding fee refunds for students.",
      pdfUrl: feeRefundPDF,
      fileName: "Fee Refund Policy.pdf",
      icon: <DollarSign className="w-5 h-5 text-emerald-600" />,
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "Anti-Ragging Committee",
      subtitle: "Safety & Compliance",
      description: "Details of the anti-ragging committee members and regulations.",
      pdfUrl: antiRaggingPDF,
      fileName: "Anti ragging committee.pdf",
      icon: <ShieldCheck className="w-5 h-5 text-red-600" />,
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "Fire Safety Certificate",
      subtitle: "Campus Safety",
      description: "Official fire safety certificate issued by the department.",
      pdfUrl: fireCertificatePDF,
      fileName: "Fire certificate.pdf",
      icon: <Flame className="w-5 h-5 text-orange-600" />,
      image: "https://images.unsplash.com/photo-1524419986249-348e8fa6ad4a?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "Internal Quality Assurance Cell",
      subtitle: "Quality Standards",
      description: "Ensuring continuous improvement and maintaining quality standards.",
      pdfUrl: iqacPDF,
      fileName: "Internal Quality Assurance Cell.pdf",
      icon: <ShieldCheck className="w-5 h-5 text-blue-600" />,
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "Grievance Redressal Cell",
      subtitle: "Student Support",
      description: "Mechanism for students to raise concerns and seek redressal.",
      pdfUrl: grievancePDF,
      fileName: "Grievance Redressal Cell (1).pdf",
      icon: <Users className="w-5 h-5 text-purple-600" />,
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1000"
    }
  ];

  const handleDisplayPopup = () => {
    setShowPopup(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Changed to sessionStorage so it resets when the tab is closed, better for testing/UX
      if (window.scrollY > 300 && !sessionStorage.getItem('popupShown')) {
        setShowPopup(true);
        sessionStorage.setItem('popupShown', 'true');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  const handlePDFClick = (doc) => {
    // 1. Check for the legacy "Land Record" case (two PDFs directly on the object)
    if (doc.pdfUrl2) {
      setModalContent({
        title: doc.title,
        subtitle: "Select a document to view or download",
        options: [
          { title: `${doc.title} - Part 1`, pdfUrl: doc.pdfUrl, fileName: "land.pdf", color: "green" },
          { title: `${doc.title} - Part 2`, pdfUrl: doc.pdfUrl2, fileName: "land1.pdf", color: "blue" }
        ]
      });
      setShowPDFModal(true);
    }
    // 2. Check for the new explicit "options" case (Announcement card)
    else if (doc.options) {
      setModalContent({
        title: doc.title,
        subtitle: "Select a notification to view",
        options: doc.options.map((opt, idx) => ({
          ...opt,
          color: idx % 2 === 0 ? "blue" : "indigo" // Alternating colors
        }))
      });
      setShowPDFModal(true);
    }
    // 3. Default case: Single PDF, open directly
    else {
      window.open(doc.pdfUrl, '_blank');
    }
  };

  const handlePDFSelection = (pdfUrl) => {
    window.open(pdfUrl, '_blank');
    setShowPDFModal(false);
  };

  return (
    <div style={customFontStyle} className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* SEO Meta Tags */}
      <SEOHead
        title={seoConfig.authenticity.title}
        description={seoConfig.authenticity.description}
        keywords={seoConfig.authenticity.keywords}
        canonicalUrl={seoConfig.authenticity.canonicalUrl}
      />

      {/* 1. HERO SECTION */}
      <section className="relative bg-white pt-20 pb-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full mb-8 shadow-sm">
            <ShieldCheck className="text-blue-600 w-4 h-4" />
            <span className="text-blue-700 font-semibold text-xs uppercase tracking-widest">Official Verification Portal</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-6">
            Transparency & <span className="text-blue-700">Authenticity</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            We believe in complete transparency. Explore our official documents to verify our commitment to educational excellence.
          </p>
        </div>
      </section>

      {/* 2. DOCUMENTS SECTION */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl"> {/* Width restricted like Courses page */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Official Documentation</h2>
            <p className="text-slate-500 text-sm md:text-base">
              Digitally signed and up-to-date for the academic session 2026-2027.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.map((doc, index) => (
              <div
                key={index}
                onClick={() => handlePDFClick(doc)}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200 hover:border-blue-300 transition-all duration-300 cursor-pointer flex flex-col"
              >
                {/* Image Section - Matches Courses Style */}
                <div className="relative h-40 overflow-hidden">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10" />
                  <img
                    src={doc.image}
                    alt={doc.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Card Header */}
                <div className="p-5 border-b border-slate-100">
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 bg-slate-50 rounded-lg border border-slate-100">
                      {doc.icon}
                    </div>
                    <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider bg-blue-50 px-2 py-1 rounded-md">
                      PDF Document
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                    {doc.title}
                  </h3>
                  <span className="text-xs font-medium text-slate-400 block mt-1">{doc.subtitle}</span>
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col">
                  <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-2">
                    {doc.description}
                  </p>

                  {/* Footer / Action */}
                  <div className="mt-auto pt-3 border-t border-slate-50 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                      <FileCheck size={14} />
                      {doc.fileName}
                    </div>
                    <span className="flex items-center gap-1 text-xs font-bold text-blue-600 group-hover:translate-x-1 transition-transform">
                      {doc.options || doc.pdfUrl2 ? "Select" : "Download"} <ChevronRight size={14} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Disclaimer Box */}
          <div className="mt-16 bg-blue-900 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/10 rounded-xl shrink-0">
                <ShieldCheck className="text-blue-200" size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg">Verification Authenticity</h4>
                <p className="text-blue-100 text-sm max-w-xl mt-1 leading-relaxed">
                  All documents listed above are the sole property of the institution.
                  For third-party background verification, please contact the administration directly.
                </p>
              </div>
            </div>

            {/* 3. Added onClick handler here */}
            <button
              onClick={() => navigate('/contact')}
              className="whitespace-nowrap px-6 py-3 bg-white text-blue-900 rounded-lg font-bold text-sm hover:bg-blue-50 transition-colors flex items-center gap-2 shadow-lg"
            >
              Contact Admin <ExternalLink size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* PDF Selection Modal */}
      {showPDFModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setShowPDFModal(false)}>
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 transform transition-all" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <Landmark className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{modalContent.title}</h3>
                  <p className="text-sm text-slate-500">{modalContent.subtitle}</p>
                </div>
              </div>
              <button
                onClick={() => setShowPDFModal(false)}
                className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-slate-400" />
              </button>
            </div>

            {/* Dynamic PDF Options */}
            <div className="space-y-3">
              {modalContent.options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handlePDFSelection(option.pdfUrl)}
                  className={`w-full p-4 bg-gradient-to-r from-slate-50 to-slate-100 hover:from-white hover:to-blue-50 border-2 border-slate-100 hover:border-blue-200 rounded-xl transition-all duration-300 group`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 bg-white rounded-lg shadow-sm text-${option.color || 'blue'}-600`}>
                        <FileCheck className="w-5 h-5" />
                      </div>
                      <div className="text-left">
                        <p className="font-bold text-slate-900 group-hover:text-blue-700 transition-colors text-sm md:text-base">{option.title}</p>
                        <p className="text-xs text-slate-500 font-mono truncate max-w-[200px]">{option.fileName}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Download className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-y-0.5 transition-all" />
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Modal Footer */}
            <div className="mt-6 pt-4 border-t border-slate-100">
              <p className="text-xs text-slate-400 text-center">
                Click on any document to open it in a new tab
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Popup Modal with Framer Motion */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={closePopup}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-2xl shadow-2xl max-w-lg w-full relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closePopup}
                className="absolute top-3 right-3 p-2 bg-white/50 hover:bg-white rounded-full transition-colors z-10 shadow-sm"
              >
                <X className="w-5 h-5 text-slate-800" />
              </button>
              <img src={popupImg} alt="Special Announcement" className="w-full h-auto object-cover" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Authenticity;