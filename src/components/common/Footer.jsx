import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight
} from 'lucide-react';

const customFontStyle = {
  fontFamily: "'Neue Montreal Regular', sans-serif",
  fontWeight: 600,
  fontStyle: "normal",
};

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Contact', path: '/contact' },
    { name: 'Courses', path: '/academics/courses' },
    { name: 'Faculty', path: '/academics/faculty' },
  ];

  return (
    <footer
      style={customFontStyle}
      className="relative bg-black-800 pt-10 pb-24 md:pb-32 px-3 md:px-8 w-full overflow-hidden"
    >
      {/* --- WATERMARK (OUTSIDE THE CARD) --- */}
      {/* CHANGE: Added 'hidden md:flex'. 'hidden' hides it on mobile, 'md:flex' shows it on desktop */}
      <div className="hidden md:flex absolute bottom-0 left-0 right-0 pointer-events-none justify-center w-full z-0">
        <h1 className="text-[12vw] md:text-[13rem] font-bold leading-none text-black-400 opacity-[0.1] 
                        whitespace-nowrap select-none uppercase tracking-tighter transform translate-y-[10%]">
          J.S. COLLEGE
        </h1>
      </div>

      {/* --- MAIN CONTENT CARD --- */}
      <div className="relative z-10 max-w-7xl mx-auto bg-black text-white rounded-2xl shadow-xl shadow-white/5 p-6 md:p-10 border border-zinc-800">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* 1. Identity Section */}
          <div className="lg:col-span-5 text-center lg:text-left">
            <h2 className="text-xl md:text-3xl font-bold tracking-tight mb-2">
              J.S. COLLEGE OF EDUCATION <span className="text-zinc-400 font-light"></span>
            </h2>
            <div className="h-1 w-12 bg-white rounded-full mb-4 mx-auto lg:mx-0"></div>
            
            <p className="text-zinc-400 text-xs md:text-sm leading-relaxed mb-6 max-w-md mx-auto lg:mx-0">
              Affiliated with Maa Shakumbhari University. Empowering future educators with excellence and innovation since 2010.
            </p>
            
            <div className="flex justify-center lg:justify-start gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                <a key={idx} href="#" className="p-2 rounded-lg bg-zinc-900 hover:bg-white hover:text-black text-white transition-all duration-300">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* 2. Compact Links Grid */}
          <div className="hidden lg:block lg:col-span-4">
             <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-4 text-center lg:text-left">
               Quick Navigation
             </h3>
             <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
               {quickLinks.map((link, index) => (
                 <li key={index}>
                   <button
                     onClick={() => handleNavigate(link.path)}
                     className="flex items-center group text-zinc-400 hover:text-white transition-colors text-xs md:text-sm font-medium w-full lg:w-auto justify-center lg:justify-start"
                   >
                     <ArrowRight className="w-3 h-3 mr-1.5 opacity-50 group-hover:translate-x-1 transition-transform" />
                     {link.name}
                   </button>
                 </li>
               ))}
             </ul>
          </div>

          {/* 3. Contact Section */}
          <div className="lg:col-span-3 text-center lg:text-left">
            <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-4">
               Get In Touch
            </h3>
            <div className="space-y-4 flex flex-col items-center lg:items-start">
              <div className="flex items-start gap-3 text-zinc-400">
                <MapPin className="h-4 w-4 text-white shrink-0 mt-0.5" />
                <p className="text-xs leading-snug">
                  Rajpur-Chhajpur, Kandhala Road,<br/> Muzaffarnagar (U.P)
                </p>
              </div>
              <div className="flex items-center gap-3 text-zinc-400">
                <Phone className="h-4 w-4 text-white shrink-0" />
                <a href="tel:+918533915030" className="text-xs hover:text-white transition-colors">
                  +91 85339 15030
                </a>
              </div>
              <div className="flex items-center gap-3 text-zinc-400">
                <Mail className="h-4 w-4 text-white shrink-0" />
                <a href="mailto:j.seducationcollege@gmail.com" className="text-xs hover:text-white transition-colors">
                  j.seducationcollege@gmail.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-700 to-transparent my-6"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-4 text-[10px] md:text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} J.S. College. All rights reserved.</p>
          <div className="flex gap-4">
              <span>Privacy Policy</span>
              <span>Terms</span>
              <span className="flex items-center gap-1">
                Designed by <span className="text-white font-bold">Synapse Solutions</span>
              </span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;