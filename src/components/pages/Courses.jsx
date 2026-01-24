import React from 'react';
import { Book, Microscope, Flower2, GraduationCap, Check, Clock } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      title: "Bachelor of Arts (B.A.)",
      type: "Humanities",
      image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&q=80&w=800",
      icon: <Book className="w-4 h-4 text-blue-600" />,
      subjects: ["Hindi", "English", "History", "Sociology", "Home Science", "Economics", "Pol. Science"], // Shortened text slightly
      accent: "border-blue-200 bg-blue-50/30",
      description: "A versatile program focusing on cultural, social, and linguistic studies."
    },
    {
      title: "B.A. Vocational",
      type: "Professional",
      image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&q=80&w=800",
      icon: <Flower2 className="w-4 h-4 text-emerald-600" />,
      subjects: ["Vocational Yoga", "Yogic Science"],
      accent: "border-emerald-200 bg-emerald-50/30",
      description: "Specialized training combining academic knowledge with practical yogic expertise."
    },
    {
      title: "Bachelor of Science (B.Sc.)",
      type: "Science",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800",
      icon: <Microscope className="w-4 h-4 text-indigo-600" />,
      subjects: ["Physics", "Chemistry", "Mathematics", "Zoology", "Botany"],
      accent: "border-indigo-200 bg-indigo-50/30",
      description: "Rigorous scientific education designed for research and analytical careers."
    }
  ];

  return (
    <div className="bg-[#fcfcfd] min-h-screen py-10 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Professional Header */}
        <div className="max-w-3xl mb-10 md:mb-12">
          <div className="flex items-center gap-2 mb-2">
            <GraduationCap className="text-blue-600 w-5 h-5" />
            <span className="text-blue-600 font-bold tracking-[0.1em] text-[10px] uppercase">Academic Excellence</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight mb-3">
            Undergraduate Programs <br className="hidden md:block" />
            <span className="text-slate-500 font-medium text-lg italic">Empowering future leaders.</span>
          </h1>
          <div className="w-16 h-1 bg-blue-600 rounded-full"></div>
        </div>

        {/* Courses Grid - Gap reduced to 5 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {courses.map((course, index) => (
            <div
              key={index}
              className="group bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-lg hover:border-blue-300 transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* IMAGE SECTION - Height reduced to h-36 */}
              <div className="relative h-36 overflow-hidden">
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors z-10" />
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Header - Padding reduced to p-4 */}
              <div className={`p-4 border-b border-slate-100 ${course.accent}`}>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 bg-white rounded-lg shadow-sm border border-slate-100">
                    {course.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest bg-white/90 px-2 py-0.5 rounded border border-slate-200 text-slate-500">
                    {course.type}
                  </span>
                </div>
                {/* Title font size optimized */}
                <h3 className="text-base md:text-lg font-bold text-slate-800 group-hover:text-blue-700 transition-colors leading-tight">
                  {course.title}
                </h3>
              </div>

              {/* Card Body - Padding reduced to p-4 */}
              <div className="p-4 flex-grow">
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-4 line-clamp-2">
                  {course.description}
                </p>

                <div className="space-y-2">
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Core Subjects</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {course.subjects.map((sub, i) => (
                      <div
                        key={i}
                        // Tags made smaller (py-1 px-2, text-xs)
                        className="flex items-center gap-1 px-2 py-1 rounded bg-slate-50 border border-slate-100 text-slate-600 text-[11px] md:text-xs font-medium transition-colors hover:bg-white hover:border-blue-200"
                      >
                        <Check className="w-3 h-3 text-blue-500" />
                        {sub}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer - Compact */}
              <div className="px-4 py-3 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-slate-400">
                  <Clock className="w-3.5 h-3.5" />
                  <span className="text-[11px] font-semibold uppercase tracking-tight">3 Years Degree</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Professional Footer Info - Compact */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 p-6 border border-slate-200 rounded-2xl bg-white shadow-sm">
          <div className="flex flex-col items-center text-center space-y-1">
            <span className="text-slate-400 font-bold text-[10px] uppercase tracking-widest">Recognition</span>
            <p className="font-bold text-slate-800 text-sm">Affiliated to MSU Saharanpur</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-1 md:border-x border-slate-100 px-4">
            <span className="text-slate-400 font-bold text-[10px] uppercase tracking-widest">Admissions</span>
            <p className="font-bold text-slate-800 text-sm">Session 2026-27 Open</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-1">
            <span className="text-slate-400 font-bold text-[10px] uppercase tracking-widest">Guidance</span>
            <p className="font-bold text-slate-800 text-sm">Dedicated Career Counseling</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;