import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

// Images
import heroImg from '../../assets/2.jpeg';
import directorImg from '../../assets/g1.jpeg';

const customFontStyle = {
    fontFamily: "'Neue Montreal Regular', sans-serif",
    fontWeight: 600,
    fontStyle: "normal",
};

const About = () => {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    // Professional High-Quality Unsplash Images (Working Links)
    const visionImg = "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800&auto=format&fit=crop";
    const missionImg = "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop";

    return (
        <div style={customFontStyle} className="bg-white text-slate-900 font-sans antialiased">

            {/* --- SECTION 1: HERO (MEDIUM TEXT & IMAGE) --- */}
            <section className="relative min-h-[40vh] sm:min-h-[50vh] flex items-center bg-slate-50 overflow-hidden py-10 sm:py-14">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 items-center w-full">
                    <motion.div {...fadeIn}>
                        <span className="text-blue-600 font-semibold tracking-widest uppercase text-xs mb-2 block">
                            J.S. College of Education
                        </span>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-4">
                            Excellence in <br className="hidden sm:block" /> Education.
                        </h1>
                        <p className="text-sm sm:text-base text-slate-600 max-w-md mb-6 leading-relaxed">
                            Established in 2021, we are dedicated to developing skilled Students
                            through a curriculum that balances tradition and modern technology.
                        </p>
                        <div className="h-1 w-16 bg-blue-600"></div>
                    </motion.div>

                    <div className="hidden lg:block relative h-[320px]">
                        <img
                            src={heroImg}
                            alt="College Campus"
                            className="w-full h-full object-cover rounded-2xl shadow-md border border-slate-200"
                        />
                    </div>
                </div>
            </section>

            {/* --- SECTION 2: DIRECTOR MESSAGE (NAME BELOW CONTENT) --- */}
            <section className="py-16 px-4 sm:px-6 bg-white border-b border-slate-100">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-12 gap-10 items-center">
                        <motion.div {...fadeIn} className="lg:col-span-4">
                            <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-slate-100 shadow-lg max-w-sm mx-auto lg:mx-0">
                                <img
                                    src={directorImg}
                                    alt="Ashok Kumar"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </motion.div>

                        <motion.div {...fadeIn} className="lg:col-span-8">
                            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-slate-900 border-l-4 border-blue-600 pl-5">
                                Director's Message
                            </h2>
                            <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base italic font-serif">
                                <p>
                                    "Our mission is to empower the next generation of students with the
                                    knowledge and values necessary to lead in the 21st century. At J.S. College,
                                    we focus on character building and professional competence."
                                </p>
                                <p>
                                    "We believe that education is the most powerful tool for social change.
                                    Our college provides a supportive environment where students are
                                    encouraged to think critically and innovate in their teaching methods."
                                </p>
                                <p>
                                    "Since our inception in 2021, we have maintained a standard of
                                    excellence that ensures our graduates are well-prepared for the
                                    challenges of the global educational landscape."
                                </p>
                            </div>

                            {/* Professional Signature Style */}
                            <div className="mt-8 pt-6 border-t border-slate-100">
                                <h3 className="text-xl font-bold text-slate-900">Ashok Kumar</h3>
                                <p className="text-blue-600 font-semibold text-sm">Chairman & Director</p>
                                <p className="text-slate-400 text-xs mt-1">J.S. College of Education</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- SECTION 3: VISION & MISSION (MEDIUM PROFESSIONAL CARDS) --- */}
            <section className="py-16 px-4 sm:px-6 bg-slate-50">
                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12">

                        {/* Vision Card */}
                        <motion.div
                            {...fadeIn}
                            className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden group hover:shadow-md transition-shadow duration-300"
                        >
                            <div className="h-48 sm:h-56 overflow-hidden">
                                <img
                                    src={visionImg}
                                    alt="Our Vision"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div className="p-6 lg:p-8">
                                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-slate-900">Our Vision</h3>
                                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                                    To be a leading institution providing quality education.
                                    We strive to nurture knowledgeable, skilled, and socially responsible graduates.

                                </p>
                            </div>
                        </motion.div>

                        {/* Mission Card */}
                        <motion.div
                            {...fadeIn}
                            transition={{ delay: 0.2 }}
                            className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden group hover:shadow-md transition-shadow duration-300"
                        >
                            <div className="h-48 sm:h-56 overflow-hidden">
                                <img
                                    src={missionImg}
                                    alt="Our Mission"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div className="p-6 lg:p-8">
                                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-slate-900">Our Mission</h3>
                                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                                    To offer education that promote academic excellence and critical thinking.
                                    We are committed to holistic development through quality teaching, research, and ethical values.

                                </p>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* --- FOOTER CTA --- */}
            <div className="py-10 bg-white text-center border-t border-slate-100 px-4">
                <p className="text-slate-400 text-xs font-medium tracking-widest uppercase">
                    Recognized by UGC & Affiliated with MSU Saharanpur
                </p>
            </div>

        </div>
    );
};

export default About;