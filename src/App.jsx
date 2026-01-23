import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';

// Pages
import Home from './components/pages/Home';
import About from './components/pages/About';
import Academics from './components/pages/Academics';
import Courses from './components/pages/Courses';
import Faculty from './components/pages/Faculty';
//import Calendar from './components/pages/Calendar';
import Admissions from './components/pages/Admissions';
import Facilities from './components/pages/Facilities';
import Authenticity from './components/pages/Authenticity';
import Contact from './components/pages/Contact';

function App() {
  return (
    <Router>
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
            <Route path="/authenticity" element={<Authenticity />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
