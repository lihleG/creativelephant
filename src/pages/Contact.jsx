import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaGlobe, FaUpload, FaTimes, FaPaperPlane, FaMapMarkerAlt, FaHeart, FaCalendarAlt, FaGoogle, FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { HiMail, HiPhone, HiGlobeAlt } from 'react-icons/hi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
    promoEmails: false
  });
  const [files, setFiles] = useState([]);

  // Calendly Configuration
  const CALENDLY_CONFIG = {
    URL: 'https://calendly.com/quotes-creativelephant/30min'
  };

  // Business Information for Reviews and Sharing
  const BUSINESS_INFO = {
    name: 'Creative Elephant',
    googleReviewUrl: 'https://g.page/r/Cg.../review', // Replace with your actual Google Maps review URL
    website: 'https://creativeelephant.co.za',
    socialMedia: {
      twitter: 'https://twitter.com/intent/tweet',
      facebook: 'https://www.facebook.com/sharer/sharer.php',
      linkedin: 'https://www.linkedin.com/sharing/share-offsite/'
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFileUpload = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(prev => [...prev, ...selectedFiles]);
  };

  const removeFile = (index) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const openCalendly = () => {
    window.open(CALENDLY_CONFIG.URL, '_blank', 'noopener,noreferrer');
  };

  // Open Google Review
  const openGoogleReview = () => {
    const reviewUrl = BUSINESS_INFO.googleReviewUrl || 'https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID';
    window.open(reviewUrl, '_blank', 'noopener,noreferrer');
  };

  // Share on Social Media
  const shareOnSocialMedia = (platform) => {
    const shareText = `I had an amazing experience with ${BUSINESS_INFO.name}! Their design and printing services are top-notch. Check them out!`;
    const shareUrl = BUSINESS_INFO.website;
    
    let shareUrlWithParams = '';

    switch (platform) {
      case 'twitter':
        shareUrlWithParams = `${BUSINESS_INFO.socialMedia.twitter}?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
        break;
      case 'facebook':
        shareUrlWithParams = `${BUSINESS_INFO.socialMedia.facebook}?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`;
        break;
      case 'linkedin':
        shareUrlWithParams = `${BUSINESS_INFO.socialMedia.linkedin}?url=${encodeURIComponent(shareUrl)}`;
        break;
      default:
        return;
    }

    window.open(shareUrlWithParams, '_blank', 'width=600,height=400,noopener,noreferrer');
  };

  // Native Share (for mobile devices)
  const handleNativeShare = async () => {
    const shareData = {
      title: `My Experience with ${BUSINESS_INFO.name}`,
      text: `I had an amazing experience with ${BUSINESS_INFO.name}! Their design and printing services are top-notch.`,
      url: BUSINESS_INFO.website,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        setShowSocialModal(true);
      }
    } catch (error) {
      console.log('Error sharing:', error);
    }
  };

  // Social Media Modal State
  const [showSocialModal, setShowSocialModal] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 pt-20">
      {/* Social Share Modal */}
      {showSocialModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-800">Share on Social Media</h3>
              <button
                onClick={() => setShowSocialModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <FaTimes className="w-6 h-6" />
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <button
                onClick={() => shareOnSocialMedia('twitter')}
                className="flex flex-col items-center p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors"
              >
                <FaTwitter className="text-blue-500 text-2xl mb-2" />
                <span className="text-sm font-medium">Twitter</span>
              </button>
              <button
                onClick={() => shareOnSocialMedia('facebook')}
                className="flex flex-col items-center p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors"
              >
                <FaFacebook className="text-blue-600 text-2xl mb-2" />
                <span className="text-sm font-medium">Facebook</span>
              </button>
              <button
                onClick={() => shareOnSocialMedia('linkedin')}
                className="flex flex-col items-center p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors"
              >
                <FaLinkedin className="text-blue-700 text-2xl mb-2" />
                <span className="text-sm font-medium">LinkedIn</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-50 via-purple-50 to-teal-50 py-20 lg:py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Get Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">Quote</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Ready to start your project? Choose how you'd like to connect with us.
            </p>
            
            {/* Contact Method Toggle */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="#contact-form"
                className="px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center bg-gradient-to-r from-pink-600 to-purple-600 text-white"
              >
                <FaPaperPlane className="mr-3" />
                Email Quote Request
              </a>
              
              <button
                onClick={openCalendly}
                className="px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
              >
                <FaCalendarAlt className="mr-3" />
                Schedule Consultation
              </button>
            </div>

            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <FaMapMarkerAlt className="mr-2" />
              Local & National Courier Available
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div className="lg:col-span-1">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">
                  Let's Create <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">Together</span>
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-4 bg-pink-50 rounded-xl border border-pink-200">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                      <HiMail className="text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Email Us</h3>
                      <p className="text-gray-600">admin@creativelephant.co.za</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-xl border border-purple-200">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                      <HiPhone className="text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Call Us</h3>
                      <p className="text-gray-600">+27 67 111 9668</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-teal-50 rounded-xl border border-teal-200">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                      <HiGlobeAlt className="text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Online Studio</h3>
                      <p className="text-gray-600">100% Digital - No Physical Location</p>
                    </div>
                  </div>

                  {/* Calendly Quick Book */}
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-6 mt-8 shadow-sm">
                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                      <FaCalendarAlt className="text-blue-600 mr-2" />
                      Quick Consultation Booking
                    </h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Book a 30-minute call to discuss your project and get an instant quote.
                    </p>
                    <button
                      onClick={openCalendly}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
                    >
                      <FaCalendarAlt className="mr-2" />
                      View Available Times
                    </button>
                  </div>

                  {/* Courier Notice */}
                  <div className="bg-teal-50 border border-teal-200 rounded-xl p-4 mt-8 shadow-sm">
                    <p className="text-sm text-teal-800 flex items-start">
                      <FaMapMarkerAlt className="text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Courier Notice:</strong> We use local and national courier services. 
                        Please ensure your delivery address is correct when placing your order.
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-gradient-to-br from-white to-purple-50 rounded-2xl p-8 shadow-xl border border-purple-200">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-gray-800">Send Quote Request</h3>
                    <span className="text-sm text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                      Response within 24 hours
                    </span>
                  </div>
                  
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Project Type *
                        </label>
                        <select
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                          required
                        >
                          <option value="">Select a service</option>
                          <option value="branding">Brand Identity Design</option>
                          <option value="print">Print Materials</option>
                          <option value="social">Social Media</option>
                          <option value="advertising">Advertising Design</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Project Details *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows="4"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                        placeholder="Tell us about your project, timeline, and any specific requirements..."
                        required
                      ></textarea>
                    </div>

                    {/* File Upload Section */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Upload Files & Links
                      </label>
                      <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-pink-400 transition-colors duration-300 bg-gray-50">
                        <input
                          type="file"
                          multiple
                          onChange={handleFileUpload}
                          className="hidden"
                          id="file-upload"
                        />
                        <label
                          htmlFor="file-upload"
                          className="cursor-pointer bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center"
                        >
                          <FaUpload className="mr-2" />
                          Upload Documents & Images
                        </label>
                        <p className="text-sm text-gray-500 mt-2">
                          Upload your files or paste links in the message above
                        </p>
                        
                        {/* Uploaded Files List */}
                        {files.length > 0 && (
                          <div className="mt-4 text-left">
                            <p className="text-sm font-medium text-gray-700 mb-2">Uploaded Files:</p>
                            <div className="space-y-2">
                              {files.map((file, index) => (
                                <div key={index} className="flex items-center justify-between bg-white px-3 py-2 rounded-lg border">
                                  <span className="text-sm text-gray-600 truncate flex-1">{file.name}</span>
                                  <button
                                    type="button"
                                    onClick={() => removeFile(index)}
                                    className="text-red-500 hover:text-red-700 ml-2"
                                  >
                                    <FaTimes />
                                  </button>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Promotional Email Opt-in */}
                    <div className="flex items-start space-x-3 bg-pink-50 rounded-xl p-4 border border-pink-200">
                      <input
                        type="checkbox"
                        name="promoEmails"
                        checked={formData.promoEmails}
                        onChange={handleInputChange}
                        className="mt-1 rounded border-gray-300 text-pink-600 focus:ring-pink-500"
                        id="promo-emails"
                      />
                      <label htmlFor="promo-emails" className="text-sm text-gray-700">
                        Yes, I'd like to receive promotional emails about new services, special offers, 
                        and design tips from Creative Elephant. I can unsubscribe at any time.
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-semibold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
                    >
                      <FaPaperPlane className="mr-2" />
                      Get My Quote
                    </button>
                  </form>

                  {/* Alternative Calendly Option */}
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <div className="text-center">
                      <p className="text-gray-600 mb-4">Prefer to discuss your project live?</p>
                      <button
                        onClick={openCalendly}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center mx-auto"
                      >
                        <FaCalendarAlt className="mr-2" />
                        Schedule a 30-min Consultation
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Review Encouragement */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 flex items-center justify-center">
              <FaHeart className="text-red-400 mr-3" />
              Leave a Review – Help Us Prove We Exist
            </h2>
            <p className="text-xl mb-8 leading-relaxed">
              If you've ordered from us and loved it (or even just liked it), please leave us a review. 
              Not only does it make our day, it also helps new customers believe we're real humans and 
              not just a very enthusiastic AI with access to a printing press.
            </p>
            <p className="text-lg italic text-pink-100">
              Thanks for trusting us — and for supporting a fully-online small biz that runs on caffeine, 
              pixels, and your kind words.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={openGoogleReview}
                className="bg-white text-pink-700 hover:bg-pink-50 px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
              >
                <FaGoogle className="mr-2" />
                Leave a Google Review
              </button>
              <button 
                onClick={handleNativeShare}
                className="border-2 border-white text-white hover:bg-white hover:text-pink-700 px-8 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center"
              >
                <FaTwitter className="mr-2" />
                Share on Social Media
              </button>
            </div>

            {/* Additional Social Options */}
            <div className="mt-6 flex justify-center space-x-4">
              <button 
                onClick={() => shareOnSocialMedia('twitter')}
                className="p-3 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-all duration-300"
              >
                <FaTwitter className="text-white text-xl" />
              </button>
              <button 
                onClick={() => shareOnSocialMedia('facebook')}
                className="p-3 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-all duration-300"
              >
                <FaFacebook className="text-white text-xl" />
              </button>
              <button 
                onClick={() => shareOnSocialMedia('linkedin')}
                className="p-3 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-all duration-300"
              >
                <FaLinkedin className="text-white text-xl" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;