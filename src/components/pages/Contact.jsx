import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, ArrowRight, Info } from 'lucide-react';

const Contact = () => {
  const phoneNumber = "+918533915030";
  const emailAddress = "j.seducationcollege@gmail.com";
  const collegeAddress = "J.S COLLEGE OF EDUCATION Rajpur-Chhajpur, Kandhala Budhana Road, Muzzafnagar (U.P)";
  
  const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(collegeAddress)}`;
  const whatsappLink = `https://wa.me/${phoneNumber.replace('+', '')}?text=Hello! I am interested in J.S Education College. Please provide more information.`;

  return (
    <div className="min-h-screen bg-white">
      {/* Modern Hero Section */}
      <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:32px_32px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-block mb-4 px-4 py-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full text-sm font-medium text-blue-300">
              Admissions Open 2026
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Connect with our admissions team to start your journey in education excellence.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-16 relative z-10">
        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {/* WhatsApp Card */}
          <div className="group bg-white rounded-2xl border border-gray-200 hover:border-green-300 transition-all duration-300 overflow-hidden hover:shadow-2xl hover:shadow-green-500/10">
            <div className="p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-green-500/30">
                <MessageCircle className="w-8 h-8 text-white" strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">WhatsApp</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Quick response from our counselors. Chat with us instantly.
              </p>
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-green-600 font-semibold group-hover:gap-4 transition-all"
              >
                Start Chat
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            <div className="h-1 bg-gradient-to-r from-green-500 to-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          </div>

          {/* Phone Card */}
          <div className="group bg-white rounded-2xl border border-gray-200 hover:border-blue-300 transition-all duration-300 overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10">
            <div className="p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/30">
                <Phone className="w-8 h-8 text-white" strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Phone</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Direct assistance from our team during office hours.
              </p>
              <a 
                href={`tel:${phoneNumber}`}
                className="inline-flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-4 transition-all"
              >
                {phoneNumber}
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            <div className="h-1 bg-gradient-to-r from-blue-500 to-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          </div>

          {/* Email Card */}
          <div className="group bg-white rounded-2xl border border-gray-200 hover:border-purple-300 transition-all duration-300 overflow-hidden hover:shadow-2xl hover:shadow-purple-500/10">
            <div className="p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-purple-500/30">
                <Mail className="w-8 h-8 text-white" strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Email</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Send detailed inquiries and documents anytime.
              </p>
              <a 
                href={`mailto:${emailAddress}`}
                className="inline-flex items-center gap-2 text-purple-600 font-semibold group-hover:gap-4 transition-all"
              >
                Send Email
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            <div className="h-1 bg-gradient-to-r from-purple-500 to-purple-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          </div>
        </div>

        {/* Campus Information */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Address & Hours */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-10 border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Campus Details</h2>
            
            <div className="space-y-8">
              <div className="flex gap-5">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">Address</h3>
                  <p className="text-gray-700 leading-relaxed">
                    J.S College of Education<br />
                    Rajpur-Chhajpur, Kandhala Budhana Road<br />
                    Muzaffarnagar, Uttar Pradesh, India
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">Office Hours</h3>
                  <p className="text-gray-700">
                    <span className="font-semibold text-gray-900">Monday - Saturday</span><br />
                    09:00 AM - 05:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Helpdesk Notice */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-10 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24"></div>
            
            <div className="relative">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6">
                <Info className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Admission Helpdesk</h3>
              <p className="text-blue-100 leading-relaxed text-lg">
                For scholarship inquiries or document verification, please visit our campus office during working hours with your original documents.
              </p>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mb-20">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden">
            <div className="p-12 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-teal-500/50">
                <MapPin className="w-10 h-10 text-white" strokeWidth={2.5} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Visit Our Campus
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Get directions to our campus using Google Maps for a seamless journey
              </p>
              <a
                href={googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-teal-500/50 transition-all hover:scale-105"
              >
                <MapPin className="w-6 h-6" strokeWidth={2.5} />
                Open Google Maps
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;