import React, { useState, useEffect, useRef } from 'react';
import { Search, FileText, ChevronRight, ExternalLink, X, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { documents } from '../../config/documents';

const SearchSection = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [isFocused, setIsFocused] = useState(false);
    const navigate = useNavigate();
    const searchRef = useRef(null);

    useEffect(() => {
        if (query.trim() === '') {
            setResults([]);
            return;
        }

        const filtered = documents.filter(doc =>
            doc.title.toLowerCase().includes(query.toLowerCase()) ||
            doc.description.toLowerCase().includes(query.toLowerCase()) ||
            doc.subtitle.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filtered.slice(0, 5));
    }, [query]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setIsFocused(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleResultClick = (doc) => {
        setQuery('');
        setResults([]);
        setIsFocused(false);
        if (doc.options || doc.pdfUrl2) {
            navigate('/authenticity');
        } else {
            window.open(doc.pdfUrl, '_blank');
        }
    };

    return (
        <section className="relative -mt-10 sm:-mt-16 mb-16 px-4 z-40">
            <div className="container mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white/80 backdrop-blur-xl p-4 sm:p-6 rounded-[2.5rem] shadow-[0_30px_60px_rgba(0,0,0,0.12)] border border-white/50"
                >
                    <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center">
                        {/* Search Input Group */}
                        <div className="relative flex-1" ref={searchRef}>
                            <div className={`relative flex items-center bg-slate-100/50 transition-all duration-300 rounded-2xl group ${isFocused ? 'bg-white ring-4 ring-blue-500/10 shadow-lg' : 'hover:bg-slate-100'}`}>
                                <div className="pl-5">
                                    <Search className={`w-5 h-5 transition-colors duration-300 ${isFocused ? 'text-blue-600' : 'text-slate-400'}`} />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Search documents, fees, or notifications..."
                                    className="w-full py-5 px-4 bg-transparent outline-none text-slate-900 font-bold placeholder:text-slate-400 placeholder:font-medium"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    onFocus={() => setIsFocused(true)}
                                />
                                <AnimatePresence>
                                    {query && (
                                        <motion.button
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.8 }}
                                            onClick={() => setQuery('')}
                                            className="mr-3 p-2 bg-slate-200 hover:bg-slate-300 rounded-xl transition-colors"
                                        >
                                            <X className="w-4 h-4 text-slate-600" />
                                        </motion.button>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Dropdown Results */}
                            <AnimatePresence>
                                {isFocused && (query || results.length > 0) && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                                        className="absolute top-full left-0 right-0 mt-3 bg-white rounded-[1.5rem] shadow-2xl border border-slate-100 overflow-hidden z-50 p-2"
                                    >
                                        {results.length > 0 ? (
                                            <div className="space-y-1">
                                                {results.map((doc, index) => (
                                                    <button
                                                        key={index}
                                                        onClick={() => handleResultClick(doc)}
                                                        className="w-full flex items-center gap-4 p-4 hover:bg-slate-50 rounded-xl transition-all group text-left"
                                                    >
                                                        <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                                            <FileText className="w-5 h-5" />
                                                        </div>
                                                        <div className="flex-1">
                                                            <div className="flex items-center gap-2">
                                                                <h4 className="font-bold text-slate-900">{doc.title}</h4>
                                                                <span className="text-[10px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded font-bold uppercase tracking-wider group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">Official</span>
                                                            </div>
                                                            <p className="text-xs text-slate-500 font-medium">{doc.subtitle}</p>
                                                        </div>
                                                        <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                                                    </button>
                                                ))}
                                            </div>
                                        ) : query ? (
                                            <div className="p-10 text-center">
                                                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                                    <Search className="text-slate-300 w-6 h-6" />
                                                </div>
                                                <p className="text-slate-500 font-bold">No results found for "{query}"</p>
                                                <p className="text-slate-400 text-sm">Try searching for 'Fee' or 'Calendar'</p>
                                            </div>
                                        ) : null}

                                        <div className="mt-2 pt-2 border-t border-slate-50">
                                            <button
                                                onClick={() => navigate('/authenticity')}
                                                className="w-full py-3 text-sm font-bold text-blue-600 hover:bg-blue-50 rounded-xl transition-all flex items-center justify-center gap-2"
                                            >
                                                Browse All Documentation <ExternalLink size={14} />
                                            </button>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Inquiry Group */}
                        <div className="flex gap-3 h-full">
                            <button
                                onClick={() => navigate('/inquiry')}
                                className="flex-1 lg:flex-none flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-br from-blue-700 to-indigo-800 text-white font-bold rounded-2xl hover:shadow-[0_10px_30px_rgba(59,130,246,0.3)] hover:-translate-y-0.5 transition-all active:scale-95 group"
                            >
                                <div className="p-1 bg-white/20 rounded-lg group-hover:rotate-12 transition-transform">
                                    <Info className="w-5 h-5" />
                                </div>
                                <span className="text-lg">Inquiry</span>
                                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>

                    {/* Quick Labels */}
                    <div className="mt-5 flex flex-wrap gap-2 items-center">
                        <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest mr-2 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
                            Quick Links
                        </span>
                        {['Fee Structure', 'Academic Calendar', 'Trust Deed', 'AISHE'].map((term) => (
                            <button
                                key={term}
                                onClick={() => setQuery(term)}
                                className="text-xs font-bold text-slate-600 hover:text-blue-700 bg-slate-100/50 hover:bg-white px-4 py-2 rounded-xl transition-all border border-slate-200/50 hover:border-blue-200 hover:shadow-sm"
                            >
                                {term}
                            </button>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SearchSection;
