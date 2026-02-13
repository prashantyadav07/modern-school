import React from 'react';
import { Library, Wifi, FlaskConical, Users, Monitor, Utensils, Bus, Award, LucideBadgeAlert, Sprout } from 'lucide-react';
import { SEOHead, seoConfig } from '../seo';
import img1 from '../../assets/1.jpeg';
import sciencelab from '../../assets/sciencelab.jpeg'
import transport from '../../assets/transport.jpeg'
import classroom from '../../assets/classroom.jpeg'
import botany from '../../assets/botany.jpeg'
import computerlab from '../../assets/computerlab.jpeg'
import seminarhall from '../../assets/seminarhall.jpeg'
import phonedis from '../../assets/phonedis.jpeg'
import libr from '../../assets/libr.jpeg'
import sport from '../../assets/sport.jpeg'
import wifi from '../../assets/wifi.jpeg'
const Facilities = () => {
    const facilities = [
        {
            icon: <Library className="w-6 h-6" />,
            title: 'Well-Stocked Library',
            description: 'Extensive collection of books, journals, and digital resources.',
            image: libr
        },
        {
            icon: <Monitor className="w-6 h-6" />,
            title: 'Computer Lab',
            description: 'Modern lab with high-speed internet and latest software.',
            image: computerlab
        },
        {
            icon: <Wifi className="w-6 h-6" />,
            title: 'Wi-Fi Campus',
            description: 'High-speed Wi-Fi connectivity for seamless learning everywhere.',
            image: wifi
        },
        {
            icon: <FlaskConical className="w-6 h-6" />,
            title: 'Science Labs',
            description: 'Well-equipped laboratories for Physics, Chemistry, and Biology.',
            image: sciencelab
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: 'Smart Classrooms',
            description: 'AC classrooms with smart boards and modern teaching aids.',
            image: classroom
        },
        {
            icon: <Award className="w-6 h-6" />,
            title: 'Seminar Hall',
            description: 'Spacious hall with audio-visual facilities for events.',
            image: seminarhall
        },
        {
            icon: <Sprout className="w-6 h-6" />,
            title: 'Sports',
            description: 'Hygienic cafeteria providing nutritious food and beverages.',
            image: sport
        },
        {
            icon: <Bus className="w-6 h-6" />,
            title: 'Transportation',
            description: 'Safe bus facility for students from various locations.',
            image: transport
        },
        {
            icon: <FlaskConical className="w-6 h-6" />,
            title: 'Botany Lab',
            description: 'Well-equipped laboratories for Physics, Chemistry, and Biology.',
            image: botany
        },
        {
            icon: <FlaskConical className="w-6 h-6" />,
            title: 'Phone Distribution in College',
            description: 'Smartphones are being distributed to the students of the college.',
            image: phonedis
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <div className="bg-gray-50 py-16">
            {/* SEO Meta Tags */}
            <SEOHead
                title={seoConfig.facilities.title}
                description={seoConfig.facilities.description}
                keywords={seoConfig.facilities.keywords}
                canonicalUrl={seoConfig.facilities.canonicalUrl}
            />

            <div className="container mx-auto px-4">
                {/* Page Header */}
                <div className="text-center mb-12">
                    <h2 className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-2">Infrastructure</h2>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Facilities</h1>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-4"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        State-of-the-art infrastructure designed for an enriching learning experience.
                    </p>
                </div>

                {/* Facilities Grid - Changed to cols-4 for smaller, compact cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
                    {facilities.map((facility, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden border border-gray-100"
                        >
                            {/* Image Section - Reduced Height */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={facility.image}
                                    alt={facility.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>
                            </div>

                            {/* Content Section - Compact Padding */}
                            <div className="p-5 relative flex-grow">
                                {/* Floating Icon - Smaller & Sleeker */}
                                <div className="absolute -top-10 right-4 bg-white p-3 rounded-lg shadow-md text-blue-600">
                                    {facility.icon}
                                </div>

                                <h3 className="text-lg font-bold text-gray-900 mb-2 mt-2">{facility.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {facility.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Information Banner - Compact Design */}
                <div className="max-w-5xl mx-auto">
                    <div className="bg-blue-900 rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
                        <div className="md:w-1/3 relative h-48 md:h-auto">
                            <img
                                src={img1}
                                alt="Campus"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-blue-900/40"></div>
                        </div>
                        <div className="md:w-2/3 p-8 text-white flex flex-col justify-center">
                            <h2 className="text-2xl font-bold mb-3">Committed to Excellence</h2>
                            <p className="text-blue-100 text-sm md:text-base leading-relaxed">
                                At J.S. College of Education, we believe a conducive environment is key to holistic development.
                                We continuously upgrade our campus to provide world-class resources for academic success.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Facilities;