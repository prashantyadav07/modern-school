import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, BookOpen, Users, Home, Search } from 'lucide-react';
import HeaderSearch from './HeaderSearch';


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
            setScrolled(currentScrollY > 100);

            // Hide/show navbar based on scroll direction
            if (currentScrollY > lastScrollY && currentScrollY > 200) {
                // Scrolling down & past 200px
                setVisible(false);
            } else {
                // Scrolling up or at top
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
                { name: 'Course Syllabus', path: '/academics/syllabus', icon: <BookOpen size={14} /> },
            ]
        },
        { name: 'Admissions', path: '/admissions' },
        { name: 'Facilities', path: '/facilities' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Public Disclosure', path: '/authenticity' },
        { name: 'Contact Us', path: '/contact' }
    ];

    const isActive = (path) => {
        if (path === '/') return location.pathname === '/';
        return location.pathname.startsWith(path);
    };

    return (
        <nav
            className={`sticky top-0 z-50 transition-all duration-500 
            ${scrolled || isOpen ? 'bg-[#002147]/95 backdrop-blur-md shadow-2xl py-1' : 'bg-[#002147] py-0'} 
            ${(visible || isOpen) ? 'translate-y-0' : '-translate-y-full'}`}
        >
            {/* Bottom highlight line */}
            <div className={`absolute bottom-0 left-0 w-full h-[1px] bg-white/10 ${scrolled ? 'opacity-0' : 'opacity-100'}`}></div>

            <div className="container mx-auto px-4 lg:px-6">
                <div className="flex justify-between items-center h-16 md:h-18 lg:h-20">



                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center justify-end flex-1 ml-4 lg:ml-6 xl:ml-8">
                        <div className="flex items-center lg:gap-3 xl:gap-8">
                            {navItems.map((item, index) => (
                                <div key={index} className="relative group">
                                    {item.dropdown ? (
                                        <div
                                            onMouseEnter={() => setActiveDropdown(index)}
                                            onMouseLeave={() => setActiveDropdown(null)}
                                            className="py-6"
                                        >
                                            <button
                                                className={`flex items-center gap-1.5 font-bold text-[11px] xl:text-[13px] uppercase tracking-[0.1em] transition-all duration-300 ${isActive(item.path)
                                                    ? 'text-orange-500'
                                                    : 'text-gray-100 hover:text-orange-400'
                                                    }`}
                                            >
                                                {item.name}
                                                <ChevronDown size={12} className={`transition-transform duration-300 ${activeDropdown === index ? 'rotate-180' : ''}`} />
                                            </button>

                                            {/* Premium Dropdown */}
                                            <div className={`absolute top-full left-1/2 -translate-x-1/2 w-64 bg-white shadow-2xl rounded-xl border-t-4 border-orange-600 transition-all duration-300 transform ${activeDropdown === index ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-4'
                                                }`}>
                                                <div className="py-2">
                                                    {item.dropdown.map((subItem, subIndex) => (
                                                        <Link
                                                            key={subIndex}
                                                            to={subItem.path}
                                                            className="flex items-center gap-3 px-6 py-4 text-[#002147] font-extrabold text-xs hover:bg-orange-50 hover:text-orange-600 transition-all border-b border-gray-50 last:border-0"
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
                                            className={`relative py-6 font-bold text-[11px] xl:text-[13px] uppercase tracking-[0.1em] transition-all duration-300 ${isActive(item.path)
                                                ? 'text-orange-500 after:content-[""] after:absolute after:bottom-4 after:left-0 after:w-full after:h-0.5 after:bg-orange-500'
                                                : 'text-gray-100 hover:text-orange-400'
                                                }`}
                                        >
                                            {item.name}
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Far Right: Search & Inquiry Button */}
                        <div className="ml-4 lg:ml-6 xl:ml-8 flex items-center gap-2 xl:gap-4">
                            <div className='w-40 xl:w-60'>
                                <HeaderSearch />
                            </div>
                            <Link
                                to="/inquiry"
                                className="bg-orange-600 border border-orange-600 text-white hover:bg-transparent hover:text-orange-500 px-3 xl:px-6 py-2.5 rounded-lg font-black text-xs uppercase tracking-wider transition-all duration-300 shadow-lg shadow-orange-900/20 inline-flex items-center gap-1.5 xl:gap-2 shrink-0"
                            >
                                Inquiry
                            </Link>
                        </div>
                    </div>

                    {/* Mobile View: Search, and Menu Toggle */}
                    <div className="lg:hidden flex justify-between w-full items-center gap-4">
                        {!scrolled && (
                            <Link to="/" className="text-white font-black uppercase tracking-widest text-sm shrink-0">
                                <Home size={24} />
                            </Link>
                        )}

                        {/* Always show search on mobile if not too small, otherwise hide label */}
                        <div className="flex-1 max-w-[240px] md:max-w-[400px]">
                            <HeaderSearch />
                        </div>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`p-2 rounded-lg transition-all ${isOpen ? 'bg-orange-500 text-white' : 'text-white hover:bg-white/10'}`}
                        >
                            {isOpen ? <X size={26} /> : <Menu size={26} />}
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