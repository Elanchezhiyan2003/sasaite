import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Offerings from '@/pages/Offerings';
import Experience from '@/pages/Experience';
import Internship from '@/pages/Internship';
import Collaborations from '@/pages/Collaborations';
import Community from '@/pages/Community';
import BulkOrders from '@/pages/BulkOrders';
import Contact from '@/pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/offerings" element={<Offerings />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/internship" element={<Internship />} />
            <Route path="/collaborations" element={<Collaborations />} />
            <Route path="/community" element={<Community />} />
            <Route path="/bulk-orders" element={<BulkOrders />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;