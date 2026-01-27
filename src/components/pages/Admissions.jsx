import React from 'react';
import { Link } from 'react-router-dom';
import {
    FileText, CheckCircle2, AlertCircle, Phone, Mail,
    GraduationCap, ArrowRight, ChevronRight,
    Clock, ShieldCheck, Download, Globe, CreditCard, UserCheck
} from 'lucide-react';

// IMPORT THE PDF FILE HERE
import AdmissionFormPdf from '../../assets/admission from.pdf';

const customFontStyle = {
    fontFamily: "'Neue Montreal Regular', sans-serif",
    fontWeight: 600,
    fontStyle: "normal",
};

const Admissions = () => {

    const heroImageUrl = "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop";

    // Updated based on the "Requirements for admission" image
    const eligibilityCriteria = [
        'High School & Intermediate Marksheets are mandatory',
        'Graduation Marksheet (For Post-Graduate applicants)',
        'Valid Identification Proof (Aadhar/Pan/Driving License)',
        'Original Transfer, Migration & Character Certificates'
    ];

    // Updated based on the "Admission Process" images (Steps 1-7)
    const admissionProcess = [
        {
            step: '01',
            title: 'Online Registration',
            desc: (
                <>
                    Visit the official portal (
                    <a
                        href="https://msuweb.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline hover:text-blue-800"
                    >
                        https://msuweb.in/
                    </a>
                    ) to fill the registration form.
                </>
            ),
            icon: Globe
        }
        ,
        {
            step: '02',
            title: 'Get Registration ID',
            desc: 'After submission, receive your Unique Registration ID via SMS/Email.',
            icon: UserCheck
        },
        {
            step: '03',
            title: 'Fee Payment',
            desc: 'Print the application & bank challan, then submit the fee at the bank.',
            icon: CreditCard
        },
        {
            step: '04',
            title: 'Physical Verification',
            desc: 'Submit the University Copy & Student Copy along with original documents at the college.',
            icon: ShieldCheck
        }
    ];

    // Updated based on the specific list in your images
    const requiredDocuments = [
        '10th & 12th Marksheets (Original + Copies)',
        'Graduation Marksheets (For PG Courses)',
        'Transfer Certificate (TC) - Original',
        'Migration Certificate - Original',
        'Character Certificate - Original',
        '4 Passport Size Photos (Latest, Front Facing)',
        'Caste/Reservation Certificate (If applicable)',
        'Weightage Certs (NCC/NSS/Sports)'
    ];

    return (
        <div style={customFontStyle} className="bg-slate-50 min-h-screen font-sans text-slate-600 selection:bg-blue-100 selection:text-blue-900">

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
                                Join J.S. Education College. Follow our transparent, step-by-step admission process designed to ensure a smooth transition into your academic future.
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
                            <h4 className="text-amber-900 font-bold text-base mb-1">Important Notice</h4>
                            <p className="text-amber-800/80 text-sm">
                                Admissions are subject to <strong>State Government</strong> and <strong>Maa Shakumbhari University</strong> rules. Please ensure all original documents are produced at the time of admission to avoid inconvenience.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

                    {/* --- LEFT COLUMN: CONTENT (Span 7) --- */}
                    <div className="lg:col-span-7 space-y-16">

                        {/* 1. ADMISSION PROCESS (MOVED UP FOR BETTER FLOW) */}
                        <section>
                            <div className="flex items-center gap-3 mb-8">
                                <div className="h-8 w-1 bg-blue-600 rounded-full"></div>
                                <h2 className="text-2xl font-bold text-slate-900">Admission Process</h2>
                            </div>

                            <div className="space-y-6">
                                {admissionProcess.map((item, i) => (
                                    <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex gap-5 hover:border-blue-100 transition-colors group">
                                        <div className="shrink-0">
                                            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                                <item.icon className="w-6 h-6" />
                                            </div>
                                        </div>
                                        <div>
                                            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1 block">Step {item.step}</span>
                                            <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                                            <p className="text-slate-500 leading-relaxed text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* 2. DOCUMENTS */}
                        <section>
                            <div className="flex items-center gap-3 mb-8">
                                <div className="h-8 w-1 bg-indigo-600 rounded-full"></div>
                                <h2 className="text-2xl font-bold text-slate-900">Documents Required</h2>
                                <span className="ml-auto text-xs font-bold bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full border border-indigo-100">
                                    Physical Verification
                                </span>
                            </div>

                            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                                <div className="grid grid-cols-1 md:grid-cols-2">
                                    {requiredDocuments.map((doc, i) => (
                                        <div key={i} className="p-4 border-b border-r border-slate-100 hover:bg-slate-50 transition-colors flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                                            <span className="text-slate-700 text-sm font-medium">{doc}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="bg-indigo-50/50 p-4 border-t border-indigo-100 flex gap-3">
                                    <AlertCircle className="w-5 h-5 text-indigo-600 shrink-0" />
                                    <p className="text-sm text-indigo-800">
                                        <strong>Note:</strong> No benefit will be given for reserved categories (SC/ST/OBC/Phy.Challenged) if the original certificate is not produced at the time of admission.
                                    </p>
                                </div>
                            </div>
                        </section>

                    </div>

                    {/* --- RIGHT COLUMN: ELIGIBILITY & CONTACT (Span 5) --- */}
                    <div className="lg:col-span-5 space-y-10">

                        {/* ELIGIBILITY CARD */}
                        <div className="bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden">
                            <div className="bg-slate-50 px-6 py-4 border-b border-slate-100">
                                <h3 className="font-bold text-slate-900">Eligibility Criteria</h3>
                            </div>
                            <div className="p-6">
                                <ul className="space-y-4">
                                    {eligibilityCriteria.map((item, i) => (
                                        <li key={i} className="flex gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"></div>
                                            <span className="text-slate-600 text-sm leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
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
                                    Our admission counselors are here to guide you through the online registration and verification process.
                                </p>

                                <div className="space-y-4">
                                    <a href="tel: 8273737248" className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all group/item">
                                        <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover/item:text-blue-300 group-hover/item:bg-blue-500/30">
                                            <Phone className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Call Us</p>
                                            <p className="font-medium tracking-wide">+91 8273737248</p>
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
                        © 2026 J.S. Education College • Admission Department
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Admissions;