
import React from 'react';
import { Link } from 'react-router-dom';
import {
    FileText, CheckCircle2, AlertCircle, Phone, Mail,
    GraduationCap, ArrowRight, ChevronRight,
    Clock, ShieldCheck, Download
} from 'lucide-react';

// IMPORT THE PDF FILE HERE
// Make sure the path matches where your file is located
import AdmissionFormPdf from '../../assets/admission from.pdf';

const Admissions = () => {
    
    // UPDATED: Direct Unsplash Link for "College/Admission" theme
    const heroImageUrl = "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop";

    const eligibilityCriteria = [
        'Passed graduation in any discipline from a recognized university',
        'Minimum 50% marks in graduation (45% for reserved categories)',
        'Candidates appearing in final year graduation can also apply',
        'Age limit as per university norms'
    ];

    const admissionProcess = [
        { step: '01', title: 'Online Application', desc: 'Complete the digital admission form with basic details.', icon: FileText },
        { step: '02', title: 'Document Verification', desc: 'Visit campus for physical verification of original documents.', icon: ShieldCheck },
        { step: '03', title: 'Merit Selection', desc: 'Shortlisting based on academic performance and cutoff.', icon: CheckCircle2 },
        { step: '04', title: 'Final Enrollment', desc: 'Payment of fees and confirmation of your seat.', icon: GraduationCap }
    ];

    const requiredDocuments = [
        '10th Mark Sheet & Cert',
        '12th Mark Sheet & Cert',
        'Graduation Mark Sheets',
        'Degree / Provisional',
        'Transfer Certificate',
        'Caste/Income Cert',
        'Passport Photos (6)',
        'Aadhar Card Copy'
    ];

    return (
        <div className="bg-slate-50 min-h-screen font-sans text-slate-600 selection:bg-blue-100 selection:text-blue-900">

            {/* --- HERO SECTION --- */}
            <div className="relative bg-white border-b border-slate-200 overflow-hidden">
                <div className="absolute inset-0 bg-grid-slate-50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16 md:pt-24 md:pb-24 relative z-10">
                    <div className="grid lg:grid-cols-12 gap-12 items-center">

                        {/* Text Content */}
                        <div className="lg:col-span-7">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                                </span>
                                Admissions Open 2026-27
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
                                Begin Your Journey <br className="hidden lg:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600">
                                    Towards Excellence
                                </span>
                            </h1>

                            <p className="text-lg text-slate-500 max-w-2xl leading-relaxed mb-8">
                                J.S. Education College invites bright minds to join our community. Our transparent, merit-based admission process is designed to identify and nurture tomorrow's leaders.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 hover:-translate-y-0.5"
                                >
                                    Apply Now <ArrowRight className="w-4 h-4" />
                                </Link>

                                <a
                                    href={AdmissionFormPdf}
                                    download="Admission_Form.pdf"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-700 border border-slate-200 rounded-lg font-semibold hover:bg-slate-50 transition-all hover:border-slate-300"
                                >
                                    <Download className="w-4 h-4" /> Admission Form
                                </a>
                            </div>
                        </div>

                        {/* Image Section */}
                        <div className="lg:col-span-5 hidden md:block relative">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-100 to-indigo-100 blur-3xl opacity-50 rounded-full -z-10"></div>
                            
                            <img
                                src={heroImageUrl}
                                alt="College Campus Admission"
                                className="w-full h-[400px] object-cover rounded-2xl shadow-2xl shadow-blue-900/10 ring-1 ring-slate-900/5 transform hover:scale-[1.02] transition-transform duration-500"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                {/* --- DEADLINE ALERT --- */}
                <div className="mb-16">
                    <div className="bg-amber-50 border border-amber-100 rounded-xl p-5 flex flex-col md:flex-row items-start md:items-center gap-4 shadow-sm">
                        <div className="bg-amber-100/50 p-3 rounded-full shrink-0">
                            <Clock className="text-amber-700 w-6 h-6" />
                        </div>
                        <div className="flex-1">
                            <h4 className="text-amber-900 font-bold text-base mb-1">Application Deadline Approaching</h4>
                            <p className="text-amber-800/80 text-sm">
                                The last date for application submission is <span className="font-bold text-amber-900">30th August 2025</span>. Ensure all documents are ready before this date.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

                    {/* --- LEFT COLUMN: CONTENT (Span 7) --- */}
                    <div className="lg:col-span-7 space-y-16">

                        {/* 1. ELIGIBILITY */}
                        <section>
                            <div className="flex items-center gap-3 mb-8">
                                <div className="h-8 w-1 bg-blue-600 rounded-full"></div>
                                <h2 className="text-2xl font-bold text-slate-900">Eligibility Criteria</h2>
                            </div>

                            <div className="bg-white rounded-2xl border border-slate-200 p-1 shadow-sm">
                                <ul className="divide-y divide-slate-100">
                                    {eligibilityCriteria.map((item, i) => (
                                        <li key={i} className="p-5 flex items-start gap-4 hover:bg-slate-50 transition-colors rounded-xl group">
                                            <div className="mt-0.5 w-6 h-6 rounded-full bg-green-50 flex items-center justify-center shrink-0 border border-green-100 group-hover:scale-110 transition-transform">
                                                <CheckCircle2 className="text-green-600 w-4 h-4" />
                                            </div>
                                            <span className="text-slate-700 font-medium leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>

                        {/* 2. DOCUMENTS */}
                        <section>
                            <div className="flex items-center gap-3 mb-8">
                                <div className="h-8 w-1 bg-indigo-600 rounded-full"></div>
                                <h2 className="text-2xl font-bold text-slate-900">Required Documents</h2>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {requiredDocuments.map((doc, i) => (
                                    <div key={i} className="group flex items-center gap-3 p-4 bg-white border border-slate-200 rounded-xl hover:border-indigo-200 hover:shadow-md transition-all duration-300">
                                        <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0 group-hover:bg-indigo-100 transition-colors">
                                            <FileText className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <span className="text-slate-700 text-sm font-semibold">{doc}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="mt-4 flex items-center gap-2 text-sm text-slate-500">
                                <AlertCircle className="w-4 h-4" />
                                <span>Note: Bring <strong>Originals</strong> + <strong>2 Sets of Photocopies</strong>.</span>
                            </p>
                        </section>
                    </div>

                    {/* --- RIGHT COLUMN: PROCESS & CONTACT (Span 5) --- */}
                    <div className="lg:col-span-5 space-y-10">

                        {/* PROCESS CARD */}
                        <div className="bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden">
                            <div className="bg-slate-50 px-6 py-4 border-b border-slate-100 flex justify-between items-center">
                                <h3 className="font-bold text-slate-900">Admission Process</h3>
                                <span className="text-xs font-semibold px-2 py-1 bg-white border border-slate-200 rounded text-slate-500">4 Steps</span>
                            </div>

                            <div className="p-6 md:p-8">
                                <div className="relative">
                                    {/* Vertical Line */}
                                    <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-slate-100"></div>

                                    <div className="space-y-8">
                                        {admissionProcess.map((item, i) => (
                                            <div key={i} className="relative flex gap-5 group">
                                                <div className="relative z-10 w-12 h-12 rounded-full bg-white border-2 border-slate-100 flex items-center justify-center shrink-0 group-hover:border-blue-500 group-hover:scale-110 transition-all shadow-sm">
                                                    <span className="text-sm font-bold text-slate-400 group-hover:text-blue-600">{item.step}</span>
                                                </div>
                                                <div className="pt-1.5 pb-2">
                                                    <h4 className="font-bold text-slate-900 text-lg mb-1 group-hover:text-blue-700 transition-colors">
                                                        {item.title}
                                                    </h4>
                                                    <p className="text-sm text-slate-500 leading-relaxed">
                                                        {item.desc}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CONTACT CARD */}
                        <div className="group relative bg-slate-900 rounded-2xl p-8 text-white overflow-hidden shadow-2xl">
                            {/* Abstract Shapes */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-600/30 transition-all duration-700"></div>
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-600/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/4"></div>

                            <div className="relative z-10">
                                <h3 className="text-xl font-bold mb-2">Need Assistance?</h3>
                                <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                                    Our admission counselors are here to guide you through every step of the process.
                                </p>

                                <div className="space-y-4">
                                    <a href="tel:8533915030" className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all group/item">
                                        <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover/item:text-blue-300 group-hover/item:bg-blue-500/30">
                                            <Phone className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Call Us</p>
                                            <p className="font-medium tracking-wide">+91 85339 15030</p>
                                        </div>
                                        <ChevronRight className="w-5 h-5 ml-auto text-slate-600 group-hover/item:text-white transition-colors" />
                                    </a>

                                    <a href="mailto:j.seducationcollege@gmail.com" className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all group/item">
                                        <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover/item:text-emerald-300 group-hover/item:bg-emerald-500/30">
                                            <Mail className="w-5 h-5" />
                                        </div>
                                        <div className="overflow-hidden">
                                            <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Email Us</p>
                                            <p className="font-medium tracking-wide truncate">j.seducationcollege@gmail.com</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="border-t border-slate-200 bg-white py-8">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <p className="text-slate-400 text-sm font-medium">
                        © 2025 J.S. Education College • Admission Department
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Admissions;
