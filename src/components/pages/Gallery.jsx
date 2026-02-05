import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2 } from "lucide-react"; // npm i lucide-react
import { SEOHead, seoConfig } from '../seo';

// Images imports
import img1 from "../../assets/1.jpeg";
import img2 from "../../assets/2.jpeg";
import img3 from "../../assets/3.jpeg";
import img4 from "../../assets/4.jpeg";
import img12 from "../../assets/12.jpeg";
import img13 from "../../assets/13.jpeg";
import img14 from "../../assets/14.jpeg";
import img15 from "../../assets/15.jpeg";
import g1 from "../../assets/g1.jpeg";
import g2 from "../../assets/g2.jpeg";
import g3 from "../../assets/g3.jpeg";
import g4 from "../../assets/g4.jpeg";
import g5 from "../../assets/g5.jpeg";
import g6 from "../../assets/g6.jpeg";
// New images
import gimage1 from "../../assets/gimage1.jpeg";
import gimage2 from "../../assets/gimage2.jpeg";
import gimage3 from "../../assets/gimage3.jpeg";
import gimage4 from "../../assets/gimage4.jpeg";
import gimage5 from "../../assets/gimage5.jpeg";
import gimage6 from "../../assets/gimage6.jpeg";
import gimage7 from "../../assets/gimage7.jpeg";
import gimage8 from "../../assets/gimage8.jpeg";
import gimage9 from "../../assets/gimage9.jpeg";
import gimage10 from "../../assets/gimage10.jpeg";
import gimage11 from "../../assets/gimage11.jpeg";
import gimage12 from "../../assets/gimage12.jpeg";
import gimage13 from "../../assets/gimage13.jpeg";
import gimage14 from "../../assets/gimage14.jpeg";
import gimage15 from "../../assets/gimage15.jpeg";
import gimage16 from "../../assets/gimage16.jpeg";
import gimage17 from "../../assets/gimage17.jpeg";
import gimage18 from "../../assets/gimage18.jpeg";
import gimage19 from "../../assets/gimage19.jpeg";
import gimage20 from "../../assets/gimage20.jpeg";
import gimage21 from "../../assets/gimage21.jpeg";
import gimage22 from "../../assets/gimage22.jpeg";
import gimage23 from "../../assets/gimage23.jpeg";
import gimage24 from "../../assets/gimage24.jpeg";
import gimage25 from "../../assets/gimage25.jpeg";
import gimage26 from "../../assets/gimage26.jpeg";
import gimage27 from "../../assets/gimage27.jpeg";
import gimage28 from "../../assets/gimage28.jpeg";
import gimage29 from "../../assets/gimage29.jpeg";
import gimage30 from "../../assets/gimage30.jpeg";
import gimage31 from "../../assets/gimage31.jpeg";
import gimage32 from "../../assets/gimage32.jpeg";
import gimage33 from "../../assets/gimage33.jpeg";


const images = [
  { id: 1, src: img1 }, { id: 2, src: img2 }, { id: 3, src: img3 },
  { id: 4, src: img4 }, { id: 5, src: img12 }, { id: 6, src: img13 },
  { id: 7, src: img14 }, { id: 8, src: img15 }, { id: 9, src: g1 },
  { id: 10, src: g2 }, { id: 11, src: g3 }, { id: 12, src: g4 },
  { id: 13, src: g5 }, { id: 14, src: g6 },
  { id: 15, src: gimage1 }, { id: 16, src: gimage2 }, { id: 17, src: gimage3 },
  { id: 18, src: gimage4 }, { id: 19, src: gimage5 }, { id: 20, src: gimage6 },
  { id: 21, src: gimage7 }, { id: 22, src: gimage8 }, { id: 23, src: gimage9 },
  { id: 24, src: gimage10 }, { id: 25, src: gimage11 }, { id: 26, src: gimage12 },
  { id: 27, src: gimage13 }, { id: 28, src: gimage14 }, { id: 29, src: gimage15 },
  { id: 30, src: gimage16 }, { id: 31, src: gimage17 }, { id: 32, src: gimage18 },
  { id: 33, src: gimage19 }, { id: 34, src: gimage20 }, { id: 35, src: gimage21 },
  { id: 36, src: gimage22 }, { id: 37, src: gimage23 }, { id: 38, src: gimage24 },
  { id: 39, src: gimage25 }, { id: 40, src: gimage26 }, { id: 41, src: gimage27 },
  { id: 42, src: gimage28 }, { id: 43, src: gimage29 }, { id: 44, src: gimage30 },
  { id: 45, src: gimage31 }, { id: 46, src: gimage32 }, { id: 47, src: gimage33 },
];

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="bg-slate-50 min-h-screen py-16 px-4 md:px-10">
      {/* SEO Meta Tags */}
      <SEOHead
        title={seoConfig.gallery.title}
        description={seoConfig.gallery.description}
        keywords={seoConfig.gallery.keywords}
        canonicalUrl={seoConfig.gallery.canonicalUrl}
      />

      {/* --- HEADER --- */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight"
        >
          Life at <span className="text-amber-500">J.S. College</span>
        </motion.h1>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "80px" }}
          className="h-1.5 bg-amber-500 mx-auto mt-4 rounded-full"
        />
      </div>

      {/* --- MASONRY GRID --- */}
      <div className="max-w-7xl mx-auto columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
        {images.map((img, index) => (
          <motion.div
            key={img.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="relative group cursor-pointer break-inside-avoid"
            onClick={() => setSelectedImg(img)}
          >
            <div className="overflow-hidden rounded-2xl bg-white shadow-sm border border-slate-200 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-slate-300">
              <img
                src={img.src}
                alt="Gallery"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Subtle Hover Overlay */}
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/90 p-3 rounded-full shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 text-slate-800">
                  <Maximize2 size={20} />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* --- LIGHTBOX MODAL --- */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-white/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setSelectedImg(null)}
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-900 transition-colors"
              onClick={() => setSelectedImg(null)}
            >
              <X size={32} />
            </button>

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative max-w-5xl w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImg.src}
                alt="Enlarged view"
                className="max-w-full max-h-[85vh] rounded-xl shadow-2xl object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;