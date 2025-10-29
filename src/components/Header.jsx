import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaFacebook, FaWhatsapp, FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa6';
import { RiInstagramFill } from 'react-icons/ri';
import logo from '../assets/logo.jpeg';
import QuoteModal from './QuoteModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-primary-100">
      <div className="container mx-auto px-6">
        {/* Top Bar - Contact Info */}
        <div className="hidden lg:flex justify-between items-center py-3 border-b border-primary-50 text-sm text-primary-700">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <FaPhone className="w-3 h-3 text-primary-500" />
              <span>+27 67 112 9459</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope className="w-3 h-3 text-primary-500" />
              <span>creativeelephant1@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-primary-700">Follow Us:</span>
            <div className="flex space-x-3">
              <a 
                href="https://www.facebook.com/share/17V7yjoDKK/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#1877F2] hover:text-[#166FE5] transition-colors"
              >
                <FaFacebook className="w-4 h-4" />
              </a>
              <a 
                href="https://www.tiktok.com/@creativelephant" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-black transition-colors"
              >
                <FaTiktok className="w-4 h-4" />
              </a>
              <a 
                href="https://www.instagram.com/creativeelephant_za/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#E4405F] hover:text-[#D82C4B] transition-colors"
              >
                <RiInstagramFill className="w-4 h-4" />
              </a>
              <a 
                href="https://wa.me/27671129459" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#25D366] hover:text-[#20B858] transition-colors"
              >
                <FaWhatsapp className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <img 
              src={logo} 
              alt="Creative Elephant Logo" 
              className="h-14 w-auto object-contain"
            />
            <div>
              <h1 className="text-2xl font-bold text-neutral-800">CreativElephant</h1>
              <p className="text-sm text-primary-600">Good Design is Good Business</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-neutral-700 hover:text-primary-600 font-medium transition-colors duration-300 relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all group-hover:w-full"></span>
            </a>
            <a href="#services" className="text-neutral-700 hover:text-primary-600 font-medium transition-colors duration-300 relative group">
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all group-hover:w-full"></span>
            </a>
            <a href="#portfolio" className="text-neutral-700 hover:text-primary-600 font-medium transition-colors duration-300 relative group">
              Our Work
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all group-hover:w-full"></span>
            </a>
            <a href="#about" className="text-neutral-700 hover:text-primary-600 font-medium transition-colors duration-300 relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all group-hover:w-full"></span>
            </a>
            <a href="#contact" className="text-neutral-700 hover:text-primary-600 font-medium transition-colors duration-300 relative group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all group-hover:w-full"></span>
            </a>
            <button 
              onClick={() => setIsQuoteModalOpen(true)}
              className="bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Quote
            </button>
          </nav>

          {/* Search Bar & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex bg-primary-50 rounded-lg overflow-hidden">
              <input 
                type="text" 
                placeholder="Search..." 
                className="bg-transparent border-none px-4 py-2 text-neutral-700 placeholder-primary-500 focus:outline-none w-48"
              />
              <button className="bg-primary-500 hover:bg-primary-600 px-4 transition-colors duration-300 text-white">
                <FaSearch className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-neutral-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-primary-100">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-neutral-700 hover:text-primary-600 font-medium py-2">Home</a>
              <a href="#services" className="text-neutral-700 hover:text-primary-600 font-medium py-2">Services</a>
              <a href="#portfolio" className="text-neutral-700 hover:text-primary-600 font-medium py-2">Our Work</a>
              <a href="#about" className="text-neutral-700 hover:text-primary-600 font-medium py-2">About</a>
              <a href="#contact" className="text-neutral-700 hover:text-primary-600 font-medium py-2">Contact</a>
              
              {/* Mobile Social Media Icons */}
              <div className="flex justify-center space-x-4 pt-4 border-t border-gray-200">
                <a 
                  href="https://www.facebook.com/share/17V7yjoDKK/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#1877F2] hover:text-[#166FE5] transition-colors"
                >
                  <FaFacebook className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.tiktok.com/@creativelephant" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-black transition-colors"
                >
                  <FaTiktok className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.instagram.com/creativeelephant_za/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#E4405F] hover:text-[#D82C4B] transition-colors"
                >
                  <RiInstagramFill className="w-5 h-5" />
                </a>
                <a 
                  href="https://wa.me/27671129459" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#25D366] hover:text-[#20B858] transition-colors"
                >
                  <FaWhatsapp className="w-5 h-5" />
                </a>
              </div>

              <div className="flex bg-primary-50 rounded-lg overflow-hidden mt-2">
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="bg-transparent border-none px-4 py-2 text-neutral-700 placeholder-primary-500 focus:outline-none flex-1"
                />
                <button className="bg-primary-500 hover:bg-primary-600 px-4 transition-colors duration-300 text-white">
                  <FaSearch className="w-4 h-4" />
                </button>
              </div>
              <button 
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsQuoteModalOpen(true);
                }}
                className="bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white px-6 py-3 rounded-lg font-medium w-full text-center mt-4"
              >
                Get Quote
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Quote Modal */}
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </header>
  );
};

export default Header;