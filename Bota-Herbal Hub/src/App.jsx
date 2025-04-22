
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Shop from "@/pages/Shop";
import Community from "@/pages/Community";
import Learn from "@/pages/Learn";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/community" element={<Community />} />
            <Route path="/learn" element={<Learn />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
