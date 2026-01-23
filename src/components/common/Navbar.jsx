import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, BookOpen, Users, Home } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [scrolled, setScrolled] = useState(false);
    const [visible, setVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Set scrolled state for background color
            setScrolled(currentScrollY > 50);

            // Hide/show navbar based on scroll direction
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                // Scrolling down & past 100px
                setVisible(false);
            } else {
                // Scrolling up
                setVisible(true);
            }

            setLastScrollY(currentScrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        {
            name: 'Academics',
            path: '/academics',
            dropdown: [
                { name: 'Courses Offered', path: '/academics/courses', icon: <BookOpen size={14} /> },
                { name: 'Faculty Members', path: '/academics/faculty', icon: <Users size={14} /> },
            ]
        },
        { name: 'Admissions', path: '/admissions' },
        { name: 'Facilities', path: '/facilities' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Authenticity', path: '/authenticity' },
        { name: 'Contact Us', path: '/contact' }
    ];

    const isActive = (path) => {
        if (path === '/') return location.pathname === '/';
        return location.pathname.startsWith(path);
    };

    return (
        <nav 
            className={`sticky top-0 z-50 transition-all duration-500 
            ${scrolled || isOpen ? 'bg-[#001a35] shadow-2xl' : 'bg-[#002147]'} 
            ${(visible || isOpen) ? 'translate-y-0' : '-translate-y-full'}`}
        >
            {/* Bottom highlight line */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10"></div>

            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16 md:h-20">

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center justify-between w-full">
                        <div className="flex items-center lg:gap-8 xl:gap-12">
                            {navItems.map((item, index) => (
                                <div key={index} className="relative group">
                                    {item.dropdown ? (
                                        <div
                                            onMouseEnter={() => setActiveDropdown(index)}
                                            onMouseLeave={() => setActiveDropdown(null)}
                                            className="py-6"
                                        >
                                            <button
                                                className={`flex items-center gap-1.5 font-bold text-[13px] uppercase tracking-[0.12em] transition-all duration-300 ${isActive(item.path)
                                                    ? 'text-orange-500'
                                                    : 'text-gray-100 hover:text-orange-400'
                                                    }`}
                                            >
                                                {item.name}
                                                <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === index ? 'rotate-180' : ''}`} />
                                            </button>

                                            {/* Premium Dropdown */}
                                            <div className={`absolute top-full left-0 w-64 bg-white shadow-2xl rounded-b-lg border-t-4 border-orange-600 transition-all duration-300 transform ${activeDropdown === index ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-4'
                                                }`}>
                                                <div className="py-2">
                                                    {item.dropdown.map((subItem, subIndex) => (
                                                        <Link
                                                            key={subIndex}
                                                            to={subItem.path}
                                                            className="flex items-center gap-3 px-6 py-4 text-[#002147] font-bold text-xs hover:bg-orange-50 hover:text-orange-600 transition-all border-b border-gray-50 last:border-0"
                                                        >
                                                            <span className="text-orange-600">{subItem.icon}</span>
                                                            {subItem.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <Link
                                            to={item.path}
                                            className={`relative py-2 font-bold text-[13px] uppercase tracking-[0.12em] transition-all duration-300 ${isActive(item.path)
                                                ? 'text-orange-500 after:content-[""] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-orange-500'
                                                : 'text-gray-100 hover:text-orange-400'
                                                }`}
                                        >
                                            {item.name}
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Far Right: Inquiry Button */}
                        <div className="ml-6">
                            <Link
                                to="/inquiry"
                                className="bg-transparent border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-7 py-2.5 rounded-sm font-black text-xs uppercase tracking-[0.2em] transition-all duration-300 shadow-lg inline-flex items-center gap-2"
                            >
                                Inquiry
                            </Link>
                        </div>
                    </div>

                    {/* Mobile View: Home Link and Menu Toggle */}
                    <div className="lg:hidden flex justify-between w-full items-center">
                        <Link to="/" className="text-white font-black uppercase tracking-widest text-sm">
                            <Home size={24} />
                        </Link>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 text-white hover:text-orange-500 transition-colors"
                        >
                            {isOpen ? <X size={30} /> : <Menu size={30} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                <div className={`lg:hidden transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-[600px] opacity-100 pb-8' : 'max-h-0 opacity-0'
                    }`}>
                    <div className="space-y-1 border-t border-white/10 pt-4">
                        {navItems.map((item, index) => (
                            <div key={index}>
                                {item.dropdown ? (
                                    <div className="mb-2">
                                        <button
                                            onClick={() => setActiveDropdown(activeDropdown === index ? null : index)}
                                            className="w-full text-left px-4 py-4 font-bold text-gray-100 flex items-center justify-between border-b border-white/5"
                                        >
                                            <span className="text-xs uppercase tracking-widest">{item.name}</span>
                                            <ChevronDown size={18} className={`${activeDropdown === index ? 'rotate-180 text-orange-500' : ''}`} />
                                        </button>
                                        <div className={`transition-all duration-300 overflow-hidden bg-black/20 ${activeDropdown === index ? 'max-h-64' : 'max-h-0'}`}>
                                            {item.dropdown.map((subItem, subIndex) => (
                                                <Link
                                                    key={subIndex}
                                                    to={subItem.path}
                                                    onClick={() => setIsOpen(false)}
                                                    className="flex items-center gap-4 px-10 py-4 text-xs text-gray-300 hover:text-orange-500 border-b border-white/5"
                                                >
                                                    {subItem.icon}
                                                    {subItem.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <Link
                                        to={item.path}
                                        onClick={() => setIsOpen(false)}
                                        className={`block px-4 py-4 font-bold uppercase tracking-widest text-xs border-b border-white/5 ${isActive(item.path) ? 'text-orange-500' : 'text-gray-100'
                                            }`}
                                    >
                                        {item.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;