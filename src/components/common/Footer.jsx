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
    { name: 'Contact Us', path: '/contact' },
    { name: 'Authenticity', path: '/authenticity' }
  ];

  const academicLinks = [
    { name: 'Our Courses', path: '/academics/courses' },
    { name: 'Faculty Members', path: '/academics/faculty' },
    { name: 'Campus Facilities', path: '/facilities' },
  ];

  return (
    <footer
      style={customFontStyle}
      className="relative bg-white pt-12 pb-32 px-4 md:px-8 lg:px-16 w-full overflow-hidden"
    >
      {/* Background Watermark - Original Style */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none mt-7 overflow-hidden w-full">
        <div className="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] font-bold leading-none text-center opacity-10 translate-y-4
                    bg-gradient-to-b from-blue-600 to-transparent text-transparent bg-clip-text
                    w-full px-4 whitespace-nowrap select-none uppercase tracking-tighter">
          J.S. COLLEGE 
        </div>
      </div>

      {/* Main content container */}
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-2xl shadow-blue-100/50 p-6 md:p-10 border border-gray-100 relative z-10 w-full">
        {/* Grid System updated to prevent overlap */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-4">
          
          {/* Column 1: Identity - Spanning more width to prevent overlap */}
          <div className="lg:col-span-5">
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-900 whitespace-nowrap tracking-tight">
                J.S. COLLEGE Of Education
              </h2>
              {/* Blue underline for style since cap is removed */}
              <div className="h-1 w-20 bg-blue-600 mt-2 rounded-full"></div>
            </div>
            <p className="text-gray-500 mb-6 text-sm leading-relaxed max-w-sm">
              Empowering future educators with excellence and innovation. Affiliated with Maa Shakumbhari University. Dedicated to nurturing the teachers of tomorrow.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                <a key={idx} href="#" className="p-2.5 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-blue-900 font-bold mb-6 flex items-center gap-2">
              <span className="w-1.5 h-5 bg-blue-600 rounded-full"></span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleNavigate(link.path)}
                    className="flex items-center group text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-all -ml-5 group-hover:ml-0" />
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Academics */}
          <div className="lg:col-span-2">
            <h3 className="text-blue-900 font-bold mb-6 flex items-center gap-2">
              <span className="w-1.5 h-5 bg-blue-600 rounded-full"></span>
              Academics
            </h3>
            <ul className="space-y-3">
              {academicLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleNavigate(link.path)}
                    className="flex items-center group text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-all -ml-5 group-hover:ml-0" />
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="lg:col-span-3">
            <h3 className="text-blue-900 font-bold mb-6 flex items-center gap-2">
              <span className="w-1.5 h-5 bg-blue-600 rounded-full"></span>
              Contact Us
            </h3>
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                <p className="text-gray-600 text-sm leading-snug">
                  Rajpur-Chhajpur, Kandhala Road, Muzaffarnagar (U.P)
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                <a href="tel:+918533915030" className="text-gray-600 text-sm hover:text-blue-600 transition-colors font-semibold">
                  +91 8533915030
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                <a href="mailto:j.seducationcollege@gmail.com" className="text-gray-600 text-sm hover:text-blue-600 transition-colors break-all font-medium">
                  j.seducationcollege@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-gray-500 text-center md:text-left">
              © {new Date().getFullYear()} <span className="font-bold text-blue-900 uppercase tracking-tight">J.S. College of Education</span>.
            </p>
            
            <div className="flex flex-wrap justify-center gap-8">
              <button onClick={() => handleNavigate('/')} className="text-xs font-bold text-gray-400 hover:text-blue-600 transition-colors uppercase tracking-widest">
                Privacy Policy
              </button>
              <button onClick={() => handleNavigate('/')} className="text-xs font-bold text-gray-400 hover:text-blue-600 transition-colors uppercase tracking-widest">
                Terms of Use
              </button>
              <div className="text-xs text-gray-400 font-medium italic">
                Designed by <span className="text-blue-600 font-bold not-italic">Synapse Solutions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;