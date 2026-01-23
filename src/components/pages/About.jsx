import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

// Images
import heroImg from '../../assets/2.jpeg';
import directorImg from '../../assets/g1.jpeg';

const About = () => {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    return (
        <div className="bg-white text-slate-900 font-sans antialiased">

            {/* --- SECTION 1: CLEAN HERO --- */}
            <section className="relative h-[70vh] flex items-center bg-slate-50 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center w-full">
                    <motion.div {...fadeIn}>
                        <span className="text-blue-600 font-semibold tracking-widest uppercase text-sm mb-4 block">
                            J.S. College of Education
                        </span>
                        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
                            Excellence in <br /> Teacher Training.
                        </h1>
                        <p className="text-lg text-slate-600 max-w-lg mb-8 leading-relaxed">
                            Established in 2008, we are dedicated to developing skilled educators
                            through a curriculum that balances tradition and modern technology.
                        </p>
                        <div className="h-1 w-20 bg-blue-600"></div>
                    </motion.div>

                    <div className="hidden lg:block relative h-[500px]">
                        <img
                            src={heroImg}
                            alt="College Campus"
                            className="w-full h-full object-cover rounded-lg shadow-sm"
                        />
                    </div>
                </div>
            </section>

            {/* --- SECTION 2: CHAIRMAN MESSAGE --- */}
            <section className="py-24 px-6 bg-white border-b border-slate-100">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-12 gap-16 items-start">

                        <motion.div
                            {...fadeIn}
                            className="lg:col-span-4"
                        >
                            <div className="aspect-[3/4] overflow-hidden rounded-lg bg-slate-100 shadow-md">
                                <img
                                    src={directorImg}
                                    alt="Dr. J.S. Sharma"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="mt-6 text-center lg:text-left">
                                <h3 className="text-xl font-bold">Dr. J.S. Sharma</h3>
                                <p className="text-blue-600 font-medium">Chairman & Director</p>
                            </div>
                        </motion.div>

                        <motion.div
                            {...fadeIn}
                            className="lg:col-span-8 lg:pt-8"
                        >
                            <h2 className="text-3xl font-bold mb-8 text-slate-900 border-l-4 border-blue-600 pl-6">
                                Director's Message
                            </h2>
                            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                                <p>
                                    "Our mission is to empower the next generation of teachers with the
                                    knowledge and values necessary to lead in the 21st century. At J.S. College,
                                    we focus on character building and professional competence."
                                </p>
                                <p>
                                    "We believe that education is the most powerful tool for social change.
                                    Our college provides a supportive environment where students are
                                    encouraged to think critically and innovate in their teaching methods."
                                </p>
                                <p>
                                    "Since our inception in 2008, we have maintained a standard of
                                    excellence that ensures our graduates are well-prepared for the
                                    challenges of the global educational landscape."
                                </p>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* --- SECTION 3: VISION & MISSION --- */}
            <section className="py-24 px-6 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12">

                        {/* Vision Card */}
                        <motion.div
                            {...fadeIn}
                            className="bg-white p-10 rounded-xl shadow-sm border border-slate-100"
                        >
                            <div className="mb-6 inline-flex items-center justify-center w-12 h-12 bg-blue-50 text-blue-600 rounded-lg">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                To be a leading institution in teacher education, recognized for
                                academic excellence, research, and the development of ethical
                                professionals who contribute to society.
                            </p>
                        </motion.div>

                        {/* Mission Card */}
                        <motion.div
                            {...fadeIn}
                            transition={{ delay: 0.2 }}
                            className="bg-white p-10 rounded-xl shadow-sm border border-slate-100"
                        >
                            <div className="mb-6 inline-flex items-center justify-center w-12 h-12 bg-blue-50 text-blue-600 rounded-lg">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                To provide high-quality teacher training that integrates modern
                                teaching techniques with moral values, ensuring our students
                                become inspiring mentors for future generations.
                            </p>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* --- FOOTER CTA --- */}
            <div className="py-12 bg-white text-center border-t border-slate-100">
                <p className="text-slate-400 text-sm font-medium tracking-widest uppercase">
                    Recognized by NCTE & Affiliated with MSU Saharanpur
                </p>
            </div>

        </div>
    );
};

export default About;