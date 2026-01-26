import React, { useCallback, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Users, BookOpen, Award, ArrowRight, Trophy, Star, Medal } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { ContainerStagger, GalleryGrid, GalleryGridCell } from '../cta-section-with-gallery';
const customFontStyle = {
    fontFamily: "'Neue Montreal Regular', sans-serif",
    fontWeight: 600,
    fontStyle: "normal",
};


// Images imports
import img1 from '../../assets/1.jpeg';
import img2 from '../../assets/2.jpeg';
import img3 from '../../assets/3.jpeg';
import img4 from '../../assets/4.jpeg';
import directorImg from '../../assets/director.jpeg';
// Gallery images
import g1 from '../../assets/g1.jpeg';
import g2 from '../../assets/g2.jpeg';
import g3 from '../../assets/g3.jpeg';
import g4 from '../../assets/g4.jpeg';
import g5 from '../../assets/g5.jpeg';
import g6 from '../../assets/g6.jpeg';


const Home = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000, stopOnInteraction: false })]);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on('select', onSelect);
        return () => {
            emblaApi.off('select', onSelect);
        };
    }, [emblaApi, onSelect]);
    const images = [img1, img2, img3, img4];
    const galleryImages = [img1, img2, img3, img4, g1, g2, g3, g4, g5, g6];

    // Stats Section Animation (Har baar upar aane wala effect)
    const statsVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };





    return (
        <div className="bg-white overflow-hidden">
            {/* 1. HERO SECTION */}
            <section className="relative h-[400px] sm:h-[500px] md:h-[550px] lg:h-[600px] flex items-center">
                <div className="absolute inset-0 z-0 bg-gray-900" ref={emblaRef}>
                    <div className="flex h-full">
                        {images.map((img, index) => (
                            <div className="flex-[0_0_100%] min-w-0 relative h-full" key={index}>
                                <img src={img} alt="Campus" className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="absolute inset-0 z-10 bg-black/50"></div>
                <div className="container mx-auto px-3 sm:px-4 relative z-20 text-white text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-1xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
                        J.S. College of Education
                    </motion.h1>
                    <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-blue-100 italic px-2">Rajpur-Chhajpur, Kandhala Budhana Road, Muzzafarnagar</p>
                    <Link to="/admissions" className="px-6 py-2.5 sm:px-8 sm:py-3 bg-amber-500 hover:bg-amber-600 rounded-lg font-bold transition-all inline-block text-sm sm:text-base">Admission Now</Link>
                </div>
            </section>

            {/* 2. STATS SECTION - Updated viewport for repeating animation */}
            <section className="relative z-30 -mt-10 sm:-mt-12 md:-mt-16 px-3 sm:px-4">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    // once: false karne se ye harr baar scroll karne par animate hoga
                    // amount: 0.1 ka matlab hai jab 10% section dikhega tab animation start hogi
                    viewport={{ once: false, amount: 0.1 }}
                    variants={statsVariants}
                    className="max-w-6xl mx-auto bg-slate-900 border-b-4 border-amber-500 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-white text-center shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                    <div className="flex flex-col items-center">
                        <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 mb-2 sm:mb-3 text-amber-400" />
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">1K+</h2>
                        <p className="text-gray-400 text-[10px] sm:text-xs md:text-sm uppercase tracking-wider">Graduates</p>
                    </div>
                    <div className="flex flex-col items-center border-l border-white/10">
                        <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 mb-2 sm:mb-3 text-amber-400" />
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">2</h2>
                        <p className="text-gray-400 text-[10px] sm:text-xs md:text-sm uppercase tracking-wider">Courses</p>
                    </div>
                    <div className="flex flex-col items-center border-l border-white/10">
                        <Trophy className="w-6 h-6 sm:w-8 sm:h-8 mb-2 sm:mb-3 text-amber-400" />
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">5</h2>
                        <p className="text-gray-400 text-[10px] sm:text-xs md:text-sm uppercase tracking-wider">Years Legacy</p>
                    </div>
                    <div className="flex flex-col items-center border-l border-white/10">
                        <Users className="w-6 h-6 sm:w-8 sm:h-8 mb-2 sm:mb-3 text-amber-400" />
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">12</h2>
                        <p className="text-gray-400 text-[10px] sm:text-xs md:text-sm uppercase tracking-wider">Subjects</p>
                    </div>
                </motion.div>
            </section>

            {/* 3. BETTER EDUCATION SECTION */}
            {/* 3. BETTER EDUCATION SECTION */}
            <section className="py-16 sm:py-20 md:py-24 bg-white relative overflow-hidden">
                {/* Decorative Blob */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

                <div className="container mx-auto px-4 sm:px-6 relative z-10">
                    <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
                        {/* Left Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.6 }}
                        >
                            {/* Curved decorative line */}
                            <div className="w-20 h-2 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full mb-6"></div>

                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-slate-900 leading-tight">
                                Better Education For A <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Brighter Future</span>
                            </h2>

                            <p className="text-slate-600 text-base sm:text-lg mb-8 leading-relaxed text-justify">
                                Established with a vision to create world-class educators, J.S. College of Education provides a
                                transformative learning environment. We focus on holistic development, combining academic
                                excellence with practical teaching skills.
                            </p>

                            <Link to="/about" className="group relative inline-flex items-center px-8 py-3 overflow-hidden text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/40">
                                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                                <span className="relative font-bold tracking-wide">Learn More</span>
                                <ArrowRight className="w-5 h-5 ml-2 relative group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>

                        {/* Right Content - Curved Cards */}
                        <div className="grid gap-6">
                            <motion.div
                                whileHover={{ scale: 1.02, translateY: -5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="bg-gradient-to-br from-blue-50 to-white p-6 sm:p-8 rounded-[2.5rem] shadow-xl border border-blue-100/50 flex items-center gap-6 group cursor-pointer relative overflow-hidden"
                            >
                                <div className="absolute right-0 top-0 w-32 h-32 bg-blue-100/30 rounded-full blur-2xl -mr-10 -mt-10 transition-transform group-hover:scale-150"></div>
                                <div className="w-16 h-16 bg-blue-600 rounded-2xl rotate-3 group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-blue-500/30 flex items-center justify-center text-white flex-shrink-0 relative z-10">
                                    <Award className="w-8 h-8" />
                                </div>
                                <div className="relative z-10">
                                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1">B.A.</h3>
                                    <p className="text-slate-600 text-sm font-medium"></p>
                                </div>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.02, translateY: -5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="bg-gradient-to-br from-amber-50 to-white p-6 sm:p-8 rounded-[2.5rem] shadow-xl border border-amber-100/50 flex items-center gap-6 group cursor-pointer relative overflow-hidden"
                            >
                                <div className="absolute right-0 top-0 w-32 h-32 bg-amber-100/30 rounded-full blur-2xl -mr-10 -mt-10 transition-transform group-hover:scale-150"></div>
                                <div className="w-16 h-16 bg-amber-500 rounded-2xl -rotate-3 group-hover:-rotate-6 transition-all duration-300 shadow-lg shadow-amber-500/30 flex items-center justify-center text-white flex-shrink-0 relative z-10">
                                    <Medal className="w-8 h-8" />
                                </div>
                                <div className="relative z-10">
                                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1"> B.Sc</h3>
                                    <p className="text-slate-600 text-sm font-medium"></p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. DIRECTOR'S MESSAGE SECTION */}
            <section className="py-12 sm:py-14 md:py-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-sky-100 relative overflow-hidden text-slate-800">
                {/* Background Decorations (Optional: for a premium look) */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

                <div className="container mx-auto px-3 sm:px-4 relative z-10">
                    <div className="grid md:grid-cols-2 gap-8 sm:gap-10 items-center max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                            className="order-2 md:order-1"
                        >
                            <span className="text-blue-600 font-bold text-xs sm:text-sm tracking-widest uppercase mb-2 block">Principal's Message</span>
                            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-slate-900">Inspiring The Next Generation</h2>
                            <p className="text-sm sm:text-base md:text-lg italic text-slate-600 mb-4 sm:mb-6 leading-relaxed">
                                "Our mission is to nurture teachers who don't just teach from books, but inspire lives.
                                At J.S. College, we provide the tools where creativity meets pedagogy."
                            </p>
                            <div>
                                <h3 className="text-lg sm:text-xl font-bold text-slate-800">Dr. Deepali Gupta</h3>
                                <p className="text-blue-600 font-medium text-xs sm:text-sm">Principal, J.S. College</p>
                                <div className="flex gap-1 mt-2">
                                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-amber-500 fill-amber-500" />)}
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: false }}
                            className="order-1 md:order-2 flex justify-center"
                        >
                            <div className="relative group">
                                {/* Border color changed to blue-400 for better match */}
                                <div className="absolute inset-0 border-2 border-blue-400 rounded-2xl transform translate-x-2 translate-y-2 sm:translate-x-3 sm:translate-y-3 transition-transform group-hover:translate-x-0 group-hover:translate-y-0" />
                                <img
                                    src={directorImg}
                                    alt="Director"
                                    className="w-[240px] h-[280px] sm:w-[280px] sm:h-[340px] md:w-[320px] md:h-[380px] object-cover rounded-2xl relative z-10 shadow-2xl"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 5. ACHIEVEMENTS CTA WITH GALLERY */}
            <section className="py-12 sm:py-16 md:py-20 bg-gray-50 overflow-hidden">
                <div className="container mx-auto px-3 sm:px-4">
                    <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
                        {/* Text Side */}
                        <div className="relative z-10">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.6 }}
                            >
                                <span className="text-[#ff4f5e] font-bold tracking-widest uppercase text-xs sm:text-sm mb-2 block">Innovate & Grow</span>
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 sm:mb-6">Scale Your Knowledge With Us</h2>
                                <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                                    College is not just about degrees; it's about evolving your mindset. We empower students with the knowledge to adapt, the skills to innovate, and the confidence to lead in a competitive world.
                                </p>

                                <motion.div
                                    className="mt-6 sm:mt-8 md:mt-10"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Link
                                        to="/contact"
                                        className="px-6 py-2.5 sm:px-8 sm:py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 hover:shadow-blue-500/30 transition-all inline-block shadow-lg text-sm sm:text-base"
                                    >
                                        Start Your Journey
                                    </Link>
                                </motion.div>
                            </motion.div>
                        </div>

                        {/* Gallery Side */}
                        <div className="relative z-10">
                            <ContainerStagger>
                                <GalleryGrid className="h-[500px] sm:h-[500px] md:h-[500px] lg:h-[500px]">
                                    <GalleryGridCell index={0}>
                                        <img src={g1} alt="Achievement 1" className="w-full h-full object-cover" />
                                    </GalleryGridCell>
                                    <GalleryGridCell index={1}>
                                        <img src={g2} alt="Achievement 2" className="w-full h-full object-cover" />
                                    </GalleryGridCell>
                                    <GalleryGridCell index={2}>
                                        <img src={g3} alt="Achievement 3" className="w-full h-full object-cover" />
                                    </GalleryGridCell>
                                    <GalleryGridCell index={3}>
                                        <img src={g4} alt="Achievement 4" className="w-full h-full object-cover" />
                                    </GalleryGridCell>
                                </GalleryGrid>
                            </ContainerStagger>
                        </div>
                    </div>
                </div>
            </section>
            {/* 6. CAMPUS GALLERY SECTION */}
            <section className="py-12 sm:py-16 md:py-20 bg-white">
                <div className="container mx-auto px-3 sm:px-4">
                    {/* Section Header */}
                    <div style={customFontStyle} className="text-center mb-8 sm:mb-10 md:mb-12">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-2 sm:mb-3">Campus Gallery</h2>
                        <div className="w-16 sm:w-20 h-1 bg-amber-500 mx-auto rounded-full"></div>
                        <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-500 px-2">Glimpses of life and activities at J.S. College</p>
                    </div>

                    {/* Carousel Container */}
                    <div className="relative group max-w-6xl mx-auto">
                        <div className="overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl" ref={emblaRef}>
                            <div className="flex">
                                {/* Gallery images with existing + g1 to g6 */}
                                {galleryImages.map((img, index) => (
                                    <div key={index} className="flex-[0_0_100%] md:flex-[0_0_50%] min-w-0 px-1 sm:px-2">
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.5 }}
                                            className="relative h-[250px] sm:h-[300px] md:h-[400px] overflow-hidden rounded-lg sm:rounded-xl"
                                        >
                                            <img
                                                src={img}
                                                alt={`Gallery ${index}`}
                                                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4 sm:p-6">
                                                <p className="text-white font-medium text-sm sm:text-base">Event Highlight {index + 1}</p>
                                            </div>
                                        </motion.div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Navigation Arrows (Optional but Professional) */}
                        <button onClick={scrollPrev} className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-1.5 sm:p-2 rounded-full shadow-lg z-10 hidden md:block transition-all border border-gray-200">
                            <ArrowRight className="rotate-180 text-slate-900 w-5 h-5 sm:w-6 sm:h-6" />
                        </button>
                        <button onClick={scrollNext} className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-1.5 sm:p-2 rounded-full shadow-lg z-10 hidden md:block transition-all border border-gray-200">
                            <ArrowRight className="text-slate-900 w-5 h-5 sm:w-6 sm:h-6" />
                        </button>
                    </div>

                    {/* Pagination Dots */}
                    <div className="flex justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-8">
                        {galleryImages.map((_, i) => (
                            <div
                                key={i}
                                className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${i === selectedIndex ? 'w-6 sm:w-8 bg-blue-600' : 'w-1.5 sm:w-2 bg-gray-300'}`}
                            />
                        ))}
                    </div>

                    {/* See More Button */}
                    <div className="mt-8 sm:mt-10 md:mt-12 text-center">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                to="/gallery"
                                className="inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-3.5 md:px-10 md:py-4 bg-[#050C44] text-white font-bold rounded-lg hover:bg-slate-800 transition-all uppercase tracking-widest text-xs sm:text-sm shadow-xl"
                            >
                                See More
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;