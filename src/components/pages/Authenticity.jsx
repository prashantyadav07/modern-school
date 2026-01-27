import React, { useState } from 'react';
import { ShieldCheck, Award, CheckCircle, FileCheck, Building2, GraduationCap, FileText, ChevronRight, ExternalLink, Landmark, Users, X, Download } from 'lucide-react';

import facultyPDF from '../../assets/faculty.pdf';
import aishePDF from '../../assets/AISHE Certificate (2023-24).pdf';
import certificate from '../../assets/certifiacte.png'
import trustimg from '../../assets/trustimg.png'
import affilation from '../../assets/affilation.png'
import commite from "../../assets/commite.png"
import gemini from "../../assets/gemini.png"
import Landpapers from "../../assets/Landpapers.jpg"

// New PDF imports
import trustDeedPDF from '../../assets/js.pdf';
import managementCommitteePDF from '../../assets/mdm.pdf';
import msuAffiliationPDF from '../../assets/msuaf.pdf';
import landRecordPDF from '../../assets/land.pdf';
import landRecord1PDF from '../../assets/land1.pdf';

const customFontStyle = {
  fontFamily: "'Neue Montreal Regular', sans-serif",
  fontWeight: 600,
  fontStyle: "normal",
};

const Authenticity = () => {
  const [showPDFModal, setShowPDFModal] = useState(false);

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
      description: "Official affiliation certificate from Maharaja Sayajirao University.",
      pdfUrl: msuAffiliationPDF,
      fileName: "msuaf.pdf",
      icon: <Building2 className="w-5 h-5 text-indigo-600" />,
      image: affilation
    },
    {
      title: "LAND RECORD",
      subtitle: "Property Documentation",
      description: "Official land records and property documents of the institution.",
      pdfUrl: landRecordPDF,
      pdfUrl2: landRecord1PDF,
      fileName: "land.pdf, land1.pdf",
      icon: <Landmark className="w-5 h-5 text-green-600" />,
      image: Landpapers
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
    }
  ];

  const handlePDFClick = (pdfUrl, pdfUrl2) => {
    // If there are two PDFs (Land Record case), show modal
    if (pdfUrl2) {
      setShowPDFModal(true);
    } else {
      // Otherwise, directly open the PDF
      window.open(pdfUrl, '_blank');
    }
  };

  const handlePDFSelection = (pdfUrl) => {
    window.open(pdfUrl, '_blank');
    setShowPDFModal(false);
  };

  return (
    <div style={customFontStyle} className="min-h-screen bg-slate-50 font-sans text-slate-800">

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
              Digitally signed and up-to-date for the academic session 2024-2025.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.map((doc, index) => (
              <div
                key={index}
                onClick={() => handlePDFClick(doc.pdfUrl, doc.pdfUrl2)}
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
                      Download <ChevronRight size={14} />
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
            <button className="whitespace-nowrap px-6 py-3 bg-white text-blue-900 rounded-lg font-bold text-sm hover:bg-blue-50 transition-colors flex items-center gap-2 shadow-lg">
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
                <div className="p-2 bg-green-50 rounded-lg">
                  <Landmark className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Land Record Documents</h3>
                  <p className="text-sm text-slate-500">Select a document to view or download</p>
                </div>
              </div>
              <button
                onClick={() => setShowPDFModal(false)}
                className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-slate-400" />
              </button>
            </div>

            {/* PDF Options */}
            <div className="space-y-3">
              {/* PDF 1 */}
              <button
                onClick={() => handlePDFSelection(landRecordPDF)}
                className="w-full p-4 bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 border-2 border-green-200 hover:border-green-400 rounded-xl transition-all duration-300 group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white rounded-lg shadow-sm">
                      <FileCheck className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-slate-900 group-hover:text-green-700 transition-colors">Land Record - Part 1</p>
                      <p className="text-xs text-slate-500 font-mono">land.pdf</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Download className="w-4 h-4 text-green-600 group-hover:translate-y-0.5 transition-transform" />
                    <ChevronRight className="w-4 h-4 text-green-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </button>

              {/* PDF 2 */}
              <button
                onClick={() => handlePDFSelection(landRecord1PDF)}
                className="w-full p-4 bg-gradient-to-r from-blue-50 to-sky-50 hover:from-blue-100 hover:to-sky-100 border-2 border-blue-200 hover:border-blue-400 rounded-xl transition-all duration-300 group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white rounded-lg shadow-sm">
                      <FileCheck className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-slate-900 group-hover:text-blue-700 transition-colors">Land Record - Part 2</p>
                      <p className="text-xs text-slate-500 font-mono">land1.pdf</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Download className="w-4 h-4 text-blue-600 group-hover:translate-y-0.5 transition-transform" />
                    <ChevronRight className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </button>
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
    </div>
  );
};

export default Authenticity;