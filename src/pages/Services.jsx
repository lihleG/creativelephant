import React from 'react';
import { 
  FaIdCard, 
  FaNewspaper, 
  FaMagnet, 
  FaFlag, 
  FaBook, 
  FaBox, 
  FaPalette, 
  FaLaptopCode, 
  FaHashtag, 
  FaBullhorn,
  FaComments,
  FaPencilAlt,
  FaCogs,
  FaShippingFast,
  FaUpload,
  FaRocket,
  FaCheck,
  FaArrowRight,
  FaMapMarkerAlt,
  FaQuoteLeft
} from 'react-icons/fa';
import { 
  HiLightningBolt,
  HiCalendar,
  HiPhone,
  HiMail
} from 'react-icons/hi';

const Services = () => {
  // Updated Print Services Data with React Icons
  const printServices = [
    {
      icon: FaIdCard,
      title: 'Business Cards',
      description: 'Premium quality business cards that make lasting impressions with superior paper stock and finishing options.',
      features: ['Spot UV', 'Foil Stamping', 'Rounded Corners', 'Multiple Paper Options', 'Digital & Offset Printing'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: FaNewspaper,
      title: 'Flyers & Brochures',
      description: 'Eye-catching marketing materials designed to convert, from simple flyers to sophisticated multi-page brochures.',
      features: ['A4 & A5 Sizes', 'Gloss & Matte Finishes', 'Folding Options', 'Bulk Printing', 'Full Color Both Sides'],
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: FaMagnet,
      title: 'Car & Fridge Magnets',
      description: 'Durable, high-quality car and fridge magnets perfect for promotions, real estate, or keeping your brand visible daily.',
      features: ['Custom Shapes & Sizes', 'Weather Resistant', 'Strong Magnetic Backing', 'Vehicle-Safe Adhesive', 'Full Color Printing'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: FaFlag,
      title: 'Banners & Signage',
      description: 'Large format printing for indoor and outdoor signage that commands attention and delivers your message clearly.',
      features: ['Vinyl Banners', 'Pull-up Banners', 'Window Graphics', 'Event Signage', 'Weatherproof Materials'],
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: FaBook,
      title: 'Books & Publications',
      description: 'Professional book printing and binding services for manuals, catalogs, magazines, and corporate publications.',
      features: ['Perfect Binding', 'Saddle Stitch', 'Hardcover Options', 'ISBN Services', 'Various Paper Stocks'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: FaBox,
      title: 'Packaging & Boxes',
      description: 'Custom packaging solutions and product boxes that enhance brand perception and customer unboxing experience.',
      features: ['Custom Die-Cuts', 'Product Packaging', 'Mailer Boxes', 'Eco-Friendly Options', 'Branded Inserts'],
      color: 'from-pink-500 to-purple-500'
    }
  ];

  // Design Services Data with React Icons
  const designServices = [
    {
      icon: FaPalette,
      title: 'Brand Identity Design',
      description: 'Complete brand identity packages including logos, color palettes, typography, and brand guidelines.',
      features: ['Logo Design', 'Style Guides', 'Brand Manuals', 'Stationery Suite', 'Brand Applications'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: FaLaptopCode,
      title: 'Website Design & Development',
      description: 'Responsive, modern websites that convert visitors into customers with seamless user experiences.',
      features: ['UI/UX Design', 'E-commerce Solutions', 'Responsive Design', 'SEO Optimization', 'Content Management'],
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: FaHashtag,
      title: 'Social Media Management',
      description: 'End-to-end social media strategy, content creation, and management to grow your online presence.',
      features: ['Content Strategy', 'Visual Design', 'Scheduling', 'Performance Analytics', 'Community Management'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: FaBullhorn,
      title: 'Advertising Design',
      description: 'Compelling advertising materials for both digital and print platforms that drive results.',
      features: ['Digital Ads', 'Print Ads', 'Campaign Strategy', 'A/B Testing', 'Conversion Optimization'],
      color: 'from-pink-500 to-pink-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50 pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-pink-50 to-amber-50 py-20 lg:py-32 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Services</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              From concept to delivery, we provide comprehensive print and design solutions 
              that elevate your brand and drive your business forward.
            </p>
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <FaRocket className="mr-2" />
              End-to-End Print & Design Solutions
            </div>
          </div>
        </div>
      </section>

      {/* Print Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-purple-600 font-semibold bg-purple-100 px-4 py-2 rounded-full">PRINT SERVICES</span>
            <h2 className="text-4xl font-bold text-gray-800 mt-6 mb-6">
              Print <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              High-quality printing services with attention to detail and commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {printServices.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-pink-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <service.icon />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 group-hover:text-pink-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <FaCheck className="w-3 h-3 text-pink-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a 
                  href="#contact" 
                  className="block w-full bg-purple-50 hover:bg-purple-100 text-purple-700 font-semibold py-3 rounded-lg transition-colors duration-300 text-center group-hover:translate-x-1 transition-transform flex items-center justify-center"
                >
                  Get Quote
                  <FaArrowRight className="ml-2 text-sm" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Services Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-pink-600 font-semibold bg-pink-100 px-4 py-2 rounded-full">DESIGN SERVICES</span>
            <h2 className="text-4xl font-bold text-gray-800 mt-6 mb-6">
              Design <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Creative design solutions that tell your brand's story and connect with your audience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {designServices.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-pink-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <service.icon />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 group-hover:text-pink-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <FaCheck className="w-3 h-3 text-pink-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a 
                  href="#contact" 
                  className="block w-full bg-pink-50 hover:bg-pink-100 text-pink-700 font-semibold py-3 rounded-lg transition-colors duration-300 text-center group-hover:translate-x-1 transition-transform flex items-center justify-center"
                >
                  Learn More
                  <FaArrowRight className="ml-2 text-sm" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-purple-600 font-semibold bg-purple-100 px-4 py-2 rounded-full">OUR PROCESS</span>
            <h2 className="text-4xl font-bold text-gray-800 mt-6 mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple, transparent process from concept to delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { 
                icon: FaComments,
                title: 'Consultation', 
                desc: 'We discuss your needs and vision',
                details: 'Free initial consultation to understand your project requirements and goals',
                color: 'bg-purple-100 text-purple-600'
              },
              { 
                icon: FaPencilAlt,
                title: 'Design & Quote', 
                desc: 'We create designs and provide pricing',
                details: 'Professional designs with transparent pricing and no hidden costs',
                color: 'bg-pink-100 text-pink-600'
              },
              { 
                icon: FaCogs,
                title: 'Production', 
                desc: 'We produce your items with quality checks',
                details: 'Quality-controlled production with regular updates on progress',
                color: 'bg-purple-100 text-purple-600'
              },
              { 
                icon: FaShippingFast,
                title: 'Delivery', 
                desc: 'We deliver your finished products',
                details: 'Careful packaging and reliable courier delivery to your doorstep',
                color: 'bg-pink-100 text-pink-600'
              }
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className={`w-20 h-20 ${process.color} rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <process.icon />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-pink-700 transition-colors">
                  {process.title}
                </h3>
                <p className="text-gray-600 font-medium mb-2">
                  {process.desc}
                </p>
                <p className="text-sm text-gray-500">
                  {process.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* File Upload & Quote CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Upload your files and get a free quote for your print or design project within 24 hours
          </p>
          
          <div className="bg-white rounded-2xl p-8 max-w-2xl mx-auto mb-8 shadow-xl">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center justify-center">
              <FaUpload className="text-purple-600 mr-3" />
              Easy File Upload & Quote Request
            </h3>
            <p className="text-gray-600 mb-6">
              Simply upload your documents, images, or paste links to your files. We'll review and provide you with a detailed quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
              >
                <FaUpload className="mr-2" />
                Upload Files & Get Quote
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact"
              className="bg-white text-purple-700 hover:bg-purple-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
            >
              <HiLightningBolt className="mr-2" />
              Get Instant Quote
            </a>
            <a 
              href="#contact"
              className="border-2 border-white text-white hover:bg-white hover:text-purple-700 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center"
            >
              <HiCalendar className="mr-2" />
              Schedule Consultation
            </a>
          </div>

          {/* Contact Info */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-6 text-purple-100 text-sm">
            <div className="flex items-center">
              <HiPhone className="mr-2" />
              <span>+27 72 207 6713</span>
            </div>
            <div className="flex items-center">
              <HiMail className="mr-2" />
              <span>creativeelephant1@gmail.com</span>
            </div>
          </div>

          {/* Courier Notice */}
          <div className="mt-8 bg-white bg-opacity-20 rounded-xl p-4 max-w-2xl mx-auto backdrop-blur-sm border border-white/20">
            <p className="text-purple-100 text-sm flex items-center justify-center">
              <FaMapMarkerAlt className="mr-2 text-amber-300" />
              <span>
                <strong>Local & National Courier Available</strong> - We deliver nationwide. 
                Please ensure your delivery address is correct when placing your order.
              </span>
            </p>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default Services;