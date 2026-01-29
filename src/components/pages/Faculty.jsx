import React from 'react';
import { Award, GraduationCap, Calendar, UserCheck, BookOpen, Fingerprint, Mail, CheckCircle2 } from 'lucide-react';
import { SEOHead, seoConfig } from '../seo';
import director from "../../assets/director.jpeg"
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
      { name: "Sh. Dhruv Kumar Yadav", dob: "24/08/97", dept: "B.A.  History", desig: "Asstt. Prof.", qual: "M.A., NET  (2019)" }
    ]
  };

  return (
    <div style={customFontStyle} className="bg-slate-50 min-h-screen font-sans text-slate-800 pb-20">
      {/* SEO Meta Tags */}
      <SEOHead
        title={seoConfig.faculty.title}
        description={seoConfig.faculty.description}
        keywords={seoConfig.faculty.keywords}
        canonicalUrl={seoConfig.faculty.canonicalUrl}
      />

      {/* Hero Header */}
      <div className="bg-white border-b border-slate-100 pt-16 pb-12 md:pt-24 md:pb-16 mb-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-[10px] font-bold uppercase tracking-widest mb-6">
            <UserCheck className="w-3 h-3" />
            Academic Session 2026-27
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            Our Esteemed <span className="text-blue-700">Faculty</span>
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Meet the dedicated educators and mentors shaping the future of our students with their expertise and guidance.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Principal Card - Featured */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="relative bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-1 shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-500/20 rounded-full blur-2xl -ml-10 -mb-10"></div>

            <div className="relative bg-white/5 backdrop-blur-sm rounded-[1.3rem] p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="shrink-0 relative">
                <div className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-full overflow-hidden shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <img
                    src={staff.principal.img}
                    alt={staff.principal.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="absolute -bottom-3 -right-3 bg-amber-400 text-amber-900 text-[10px] font-bold px-3 py-1 rounded-full shadow-lg border border-white">
                  PRINCIPAL
                </div>
              </div>
              <div className="flex-1 text-center md:text-left text-white">
                <h2 className="text-3xl font-bold mb-2">{staff.principal.name}</h2>
                <p className="text-blue-200 text-sm font-bold uppercase tracking-widest mb-6">{staff.principal.designation}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 border-t border-white/20 pt-6">
                  <div>
                    <p className="text-blue-200 text-xs uppercase font-bold mb-1">Qualification</p>
                    <p className="font-semibold text-white/90">{staff.principal.qualification}</p>
                  </div>
                  <div>
                    <p className="text-blue-200 text-xs uppercase font-bold mb-1">Date of Birth</p>
                    <p className="font-semibold text-white/90">{staff.principal.dob}</p>
                  </div>
                  <div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Title */}
        <div className="flex items-center gap-4 mb-10 px-2">
          <div className="h-10 w-1 bg-blue-600 rounded-full"></div>
          <h3 className="text-2xl font-bold text-slate-800">
            Departmental Heads & Professors
          </h3>
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {staff.faculty.map((member, index) => (
            <div key={index} className="group bg-white rounded-2xl p-6 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-all duration-300 border border-slate-100 hover:border-blue-100 relative overflow-hidden">
              {/* Hover Gradient Bar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-blue-50 transition-colors">
                  <BookOpen className="w-6 h-6 text-slate-400 group-hover:text-blue-600 transition-colors" />
                </div>
                <div className="text-right">
                  <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">DOB</span>
                  <span className="text-xs font-mono font-medium text-slate-600">{member.dob}</span>
                </div>
              </div>

              <h4 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-blue-700 transition-colors">{member.name}</h4>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">{member.desig}</p>

              <div className="space-y-3 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                  <p className="text-sm text-slate-600 font-medium">{member.dept}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-4 h-4 text-emerald-500" />
                  <p className="text-sm text-slate-800 font-bold">{member.qual}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Official Certification Footer */}
        <div className="bg-slate-900 text-slate-300 rounded-2xl overflow-hidden shadow-2xl">
          <div className="flex flex-col md:flex-row">
            <div className="p-8 md:p-12 md:w-2/3">
              <div className="flex items-center gap-3 mb-6 text-emerald-400">
                <CheckCircle2 size={24} />
                <span className="text-xs font-bold uppercase tracking-widest">Official Declaration</span>
              </div>
              <p className="text-lg font-serif italic leading-relaxed text-slate-100 mb-6">
                "कुलपति जी के आदेशानुसार उपर्युक्त अभ्यर्थियों को चयन समिति की संस्तुति के आधार पर अनुमोदित पदों पर नियुक्ति प्रदान करने का अनुरोध किया गया है, जिनका विवरण इस पोर्टल पर आधिकारिक रूप से दर्ज किया गया है।"
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500">
                <span>• REF: UGC/FAC/REG-9021</span>
                <span>• LAST UPDATED: AUG 2025</span>
              </div>
            </div>
            <div className="bg-slate-800 p-8 md:w-1/3 flex flex-col justify-center items-center text-center border-t md:border-t-0 md:border-l border-slate-700">
              <div className="w-16 h-16 rounded-full bg-slate-700 flex items-center justify-center mb-4">
                <Fingerprint className="text-slate-500" />
              </div>
              <div className="w-32 h-0.5 bg-slate-600 mb-2"></div>
              <p className="text-white font-bold text-sm uppercase">Authorized Signatory</p>
              <p className="text-slate-500 text-xs">Registrar Office</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 pb-8">
          <p className="text-slate-400 text-xs uppercase tracking-[0.2em] font-medium">
            © 2026 Institutional Academic Records System
          </p>
        </div>

      </div>
    </div>
  );
};

export default Faculty;