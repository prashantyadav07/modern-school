import React from 'react';
import { Library, Wifi, FlaskConical, Users, Monitor, Utensils, Bus, Award } from 'lucide-react';

const Facilities = () => {
    const facilities = [
        {
            icon: <Library className="w-12 h-12" />,
            title: 'Well-Stocked Library',
            description: 'Extensive collection of books, journals, magazines, and digital resources for comprehensive learning'
        },
        {
            icon: <Monitor className="w-12 h-12" />,
            title: 'Computer Lab',
            description: 'Modern computer lab with high-speed internet and latest software for ICT education'
        },
        {
            icon: <Wifi className="w-12 h-12" />,
            title: 'Wi-Fi Campus',
            description: 'Complete campus covered with high-speed Wi-Fi connectivity for seamless learning'
        },
        {
            icon: <FlaskConical className="w-12 h-12" />,
            title: 'Science Labs',
            description: 'Well-equipped laboratories for Physics, Chemistry, and Biology practical sessions'
        },
        {
            icon: <Users className="w-12 h-12" />,
            title: 'Smart Classrooms',
            description: 'Air-conditioned classrooms with smart boards and modern teaching aids'
        },
        {
            icon: <Award className="w-12 h-12" />,
            title: 'Seminar Hall',
            description: 'Spacious seminar hall with audio-visual facilities for workshops and events'
        },
        {
            icon: <Utensils className="w-12 h-12" />,
            title: 'Cafeteria',
            description: 'Hygienic cafeteria providing nutritious food and beverages'
        },
        {
            icon: <Bus className="w-12 h-12" />,
            title: 'Transportation',
            description: 'Safe and comfortable bus facility for students from various locations'
        }
    ];

    return (
        <div className="bg-gray-50 py-12">
            <div className="container mx-auto px-4">
                {/* Page Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Facilities</h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-4"></div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Modern infrastructure and facilities for an enriching learning experience
                    </p>
                </div>

                {/* Facilities Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-12">
                    {facilities.map((facility, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center"
                        >
                            <div className="text-blue-600 mb-4 flex justify-center">{facility.icon}</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{facility.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{facility.description}</p>
                        </div>
                    ))}
                </div>

                {/* Additional Information */}
                <div className="max-w-4xl mx-auto">
                    <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-xl shadow-xl p-8">
                        <h2 className="text-3xl font-bold mb-4">Our Commitment</h2>
                        <p className="text-lg leading-relaxed mb-4">
                            At J.S. College of Education, we believe that a conducive learning environment is essential
                            for holistic development. Our state-of-the-art facilities are designed to provide students
                            with the best resources and infrastructure for academic excellence.
                        </p>
                        <p className="text-lg leading-relaxed">
                            We continuously upgrade our facilities to keep pace with the evolving educational landscape,
                            ensuring that our students receive world-class training and practical experience.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Facilities;