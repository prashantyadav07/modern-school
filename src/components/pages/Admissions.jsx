import React from 'react';
import { FileText, ChevronRight, Check, Info, Phone, Mail } from 'lucide-react';

const Admissions = () => {
    const eligibilityCriteria = [
        'Candidates must have passed graduation in any discipline from a recognized university',
        'Minimum 50% marks in graduation (45% for reserved categories)',
        'Candidates appearing in final year graduation can also apply',
        'Age limit as per university norms'
    ];

    const admissionProcess = [
        { step: '01', title: 'Application', desc: 'Fill and submit the online/offline admission form' },
        { step: '02', title: 'Verification', desc: 'Verification of original documents and certificates' },
        { step: '03', title: 'Merit List', desc: 'Declaration of merit list based on academic scores' },
        { step: '04', title: 'Enrollment', desc: 'Fee payment and final seat allotment' }
    ];

    const requiredDocuments = [
        '10th & 12th Mark Sheet & Certificate',
        'Graduation Mark Sheets (All Semesters)',
        'Graduation Degree / Provisional Certificate',
        'Transfer & Character Certificate',
        'Caste & Income Certificate (if applicable)',
        '6 Passport Size Photographs',
        'Aadhar Card Copy'
    ];

    return (
        <div className="bg-white min-h-screen text-slate-800 font-sans">
            {/* Simple Hero Section */}
            <div className="bg-slate-50 border-b border-gray-200 py-16">
                <div className="max-w-6xl mx-auto px-6">
                    <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Session 2025-26</span>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mt-2 mb-4">
                        Admission Procedure
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
                        Follow the guidelines below to secure your admission in the Bachelor of Education (B.Ed.) program. 
                        We follow a transparent and merit-based selection process.
                    </p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 py-12">
                
                {/* Notice Banner */}
                <div className="flex items-center gap-4 bg-amber-50 border-l-4 border-amber-500 p-5 mb-16">
                    <Info className="text-amber-600 shrink-0" size={24} />
                    <p className="text-amber-900 font-medium">
                        Important: The last date for application submission is 30th August 2025.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    
                    {/* Left Column: Eligibility & Documents */}
                    <div className="lg:col-span-2 space-y-16">
                        
                        {/* Eligibility */}
                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                <span className="w-8 h-1 bg-blue-600 inline-block"></span>
                                Eligibility Criteria
                            </h2>
                            <ul className="space-y-4">
                                {eligibilityCriteria.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-700 leading-relaxed">
                                        <Check className="text-green-600 mt-1 shrink-0" size={18} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Documents - Professional List */}
                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                <span className="w-8 h-1 bg-blue-600 inline-block"></span>
                                Required Documents
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                                {requiredDocuments.map((doc, i) => (
                                    <div key={i} className="flex items-center gap-3 py-2 border-b border-gray-100">
                                        <FileText className="text-slate-400" size={16} />
                                        <span className="text-slate-700 text-sm">{doc}</span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Right Column: Steps & Contact */}
                    <div className="space-y-12">
                        {/* Admission Steps */}
                        <div className="bg-slate-50 p-8 border border-slate-200 rounded-sm">
                            <h3 className="text-xl font-bold mb-6 text-slate-900">Process Flow</h3>
                            <div className="space-y-8">
                                {admissionProcess.map((item, i) => (
                                    <div key={i} className="flex gap-4 relative">
                                        {i !== admissionProcess.length - 1 && (
                                            <div className="absolute left-4 top-10 w-0.5 h-10 bg-gray-200"></div>
                                        )}
                                        <div className="w-9 h-9 rounded-full bg-white border-2 border-blue-600 flex items-center justify-center shrink-0 z-10">
                                            <span className="text-xs font-bold text-blue-700">{item.step}</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-800 leading-tight">{item.title}</h4>
                                            <p className="text-sm text-slate-600 mt-1">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Contact Helpdesk */}
                        <div className="border border-blue-100 bg-blue-50/50 p-8 rounded-sm text-center">
                            <h3 className="font-bold text-slate-900 mb-2">Need Help?</h3>
                            <p className="text-sm text-slate-600 mb-6">Contact our admission helpdesk for any queries.</p>
                            
                            <div className="space-y-4">
                                <a href="tel:8533915030" className="flex items-center justify-center gap-2 text-blue-700 font-semibold hover:underline">
                                    <Phone size={16} /> +91 8533915030
                                </a>
                                <a href="mailto:j.seducationcollege@gmail.com" className="flex items-center justify-center gap-2 text-blue-700 font-semibold hover:underline text-sm">
                                    <Mail size={16} /> j.seducationcollege@gmail.com
                                </a>
                            </div>

                            <button className="mt-8 w-full bg-slate-900 text-white py-3 px-4 rounded font-medium hover:bg-slate-800 transition-colors">
                                Download Prospectus
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            {/* Simple Footer Note */}
            <div className="max-w-6xl mx-auto px-6 py-12 border-t border-gray-100 mt-12 text-center">
                <p className="text-slate-500 text-sm">
                    © 2025 J.S. Education College. All rights reserved. 
                    <span className="mx-2">|</span>
                    Affiliated with University Norms.
                </p>
            </div>
        </div>
    );
};

export default Admissions;