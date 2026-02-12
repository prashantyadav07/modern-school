import React, { useState, useEffect, useRef } from 'react';
import { Search, FileText, ChevronRight, X, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { documents } from '../../config/documents';

const HeaderSearch = () => {
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
        <div className="flex items-center gap-2">
            {/* Compact Search Bar for Navbar */}
            <div className="relative w-full min-w-[120px] sm:min-w-[180px] md:w-64 lg:w-72" ref={searchRef}>
                <div className={`relative flex items-center transition-all duration-300 rounded-xl ${isFocused
                    ? 'bg-white shadow-xl ring-2 ring-orange-500/20'
                    : 'bg-white/10 hover:bg-white/20 border border-white/10'}`}>
                    <Search className={`ml-3 w-4 h-4 transition-colors ${isFocused ? 'text-orange-600' : 'text-gray-300'}`} />
                    <input
                        type="text"
                        placeholder="Search..."
                        className={`w-full py-1.5 sm:py-2 px-3 bg-transparent outline-none text-xs sm:text-sm font-medium transition-colors ${isFocused ? 'text-slate-800' : 'text-white'}`}
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
                                className={`mr-2 p-1 rounded-full transition-colors ${isFocused ? 'hover:bg-gray-100 text-gray-400' : 'hover:bg-white/10 text-gray-300'}`}
                            >
                                <X className="w-3 h-3" />
                            </motion.button>
                        )}
                    </AnimatePresence>
                </div>

                {/* Dropdown Results */}
                <AnimatePresence>
                    {isFocused && (query || results.length > 0) && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="absolute top-full left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:right-0 mt-2 w-[calc(100vw-40px)] sm:w-80 md:w-96 bg-white/95 backdrop-blur-md rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-gray-100 overflow-hidden z-[9999] p-1.5"
                        >
                            {results.length > 0 ? (
                                <div className="max-h-[70vh] overflow-y-auto custom-scrollbar">
                                    <div className="p-2 border-b border-gray-50 mb-1">
                                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Search Results</span>
                                    </div>
                                    {results.map((doc, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handleResultClick(doc)}
                                            className="w-full flex items-center gap-3 p-3 hover:bg-blue-50 rounded-xl transition-all group text-left border border-transparent hover:border-blue-100 mb-1"
                                        >
                                            <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-600 transition-all duration-300">
                                                <FileText className="w-4 h-4 text-blue-600 group-hover:text-white" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h4 className="text-sm font-bold text-slate-800 line-clamp-1 group-hover:text-blue-700 transition-colors">{doc.title}</h4>
                                                <p className="text-[11px] text-gray-500 line-clamp-1">{doc.subtitle}</p>
                                            </div>
                                            <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                                        </button>
                                    ))}
                                    <button
                                        onClick={() => navigate('/authenticity')}
                                        className="w-full py-3 text-xs font-bold text-blue-600 hover:bg-blue-50 transition-colors flex items-center justify-center gap-2 border-t border-gray-100 mt-2 mb-1"
                                    >
                                        Browse all official documents <ExternalLink size={12} />
                                    </button>
                                </div>
                            ) : query ? (
                                <div className="p-8 text-center bg-gray-50/50 rounded-xl m-1">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
                                        <Search className="text-gray-300 w-5 h-5" />
                                    </div>
                                    <p className="text-xs text-gray-600 font-bold">No results found for "{query}"</p>
                                    <p className="text-[10px] text-gray-400 mt-1">Try another keyword</p>
                                </div>
                            ) : (
                                <div className="p-4 text-center">
                                    <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Start typing to search docs...</p>
                                </div>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default HeaderSearch;
