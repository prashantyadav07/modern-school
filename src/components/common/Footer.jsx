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
  Youtube,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

import collegeLogo from '../../assets/logo1.png';

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

  const affiliationLinks = [
    { name: 'UGC Official', url: 'https://www.ugc.gov.in/' }, // Shortened name for better fit
    { name: 'MSU Official', url: 'https://msuniversity.ac.in/' }, // Shortened name for better fit
  ];

  return (
    <footer
      style={customFontStyle}
      className="relative bg-black-800 pt-10 pb-24 md:pb-32 px-3 md:px-8 w-full overflow-hidden"
    >
      {/* --- WATERMARK --- */}
      <div className="hidden md:flex absolute bottom-0 left-0 right-0 pointer-events-none justify-center w-full z-0">
        <h1 style={customFontStyle} className="text-[12vw] md:text-[13rem] font-bold leading-none text-black-400 opacity-[0.1] 
                        whitespace-nowrap select-none uppercase tracking-tighter transform translate-y-[10%]">
          J.S. COLLEGE
        </h1>
      </div>

      {/* --- MAIN CONTENT CARD --- */}
      <div className="relative z-10 max-w-7xl mx-auto bg-blue-950 text-white rounded-2xl shadow-xl shadow-white/5 p-6 md:p-10 border border-zinc-800">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

          {/* 1. Identity Section */}
          <div className="lg:col-span-5 text-center lg:text-left">

            {/* LOGO AND TITLE */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 mb-4">
              <img
                src={collegeLogo}
                alt="J.S. College Logo"
                className="w-20 h-20 md:w-24 md:h-24 object-contain bg-white/5 rounded-lg p-1"
              />
              <div className="mt-1">
                <h2 className="text-xl md:text-3xl font-bold tracking-tight">
                  J.S. COLLEGE OF EDUCATION
                </h2>
                <div className="h-1 w-12 bg-white rounded-full mt-2 mx-auto lg:mx-0"></div>
              </div>
            </div>

            <p className="text-zinc-400 text-xs md:text-sm leading-relaxed mb-6 max-w-md mx-auto lg:mx-0">
              Affiliated with Maa  Shakumbhari University, Saharanpur. Empowering future graduates with excellence and innovation since 2021.
            </p>

            {/* --- COMBINED SECTION: AFFILIATIONS & SOCIALS --- */}
            {/* Added flex-wrap so they sit side-by-side */}
            <div className="flex flex-col xl:flex-row gap-4 xl:items-end mb-2">

              {/* Affiliations Group */}
              <div>
                <h4 className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-2">
                </h4>
                <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                  {affiliationLinks.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-2 rounded-md border border-zinc-800 bg-zinc-900/50 text-xs text-zinc-300 hover:text-white hover:border-zinc-600 transition-all"
                    >
                      {link.name}
                      <ExternalLink className="w-3 h-3 opacity-70" />
                    </a>
                  ))}

                  {/* Divider Line (Visible on Desktop) */}
                  <div className="hidden xl:block w-px h-auto bg-zinc-800 mx-1"></div>

                  {/* Social Icons (Moved Here) */}
                  <div className="flex gap-2">
                    <a href="https://www.facebook.com/profile.php?id=100093939067263" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md border border-zinc-800 bg-zinc-900/50 hover:bg-white hover:text-black text-white transition-all duration-300 flex items-center justify-center">
                      <Facebook className="w-3.5 h-3.5" />
                    </a>
                    <a href="https://www.youtube.com/@JSCOLLEGEOFEDUCATION" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md border border-zinc-800 bg-zinc-900/50 hover:bg-white hover:text-black text-white transition-all duration-300 flex items-center justify-center">
                      <Youtube className="w-3.5 h-3.5" />
                    </a>
                    <a href="https://x.com/JSCollegeMZN" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md border border-zinc-800 bg-zinc-900/50 hover:bg-white hover:text-black text-white transition-all duration-300 flex items-center justify-center">
                      <Twitter className="w-3.5 h-3.5" />
                    </a>
                    <a href="https://www.linkedin.com/in/j-s-college-of-education-8815aa3a9/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md border border-zinc-800 bg-zinc-900/50 hover:bg-white hover:text-black text-white transition-all duration-300 flex items-center justify-center">
                      <Linkedin className="w-3.5 h-3.5" />
                    </a>
                  </div>

                </div>
              </div>

            </div>

          </div>

          {/* 2. Quick Links Section */}
          <div className="lg:col-span-4 text-center lg:text-left">
            <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-4">
              Quick Links
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

              {/* --- UPDATED ADDRESS SECTION START --- */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=J.S.+College+of+Education+Rajpur-Chhajpur+Kandhala+Road+Muzaffarnagar+(U.P)"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-zinc-400 hover:text-white transition-colors"
              >
                <MapPin className="h-4 w-4 text-white shrink-0 mt-0.5" />
                <p className="text-xs leading-snug">
                  Rajpur-Chhajpur, Kandhala Road,<br /> Muzaffarnagar (U.P)
                </p>
              </a>
              {/* --- UPDATED ADDRESS SECTION END --- */}

              <div className="flex items-center gap-3 text-zinc-400">
                <Phone className="h-4 w-4 text-white shrink-0" />
                <a href="tel:+91 8273737248" className="text-xs hover:text-white transition-colors">
                  +91 9759378701 <br />
                  +91 8273737248
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
          <p>© {new Date().getFullYear()} J.S. College of Education .  All rights reserved.</p>
          <div className="flex gap-4">
            <span>Privacy Policy</span>
            <span>Terms</span>
            <span className="flex items-center gap-1">
              Designed by <span className="text-white font-bold">Synapse Forge</span>
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;