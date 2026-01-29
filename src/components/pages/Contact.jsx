import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, ArrowRight, ExternalLink, GraduationCap, Navigation } from 'lucide-react';
import { SEOHead, seoConfig } from '../seo';

// NOTE: Apni image yahan import karein
import imge from '../../assets/image.png';
const customFontStyle = {
  fontFamily: "'Neue Montreal Regular', sans-serif",
  fontWeight: 600,
  fontStyle: "normal",
};

const Contact = () => {
  const contactInfo = {
    phone: "+91 8273737248",
    email: "j.seducationcollege@gmail.com",
    address: "J.S COLLEGE OF EDUCATION, Rajpur-Chhajpur, Kandhala Budhana Road, Muzzafnagar (U.P)",
    whatsapp: "8273737248"
  };

  const whatsappLink = `https://wa.me/${contactInfo.whatsapp.replace(/\s+/g, '')}?text=Hello! I am interested in admission details.`;
  const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactInfo.address)}`;

  return (
    <div style={customFontStyle} className="min-h-screen flex items-center justify-center bg-slate-50 p-6 font-sans text-slate-800">
      {/* SEO Meta Tags */}
      <SEOHead
        title={seoConfig.contact.title}
        description={seoConfig.contact.description}
        keywords={seoConfig.contact.keywords}
        canonicalUrl={seoConfig.contact.canonicalUrl}
      />

      <div className="max-w-6xl w-full bg-white rounded-2xl shadow-sm border border-slate-200 flex flex-col md:flex-row overflow-hidden">

        {/* LEFT PANEL */}
        <div className="w-full md:w-5/12 p-10 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-100 relative bg-white">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-indigo-600"></div>

          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full text-xs font-bold tracking-wide text-blue-700 uppercase mb-6">
              <GraduationCap className="w-4 h-4" />
              Admission Office
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-3 tracking-tight">Get in Touch</h2>
            <p className="text-slate-500 text-sm leading-relaxed mb-10">
              Our admission counselors are here to help you with course details, fee structures, and campus tour bookings.
            </p>

            <div className="space-y-8">
              {/* Phone */}
              <div className="flex gap-4 group">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100 group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-300 shrink-0">
                  <Phone className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">Call for Enquiry</h3>
                  <p className="text-lg font-bold text-slate-900">{contactInfo.phone}</p>
                  <p className="text-xs text-slate-500 mt-0.5">Mon-Sat • 9am to 5pm</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4 group">
                <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center border border-emerald-100 group-hover:bg-emerald-600 group-hover:border-emerald-600 transition-all duration-300 shrink-0">
                  <Mail className="w-5 h-5 text-emerald-600 group-hover:text-white transition-colors" />
                </div>
                <div className="overflow-hidden">
                  <h3 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">Email Documents</h3>
                  <a href={`mailto:${contactInfo.email}`} className="text-base font-semibold text-slate-900 hover:text-emerald-600 transition-colors block truncate">
                    {contactInfo.email}
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">Official Response Time: 24 Hrs</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between w-full border border-green-200 bg-green-50/50 hover:bg-green-500 hover:border-green-500 text-green-700 hover:text-white px-5 py-4 rounded-xl transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5" />
                <span className="font-semibold text-sm">Chat with Admission Cell</span>
              </div>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="w-full md:w-7/12 bg-slate-50/50 p-10 flex flex-col">

          <div className="grid sm:grid-cols-2 gap-8 mb-8">
            {/* Address */}
            <div>
              <div className="flex items-center gap-2 mb-3 text-slate-900">
                <MapPin className="w-4 h-4 text-blue-600" />
                <h4 className="font-bold text-sm uppercase tracking-wide">Campus Address</h4>
              </div>
              <p className="text-sm text-slate-600 leading-6 pl-6 border-l-2 border-slate-200">
                {contactInfo.address}
              </p>
            </div>

            {/* Hours */}
            <div>
              <div className="flex items-center gap-2 mb-3 text-slate-900">
                <Clock className="w-4 h-4 text-blue-600" />
                <h4 className="font-bold text-sm uppercase tracking-wide">Visiting Hours</h4>
              </div>
              <ul className="text-sm text-slate-600 space-y-1 pl-6 border-l-2 border-slate-200">
                <li className="flex justify-between w-40"><span>Mon - Fri</span> <span className="font-medium text-slate-900">09:00 - 17:00</span></li>
                <li className="flex justify-between w-40"><span>Saturday</span> <span className="font-medium text-slate-900">09:00 - 14:00</span></li>
                <li className="flex justify-between w-40"><span>Sunday</span> <span className="text-red-500 font-medium">Closed</span></li>
              </ul>
            </div>
          </div>

          {/* MAP IMAGE SECTION */}
          <div className="flex-1 rounded-xl shadow-sm border border-slate-200 relative group overflow-hidden bg-white">

            <img
              src={imge}
              alt="Campus Location Map"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* --- RED PIN MARKER (Adjust top/left if needed) --- */}
            <div className="absolute top-[45%] left-[40%] z-20 -translate-x-1/2 -translate-y-full">
              <div className="relative flex flex-col items-center group/pin">
                <MapPin className="w-10 h-10 text-red-600 fill-red-600 drop-shadow-xl filter" />
                <span className="absolute -bottom-1 flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
                </span>
                <div className="absolute -top-8 bg-slate-900 text-white text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover/pin:opacity-100 transition-opacity whitespace-nowrap">
                  JS College
                </div>
              </div>
            </div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-300"></div>

            {/* --- COMPACT PROFESSIONAL BUTTON --- */}
            <div className="absolute bottom-5 left-0 right-0 flex justify-center z-30">
              <a
                href={googleMapsLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 bg-white/95 backdrop-blur-md border border-slate-200/60 px-5 py-2.5 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group/btn"
              >
                <div className="bg-blue-600 p-1 rounded-full text-white group-hover/btn:bg-blue-700 transition-colors">
                  <Navigation className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm font-bold text-slate-700 group-hover/btn:text-slate-900 tracking-wide">
                  Get Directions
                </span>
              </a>
            </div>
            {/* --- END BUTTON --- */}

          </div>

          <div className="mt-6 flex items-center justify-between text-xs text-slate-400">
            <span>© 2026 J.S College of Education</span>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-slate-500 font-medium">Admissions Open</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;