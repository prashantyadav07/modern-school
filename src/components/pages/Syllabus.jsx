import React from 'react';
import { FileText, Download, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

// Import all syllabus PDFs
import baEconomics from '../../assets/B.A ECONOMICS.pdf';
import baEnglish from '../../assets/B.A ENGLISH.pdf';
import baHindi from '../../assets/B.A HINDI.pdf';
import baHistory from '../../assets/B.A HISTORY.pdf';
import baHomeScience from '../../assets/B.A HOME SCIENCE.pdf';
import baPoliticalScience from '../../assets/B.A POLITICAL SCIENCE.pdf';
import baSociology from '../../assets/B.A SOCIOLOGY.pdf';
import bscBotany from '../../assets/B.S.C BOTANY.pdf';
import bscZoology from '../../assets/B.S.C ZOOLOGY.pdf';
import bscChemistry from '../../assets/B.S.C. CHEMISTRY.pdf';
import bscPhysics from '../../assets/B.S.C. PHYSICS.pdf';
import bscMaths from '../../assets/B.Sc Maths.pdf';

const Syllabus = () => {
    const subjects = [
        { name: 'Economics', course: 'B.A.', file: baEconomics, color: 'bg-blue-50 text-blue-600', border: 'border-blue-200' },
        { name: 'English', course: 'B.A.', file: baEnglish, color: 'bg-emerald-50 text-emerald-600', border: 'border-emerald-200' },
        { name: 'Hindi', course: 'B.A.', file: baHindi, color: 'bg-orange-50 text-orange-600', border: 'border-orange-200' },
        { name: 'History', course: 'B.A.', file: baHistory, color: 'bg-amber-50 text-amber-600', border: 'border-amber-200' },
        { name: 'Home Science', course: 'B.A.', file: baHomeScience, color: 'bg-rose-50 text-rose-600', border: 'border-rose-200' },
        { name: 'Political Science', course: 'B.A.', file: baPoliticalScience, color: 'bg-indigo-50 text-indigo-600', border: 'border-indigo-200' },
        { name: 'Sociology', course: 'B.A.', file: baSociology, color: 'bg-violet-50 text-violet-600', border: 'border-violet-200' },
        { name: 'Botany', course: 'B.Sc.', file: bscBotany, color: 'bg-green-50 text-green-600', border: 'border-green-200' },
        { name: 'Zoology', course: 'B.Sc.', file: bscZoology, color: 'bg-teal-50 text-teal-600', border: 'border-teal-200' },
        { name: 'Chemistry', course: 'B.Sc.', file: bscChemistry, color: 'bg-cyan-50 text-cyan-600', border: 'border-cyan-200' },
        { name: 'Physics', course: 'B.Sc.', file: bscPhysics, color: 'bg-sky-50 text-sky-600', border: 'border-sky-200' },
        { name: 'Mathematics', course: 'B.Sc.', file: bscMaths, color: 'bg-purple-50 text-purple-600', border: 'border-purple-200' },
    ];

    return (
        <div className="min-h-screen bg-gray-50 pt-28 pb-20">
            <div className="container mx-auto px-4">
                {/* Header Section */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 font-bold text-xs uppercase tracking-widest mb-6"
                    >
                        <BookOpen size={14} />
                        Academic Syllabus
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black text-[#002147] mb-6 leading-tight"
                    >
                        Download Course <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">Syllabus</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600 text-lg"
                    >
                        Access detailed curriculum and course structures for B.A. and B.Sc. programs. Click on any subject card to download the syllabus.
                    </motion.p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {subjects.map((subject, index) => (
                        <motion.a
                            href={subject.file}
                            download={`${subject.course} ${subject.name} Syllabus.pdf`}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ y: -5 }}
                            className={`group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden cursor-pointer`}
                        >
                            <div className={`absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity ${subject.color}`}>
                                <FileText size={80} strokeWidth={1} />
                            </div>

                            <div className="relative z-10">
                                <span className={`inline-block px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider mb-4 ${subject.color}`}>
                                    {subject.course}
                                </span>

                                <h3 className="text-xl font-black text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">
                                    {subject.name}
                                </h3>

                                <div className="flex items-center gap-2 text-gray-400 text-sm font-medium group-hover:text-orange-500 transition-colors mt-8">
                                    <Download size={16} />
                                    <span>Download PDF</span>
                                </div>
                            </div>

                            {/* Hover Bottom Line */}
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                        </motion.a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Syllabus;
