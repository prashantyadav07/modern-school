import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/common/Header';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Preloader from './components/common/Preloader';
import { SchemaMarkup } from './components/seo';

// Lazy loaded pages for code splitting
const Home = lazy(() => import('./components/pages/Home'));
const About = lazy(() => import('./components/pages/About'));
const Academics = lazy(() => import('./components/pages/Academics'));
const Courses = lazy(() => import('./components/pages/Courses'));
const Faculty = lazy(() => import('./components/pages/Faculty'));
const Admissions = lazy(() => import('./components/pages/Admissions'));
const Facilities = lazy(() => import('./components/pages/Facilities'));
const Gallery = lazy(() => import('./components/pages/Gallery'));
const Authenticity = lazy(() => import('./components/pages/Authenticity'));
const Inquiry = lazy(() => import('./components/pages/Inquiry'));
const Contact = lazy(() => import('./components/pages/Contact'));

const customFontStyle = {
  fontFamily: "'Neue Montreal Regular', sans-serif",
  fontWeight: 800,
  fontStyle: "normal",
};

// --- ScrollToTop Helper Component ---
// Ye component har route change par page ko top par le jata hai
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Loading fallback component for Suspense
const PageLoader = () => (
  <div className="min-h-[50vh] flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
  </div>
);

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <Router>
      {/* Global Schema Markup for SEO */}
      <SchemaMarkup />

      {/* ScrollToTop ko hamesha Router ke andar aur baki sabse upar rakhein */}
      <ScrollToTop />

      <div style={customFontStyle} className="min-h-screen flex flex-col">
        <Header />
        <Navbar />

        <main className="flex-grow">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/academics" element={<Academics />} />
              <Route path="/academics/courses" element={<Courses />} />
              <Route path="/academics/faculty" element={<Faculty />} />
              <Route path="/admissions" element={<Admissions />} />
              <Route path="/facilities" element={<Facilities />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/authenticity" element={<Authenticity />} />
              <Route path="/inquiry" element={<Inquiry />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;