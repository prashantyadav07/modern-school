import React, { useEffect } from 'react'; // useEffect add kiya
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'; // useLocation add kiya
import Header from './components/common/Header';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';

// Pages
import Home from './components/pages/Home';
import About from './components/pages/About';
import Academics from './components/pages/Academics';
import Courses from './components/pages/Courses';
import Faculty from './components/pages/Faculty';
// import Calendar from './components/pages/Calendar';
import Admissions from './components/pages/Admissions';
import Facilities from './components/pages/Facilities';
import Gallery from './components/pages/Gallery';
import Authenticity from './components/pages/Authenticity';
import Inquiry from './components/pages/Inquiry';
import Contact from './components/pages/Contact';

// --- ScrollToTop Helper Component ---
// Ye component har route change par page ko top par le jata hai
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      {/* ScrollToTop ko hamesha Router ke andar aur baki sabse upar rakhein */}
      <ScrollToTop />

      <div className="min-h-screen flex flex-col">
        <Header />
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/academics/courses" element={<Courses />} />
            <Route path="/academics/faculty" element={<Faculty />} />
            {/* <Route path="/academics/calendar" element={<Calendar />} /> */}
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/authenticity" element={<Authenticity />} />
            <Route path="/inquiry" element={<Inquiry />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;