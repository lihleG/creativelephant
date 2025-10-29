import React, { useState } from 'react';
import { FaTimes, FaUpload, FaFile, FaImage, FaPalette, FaRocket, FaCheck, FaArrowRight, FaSpinner, FaCheckCircle, FaRocket as FaRocketIcon } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

const QuoteModal = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedService, setSelectedService] = useState('');
  const [files, setFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectDetails: '',
    urgency: 'standard'
  });

  // EmailJS Configuration
  const EMAILJS_CONFIG = {
    SERVICE_ID: 'service_lnl2k4k', 
    TEMPLATE_ID: 'template_mhkuoke',
    PUBLIC_KEY: 'e0SU98VmLZjFKaV9G'
  };
  
  const services = [
    {
      id: 'branding',
      name: 'Brand Identity Design',
      icon: FaPalette,
      description: 'Logos, brand guides, business cards, stationery',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'print',
      name: 'Print Materials',
      icon: FaFile,
      description: 'Flyers, brochures, banners, business cards',
      color: 'from-blue-500 to-purple-500'
    },
    {
      id: 'digital',
      name: 'Digital Design',
      icon: FaRocket,
      description: 'Social media graphics, web design, digital ads',
      color: 'from-pink-500 to-red-500'
    },
    {
      id: 'packaging',
      name: 'Packaging & Labels',
      icon: FaImage,
      description: 'Product packaging, labels, boxes',
      color: 'from-green-500 to-blue-500'
    },
    {
      id: 'signage',
      name: 'Signage & Large Format',
      icon: FaCheck,
      description: 'Banners, vehicle wraps, store signage',
      color: 'from-amber-500 to-orange-500'
    },
    {
      id: 'other',
      name: 'Other Project',
      icon: FaUpload,
      description: 'Custom design or print needs',
      color: 'from-gray-500 to-gray-700'
    }
  ];

  const handleServiceSelect = (serviceId) => {
    setSelectedService(serviceId);
    setCurrentStep(2);
  };

  const handleFileUpload = (e) => {
    const selectedFiles = Array.from(e.target.files);
    
    // Check file sizes (limit to 10MB per file)
    const oversizedFiles = selectedFiles.filter(file => file.size > 10 * 1024 * 1024);
    if (oversizedFiles.length > 0) {
      alert('Some files are too large. Please keep files under 10MB each.');
      return;
    }
    
    // Check total files count
    if (files.length + selectedFiles.length > 10) {
      alert('Maximum 10 files allowed. Please remove some files before adding more.');
      return;
    }
    
    setFiles(prev => [...prev, ...selectedFiles]);
  };

  const removeFile = (index) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Prepare file information (not the actual files)
      const fileInfo = files.map(file => ({
        name: file.name,
        size: (file.size / (1024 * 1024)).toFixed(2) + ' MB',
        type: file.type
      }));

      // Prepare email data
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || 'Not provided',
        service: services.find(s => s.id === selectedService)?.name || 'Unknown Service',
        urgency: formData.urgency,
        project_details: formData.projectDetails,
        file_count: files.length,
        file_info: fileInfo.length > 0 ? 
          `Files uploaded:\n${fileInfo.map(f => `- ${f.name} (${f.size})`).join('\n')}` 
          : 'No files uploaded',
        submitted_at: new Date().toLocaleString('en-ZA', { 
          timeZone: 'Africa/Johannesburg',
          dateStyle: 'full',
          timeStyle: 'medium'
        })
      };

      console.log('Sending email with params:', templateParams);

      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      console.log('Email sent successfully:', result);
      
      // Show success animation
      setShowSuccess(true);
      
      // Auto close after animation
      setTimeout(() => {
        onClose();
        resetForm();
        setShowSuccess(false);
      }, 4000);

    } catch (error) {
      console.error('EmailJS Error Details:', error);
      
      // More specific error messages
      let errorMessage = 'Failed to send quote request. ';
      
      if (error?.status === 0) {
        errorMessage += 'Network error. Please check your internet connection. ';
      } else if (error?.status === 400) {
        errorMessage += 'Invalid request. Please check your form data. ';
      } else if (error?.status === 401) {
        errorMessage += 'Authentication failed. Please check your EmailJS credentials. ';
      } else if (error?.status === 429) {
        errorMessage += 'Too many requests. Please try again later. ';
      } else {
        errorMessage += `Error code: ${error?.status || 'Unknown'}. `;
      }
      
      errorMessage += '\n\nPlease email us directly at creativeelephant1@gmail.com or call +27 67 112 9459';
      
      alert(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setCurrentStep(1);
    setSelectedService('');
    setFiles([]);
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectDetails: '',
      urgency: 'standard'
    });
  };

  React.useEffect(() => {
    if (isOpen) {
      resetForm();
      setShowSuccess(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const selectedServiceData = services.find(service => service.id === selectedService);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        
        {/* Success Animation */}
        <AnimatePresence>
          {showSuccess && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white rounded-3xl p-12 mx-4 max-w-md w-full text-center shadow-2xl"
              >
                {/* Animated Checkmark */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 200, 
                    delay: 0.2 
                  }}
                  className="w-32 h-32 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl"
                >
                  <motion.div
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ 
                      delay: 0.5, 
                      duration: 0.5,
                      ease: "easeOut"
                    }}
                  >
                    <FaCheckCircle className="text-white text-6xl" />
                  </motion.div>
                </motion.div>

                {/* Success Text */}
                <motion.h3
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="text-3xl font-bold text-gray-800 mb-4"
                >
                  Quote Request Sent!
                </motion.h3>

                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.9 }}
                  className="text-gray-600 mb-8 text-lg"
                >
                  We'll get back to you within 24 hours with your quote
                </motion.p>

                {/* Rocket Animation */}
                <motion.div
                  initial={{ y: 100, opacity: 0, rotate: 0 }}
                  animate={{ y: 0, opacity: 1, rotate: 360 }}
                  transition={{ 
                    delay: 1.2,
                    type: "spring",
                    stiffness: 100
                  }}
                  className="text-4xl text-purple-600 mb-4"
                >
                  <FaRocketIcon />
                </motion.div>

                {/* Countdown */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.5 }}
                  className="text-sm text-gray-500"
                >
                  Closing in <span className="font-bold text-purple-600">3</span> seconds...
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Modal Content */}
        <AnimatePresence>
          {!showSuccess && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              {/* Header */}
              <div className="flex justify-between items-center p-6 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800">Get a Quote</h2>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  disabled={isLoading}
                >
                  <FaTimes className="w-6 h-6" />
                </button>
              </div>

              {/* Progress Steps */}
              <div className="px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  {[1, 2, 3].map((step) => (
                    <div key={step} className="flex items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                        currentStep >= step 
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' 
                          : 'bg-gray-200 text-gray-600'
                      }`}>
                        {step}
                      </div>
                      {step < 3 && (
                        <div className={`w-12 h-1 mx-2 ${
                          currentStep > step ? 'bg-gradient-to-r from-purple-600 to-pink-600' : 'bg-gray-200'
                        }`}></div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="flex justify-between text-sm text-gray-600 mt-2">
                  <span>Service</span>
                  <span>Details</span>
                  <span>Submit</span>
                </div>
              </div>

              {/* Step 1: Service Selection */}
              {currentStep === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="p-6"
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">What do you need?</h3>
                  <p className="text-gray-600 mb-6">Select the type of service you're looking for</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {services.map((service, index) => (
                      <motion.button
                        key={service.id}
                        onClick={() => handleServiceSelect(service.id)}
                        className={`p-4 border-2 rounded-xl hover:shadow-lg transition-all duration-300 text-left group ${
                          selectedService === service.id 
                            ? 'border-purple-500 bg-purple-50 shadow-md' 
                            : 'border-gray-200 hover:border-purple-500'
                        }`}
                        disabled={isLoading}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center text-white mb-3 group-hover:scale-110 transition-transform`}>
                          <service.icon className="w-6 h-6" />
                        </div>
                        <h4 className="font-semibold text-gray-800 mb-1">{service.name}</h4>
                        <p className="text-sm text-gray-600">{service.description}</p>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Step 2: Project Details */}
              {currentStep === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="p-6"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">Project Details</h3>
                      {selectedServiceData && (
                        <p className="text-purple-600 text-sm mt-1">
                          Selected: {selectedServiceData.name}
                        </p>
                      )}
                    </div>
                    <button
                      onClick={() => setCurrentStep(1)}
                      className="text-purple-600 hover:text-purple-700 text-sm font-medium"
                      disabled={isLoading}
                    >
                      ← Change Service
                    </button>
                  </div>

                  <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 }}
                        >
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            required
                            disabled={isLoading}
                          />
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            required
                            disabled={isLoading}
                          />
                        </motion.div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            disabled={isLoading}
                          />
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                        >
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Project Urgency
                          </label>
                          <select
                            name="urgency"
                            value={formData.urgency}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            disabled={isLoading}
                          >
                            <option value="standard">Standard (1-2 weeks)</option>
                            <option value="rush">Rush (3-5 days)</option>
                            <option value="urgent">Urgent (1-2 days)</option>
                          </select>
                        </motion.div>
                      </div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Project Details *
                        </label>
                        <textarea
                          name="projectDetails"
                          value={formData.projectDetails}
                          onChange={handleInputChange}
                          rows="4"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          placeholder="Tell us about your project, specific requirements, timeline, budget, etc..."
                          required
                          disabled={isLoading}
                        ></textarea>
                      </motion.div>

                      {/* FILE UPLOAD SECTION - RESTORED */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Upload Files (Optional)
                        </label>
                        <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-purple-400 transition-colors">
                          <input
                            type="file"
                            multiple
                            onChange={handleFileUpload}
                            className="hidden"
                            id="file-upload"
                            disabled={isLoading}
                            accept=".jpg,.jpeg,.png,.pdf,.doc,.docx,.psd,.ai,.eps,.indd,.zip,.rar"
                          />
                          <label
                            htmlFor="file-upload"
                            className={`cursor-pointer px-6 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center ${
                              isLoading 
                                ? 'bg-gray-400 text-gray-200 cursor-not-allowed' 
                                : 'bg-purple-600 hover:bg-purple-700 text-white'
                            }`}
                          >
                            <FaUpload className="mr-2" />
                            Upload Files
                          </label>
                          <p className="text-sm text-gray-500 mt-2">
                            Supported: JPG, PNG, PDF, DOC, PSD, AI, EPS, INDD (Max 10MB each)
                          </p>
                          
                          {/* Uploaded Files List */}
                          {files.length > 0 && (
                            <div className="mt-4 text-left">
                              <p className="text-sm font-medium text-gray-700 mb-2">
                                Uploaded Files ({files.length}/10):
                              </p>
                              <div className="space-y-2">
                                {files.map((file, index) => (
                                  <div key={index} className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded-lg">
                                    <span className="text-sm text-gray-600 truncate flex-1">
                                      {file.name} ({(file.size / (1024 * 1024)).toFixed(2)} MB)
                                    </span>
                                    <button
                                      type="button"
                                      onClick={() => removeFile(index)}
                                      className="text-red-500 hover:text-red-700 ml-2"
                                      disabled={isLoading}
                                    >
                                      <FaTimes />
                                    </button>
                                  </div>
                                ))}
                              </div>
                              <p className="text-xs text-gray-500 mt-2">
                                Note: We'll contact you to get the actual files after reviewing your quote request.
                              </p>
                            </div>
                          )}
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="flex justify-between pt-4"
                      >
                        <button
                          type="button"
                          onClick={() => setCurrentStep(1)}
                          className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors"
                          disabled={isLoading}
                        >
                          Back
                        </button>
                        <button
                          type="submit"
                          disabled={isLoading}
                          className={`px-6 py-3 rounded-xl transition-all duration-300 flex items-center ${
                            isLoading
                              ? 'bg-gray-400 cursor-not-allowed'
                              : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700'
                          } text-white`}
                        >
                          {isLoading ? (
                            <>
                              <FaSpinner className="animate-spin mr-2" />
                              Sending...
                            </>
                          ) : (
                            <>
                              Get My Quote
                              <FaArrowRight className="ml-2" />
                            </>
                          )}
                        </button>
                      </motion.div>
                    </div>
                  </form>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default QuoteModal;