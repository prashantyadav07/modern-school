import React, { useState, useEffect, useRef } from 'react';
import { Search, FileText, ChevronRight, X, ExternalLink, Info } from 'lucide-react';
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
        <div className="flex items-center gap-3">
            {/* Compact Search Bar */}
            <div className="relative w-48 sm:w-64 md:w-72 lg:w-80" ref={searchRef}>
                <div className={`relative flex items-center bg-gray-50 border  transition-all duration-300 rounded-xl ${isFocused ? 'border-blue-500 ring-2 ring-blue-50' : 'border-gray-800'}`}>
                    <Search className={`ml-3 w-4 h-4 ${isFocused ? 'text-blue-500' : 'text-gray-400'}`} />
                    <input
                        type="text"
                        placeholder="Search Bar"
                        className="w-full py-2 px-3 bg-transparent outline-none text-sm font-medium text-slate-700 placeholder:text-gray-400"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onFocus={() => setIsFocused(true)}
                    />
                    {query && (
                        <button
                            onClick={() => setQuery('')}
                            className="mr-2 p-1 hover:bg-gray-200 rounded-full transition-colors"
                        >
                            <X className="w-3 h-3 text-gray-500" />
                        </button>
                    )}
                </div>

                {/* Dropdown Results */}
                <AnimatePresence>
                    {isFocused && (query || results.length > 0) && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="absolute top-full left-0 right-0 mt-1 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-[100] p-1"
                        >
                            {results.length > 0 ? (
                                <div>
                                    {results.map((doc, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handleResultClick(doc)}
                                            className="w-full flex items-center gap-3 p-2 hover:bg-blue-50 rounded-lg transition-all group text-left"
                                        >
                                            <div className="p-1.5 bg-gray-50 rounded-md group-hover:bg-white">
                                                <FileText className="w-4 h-4 text-blue-600" />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="text-xs font-bold text-slate-800 line-clamp-1">{doc.title}</h4>
                                                <p className="text-[10px] text-gray-400 line-clamp-1">{doc.subtitle}</p>
                                            </div>
                                            <ChevronRight className="w-3 h-3 text-gray-300 group-hover:text-blue-500" />
                                        </button>
                                    ))}
                                    <button
                                        onClick={() => navigate('/authenticity')}
                                        className="w-full py-2 text-[10px] font-bold text-blue-600 hover:bg-blue-50 transition-colors flex items-center justify-center gap-1 border-t border-gray-50 mt-1"
                                    >
                                        View All <ExternalLink size={10} />
                                    </button>
                                </div>
                            ) : query ? (
                                <div className="p-4 text-center">
                                    <p className="text-[10px] text-gray-500 font-bold">No results found</p>
                                </div>
                            ) : null}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Compact Inquiry Button */}

        </div>
    );
};

export default HeaderSearch;
