import React from 'react';
import { ShieldCheck, Download, Info, Mail, MapPin, Phone, User, Landmark, BookOpen, Clock, FileCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { SEOHead } from '../seo';

// Import New RTI Images
import rtiImg1 from '../../assets/WhatsApp Image 2026-03-07 at 12.40.03 PM.jpeg';
import rtiImg2 from '../../assets/WhatsApp Image 2026-03-07 at 12.40.03 PM (1).jpeg';
import rtiImg3 from '../../assets/WhatsApp Image 2026-03-07 at 12.40.03 PM (2).jpeg';
import rtiImg4 from '../../assets/WhatsApp Image 2026-03-07 at 12.40.04 PM.jpeg';

// Import New RTI PDF
import rtiPDF from '../../assets/JS_College_RTI_Full_Disclosure (1).pdf';

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

    const collegeDetails = {
        name: "J.S. College of Education",
        affiliation: "Affiliated to Maa Shakumbhari University, Saharanpur (Uttar Pradesh)",
        address: "Kandhla–Budhana Road, Rajpur–Chhachhrauli, M. Nagar (U.P.)",
        email: "jseducationcollege@gmail.com",
        phones: ["01392-260270", "8923078672", "8273737248"]
    };

    const rtiCommittee = [
        { name: "Dr. Deepali Gupta", designation: "Principal Chairperson", contact: "8273686248" },
        { name: "Mrs. Sonika Pundir", designation: "Convener", contact: "9759378701" },
        { name: "Mr. Vinit Rana", designation: "Secretary", contact: "8273737248" },
        { name: "S/H Mohit Kumar", designation: "Member", contact: "8923078672" },
        { name: "Usha Chauhan", designation: "Member", contact: "8630143162" },
        { name: "Reena Chaudhry", designation: "Member", contact: "8535853683" }
    ];

    const studentMembers = [
        { name: "Vinay", designation: "Student", contact: "8272827389" },
        { name: "Nancy", designation: "Student", contact: "8077678680" },
        { name: "Urmila", designation: "Student", contact: "6398773818" }
    ];

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
                    <div className="lg:col-span-2 space-y-12">
                        <motion.section {...fadeIn} className="bg-white rounded-3xl shadow-2xl border border-slate-200 p-8 md:p-12">
                            <h2 className="text-3xl font-black text-slate-900 mb-8 flex items-center gap-4">
                                <span className="w-2 h-10 bg-amber-500 rounded-full"></span>
                                Institutional Overview
                            </h2>
                            <div className="prose prose-slate max-w-none text-slate-600 space-y-6 text-lg leading-relaxed">
                                <p>
                                    <strong>{collegeDetails.name}</strong>, {collegeDetails.affiliation}, is a premier educational institution dedicated to excellence in teacher education. The college operates with a commitment to integrity, transparency, and administrative accountability.
                                </p>
                                <p>
                                    In accordance with the <strong>Right to Information Act, 2005</strong>, the institution has established an RTI Cell to provide information to citizens and maintain a transparent relationship with all stakeholders.
                                </p>
                            </div>
                        </motion.section>

                        <motion.section {...fadeIn} className="bg-white rounded-3xl shadow-2xl border border-slate-200 p-8 md:p-12">
                            <h2 className="text-3xl font-black text-slate-900 mb-8 flex items-center gap-4">
                                <span className="w-2 h-10 bg-blue-600 rounded-full"></span>
                                1. Objectives of RTI
                            </h2>
                            <div className="space-y-6">
                                {[
                                    { id: "1.1", text: "To promote transparency and accountability in the working of the institution." },
                                    { id: "1.2", text: "To contain corruption and make our democracy work for the people in a real sense." },
                                    { id: "1.3", text: "To ensure that citizens are aware of the institutional functions and decision-making processes." },
                                    { id: "1.4", text: "To provide a framework for citizens to access information under the control of public authorities." },
                                    { id: "1.5", text: "To empower students, parents, and the public with accurate information regarding college policies." }
                                ].map((obj) => (
                                    <div key={obj.id} className="flex gap-4 p-4 hover:bg-slate-50 rounded-xl transition-colors group">
                                        <span className="text-blue-600 font-black shrink-0">{obj.id}</span>
                                        <p className="text-slate-700 font-medium leading-relaxed">{obj.text}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.section>

                        <motion.section {...fadeIn} className="bg-white rounded-3xl shadow-2xl border border-slate-200 p-8 md:p-12">
                            <h2 className="text-3xl font-black text-slate-900 mb-8 flex items-center gap-4">
                                <span className="w-2 h-10 bg-emerald-600 rounded-full"></span>
                                Functions of RTI Cell / PIO
                            </h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {[
                                    { icon: <FileCheck className="text-emerald-600" />, title: "A. Information Gathering", desc: "Coordinating the collection of information from various departments." },
                                    { icon: <Clock className="text-emerald-600" />, title: "B. Timely Disposal", desc: "Ensuring RTI applications are processed within the statutory 30-day limit." },
                                    { icon: <Info className="text-emerald-600" />, title: "C. Proactive Disclosure", desc: "Maintaining and updating information that should be in the public domain." },
                                    { icon: <ShieldCheck className="text-emerald-600" />, title: "D. Application Scrutiny", desc: "Verifying the validity of applications and the applicable fees." },
                                    { icon: <Landmark className="text-emerald-600" />, title: "E. Policy Compliance", desc: "Ensuring all institutional actions align with government RTI guidelines." },
                                    { icon: <BookOpen className="text-emerald-600" />, title: "F. Records Management", desc: "Maintaining a formal register of all RTI requests and their outcomes." }
                                ].map((func, idx) => (
                                    <div key={idx} className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                        <div className="mb-4">{func.icon}</div>
                                        <h4 className="font-black text-slate-900 mb-2">{func.title}</h4>
                                        <p className="text-sm text-slate-600 font-medium leading-relaxed">{func.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.section>

                        <motion.section {...fadeIn} className="bg-white rounded-3xl shadow-2xl border border-slate-200 p-8 md:p-12">
                            <h2 className="text-3xl font-black text-slate-900 mb-8 flex items-center gap-4">
                                <span className="w-2 h-10 bg-rose-600 rounded-full"></span>
                                RTI Committee & Contacts
                            </h2>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr className="border-b-2 border-slate-100">
                                            <th className="py-4 px-4 text-xs uppercase tracking-widest text-slate-400 font-black">Name</th>
                                            <th className="py-4 px-4 text-xs uppercase tracking-widest text-slate-400 font-black">Designation</th>
                                            <th className="py-4 px-4 text-xs uppercase tracking-widest text-slate-400 font-black text-right">Mobile No.</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-50">
                                        {rtiCommittee.map((member, idx) => (
                                            <tr key={idx} className="group hover:bg-slate-50 transition-colors">
                                                <td className="py-4 px-4 font-bold text-slate-900">{member.name}</td>
                                                <td className="py-4 px-4 font-medium text-slate-600">{member.designation}</td>
                                                <td className="py-4 px-4 font-black text-slate-900 text-right">{member.contact}</td>
                                            </tr>
                                        ))}
                                        {studentMembers.map((member, idx) => (
                                            <tr key={`s-${idx}`} className="group hover:bg-slate-50 transition-colors">
                                                <td className="py-4 px-4 font-bold text-slate-500">{member.name}</td>
                                                <td className="py-4 px-4 font-medium text-slate-400 italic">{member.designation}</td>
                                                <td className="py-4 px-4 font-black text-slate-500 text-right">{member.contact}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="mt-8 p-6 bg-rose-50 rounded-2xl border border-rose-100 flex items-start gap-4">
                                <Info className="text-rose-600 shrink-0 mt-1" />
                                <p className="text-sm text-rose-900 font-medium leading-relaxed">
                                    <strong>Note:</strong> Dr. Deepali Gupta (Principal) serves as the Public Information Officer (PIO). The Management Committee acts as the First Appellate Authority (FAA).
                                </p>
                            </div>
                        </motion.section>

                        {/* --- INSTITUTIONAL GALLERY --- */}
                        <motion.section {...fadeIn} className="bg-white rounded-3xl shadow-2xl border border-slate-200 p-8 md:p-12">
                            <h2 className="text-3xl font-black text-slate-900 mb-8 flex items-center gap-4">
                                <span className="w-2 h-10 bg-amber-500 rounded-full"></span>
                                Institutional Transparency Gallery
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    { img: rtiImg1, title: "Administrative Transparency" },
                                    { img: rtiImg2, title: "Public Records Access" },
                                    { img: rtiImg3, title: "Institutional Accountability" },
                                    { img: rtiImg4, title: "Governance Oversight" }
                                ].map((photo, idx) => (
                                    <motion.div
                                        key={idx}
                                        whileHover={{ scale: 1.02 }}
                                        className="relative group rounded-2xl overflow-hidden shadow-lg aspect-[4/3] border border-slate-100"
                                    >
                                        <img
                                            src={photo.img}
                                            alt={photo.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                            <p className="text-white font-black tracking-tight text-lg">{photo.title}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.section>
                    </div>

                    {/* Right: Actions & Links */}
                    <div className="space-y-8">
                        <div className="bg-[#002147] rounded-3xl p-8 text-white shadow-2xl border border-white/10">
                            <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-amber-900/40">
                                <Download size={32} />
                            </div>
                            <h3 className="text-2xl font-black mb-4">Official Document</h3>
                            <p className="text-slate-300 mb-8 font-medium leading-relaxed">
                                Download the complete Statutory Declaration and RTI Compliance document for your records.
                            </p>
                            <a
                                href={rtiPDF}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-3 w-full py-4 bg-white text-slate-900 rounded-2xl font-black uppercase tracking-[0.1em] text-xs hover:bg-amber-500 hover:text-white transition-all shadow-xl group"
                            >
                                <Download size={16} className="group-hover:translate-y-0.5 transition-transform" />
                                Download PDF
                            </a>
                        </div>

                        <motion.div {...fadeIn} className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200">
                            <h3 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-2">
                                < Landmark size={20} className="text-slate-900" />
                                Institutional Details
                            </h3>
                            <div className="space-y-6 text-sm text-slate-600 font-medium">
                                <div className="flex gap-4">
                                    <MapPin size={18} className="text-amber-500 shrink-0" />
                                    <span>{collegeDetails.address}</span>
                                </div>
                                <div className="flex gap-4">
                                    <Mail size={18} className="text-amber-500 shrink-0" />
                                    <a href={`mailto:${collegeDetails.email}`} className="hover:text-amber-600 transition-colors">{collegeDetails.email}</a>
                                </div>
                                <div className="flex gap-4">
                                    <Phone size={18} className="text-amber-500 shrink-0" />
                                    <div className="flex flex-col gap-1">
                                        {collegeDetails.phones.map((phone, i) => (
                                            <span key={i}>{phone}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div {...fadeIn} className="bg-slate-900 rounded-3xl p-8 text-white shadow-xl border border-white/5">
                            <h3 className="text-xl font-black mb-4 flex items-center gap-2">
                                <Info size={20} className="text-amber-500" />
                                Note for Applicants
                            </h3>
                            <ul className="space-y-4 text-sm text-slate-400 font-medium">
                                <li className="flex gap-3">
                                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full shrink-0 mt-2"></span>
                                    RTI applications can be submitted to the PIO with the prescribed fee of ₹10.
                                </li>
                                <li className="flex gap-3">
                                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full shrink-0 mt-2"></span>
                                    Fees can be paid through IPO/Court Fee Stamp/Cash/Draft as per govt. norms.
                                </li>
                                <li className="flex gap-3">
                                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full shrink-0 mt-2"></span>
                                    Responses are typically provided within 30 days as per the Act.
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
