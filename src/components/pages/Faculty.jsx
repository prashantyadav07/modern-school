import React from 'react';
import { Award, GraduationCap, Calendar, UserCheck, BookOpen, Fingerprint, Mail } from 'lucide-react';

const InstitutionalFaculty = () => {
  const staff = {
    principal: {
      name: "Dr. Deepali Gupta",
      dob: "25-12-85",
      designation: "Principal",
      qualification: "M.A., Ph.D (2018)",
      id: "PRIN-2024-01"
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
      { name: "Ms. Pooja Chouhan", dob: "01-03-84", dept: "B.A. Home Science", desig: "Asstt. Prof.", qual: "M.Sc., NET (2021)" }
    ]
  };

  return (
    <div className="bg-slate-100 min-h-screen p-4 md:p-10 font-sans text-slate-900">
      <div className="max-w-7xl mx-auto bg-white shadow-2xl rounded-sm border-t-8 border-blue-900 overflow-hidden">
        
        {/* Top Official Header */}
        <div className="p-8 border-b border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6 bg-slate-50/50">
          <div>
            <h1 className="text-3xl font-serif font-bold text-blue-950 uppercase tracking-tight">Academic Staff Registry</h1>
            <p className="text-slate-500 font-medium flex items-center gap-2 mt-1 italic">
              <UserCheck size={16} className="text-blue-700"/> University Approved Faculty List 2024-25
            </p>
          </div>
          <div className="text-right hidden md:block border-l-2 border-slate-200 pl-6">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Document Ref</p>
            <p className="font-mono text-sm text-slate-700 font-bold">UGC/FAC/REG-9021</p>
          </div>
        </div>

        <div className="p-8">
          {/* Principal Section - Hero Card */}
          <div className="mb-12">
            <div className="bg-blue-950 rounded-lg p-1 text-white shadow-lg overflow-hidden flex flex-col md:flex-row">
              <div className="md:w-1/4 bg-white/10 flex items-center justify-center p-8 backdrop-blur-sm border-r border-white/10">
                <div className="text-center">
                    <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 flex items-center justify-center text-blue-950 shadow-inner">
                        <GraduationCap size={48} />
                    </div>
                    <span className="text-[10px] bg-amber-500 px-2 py-0.5 rounded-full font-black uppercase tracking-widest text-blue-950">Seal of Authority</span>
                </div>
              </div>
              <div className="flex-1 p-8 space-y-4">
                <div>
                    <h2 className="text-3xl font-serif font-bold tracking-wide">{staff.principal.name}</h2>
                    <p className="text-blue-300 font-bold uppercase tracking-[0.2em] text-sm">{staff.principal.designation}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-white/20">
                  <div className="flex items-center gap-3">
                    <Award size={20} className="text-amber-400" />
                    <div>
                      <p className="text-[10px] text-blue-300 uppercase font-bold">Qualification</p>
                      <p className="text-sm font-semibold">{staff.principal.qualification}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar size={20} className="text-blue-400" />
                    <div>
                      <p className="text-[10px] text-blue-300 uppercase font-bold">Date of Birth</p>
                      <p className="text-sm font-semibold">{staff.principal.dob}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Fingerprint size={20} className="text-emerald-400" />
                    <div>
                      <p className="text-[10px] text-blue-300 uppercase font-bold">Staff ID</p>
                      <p className="text-sm font-mono tracking-tighter">{staff.principal.id}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Faculty Grid - Modern Minimalist Cards */}
          <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
            <BookOpen size={20} className="text-blue-900" /> Departmental Faculty Members
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {staff.faculty.map((member, index) => (
              <div key={index} className="group border border-slate-200 rounded-lg p-5 hover:border-blue-900 hover:shadow-xl transition-all duration-300 relative bg-slate-50/30">
                <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-100 group-hover:text-blue-900 transition-opacity">
                    <Award size={24} />
                </div>
                
                <h4 className="text-lg font-bold text-slate-800 mb-1">{member.name}</h4>
                <div className="text-blue-700 text-xs font-black uppercase tracking-wider mb-4 flex items-center">
                    <span className="w-2 h-2 bg-blue-700 rounded-full mr-2"></span>
                    {member.dept}
                </div>

                <div className="space-y-3 border-t border-slate-100 pt-4">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400 font-bold uppercase">Designation</span>
                    <span className="text-slate-700 font-bold">{member.desig}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400 font-bold uppercase">Degree/NET</span>
                    <span className="text-slate-900 font-black">{member.qual}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs bg-slate-100 p-2 rounded">
                    <span className="text-slate-500 font-medium">D.O.B</span>
                    <span className="text-slate-600 font-mono tracking-tighter">{member.dob}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Formal Footer with Hindi Text */}
          <div className="mt-16 pt-10 border-t-2 border-slate-100">
            <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-900 text-white rounded-lg hidden sm:block">
                    <Mail size={24} />
                </div>
                <div className="flex-1">
                    <p className="text-slate-700 text-lg leading-relaxed font-serif text-justify italic">
                      "कुलपति जी के आदेशानुसार उपर्युक्त अभ्यर्थियों को चयन समिति की संस्तुति के आधार पर अनुमोदित पदों पर नियुक्ति प्रदान करने का अनुरोध किया गया है, जिनका विवरण इस पोर्टल पर आधिकारिक रूप से दर्ज किया गया है।"
                    </p>
                    <div className="mt-8 flex flex-col md:flex-row justify-between items-end gap-6">
                        <div className="text-left">
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Status</p>
                            <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full border border-emerald-200">Document Verified & Digitalized</span>
                        </div>
                        <div className="text-center md:text-right">
                            <div className="h-12 w-32 border-b-2 border-slate-300 mb-2 ml-auto"></div>
                            <p className="text-sm font-black text-slate-800">Authorized Signatory</p>
                            <p className="text-xs text-slate-500">Registrar / Administrative Office</p>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Copyright style bottom line */}
      <p className="text-center text-slate-400 text-[10px] mt-8 uppercase tracking-[0.3em]">
        © 2024 Institutional Academic Records Management System
      </p>
    </div>
  );
};

export default InstitutionalFaculty;