import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, Award, ArrowRight } from 'lucide-react';
import { SEOHead, seoConfig } from '../seo';

const Academics = () => {
  const academicFeatures = [
    {
      icon: <BookOpen className="w-12 h-12 text-blue-600" />,
      title: "Comprehensive Curriculum",
      description: "Modern pedagogy with practical teaching methodologies",
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&auto=format&fit=crop"
    },
    {
      icon: <Clock className="w-12 h-12 text-blue-600" />,
      title: "Flexible Learning",
      description: "Adaptable schedules for working professionals",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&auto=format&fit=crop"
    },
    {
      icon: <Award className="w-12 h-12 text-blue-600" />,
      title: "Recognized Certification",
      description: "NCTE approved programs with quality assurance",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* SEO Meta Tags */}
      <SEOHead
        title={seoConfig.academics.title}
        description={seoConfig.academics.description}
        keywords={seoConfig.academics.keywords}
        canonicalUrl={seoConfig.academics.canonicalUrl}
      />

      {/* Page Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Academics</h1>
          <p className="text-xl text-blue-100">
            Excellence in Teacher Education through Innovative Programs and Methodologies
          </p>
        </div>
      </div>

      {/* Academic Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {academicFeatures.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-gray-200 rounded-lg p-6 hover:border-blue-600 transition-colors">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Courses Offered</h3>
              <p className="text-gray-600 mb-4">Explore our B.Ed. program and specializations</p>
              <Link to="/courses" className="text-blue-600 hover:text-blue-800 font-semibold inline-flex items-center">
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:border-blue-600 transition-colors">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Our Faculty</h3>
              <p className="text-gray-600 mb-4">Meet our experienced and dedicated educators</p>
              <Link to="/faculty" className="text-blue-600 hover:text-blue-800 font-semibold inline-flex items-center">
                View Faculty <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:border-blue-600 transition-colors">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Academic Calendar</h3>
              <p className="text-gray-600 mb-4">View important dates and schedules</p>
              <Link to="/calendar" className="text-blue-600 hover:text-blue-800 font-semibold inline-flex items-center">
                View Calendar <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academics;