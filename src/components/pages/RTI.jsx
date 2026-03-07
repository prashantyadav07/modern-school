import React from 'react';
import { ShieldCheck, Users, Landmark, FileText, ChevronRight, Download, Info, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { SEOHead } from '../seo';

const customFontStyle = {
    fontFamily: "'Neue Montreal Regular', sans-serif",
    fontWeight: 600,
    fontStyle: "normal",
};

const RTI = () => {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    const pioDetails = {
        name: "Dr. Deepali Gupta",
        designation: "Principal / Public Information Officer",
        address: "J.S. College of Education, Rajpur-Chhajpur, Kandhala Budhana Road, Muzzafarnagar, U.P.",
        email: "jscollegemzn@gmail.com",
        phone: "+91-XXXXXXXXXX" // Generic placeholder or actual if known
    };

    const appellateAuthority = {
        name: "Management Committee / Secretary",
        designation: "First Appellate Authority",
        address: "J.S. College of Education, Rajpur-Chhajpur, Kandhala Budhana Road, Muzzafarnagar, U.P."
    };

    return (
        <div style={customFontStyle} className="min-h-screen bg-slate-50 font-sans text-slate-800 pb-20">
            <SEOHead
                title="RTI Statutory Declaration | J.S. College of Education"
                description="Statutory Declaration under Section 4(1)(b) of Right to Information Act, 2005 for J.S. College of Education."
                keywords="RTI, Right to Information, Statutory Declaration, UGC, J.S. College"
                canonicalUrl="/rti"
            />

            {/* --- HERO SECTION --- */}
            <section className="relative bg-slate-900 pt-24 pb-32 overflow-hidden text-white">
                <div className="absolute inset-0 bg-[#002147]/90"></div>
                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(30deg,#ffffff_12%,transparent_12.5%,transparent_87%,#ffffff_87.5%,#ffffff),linear-gradient(150deg,#ffffff_12%,transparent_12.5%,transparent_87%,#ffffff_87.5%,#ffffff),linear-gradient(30deg,#ffffff_12%,transparent_12.5%,transparent_87%,#ffffff_87.5%,#ffffff),linear-gradient(150deg,#ffffff_12%,transparent_12.5%,transparent_87%,#ffffff_87.5%,#ffffff),linear-gradient(60deg,#ffffff_25%,transparent_25.5%,transparent_75%,#ffffff_75%,#ffffff),linear-gradient(60deg,#ffffff_25%,transparent_25.5%,transparent_75%,#ffffff_75%,#ffffff)] bg-[size:80px_140px]"></div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/30 px-5 py-2 rounded-full mb-8"
                    >
                        <ShieldCheck className="text-amber-400 w-5 h-5" />
                        <span className="text-amber-100 font-bold text-xs uppercase tracking-[0.2em]">Right To Information Act, 2005</span>
                    </motion.div>

                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight mb-8">
                        Statutory <span className="text-amber-500 underline decoration-white/20 underline-offset-8">Declaration</span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-medium">
                        Ensuring transparency and accountability in institutional governance under Section 4(1)(b) of the RTI Act.
                    </p>
                </div>
            </section>

            {/* --- STATUTORY DECLARATION CONTENT --- */}
            <div className="container mx-auto px-4 -mt-16 relative z-20">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left: Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        <motion.section {...fadeIn} className="bg-white rounded-3xl shadow-2xl border border-slate-200 p-8 md:p-12">
                            <h2 className="text-3xl font-black text-slate-900 mb-8 flex items-center gap-4">
                                <span className="w-2 h-10 bg-amber-500 rounded-full"></span>
                                Institutional Overview
                            </h2>
                            <div className="prose prose-slate max-w-none text-slate-600 space-y-6 text-lg leading-relaxed">
                                <p>
                                    J.S. College of Education is a self-financed institution educational institution dedicated to producing high-quality educators and professionals. The college is committed to the principles of transparency and administrative accountability.
                                </p>
                                <p>
                                    As per the requirements of Section 4(1)(b) of the RTI Act, 2005, the institution proactively discloses information through this portal and official documents available to the public.
                                </p>
                                <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-slate-900 italic font-medium">
                                    "The Right to Information is a fundamental right that empowers every citizen to seek information from public authorities, making the democracy of India more vibrant and transparent."
                                </div>
                            </div>

                            <div className="mt-12">
                                <h3 className="text-xl font-black text-slate-900 mb-6">Key Proactive Disclosures</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {[
                                        "Institutional Background & Governance",
                                        "Academic Programs & Curriculum",
                                        "Admission Policy & Fee Structure",
                                        "Student Support Services",
                                        "Administrative Policies & Guidelines",
                                        "Audit & Financial Statements"
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100 group hover:border-amber-500/50 transition-colors">
                                            <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-all">
                                                <ChevronRight size={16} />
                                            </div>
                                            <span className="font-bold text-sm text-slate-700">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.section>

                        <motion.section {...fadeIn} className="bg-white rounded-3xl shadow-2xl border border-slate-200 p-8 md:p-12">
                            <h2 className="text-3xl font-black text-slate-900 mb-8 flex items-center gap-4">
                                <span className="w-2 h-10 bg-rose-600 rounded-full"></span>
                                RTI Officers
                            </h2>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="p-8 bg-slate-900 rounded-2xl text-white shadow-xl relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full -mr-10 -mt-10 blur-2xl group-hover:scale-150 transition-transform"></div>
                                    <h4 className="text-amber-500 font-black uppercase tracking-widest text-xs mb-4">Public Information Officer</h4>
                                    <p className="text-xl font-bold mb-2">{pioDetails.name}</p>
                                    <div className="space-y-4 text-sm text-slate-300 font-medium">
                                        <div className="flex items-start gap-3">
                                            <MapPin size={16} className="text-amber-500 shrink-0 mt-1" />
                                            <span>{pioDetails.address}</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Mail size={16} className="text-amber-500 shrink-0" />
                                            <span>{pioDetails.email}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-8 bg-slate-50 rounded-2xl border border-slate-200 shadow-lg group hover:border-rose-600/30 transition-colors">
                                    <h4 className="text-rose-600 font-black uppercase tracking-widest text-xs mb-4">First Appellate Authority</h4>
                                    <p className="text-xl font-bold mb-2 text-slate-900">{appellateAuthority.name}</p>
                                    <div className="space-y-4 text-sm text-slate-500 font-medium">
                                        <div className="flex items-start gap-3">
                                            <MapPin size={16} className="text-rose-600 shrink-0 mt-1" />
                                            <span>{appellateAuthority.address}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.section>
                    </div>

                    {/* Right: Actions & Links */}
                    <div className="space-y-8">
                        <motion.div {...fadeIn} className="bg-[#002147] rounded-3xl p-8 text-white shadow-2xl border border-white/10 sticky top-24">
                            <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-amber-900/40">
                                <Download size={32} />
                            </div>
                            <h3 className="text-2xl font-black mb-4">Official Document</h3>
                            <p className="text-slate-300 mb-8 font-medium leading-relaxed">
                                Download the complete Statutory Declaration and RTI Compliance document for your records.
                            </p>
                            <a
                                href="/downloads/JS_College_RTI_Compliance.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-3 w-full py-4 bg-white text-slate-900 rounded-2xl font-black uppercase tracking-[0.1em] text-xs hover:bg-amber-500 hover:text-white transition-all shadow-xl group"
                            >
                                <Download size={16} className="group-hover:translate-y-0.5 transition-transform" />
                                Download PDF
                            </a>
                        </motion.div>

                        <motion.div {...fadeIn} className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200">
                            <h3 className="text-xl font-black text-slate-900 mb-4 flex items-center gap-2">
                                <Info size={20} className="text-blue-600" />
                                Note for Applicants
                            </h3>
                            <ul className="space-y-4 text-sm text-slate-600 font-medium">
                                <li className="flex gap-3">
                                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full shrink-0 mt-2"></span>
                                    RTI applications can be submitted to the PIO with the prescribed fee of ₹10.
                                </li>
                                <li className="flex gap-3">
                                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full shrink-0 mt-2"></span>
                                    Fees can be paid through IPD/Court Fee Stamp/Cash/Draft as per govt. norms.
                                </li>
                                <li className="flex gap-3">
                                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full shrink-0 mt-2"></span>
                                    Responses are typically provided within 30 days.
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RTI;
