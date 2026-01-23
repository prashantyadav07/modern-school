import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, Phone, MapPin, Facebook, Twitter, 
  Instagram, Linkedin, ChevronRight, GraduationCap 
} from 'lucide-react';

const Footer = () => {
  // Links mapped exactly to your App.js Routes
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Contact Support', path: '/contact' },
    { name: 'Check Authenticity', path: '/authenticity' } // Added from your App.js
  ];

  const academicLinks = [
    { name: 'Our Courses', path: '/academics/courses' },
    { name: 'Faculty Members', path: '/academics/faculty' },
    { name: 'Academic Calendar', path: '/academics/calendar' },
    { name: 'Campus Facilities', path: '/facilities' },
    { name: 'Academics Overview', path: '/academics' }
  ];

  return (
    <footer className="bg-slate-900 text-slate-200 font-sans border-t-4 border-amber-500">
      
      {/* Top Section: Branding & Main Navigation */}
      <div className="container mx-auto px-6 lg:px-12 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1: College Identity */}
          <div className="space-y-6">
            <div className="flex flex-col">
              <div className="flex items-center gap-2 text-white mb-2">
                <GraduationCap size={32} className="text-amber-500" />
                <h2 className="text-2xl font-bold tracking-tight leading-none">
                  J.S. COLLEGE <br />
                  <span className="text-slate-400 text-sm font-medium tracking-wide uppercase">Of Education</span>
                </h2>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mt-4">
                Empowering future educators with excellence, integrity, and innovation. Recognized by NCTE and affiliated with Maa Shakumbhari University.
              </p>
            </div>
            
            <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
              <p className="text-xs text-amber-500 font-bold uppercase tracking-wider mb-1">Affiliated With</p>
              <p className="text-sm font-semibold text-white">Maa Shakumbhari University</p>
              <p className="text-xs text-slate-500 mt-1">College Code: 1234</p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-amber-500 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="flex items-center gap-2 text-sm text-slate-400 hover:text-amber-400 hover:translate-x-1 transition-all duration-300 group"
                  >
                    <ChevronRight size={14} className="text-slate-600 group-hover:text-amber-500 transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Academics */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 relative inline-block">
              Academics
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-amber-500 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {academicLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="flex items-center gap-2 text-sm text-slate-400 hover:text-amber-400 hover:translate-x-1 transition-all duration-300 group"
                  >
                    <ChevronRight size={14} className="text-slate-600 group-hover:text-amber-500 transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 relative inline-block">
              Get in Touch
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-amber-500 rounded-full"></span>
            </h3>
            <div className="space-y-5">
              <div className="flex items-start gap-3 group">
                <div className="bg-slate-800 p-2 rounded text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                  <MapPin size={18} />
                </div>
                <p className="text-sm text-slate-400 leading-snug">
                  Rajpur-Chhajpur, Kandhala Road,<br />
                  Muzaffarnagar (U.P) - 251309
                </p>
              </div>
              
              <div className="flex items-center gap-3 group">
                <div className="bg-slate-800 p-2 rounded text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                  <Phone size={18} />
                </div>
                <a href="tel:+918533915030" className="text-sm text-slate-400 hover:text-white transition-colors">
                  +91 8533915030
                </a>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="bg-slate-800 p-2 rounded text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                  <Mail size={18} />
                </div>
                <a href="mailto:j.seducationcollege@gmail.com" className="text-sm text-slate-400 hover:text-white transition-colors break-all">
                  j.seducationcollege@gmail.com
                </a>
              </div>

              {/* Social Media Row */}
              <div className="flex gap-4 pt-4 mt-4 border-t border-slate-800">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="text-slate-500 hover:text-amber-400 transition-colors transform hover:scale-110">
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Legal */}
      <div className="bg-black/40 py-6 border-t border-slate-800">
        <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500 font-medium tracking-wide uppercase">
            © {new Date().getFullYear()} J.S. College of Education. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-xs font-medium text-slate-500 uppercase tracking-wider">
             {/* Note: These links are placeholders; add routes to App.js if you want them to work */}
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link to="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;