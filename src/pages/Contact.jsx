import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaGlobe, FaUpload, FaTimes, FaPaperPlane, FaMapMarkerAlt, FaHeart } from 'react-icons/fa';
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50 pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-pink-50 to-amber-50 py-20 lg:py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Get Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Quote</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Ready to start your project? Upload your files and we'll get back to you with a quote within 24 hours.
            </p>
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <FaMapMarkerAlt className="mr-2" />
              Local & National Courier Available
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div className="lg:col-span-1">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">
                  Let's Create <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Together</span>
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-xl border border-purple-200">
                    <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                      <HiMail className="text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Email Us</h3>
                      <p className="text-gray-600">creativeelephant1@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-pink-50 rounded-xl border border-pink-200">
                    <div className="w-12 h-12 bg-pink-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                      <HiPhone className="text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Call Us</h3>
                      <p className="text-gray-600">+27 67 112 9459</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-amber-50 rounded-xl border border-amber-200">
                    <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                      <HiGlobeAlt className="text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Online Studio</h3>
                      <p className="text-gray-600">100% Digital - No Physical Location</p>
                    </div>
                  </div>

                  {/* Courier Notice */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-8 shadow-sm">
                    <p className="text-sm text-amber-800 flex items-start">
                      <FaMapMarkerAlt className="text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
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
                <div className="bg-gradient-to-br from-white to-pink-50 rounded-2xl p-8 shadow-xl border border-pink-200">
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
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
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
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
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
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
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
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                          required
                        >
                          <option value="">Select a service</option>
                          <option value="branding">Brand Identity Design</option>
                          <option value="print">Print Materials</option>
                          <option value="website">Website Design</option>
                          <option value="social">Social Media</option>
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                        placeholder="Tell us about your project, timeline, and any specific requirements..."
                        required
                      ></textarea>
                    </div>

                    {/* File Upload Section */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Upload Files & Links
                      </label>
                      <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-purple-400 transition-colors duration-300 bg-gray-50">
                        <input
                          type="file"
                          multiple
                          onChange={handleFileUpload}
                          className="hidden"
                          id="file-upload"
                        />
                        <label
                          htmlFor="file-upload"
                          className="cursor-pointer bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center"
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
                    <div className="flex items-start space-x-3 bg-purple-50 rounded-xl p-4 border border-purple-200">
                      <input
                        type="checkbox"
                        name="promoEmails"
                        checked={formData.promoEmails}
                        onChange={handleInputChange}
                        className="mt-1 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                        id="promo-emails"
                      />
                      <label htmlFor="promo-emails" className="text-sm text-gray-700">
                        Yes, I'd like to receive promotional emails about new services, special offers, 
                        and design tips from Creative Elephant. I can unsubscribe at any time.
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
                    >
                      <FaPaperPlane className="mr-2" />
                      Get My Quote
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Review Encouragement */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
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
            <p className="text-lg italic text-purple-100">
              Thanks for trusting us — and for supporting a fully-online small biz that runs on caffeine, 
              pixels, and your kind words.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-700 hover:bg-purple-50 px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Leave a Google Review
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-purple-700 px-8 py-3 rounded-xl font-semibold transition-all duration-300">
                Share on Social Media
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;