import React from 'react';
import { FileText, Check, Info, Phone, Mail, Calendar, GraduationCap, ArrowRight } from 'lucide-react';

const Admissions = () => {
    const eligibilityCriteria = [
        'Passed graduation in any discipline from a recognized university',
        'Minimum 50% marks in graduation (45% for reserved categories)',
        'Candidates appearing in final year graduation can also apply',
        'Age limit as per university norms'
    ];

    const admissionProcess = [
        { step: '01', title: 'Application', desc: 'Fill online/offline admission form' },
        { step: '02', title: 'Verification', desc: 'Document verification at campus' },
        { step: '03', title: 'Merit List', desc: 'Selection based on academic scores' },
        { step: '04', title: 'Enrollment', desc: 'Fee payment & seat confirmation' }
    ];

    const requiredDocuments = [
        '10th Mark Sheet & Certificate',
        '12th Mark Sheet & Certificate',
        'Graduation Mark Sheets (All)',
        'Degree / Provisional Certificate',
        'Transfer & Character Certificate',
        'Caste/Income Certificate',
        'Passport Size Photographs (6)',
        'Aadhar Card Copy'
    ];

    return (
        <div className="bg-[#fcfcfd] min-h-screen text-slate-800 font-sans">
            
            {/* 1. PROFESSIONAL HERO SECTION */}
            <div className="bg-white border-b border-slate-100 pt-16 pb-12 md:pt-20 md:pb-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-[10px] font-bold uppercase tracking-widest mb-6">
                        <Calendar className="w-3 h-3" />
                        Session 2025-26
                    </div>
                    <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                        Admission <span className="text-blue-700">Procedure</span>
                    </h1>
                    <p className="text-slate-500 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
                        Secure your future in education. We follow a transparent, merit-based selection process strictly adhering to university guidelines.
                    </p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">

                {/* Notice Banner - Cleaner Look */}
                <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 md:p-5 mb-12 flex items-start md:items-center gap-4 shadow-sm">
                    <div className="bg-amber-100 p-2 rounded-lg shrink-0">
                        <Info className="text-amber-700 w-5 h-5" />
                    </div>
                    <div>
                        <p className="text-amber-900 font-bold text-sm uppercase tracking-wide mb-0.5">Application Deadline</p>
                        <p className="text-amber-800 text-sm md:text-base">
                            The last date for application submission is <span className="font-bold">30th August 2025</span>.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

                    {/* LEFT COLUMN: CRITERIA & DOCUMENTS (Span 7) */}
                    <div className="lg:col-span-7 space-y-12">

                        {/* Eligibility Section */}
                        <section>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-blue-50 rounded-lg">
                                    <GraduationCap className="w-5 h-5 text-blue-600" />
                                </div>
                                <h2 className="text-xl md:text-2xl font-bold text-slate-900">Eligibility Criteria</h2>
                            </div>
                            
                            <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
                                <ul className="space-y-4">
                                    {eligibilityCriteria.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3.5">
                                            <div className="mt-1 w-5 h-5 rounded-full bg-green-50 flex items-center justify-center shrink-0 border border-green-100">
                                                <Check className="text-green-600 w-3 h-3" />
                                            </div>
                                            <span className="text-slate-600 text-sm md:text-base leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>

                        {/* Documents Section - Grid Layout */}
                        <section>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-indigo-50 rounded-lg">
                                    <FileText className="w-5 h-5 text-indigo-600" />
                                </div>
                                <h2 className="text-xl md:text-2xl font-bold text-slate-900">Required Documents</h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {requiredDocuments.map((doc, i) => (
                                    <div key={i} className="flex items-center gap-3 p-4 bg-white border border-slate-200 rounded-xl hover:border-blue-300 transition-colors shadow-sm">
                                        <div className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0"></div>
                                        <span className="text-slate-700 text-sm font-medium">{doc}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="mt-4 text-xs text-slate-400 italic">
                                * Please bring original documents along with 2 sets of self-attested photocopies.
                            </p>
                        </section>
                    </div>

                    {/* RIGHT COLUMN: PROCESS & CONTACT (Span 5) */}
                    <div className="lg:col-span-5 space-y-10">
                        
                        {/* Admission Process - Timeline Style */}
                        <div className="bg-white p-6 md:p-8 border border-slate-200 rounded-2xl shadow-lg shadow-slate-100">
                            <h3 className="text-lg font-bold text-slate-900 mb-8 uppercase tracking-wider border-b border-slate-100 pb-4">
                                Process Flow
                            </h3>
                            
                            <div className="space-y-0">
                                {admissionProcess.map((item, i) => (
                                    <div key={i} className="relative pl-10 pb-8 last:pb-0">
                                        {/* Connecting Line */}
                                        {i !== admissionProcess.length - 1 && (
                                            <div className="absolute left-[11px] top-8 bottom-0 w-0.5 bg-slate-100"></div>
                                        )}
                                        
                                        {/* Number Bubble */}
                                        <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] font-bold shadow-md shadow-blue-200 z-10">
                                            {item.step}
                                        </div>

                                        {/* Content */}
                                        <div>
                                            <h4 className="font-bold text-slate-800 text-sm md:text-base">{item.title}</h4>
                                            <p className="text-xs md:text-sm text-slate-500 mt-1">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Contact Card - Professional */}
                        <div className="bg-slate-900 text-white rounded-2xl p-6 md:p-8 shadow-xl relative overflow-hidden">
                            {/* Decorative circle */}
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>

                            <h3 className="font-bold text-lg mb-2 relative z-10">Admission Helpdesk</h3>
                            <p className="text-slate-400 text-sm mb-6 relative z-10">
                                Have questions? Reach out to our admission counselors directly.
                            </p>

                            <div className="space-y-4 relative z-10">
                                <a href="tel:8533915030" className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/10">
                                    <Phone className="w-4 h-4 text-blue-400" />
                                    <span className="text-sm font-medium tracking-wide">+91 85339 15030</span>
                                </a>
                                <a href="mailto:j.seducationcollege@gmail.com" className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/10">
                                    <Mail className="w-4 h-4 text-emerald-400" />
                                    <span className="text-sm font-medium tracking-wide truncate">j.seducationcollege@gmail.com</span>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Simple Footer Note */}
            <div className="border-t border-slate-200 py-8 text-center bg-white">
                <p className="text-slate-400 text-xs uppercase tracking-widest font-medium">
                    © 2025 J.S. Education College • Admissions Dept.
                </p>
            </div>
        </div>
    );
};

export default Admissions;