import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, MessageCircle, ArrowRight, Globe, Building2, Navigation } from 'lucide-react';

const Contact = () => {
  const contactInfo = {
    phone: "+91 85339 15030",
    email: "j.seducationcollege@gmail.com",
    address: "J.S COLLEGE OF EDUCATION, Rajpur-Chhajpur, Kandhala Budhana Road, Muzzafnagar (U.P)",
    whatsapp: "8533915030"
  };

  // Improved Maps Link
  const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactInfo.address)}`;

  // WhatsApp Link
  const whatsappLink = `https://wa.me/${contactInfo.whatsapp.replace(/\s+/g, '')}?text=Hello! I am interested in J.S Education College. Please provide more information.`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* 1. HERO HEADER: Clean & Professional */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-semibold">🎓 Admissions 2026 Open</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Admissions</h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            We are here to help you build your future. Reach out to our counselors for course details, fee structure, and campus visits.
          </p>
        </div>
      </div>

      {/* 2. LEFT COLUMN: Direct Communication (2/3 width) */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">

          {/* Quick Contact Cards */}
          <div className="grid md:grid-cols-2 gap-4">

            {/* Phone Card */}
            <div className="bg-white rounded-xl shadow-md p-6 border border-blue-100 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">Call Us</h3>
                  <p className="text-sm text-gray-500 mb-2">Mon-Sat from 9am to 5pm</p>
                  <a href={`tel:${contactInfo.phone}`} className="text-blue-600 font-semibold hover:text-blue-700">
                    {contactInfo.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-xl shadow-md p-6 border border-blue-100 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
                  <p className="text-sm text-gray-500 mb-2">Send documents & queries</p>
                  <a
                    href="mailto:j.seducationcollege@gmail.com"
                    className="text-green-600 font-semibold hover:text-green-700 break-all cursor-pointer"
                    onClick={(e) => {
                      window.location.href = 'mailto:j.seducationcollege@gmail.com';
                    }}
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* WhatsApp Large Card */}
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl shadow-lg p-8 text-white">
            <div className="flex items-start gap-4">
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                <MessageCircle className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">Chat on WhatsApp</h3>
                <p className="text-green-50 mb-4">
                  Get instant replies about admission criteria, scholarship eligibility, and seat availability directly from our admissions team.
                </p>
                <Link
                  to="/inquiry"
                  className="inline-flex items-center gap-2 bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  Start Chat
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* FAQ / Info Banner */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
            <div className="flex items-start gap-3">
              <Building2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-amber-900 mb-1">Visiting the Campus?</h4>
                <p className="text-amber-800 text-sm">
                  Please bring your original marksheets and ID proof if you are visiting for document verification or admission counseling.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* 3. RIGHT COLUMN: Location & Hours (1/3 width) */}
        <div className="space-y-6">

          {/* Location Card */}
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-indigo-100 p-2 rounded-lg">
                <MapPin className="w-5 h-5 text-indigo-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Campus Location</h3>
            </div>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              {contactInfo.address}
            </p>

            <div className="border-t border-gray-200 pt-4 mb-4">
              <div className="flex items-center gap-3 mb-2">
                <Clock className="w-5 h-5 text-gray-400" />
                <h4 className="font-semibold text-gray-700">Office Hours</h4>
              </div>
              <p className="text-sm text-gray-600 ml-8">Mon - Sat: 09:00 AM - 05:00 PM</p>
              <p className="text-sm text-red-600 ml-8 font-medium">Sunday Closed</p>
            </div>

            {/* Map Action */}
            <a
              href={googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-indigo-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              <Navigation className="w-5 h-5" />
              Get Directions
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;