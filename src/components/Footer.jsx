import React from 'react';
import { FaFacebook, FaWhatsapp, FaPhone, FaEnvelope, FaGlobe, FaMapMarkerAlt, FaHeart } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa6';
import { RiInstagramFill } from 'react-icons/ri';
import { HiMail, HiPhone, HiGlobeAlt } from 'react-icons/hi';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary-900 to-secondary-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center border-2 border-white shadow-lg">
                <div className="flex flex-col items-center justify-center text-white font-bold text-xs leading-3">
                  <span>Creative</span>
                  <span>elephant</span>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold">Creative Elephant</h2>
                <p className="text-primary-200">Good Design is Good Business</p>
              </div>
            </div>
            <p className="text-primary-200 mb-6 max-w-md">
              Creative and innovative design firm building iconic design solutions through design thinking and differentiation.
            </p>
            
            {/* Social Media - Updated */}
            <div className="mb-6">
              <p className="text-primary-200 text-sm mb-4">
                <strong>Follow Our Journey</strong> - See behind-the-scenes, new projects, and design tips!
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://www.facebook.com/share/17V7yjoDKK/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#1877F2] rounded-full flex items-center justify-center hover:bg-[#166FE5] transition-all duration-300 group shadow-lg transform hover:scale-110"
                >
                  <FaFacebook className="text-white text-lg group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="https://www.tiktok.com/@creativelephantbranding" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-black transition-all duration-300 group shadow-lg transform hover:scale-110"
                >
                  <FaTiktok className="text-white text-lg group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="https://www.instagram.com/creativeelephant_za/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-br from-[#833AB4] via-[#C13584] to-[#E1306C] rounded-full flex items-center justify-center hover:opacity-90 transition-all duration-300 group shadow-lg transform hover:scale-110"
                >
                  <RiInstagramFill className="text-white text-lg group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="https://wa.me/27671119668" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center hover:bg-[#20B858] transition-all duration-300 group shadow-lg transform hover:scale-110"
                >
                  <FaWhatsapp className="text-white text-lg group-hover:scale-110 transition-transform" />
                </a>
              </div>
              <p className="text-xs text-primary-300 mt-2">
                @creativeelephant @creativelephant @creativeelephant_za
              </p>
            </div>

            {/* Review Encouragement */}
            <div className="bg-primary-800 rounded-lg p-4 border-l-4 border-accent-500 shadow-lg">
              <p className="text-sm text-primary-200 flex items-start">
                <FaHeart className="text-accent-400 mr-2 mt-1 flex-shrink-0" />
                <span>
                  <strong>Love Our Work?</strong> Help others discover us by leaving a review. 
                  Your feedback helps our fully-online small business grow! 🤝
                </span>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg text-primary-100">What We Do</h4>
            <ul className="space-y-3 text-primary-200">
              <li><a href="#services" className="hover:text-white transition-colors hover:translate-x-1 transform duration-300 flex items-center"><span className="w-2 h-2 bg-primary-400 rounded-full mr-3"></span>Brand & Design Strategy</a></li>
              <li><a href="#services" className="hover:text-white transition-colors hover:translate-x-1 transform duration-300 flex items-center"><span className="w-2 h-2 bg-secondary-400 rounded-full mr-3"></span>Brand Identity Design</a></li>
              <li><a href="#services" className="hover:text-white transition-colors hover:translate-x-1 transform duration-300 flex items-center"><span className="w-2 h-2 bg-primary-400 rounded-full mr-3"></span>Social Media Management</a></li>
              <li><a href="#services" className="hover:text-white transition-colors hover:translate-x-1 transform duration-300 flex items-center"><span className="w-2 h-2 bg-secondary-400 rounded-full mr-3"></span>Advertising & Print Design</a></li>
              <li><a href="#services" className="hover:text-white transition-colors hover:translate-x-1 transform duration-300 flex items-center"><span className="w-2 h-2 bg-primary-400 rounded-full mr-3"></span>Digital Printing Services</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-lg text-primary-100">Get In Touch</h4>
            <div className="space-y-4 text-primary-200">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center shadow-lg">
                  <HiPhone className="text-white text-sm" />
                </div>
                <span>+27 67 111 9668</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center shadow-lg">
                  <HiMail className="text-white text-sm" />
                </div>
                <span>admin@creativelephant.co.za</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center shadow-lg">
                  <HiGlobeAlt className="text-white text-sm" />
                </div>
                <span>www.creativeelephant.co.za</span>
              </div>
              
              {/* Courier Notice */}
              <div className="mt-4 p-3 bg-primary-800 rounded-lg border border-primary-700 shadow-sm">
                <p className="text-xs text-primary-300 flex items-start">
                  <FaMapMarkerAlt className="text-accent-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Local & National Courier</strong><br />
                    We deliver nationwide. Please ensure your address is correct when ordering.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-primary-300 text-sm text-center md:text-left">
              <p>© 2025 Creative Elephant. All rights reserved. | Be Exceptional</p>
              <p className="text-xs text-primary-400 mt-1">
                Developed by <a href="https://lihleguma.dev" target="_blank" rel="noopener noreferrer" className="hover:text-accent-300 transition-colors">lihleguma.dev</a>
              </p>
            </div>
            <div className="flex space-x-6 mt-2 md:mt-0 text-sm text-primary-300">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;