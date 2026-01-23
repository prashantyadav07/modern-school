import React from 'react';
import { ShieldCheck, Award, CheckCircle, FileCheck, Building2, GraduationCap, FileText, Download } from 'lucide-react';
import subjectsPDF from '../../assets/subjects.pdf';
import trustPDF from '../../assets/trust.pdf';
import facultyPDF from '../../assets/faculty.pdf';

const Authenticity = () => {
    const certifications = [
        {
            icon: <ShieldCheck size={40} />,
            title: "Government Recognized",
            description: "Affiliated and recognized by the State Education Board and Ministry of Education"
        },
        {
            icon: <Award size={40} />,
            title: "CBSE Affiliation",
            description: "Fully affiliated with Central Board of Secondary Education (CBSE)"
        },
        {
            icon: <FileCheck size={40} />,
            title: "ISO Certified",
            description: "ISO 9001:2015 certified for quality management in education"
        },
        {
            icon: <Building2 size={40} />,
            title: "Infrastructure Standards",
            description: "Compliant with all safety and infrastructure norms set by regulatory authorities"
        },
        {
            icon: <GraduationCap size={40} />,
            title: "Qualified Faculty",
            description: "All teachers are certified and meet the qualification standards"
        },
        {
            icon: <CheckCircle size={40} />,
            title: "Accreditations",
            description: "Accredited by multiple national and international educational bodies"
        }
    ];

    const documents = [
        {
            icon: <FileText size={40} />,
            title: "Subjects Curriculum",
            description: "Comprehensive curriculum details for all subjects offered at our institution",
            pdfUrl: subjectsPDF,
            fileName: "subjects.pdf",
            color: "from-blue-500 to-blue-600"
        },
        {
            icon: <Building2 size={40} />,
            title: "Trust Information",
            description: "Details about our trust, governance structure, and institutional framework",
            pdfUrl: trustPDF,
            fileName: "trust.pdf",
            color: "from-green-500 to-green-600"
        },
        {
            icon: <GraduationCap size={40} />,
            title: "Faculty Details",
            description: "Comprehensive information about our qualified and experienced teaching staff",
            pdfUrl: facultyPDF,
            fileName: "faculty.pdf",
            color: "from-purple-500 to-purple-600"
        }
    ];

    const handlePDFClick = (pdfUrl, fileName) => {
        window.open(pdfUrl, '_blank');
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* Hero Section */}
            <section className="relative bg-[#002147] py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#002147] via-[#003366] to-[#002147]"></div>
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 left-10 w-72 h-72 bg-orange-500 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 bg-orange-500/20 px-4 py-2 rounded-full mb-6">
                            <ShieldCheck className="text-orange-400" size={20} />
                            <span className="text-orange-400 font-semibold text-sm uppercase tracking-wider">Verified Institution</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                            Our <span className="text-orange-500">Authenticity</span> & Accreditations
                        </h1>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            We take pride in our genuine certifications, affiliations, and recognition from prestigious educational bodies. Our commitment to transparency ensures trust and excellence.
                        </p>
                    </div>
                </div>
            </section>

           

            {/* Official Documents Section */}
            <section className="py-20 bg-gradient-to-b from-white to-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-orange-500 font-bold text-sm uppercase tracking-widest">Important Documents</span>
                        <h2 className="text-3xl md:text-4xl font-black text-[#002147] mt-3 mb-4">
                            Official <span className="text-orange-500">Documents</span>
                        </h2>
                        <div className="w-20 h-1 bg-orange-500 mx-auto mb-4"></div>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Access our official documents including subjects curriculum, trust information, and faculty details
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {documents.map((doc, index) => (
                            <div
                                key={index}
                                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-orange-200 cursor-pointer"
                                onClick={() => handlePDFClick(doc.pdfUrl, doc.fileName)}
                            >
                                {/* Gradient Header */}
                                <div className={`bg-gradient-to-br ${doc.color} p-8 relative overflow-hidden`}>
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
                                    <div className="relative z-10 flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mx-auto group-hover:scale-110 transition-transform duration-300">
                                        <div className="text-white">
                                            {doc.icon}
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-[#002147] mb-3 group-hover:text-orange-500 transition-colors duration-300">
                                        {doc.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                        {doc.description}
                                    </p>

                                    {/* View/Download Button */}
                                    <div className="flex items-center gap-3">
                                        <div className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-3 rounded-lg font-bold text-sm uppercase tracking-wider group-hover:from-[#002147] group-hover:to-[#003366] transition-all duration-300 flex items-center justify-center gap-2">
                                            <FileText size={18} />
                                            <span>View PDF</span>
                                        </div>
                                        <div className="w-12 h-12 bg-gray-100 group-hover:bg-orange-500 rounded-lg flex items-center justify-center transition-all duration-300">
                                            <Download size={20} className="text-gray-600 group-hover:text-white transition-colors duration-300" />
                                        </div>
                                    </div>

                                    {/* File Info */}
                                    <div className="mt-4 pt-4 border-t border-gray-100">
                                        <div className="flex items-center justify-between text-xs text-gray-500">
                                            <span className="flex items-center gap-1">
                                                <FileCheck size={14} />
                                                PDF Document
                                            </span>
                                            <span className="font-semibold text-orange-500">{doc.fileName}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Hover Effect Border */}
                                <div className="absolute inset-0 border-2 border-transparent group-hover:border-orange-500 rounded-2xl transition-all duration-300 pointer-events-none"></div>
                            </div>
                        ))}
                    </div>

                    {/* Info Banner */}
                    <div className="mt-12 max-w-4xl mx-auto bg-blue-50 border border-blue-200 rounded-xl p-6">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                                <FileCheck className="text-white" size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-[#002147] mb-2">Document Information</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    All documents are official and verified. Click on any card to view or download the PDF. These documents provide comprehensive information about our institution's curriculum, governance, and faculty credentials.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

          

            {/* Trust Banner */}
            <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="text-center md:text-left">
                            <h3 className="text-2xl md:text-3xl font-black text-white mb-2">
                                Trusted by Parents & Students
                            </h3>
                            <p className="text-white/90">Join our family of excellence in education</p>
                        </div>
                        <a
                            href="/contact"
                            className="bg-white text-orange-600 px-8 py-4 rounded-lg font-bold text-sm uppercase tracking-wider hover:bg-[#002147] hover:text-white transition-all duration-300 shadow-lg"
                        >
                            Contact for Verification
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Authenticity;
