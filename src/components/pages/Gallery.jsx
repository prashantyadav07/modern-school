import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2 } from "lucide-react"; // npm i lucide-react

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


const images = [
  { id: 1, src: img1 }, { id: 2, src: img2 }, { id: 3, src: img3 },
  { id: 4, src: img4 }, { id: 5, src: img12 }, { id: 6, src: img13 },
  { id: 7, src: img14 }, { id: 8, src: img15 }, { id: 9, src: g1 },
  { id: 10, src: g2 }, { id: 11, src: g3 }, { id: 12, src: g4 },
  { id: 13, src: g5 }, { id: 14, src: g6 }, 
];

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="bg-slate-50 min-h-screen py-16 px-4 md:px-10">
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