import React from 'react';
import { Book, Microscope, Flower2, GraduationCap, Check, Clock } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      title: "Bachelor of Arts (B.A.)",
      type: "Humanities",
      icon: <Book className="w-5 h-5 text-blue-600" />,
      subjects: ["Hindi", "English", "History", "Sociology", "Home Science", "Economics", "Political Science"],
      accent: "border-blue-200 bg-blue-50/30",
      description: "A versatile program focusing on cultural, social, and linguistic studies."
    },
    {
      title: "B.A. Vocational",
      type: "Professional",
      icon: <Flower2 className="w-5 h-5 text-emerald-600" />,
      subjects: ["Vocational Yoga", "Yogic Science"],
      accent: "border-emerald-200 bg-emerald-50/30",
      description: "Specialized training combining academic knowledge with practical yogic expertise."
    },
    {
      title: "Bachelor of Science (B.Sc.)",
      type: "Science",
      icon: <Microscope className="w-5 h-5 text-indigo-600" />,
      subjects: ["Physics", "Chemistry", "Mathematics", "Zoology", "Botany"],
      accent: "border-indigo-200 bg-indigo-50/30",
      description: "Rigorous scientific education designed for research and analytical careers."
    }
  ];

  return (
    <div className="bg-[#fcfcfd] min-h-screen py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Professional Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <GraduationCap className="text-blue-600 w-6 h-6" />
            <span className="text-blue-600 font-bold tracking-[0.1em] text-xs uppercase">Academic Excellence</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-4">
            Undergraduate Programs <br className="hidden md:block" /> 
            <span className="text-slate-500 font-medium text-lg md:text-xl italic">Empowering the next generation of leaders.</span>
          </h1>
          <div className="w-20 h-1 bg-blue-600 rounded-full"></div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {courses.map((course, index) => (
            <div 
              key={index} 
              className="group bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col"
            >
              {/* Card Header */}
              <div className={`p-6 rounded-t-2xl border-b border-slate-100 ${course.accent}`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 bg-white rounded-xl shadow-sm border border-slate-100">
                    {course.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest bg-white/80 px-2 py-1 rounded-md border border-slate-200 text-slate-500">
                    {course.type}
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-slate-800 group-hover:text-blue-700 transition-colors">
                  {course.title}
                </h3>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-grow">
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {course.description}
                </p>
                
                <div className="space-y-3">
                  <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Core Subjects</h4>
                  <div className="flex flex-wrap gap-2">
                    {course.subjects.map((sub, i) => (
                      <div 
                        key={i} 
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-100 text-slate-700 text-[13px] font-medium transition-colors hover:bg-white hover:border-blue-200"
                      >
                        <Check className="w-3.5 h-3.5 text-blue-500" />
                        {sub}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 py-4 bg-slate-50/50 border-t border-slate-100 rounded-b-2xl flex items-center justify-between">
                <div className="flex items-center gap-2 text-slate-500">
                  <Clock className="w-4 h-4" />
                  <span className="text-xs font-semibold uppercase tracking-tight">3 Years Degree</span>
                </div>
                <button className="text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors uppercase tracking-widest">
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Professional Footer Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 p-8 border border-slate-200 rounded-3xl bg-white shadow-sm">
            <div className="flex flex-col items-center text-center space-y-2">
                <span className="text-slate-400 font-bold text-[10px] uppercase tracking-widest">Recognition</span>
                <p className="font-bold text-slate-800 text-sm">Affiliated to MSU Saharanpur</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2 md:border-x border-slate-100 px-4">
                <span className="text-slate-400 font-bold text-[10px] uppercase tracking-widest">Admissions</span>
                <p className="font-bold text-slate-800 text-sm">Session 2024 - 2025 Open</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
                <span className="text-slate-400 font-bold text-[10px] uppercase tracking-widest">Guidance</span>
                <p className="font-bold text-slate-800 text-sm">Dedicated Career Counseling</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;