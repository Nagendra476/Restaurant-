// App.jsx
import { Routes,Route } from 'react-router-dom';
import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Categories from './Components/Categories';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from './Components/Footer';
import AboutUs from "./Components/AboutUs";
import Careers from "./Components/Careers";
import Blog from "./Components/Blog";
import HelpCenter from "./Components/HelpCenter";
import ContactUs from "./Components/ContactUs";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import Register from "./Components/Register";
import Login from "./Components/Login";
{/*
{/*
import PopularSection from './Components/PopularSection';
import AppPromo from './Components/AppPromo';
import Footer from './Components/Footer';
*/}
function App() {
  return (
    <div className="App font-sans">
      <Navbar />
      <Hero />
      <Categories />
      <Footer />
      <div className="flex-grow">
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />   
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/help-center" element={<HelpCenter />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
      </div>
      {/*
      <PopularSection />
      <AppPromo />
      +
      */}
    </div>
  );
}

export default App;
