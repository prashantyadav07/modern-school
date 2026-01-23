import React from 'react';
import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';
import collegeLogo from '../../assets/college1.png';

const Header = () => {
    return (
        <header className="w-full font-sans">
            {/* 1. Top Utility Bar - Dark Blue */}
            <div className="hidden md:block bg-[#002147] text-white py-2 px-2 sm:px-4 border-b border-blue-800">
                <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center text-[11px] sm:text-xs md:text-[13px] font-medium gap-2">
                    <div className="flex items-center gap-2 sm:gap-4 md:gap-6 flex-wrap">
                        <div className="flex items-center gap-1 sm:gap-1.5 hover:text-orange-400 transition-colors">
                            <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-orange-400 flex-shrink-0" />
                            <span className="text-[10px] sm:text-xs md:text-[13px] leading-tight">Rajpur-Chhajpur, Kandhala Budhana Road, Muzzafnagar (U.P)</span>
                        </div>
                        <div className="hidden sm:flex items-center gap-1 sm:gap-1.5 border-l border-blue-700 pl-2 sm:pl-4 md:pl-6">
                            <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-orange-400 flex-shrink-0" />
                            <span className="text-[10px] sm:text-xs md:text-[13px]">Timing: 09:00 AM - 04:00 PM</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                        <span className="text-xs sm:text-sm font-medium">College Code: 721</span>
                    </div>
                </div>
            </div>

            {/* 2. Main Branding Area */}
            <div className="bg-white py-3 sm:py-4 px-2 sm:px-4 shadow-sm relative overflow-hidden">
                <div className="max-w-7xl mx-auto relative">
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-3 sm:gap-4 pb-2 sm:pb-3">

                        {/* Left: Logo & College Name */}
                        <div className="flex flex-row items-center gap-2 sm:gap-3 md:gap-5 text-left w-full lg:w-auto">
                            <img
                                src={collegeLogo}
                                alt="College Logo"
                                className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 object-contain drop-shadow-sm flex-shrink-0"
                            />
                            <div className="flex flex-col">
                                <h1 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-[#002147] tracking-tight leading-tight">
                                    J.S. COLLEGE OF EDUCATION
                                </h1>
                                <div className="flex flex-col mt-1">
                                    <span className="text-orange-600 font-bold text-[10px] sm:text-xs md:text-sm lg:text-base uppercase tracking-wide sm:tracking-wider">
                                        Affiliated to Maa Shakumbhari University, Saharanpur (U.P)
                                    </span>
                                    <span className="text-gray-600 font-medium text-[10px] sm:text-xs md:text-sm lg:text-[15px]">
                                        Recognized by NCTE | A Premier Teacher Training Institute
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Right: Contact Details */}
                        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4">
                            {/* Contact Info Group */}
                            <div className="hidden xl:flex items-center gap-4 lg:gap-6">
                                <div className="flex items-center gap-2 lg:gap-3">
                                    <div className="bg-orange-100 p-2 lg:p-2.5 rounded-full">
                                        <Phone className="w-4 h-4 lg:w-5 lg:h-5 text-orange-600" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] lg:text-[11px] uppercase text-gray-500 font-bold leading-none mb-1">Call Us Today</p>
                                        <p className="text-base lg:text-lg font-bold text-[#002147] leading-none">+91 8533915030</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 lg:gap-3 border-l pl-4 lg:pl-6 border-gray-200">
                                    <div className="bg-blue-100 p-2 lg:p-2.5 rounded-full">
                                        <Mail className="w-4 h-4 lg:w-5 lg:h-5 text-blue-700" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] lg:text-[11px] uppercase text-gray-500 font-bold leading-none mb-1">Email Address</p>
                                        <p className="text-sm lg:text-[15px] font-bold text-[#002147] leading-none break-all">j.seducationcollege@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* --- NEW ADDITION START: Admission Open Badge --- */}
                    {/* Positioned absolutely at bottom-right of the container */}
                    <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-4 md:bottom-0 md:right-0">
                        <div className="bg-red-600 text-white text-[9px] sm:text-[10px] md:text-xs font-bold px-2 py-1 sm:px-3 sm:py-1 rounded-tl-lg shadow-md animate-pulse z-10">
                            ADMISSION OPEN 2026-27
                        </div>
                    </div>
                    {/* --- NEW ADDITION END --- */}

                </div>
            </div>
        </header>
    );
};

export default Header;