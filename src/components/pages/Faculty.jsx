import React from 'react';
import { Award, GraduationCap, Calendar, UserCheck, BookOpen, Fingerprint, Mail, CheckCircle2 } from 'lucide-react';
import { SEOHead, seoConfig } from '../seo';
import director from "../../assets/director.jpeg"
import teacherregistery from '../../assets/teacherregistery.pdf'
import { FileText, Download, ExternalLink } from 'lucide-react';

const customFontStyle = {
  fontFamily: "'Neue Montreal Regular', sans-serif",
  fontWeight: 600,
  fontStyle: "normal",
};

const Faculty = () => {
  const staff = {
    principal: {
      name: "Dr. Deepali Gupta",
      img: director,
      dob: "25-12-85",
      designation: "Principal",
      qualification: "M.A., Ph.D (2018)"

    },
    faculty: [
      { name: "Dr. Satish Kumar", dob: "15-07-77", dept: "B.Sc. Physics", desig: "Asstt. Prof.", qual: "M.Sc., Ph.D (2007)" },
      { name: "Sh. Nipin Kumar", dob: "12-02-92", dept: "B.Sc. Chemistry", desig: "Asstt. Prof.", qual: "M.Sc., NET (2022)" },
      { name: "Dr. Rajeev Kumar", dob: "01-07-82", dept: "B.Sc. Maths", desig: "Asstt. Prof.", qual: "M.Sc., Ph.D (2015)" },
      { name: "Sh. Mohit Kumar", dob: "15-10-92", dept: "B.Sc. Zoology", desig: "Asstt. Prof.", qual: "M.Sc., NET (2022)" },
      { name: "Sh. Yash Veer Singh", dob: "15-06-93", dept: "B.Sc. Botany", desig: "Asstt. Prof.", qual: "M.Sc., NET (2021)" },
      { name: "Sh. Susheel Kumar", dob: "01-03-84", dept: "B.A. Hindi", desig: "Asstt. Prof.", qual: "M.A., NET (2018)" },
      { name: "Dr. Arun Kumar", dob: "02-02-93", dept: "B.A. English", desig: "Asstt. Prof.", qual: "M.A., Ph.D (2022)" },
      { name: "Sh. Rashid Ali", dob: "15-08-95", dept: "B.A. Sociology", desig: "Asstt. Prof.", qual: "M.A., NET (2019)" },
      { name: "Ms. Pooja Chouhan", dob: "01-03-84", dept: "B.A. Home Science", desig: "Asstt. Prof.", qual: "M.Sc., NET (2021)" },
      { name: "Sh. Dhruv Kumar Yadav", dob: "24/08/97", dept: "B.A.  History", desig: "Asstt. Prof.", qual: "M.A., NET  (2019)" },
      { name: "Sh. Prashant Kumar", dob: "10/12/92", dept: "B.A.  Pol-Sc.", desig: "Asstt. Prof.", qual: "M.A., NET  (2018)" },
      { name: "Sh. Praveen Kumar", dob: "14/01/98", dept: "B.A.  Economics", desig: "Asstt. Prof.", qual: "M.A., NET  (2012)" },
    ]
  };

  return (
    <div style={customFontStyle} className="bg-slate-50 min-h-screen font-sans text-slate-800 pb-20 overflow-x-hidden">
      {/* SEO Meta Tags */}
      <SEOHead
        title={seoConfig.faculty.title}
        description={seoConfig.faculty.description}
        keywords={seoConfig.faculty.keywords}
        canonicalUrl={seoConfig.faculty.canonicalUrl}
      />

      {/* Hero Header */}
      <div className="bg-white border-b border-slate-100 pt-16 pb-12 md:pt-24 md:pb-16 mb-12 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-[10px] font-bold uppercase tracking-widest mb-6">
            <UserCheck className="w-3 h-3" />
            Academic Session 2026-27
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 px-2">
            Our Esteemed <span className="text-blue-700">Faculty</span>
          </h1>
          <p className="text-slate-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed px-4">
            Meet the dedicated educators and mentors shaping the future of our students with their expertise and guidance.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Principal Card - Featured */}
        <div className="max-w-4xl mx-auto mb-16 md:mb-24">
          <div className="relative bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl sm:rounded-3xl p-1 shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 md:w-40 md:h-40 bg-purple-500/20 rounded-full blur-2xl -ml-10 -mb-10"></div>

            <div className="relative bg-white/5 backdrop-blur-sm rounded-[1rem] sm:rounded-[1.3rem] p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-12">
              <div className="shrink-0 relative">
                <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-white rounded-full overflow-hidden shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <img
                    src={staff.principal.img}
                    alt={staff.principal.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="absolute -bottom-2 -right-2 bg-amber-400 text-amber-900 text-[9px] sm:text-[10px] font-bold px-3 py-1 rounded-full shadow-lg border border-white uppercase">
                  Principal
                </div>
              </div>
              <div className="flex-1 text-center md:text-left text-white">
                <h2 className="text-2xl sm:text-3xl font-bold mb-2">{staff.principal.name}</h2>
                <p className="text-blue-200 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-6">{staff.principal.designation}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-white/20 pt-6">
                  <div>
                    <p className="text-blue-200 text-[10px] uppercase font-bold mb-1">Qualification</p>
                    <p className="text-sm sm:text-base font-semibold text-white/90">{staff.principal.qualification}</p>
                  </div>
                  <div>
                    <p className="text-blue-200 text-[10px] uppercase font-bold mb-1">Date of Birth</p>
                    <p className="text-sm sm:text-base font-semibold text-white/90">{staff.principal.dob}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Title */}
        <div className="flex items-center gap-4 mb-8 md:mb-10 px-2">
          <div className="h-8 md:h-10 w-1 bg-blue-600 rounded-full"></div>
          <h3 className="text-xl md:text-2xl font-bold text-slate-800">
            Departmental Heads & Professors
          </h3>
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 md:mb-24">
          {staff.faculty.map((member, index) => (
            <div key={index} className="group bg-white rounded-2xl p-6 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-all duration-300 border border-slate-100 hover:border-blue-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-blue-50 transition-colors">
                  <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-slate-400 group-hover:text-blue-600 transition-colors" />
                </div>
                <div className="text-right">
                  <span className="block text-[9px] font-bold text-slate-400 uppercase tracking-wider">DOB</span>
                  <span className="text-[11px] font-mono font-medium text-slate-600">{member.dob}</span>
                </div>
              </div>

              <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-1 group-hover:text-blue-700 transition-colors">{member.name}</h4>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">{member.desig}</p>

              <div className="space-y-3 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium">{member.dept}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-4 h-4 text-emerald-500" />
                  <p className="text-xs sm:text-sm text-slate-800 font-bold">{member.qual}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Teacher Registry PDF Card */}
        <div className="mb-16 md:mb-24">
          <div className="bg-white rounded-3xl border border-blue-100 shadow-xl overflow-hidden group">
            <div className="flex flex-col lg:flex-row">
              <div className="p-8 lg:p-12 lg:w-2/3 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4 text-blue-600">
                  <FileText size={28} />
                  <span className="text-xs font-black uppercase tracking-[0.2em]">Official Document</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-black text-slate-900 mb-4 leading-tight">
                  Teacher <span className="text-blue-600">Registry</span>
                </h3>
                <p className="text-slate-500 text-base mb-8 max-w-xl">
                  Access the comprehensive registry containing detailed profiles, academic backgrounds, and professional certifications of our complete teaching staff.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href={teacherregistery}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold text-sm transition-all shadow-lg shadow-blue-200"
                  >
                    View Document <ExternalLink size={16} />
                  </a>
                  <a
                    href={teacherregistery}
                    download="Teacher_Registry_2025-26.pdf"
                    className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 px-6 py-3 rounded-xl font-bold text-sm transition-all"
                  >
                    Download PDF <Download size={16} />
                  </a>
                </div>
              </div>
              <div className="lg:w-1/3 bg-blue-50 p-8 lg:p-0 flex items-center justify-center relative overflow-hidden min-h-[250px]">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl -mr-32 -mt-32 transition-transform group-hover:scale-110"></div>
                <div className="relative z-10 w-32 h-44 bg-white rounded-lg shadow-2xl border border-slate-100 flex flex-col p-4 transform -rotate-6 transition-transform group-hover:rotate-0 group-hover:scale-105 duration-500">
                  <div className="w-8 h-1 bg-blue-600 mb-4"></div>
                  <div className="space-y-2">
                    <div className="w-full h-2 bg-slate-100 rounded"></div>
                    <div className="w-4/5 h-2 bg-slate-100 rounded"></div>
                    <div className="w-full h-2 bg-slate-100 rounded"></div>
                    <div className="w-3/4 h-2 bg-slate-100 rounded"></div>
                  </div>
                  <div className="mt-auto flex justify-between items-center text-blue-600/20">
                    <FileText size={40} strokeWidth={1} />
                  </div>
                </div>
                <div className="absolute bottom-6 right-6">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg text-blue-600">
                    <Download size={20} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Official Certification Footer */}
        <div className="bg-slate-900 text-slate-300 rounded-2xl overflow-hidden shadow-2xl">
          <div className="flex flex-col md:flex-row">
            <div className="p-8 md:p-12 md:w-2/3">
              <div className="flex items-center gap-3 mb-6 text-emerald-400">
                <CheckCircle2 size={24} />
                <span className="text-[10px] font-bold uppercase tracking-widest">Official Declaration</span>
              </div>
              <p className="text-base sm:text-lg font-serif italic leading-relaxed text-slate-100 mb-6 font-medium">
                "कुलपति जी के आदेशानुसार उपर्युक्त अभ्यर्थियों को चयन समिति की संस्तुति के आधार पर अनुमोदित पदों पर नियुक्ति प्रदान करने का अनुरोध किया गया है, जिनका विवरण इस पोर्टल पर आधिकारिक रूप से दर्ज किया गया है।"
              </p>
              <div className="flex flex-wrap items-center gap-4 text-[10px] font-mono text-slate-500">
                <span>• REF: UGC/FAC/REG-9021</span>
                <span>• LAST UPDATED: AUG 2025</span>
              </div>
            </div>
            <div className="bg-slate-800 p-8 md:w-1/3 flex flex-col justify-center items-center text-center border-t md:border-t-0 md:border-l border-slate-700">
              <div className="w-14 h-14 rounded-full bg-slate-700 flex items-center justify-center mb-4 text-slate-500">
                <Fingerprint size={32} strokeWidth={1.5} />
              </div>
              <div className="w-24 h-0.5 bg-slate-600 mb-3"></div>
              <p className="text-white font-bold text-xs uppercase tracking-widest">Authorized Signatory</p>
              <p className="text-slate-500 text-[10px] font-medium uppercase tracking-wider">Registrar Office</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 pb-8">
          <p className="text-slate-400 text-[10px] uppercase tracking-[0.2em] font-bold">
            © 2026 Institutional Academic Records System
          </p>
        </div>

      </div>
    </div>
  );
};

export default Faculty;
