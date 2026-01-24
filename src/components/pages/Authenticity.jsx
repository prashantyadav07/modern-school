import React from 'react';
import { ShieldCheck, Award, CheckCircle, FileCheck, Building2, GraduationCap, FileText, ChevronRight, ExternalLink } from 'lucide-react';
import subjectsPDF from '../../assets/subjects.pdf';
import trustPDF from '../../assets/trust.pdf';
import facultyPDF from '../../assets/faculty.pdf';

const customFontStyle = {
  fontFamily: "'Neue Montreal Regular', sans-serif",
  fontWeight: 600,
  fontStyle: "normal",
};

const Authenticity = () => {
  // NOTE: Certifications section removed/commented out from grid based on your request 
  // to focus on document cards with images, but keeping the array if you need it later.
  const certifications = [
    { icon: <ShieldCheck size={32} />, title: "Government Recognized", description: "recognized by State Education Board" },
    { icon: <Award size={32} />, title: "CBSE Affiliation", description: "Fully affiliated with CBSE" },
    // ... others
  ];

  const documents = [
    {
      title: "Academic Curriculum",
      subtitle: "Syllabus & Structure",
      description: "Detailed breakdown of subjects, learning outcomes, and assessment patterns.",
      pdfUrl: subjectsPDF,
      fileName: "curriculum_2024.pdf",
      icon: <FileText className="w-5 h-5 text-blue-600" />,
      // Image: Library / Books
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Trust & Governance",
      subtitle: "Legal Framework",
      description: "Official registration details of the educational trust and governance policies.",
      pdfUrl: trustPDF,
      fileName: "trust_deed.pdf",
      icon: <Building2 className="w-5 h-5 text-indigo-600" />,
      // Image: Legal / Gavel / Office
      image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Faculty Registry",
      subtitle: "Staff Credentials",
      description: "Complete list of teaching staff with their educational qualifications.",
      pdfUrl: facultyPDF,
      fileName: "faculty_list.pdf",
      icon: <GraduationCap className="w-5 h-5 text-sky-600" />,
      // Image: Teacher / Classroom
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const handlePDFClick = (pdfUrl) => {
    window.open(pdfUrl, '_blank');
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
                onClick={() => handlePDFClick(doc.pdfUrl)}
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
    </div>
  );
};

export default Authenticity;