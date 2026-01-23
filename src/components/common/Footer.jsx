import React from 'react';
import { Link } from 'react-router-dom';
import {
  Mail, Phone, MapPin, Facebook, Twitter,
  Instagram, Linkedin, ChevronRight, GraduationCap
} from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Authenticity', path: '/authenticity' }
  ];

  const academicLinks = [
    { name: 'Our Courses', path: '/academics/courses' },
    { name: 'Faculty Members', path: '/academics/faculty' },
    { name: 'Campus Facilities', path: '/facilities' },
  ];

  return (
    <footer className="bg-[#0f172a] text-slate-300 font-sans border-t-2 border-amber-500">
      {/* Main Section */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          
          {/* Column 1: Identity (Full width on mobile) */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <div className="flex items-center gap-2 text-white">
              <GraduationCap className="w-7 h-7 text-amber-500" />
              <h2 className="text-lg font-bold leading-tight tracking-tight">
                J.S. COLLEGE <br />
                <span className="text-amber-500 text-[10px] uppercase tracking-widest">Of Education</span>
              </h2>
            </div>
            <p className="text-xs leading-relaxed text-slate-400 max-w-xs">
              Empowering future educators with excellence and innovation. Affiliated with Maa Shakumbhari University.
            </p>
            <div className="flex gap-3 pt-2">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="hover:text-amber-500 transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold text-sm mb-4 border-l-2 border-amber-500 pl-2">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="text-[13px] hover:text-amber-400 flex items-center gap-1 transition-all group">
                    <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-amber-500" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Academics */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold text-sm mb-4 border-l-2 border-amber-500 pl-2">Academics</h3>
            <ul className="space-y-2">
              {academicLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="text-[13px] hover:text-amber-400 flex items-center gap-1 transition-all group">
                    <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-amber-500" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact (Full width on mobile to look cleaner) */}
          <div className="col-span-2 md:col-span-1 space-y-3">
            <h3 className="text-white font-semibold text-sm mb-1 border-l-2 border-amber-500 pl-2">Contact Us</h3>
            <div className="space-y-3 text-[13px]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>Rajpur-Chhajpur, Kandhala Road, Muzaffarnagar (U.P)</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <a href="tel:+918533915030" className="hover:text-white">+91 8533915030</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <a href="mailto:j.seducationcollege@gmail.com" className="hover:text-white truncate">j.seducationcollege@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-8 pt-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} J.S. College of Education. All Rights Reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0 items-center">
              <Link to="/" className="hover:text-white transition-colors">Privacy</Link>
              <Link to="/" className="hover:text-white transition-colors">Terms</Link>
              <span className="hidden md:inline">|</span>
              <span className="text-gray-500">Developed By <span className="text-blue-400 font-medium">ByteMatrix</span></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;