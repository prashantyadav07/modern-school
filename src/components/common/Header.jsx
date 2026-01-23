import React from 'react';
import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';
import collegeLogo from '../../assets/college1.png';

const Header = () => {
    return (
        <header className="w-full font-sans">
            {/* 1. Top Utility Bar - Dark Blue */}
            <div className="bg-[#002147] text-white py-2 px-4 border-b border-blue-800">
                <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center text-[13px] font-medium">
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-1.5 hover:text-orange-400 transition-colors">
                            <MapPin className="w-4 h-4 text-orange-400" />
                            <span>Rajpur-Chhajpur, Kandhala Budhana Road, Muzzafnagar (U.P)</span>
                        </div>
                        <div className="hidden md:flex items-center gap-1.5 border-l border-blue-700 pl-6">
                            <Clock className="w-4 h-4 text-orange-400" />
                            <span>Timing: 09:00 AM - 04:00 PM</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <a href="#" className="hover:text-orange-400 transition-colors"><Facebook className="w-4 h-4" /></a>
                        <a href="#" className="hover:text-orange-400 transition-colors"><Instagram className="w-4 h-4" /></a>
                        <a href="#" className="hover:text-orange-400 transition-colors"><Twitter className="w-4 h-4" /></a>
                    </div>
                </div>
            </div>

            {/* 2. Main Branding Area */}
            <div className="bg-white py-3 px-4 shadow-sm relative overflow-hidden"> 
                <div className="max-w-7xl mx-auto relative">
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-4 pb-2"> {/* Added pb-2 to prevent visual crowding */}

                        {/* Left: Logo & College Name */}
                        <div className="flex items-center gap-5 text-center lg:text-left">
                            <img
                                src={collegeLogo}
                                alt="College Logo"
                                className="h-20 w-20 md:h-24 md:w-24 object-contain drop-shadow-sm"
                            />
                            <div className="flex flex-col">
                                <h1 className="text-2xl md:text-3xl font-extrabold text-[#002147] tracking-tight leading-tight whitespace-nowrap">
                                    J.S. COLLEGE OF EDUCATION
                                </h1>
                                <div className="flex flex-col mt-1">
                                    <span className="text-orange-600 font-bold text-sm md:text-base uppercase tracking-wider">
                                        Affiliated to Maa Shakumbhari University, Saharanpur (U.P)
                                    </span>
                                    <span className="text-gray-600 font-medium text-sm md:text-[15px]">
                                        Recognized by NCTE | A Premier Teacher Training Institute
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Right: Contact Details */}
                        <div className="flex flex-wrap justify-center items-center gap-4">
                            {/* Contact Info Group */}
                            <div className="hidden xl:flex items-center gap-6">
                                <div className="flex items-center gap-3">
                                    <div className="bg-orange-100 p-2.5 rounded-full">
                                        <Phone className="w-5 h-5 text-orange-600" />
                                    </div>
                                    <div>
                                        <p className="text-[11px] uppercase text-gray-500 font-bold leading-none mb-1">Call Us Today</p>
                                        <p className="text-lg font-bold text-[#002147] leading-none">+91 8533915030</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 border-l pl-6 border-gray-200">
                                    <div className="bg-blue-100 p-2.5 rounded-full">
                                        <Mail className="w-5 h-5 text-blue-700" />
                                    </div>
                                    <div>
                                        <p className="text-[11px] uppercase text-gray-500 font-bold leading-none mb-1">Email Address</p>
                                        <p className="text-[15px] font-bold text-[#002147] leading-none">j.seducationcollege@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* --- NEW ADDITION START: Admission Open Badge --- */}
                    {/* Positioned absolutely at bottom-right of the container */}
                    <div className="absolute -bottom-3 -right-4 md:bottom-0 md:right-0">
                         <div className="bg-red-600 text-white text-[10px] md:text-xs font-bold px-3 py-1 rounded-tl-lg shadow-md animate-pulse z-10">
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