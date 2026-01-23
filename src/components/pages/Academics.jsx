import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, Award, ArrowRight } from 'lucide-react';

const Academics = () => {
    const academicFeatures = [
        {
            icon: <BookOpen className="w-12 h-12" />,
            title: 'Comprehensive Curriculum',
            description: 'Well-structured B.Ed. program aligned with NEP 2020 and university guidelines'
        },
        {
            icon: <Clock className="w-12 h-12" />,
            title: 'Flexible Learning',
            description: 'Balance of theoretical knowledge and practical teaching experience'
        },
        {
            icon: <Award className="w-12 h-12" />,
            title: 'Quality Assessment',
            description: 'Regular evaluations and continuous feedback for student improvement'
        }
    ];

    return (
        <div className="bg-gray-50 py-12">
            <div className="container mx-auto px-4">
                {/* Page Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Academics</h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-4"></div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Excellence in Teacher Education through Innovative Programs and Methodologies
                    </p>
                </div>

                {/* Academic Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {academicFeatures.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                        >
                            <div className="text-blue-600 mb-4 flex justify-center">{feature.icon}</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>

                {/* Quick Links */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    <Link
                        to="/academics/courses"
                        className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group"
                    >
                        <h3 className="text-2xl font-bold mb-2">Courses Offered</h3>
                        <p className="mb-4">Explore our B.Ed. program and specializations</p>
                        <div className="flex items-center gap-2 text-amber-300 group-hover:gap-3 transition-all">
                            Learn More <ArrowRight size={20} />
                        </div>
                    </Link>

                    <Link
                        to="/academics/faculty"
                        className="bg-gradient-to-br from-amber-500 to-orange-600 text-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group"
                    >
                        <h3 className="text-2xl font-bold mb-2">Our Faculty</h3>
                        <p className="mb-4">Meet our experienced and dedicated educators</p>
                        <div className="flex items-center gap-2 text-blue-100 group-hover:gap-3 transition-all">
                            View Faculty <ArrowRight size={20} />
                        </div>
                    </Link>

                    <Link
                        to="/academics/calendar"
                        className="bg-gradient-to-br from-green-600 to-teal-700 text-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group"
                    >
                        <h3 className="text-2xl font-bold mb-2">Academic Calendar</h3>
                        <p className="mb-4">View important dates and schedules</p>
                        <div className="flex items-center gap-2 text-amber-300 group-hover:gap-3 transition-all">
                            View Calendar <ArrowRight size={20} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Academics;
