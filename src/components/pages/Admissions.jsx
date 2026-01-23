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
            <div className="bg-slate-50 border-b border-gray-200 py-10 sm:py-12 md:py-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <span className="text-blue-600 font-bold tracking-widest uppercase text-xs sm:text-sm">Session 2025-26</span>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-slate-900 mt-2 mb-3 sm:mb-4">
                        Admission Procedure
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl leading-relaxed">
                        Follow the guidelines below to secure your admission in the Bachelor of Education (B.Ed.) program.
                        We follow a transparent and merit-based selection process.
                    </p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12">

                {/* Notice Banner */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 bg-amber-50 border-l-4 border-amber-500 p-4 sm:p-5 mb-10 sm:mb-12 md:mb-16">
                    <Info className="text-amber-600 shrink-0 w-5 h-5 sm:w-6 sm:h-6" />
                    <p className="text-amber-900 font-medium text-sm sm:text-base">
                        Important: The last date for application submission is 30th August 2025.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 lg:gap-16">

                    {/* Left Column: Eligibility & Documents */}
                    <div className="lg:col-span-2 space-y-10 sm:space-y-12 md:space-y-16">

                        {/* Eligibility */}
                        <section>
                            <h2 ClassName="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6 flex items-center gap-2">
                                <span className="w-6 h-0.5 sm:w-8 sm:h-1 bg-blue-600 inline-block"></span>
                                Eligibility Criteria
                            </h2>
                            <ul className="space-y-3 sm:space-y-4">
                                {eligibilityCriteria.map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 sm:gap-3 text-slate-700 leading-relaxed text-sm sm:text-base">
                                        <Check className="text-green-600 mt-1 shrink-0 w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Documents - Professional List */}
                        <section>
                            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6 flex items-center gap-2">
                                <span className="w-6 h-0.5 sm:w-8 sm:h-1 bg-blue-600 inline-block"></span>
                                Required Documents
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-2 sm:gap-y-3">
                                {requiredDocuments.map((doc, i) => (
                                    <div key={i} className="flex items-center gap-2 sm:gap-3 py-2 border-b border-gray-100">
                                        <FileText className="text-slate-400 w-4 h-4 flex-shrink-0" />
                                        <span className="text-slate-700 text-xs sm:text-sm">{doc}</span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Right Column: Steps & Contact */}
                    <div className="space-y-8 sm:space-y-10 md:space-y-12">
                        {/* Admission Steps */}
                        <div className="bg-slate-50 p-5 sm:p-6 md:p-8 border border-slate-200 rounded-sm">
                            <h3 className="text-lg sm:text-xl font-bold mb-5 sm:mb-6 text-slate-900">Process Flow</h3>
                            <div className="space-y-6 sm:space-y-8">
                                {admissionProcess.map((item, i) => (
                                    <div key={i} className="flex gap-3 sm:gap-4 relative">
                                        {i !== admissionProcess.length - 1 && (
                                            <div className="absolute left-3 sm:left-4 top-9 sm:top-10 w-0.5 h-8 sm:h-10 bg-gray-200"></div>
                                        )}
                                        <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-white border-2 border-blue-600 flex items-center justify-center shrink-0 z-10">
                                            <span className="text-[10px] sm:text-xs font-bold text-blue-700">{item.step}</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-800 leading-tight text-sm sm:text-base">{item.title}</h4>
                                            <p className="text-xs sm:text-sm text-slate-600 mt-1">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Contact Helpdesk */}
                        <div className="border border-blue-100 bg-blue-50/50 p-5 sm:p-6 md:p-8 rounded-sm text-center">
                            <h3 className="font-bold text-slate-900 mb-2 text-base sm:text-lg">Need Help?</h3>
                            <p className="text-xs sm:text-sm text-slate-600 mb-5 sm:mb-6">Contact our admission helpdesk for any queries.</p>

                            <div className="space-y-3 sm:space-y-4">
                                <a href="tel:8533915030" className="flex items-center justify-center gap-2 text-blue-700 font-semibold hover:underline text-sm sm:text-base">
                                    <Phone className="w-4 h-4" /> +91 8533915030
                                </a>
                                <a href="mailto:j.seducationcollege@gmail.com" className="flex items-center justify-center gap-2 text-blue-700 font-semibold hover:underline text-xs sm:text-sm break-all">
                                    <Mail className="w-4 h-4" /> j.seducationcollege@gmail.com
                                </a>
                            </div>

                            <button className="mt-6 sm:mt-8 w-full bg-slate-900 text-white py-2.5 sm:py-3 px-4 rounded font-medium hover:bg-slate-800 transition-colors text-sm sm:text-base">
                                Download Prospectus
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            {/* Simple Footer Note */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12 border-t border-gray-100 mt-8 sm:mt-10 md:mt-12 text-center">
                <p className="text-slate-500 text-xs sm:text-sm">
                    © 2025 J.S. Education College. All rights reserved.
                    <span className="mx-2">|</span>
                    Affiliated with University Norms.
                </p>
            </div>
        </div>
    );
};

export default Admissions;