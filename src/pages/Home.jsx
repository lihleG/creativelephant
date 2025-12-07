import React from 'react';
import { 
  FaPencilAlt, 
  FaPrint, 
  FaPalette, 
  FaNewspaper, 
  FaMagnet, 
  FaComments, 
  FaHandshake, 
  FaTruck, 
  FaEnvelope, 
  FaUser, 
  FaCheck,
  FaArrowRight,
  FaQuoteLeft,
  FaAward,
  FaRocket,
  FaClock,
  FaHeadset,
  FaGoogle
} from 'react-icons/fa';
import { 
  HiAcademicCap,
  HiBriefcase,
  HiChartBar,
  HiHeart,
  HiLightningBolt,
  HiTrendingUp
} from 'react-icons/hi';

const Home = () => {
  // Google My Business Review Link - CORRECT URL
  const GOOGLE_REVIEW_URL = 'https://share.google/bg157YKxAQb5IwHRP';

  const openGoogleReview = () => {
    window.open(GOOGLE_REVIEW_URL, '_blank', 'noopener,noreferrer');
  };

  // Social Media Sharing
  const shareOnSocialMedia = () => {
    const shareText = "I had an amazing experience with Creative Elephant! Their design and printing services are top-notch. Check them out!";
    const shareUrl = "https://creativeelephant.co.za";
    
    if (navigator.share) {
      navigator.share({
        title: 'My Experience with Creative Elephant',
        text: shareText,
        url: shareUrl,
      });
    } else {
      // Fallback for desktop
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`, '_blank', 'width=600,height=400');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50">
      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-pink-50 via-purple-50 to-teal-50 py-20 lg:py-32">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-pink-100 text-pink-700 text-sm font-medium mb-8 shadow-sm">
              <FaPencilAlt className="mr-2" />
              Be Exceptional • Since 2018
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Good Design is<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">Good Business</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Creative Elephant transforms your vision into exceptional design solutions. 
              We build iconic designs that drive lasting competitiveness for your business.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a href="#contact" className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-center flex items-center justify-center">
                <HiLightningBolt className="mr-2" />
                Start Your Project
              </a>
              <a href="#portfolio" className="border-2 border-gray-300 hover:border-pink-500 text-gray-700 hover:text-pink-700 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 text-center flex items-center justify-center">
                <HiBriefcase className="mr-2" />
                View Our Work
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600">6+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">100+</div>
                <div className="text-gray-600">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600">95%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ghost Mode Disclaimer */}
      <section className="bg-white py-16 border-y border-gray-200">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-purple-50 to-teal-50 border border-teal-200 rounded-2xl p-8 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-xl shadow-sm">
                  <FaPrint />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    We're Fully Online (Like, Ghost Mode Activated)
                  </h3>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      Hey there! Just a heads up — we're 100% online. No shopfront, no walk-ins, 
                      and sadly, no free coffee while you wait. So if you're hoping to catch us in person... 
                      chances are slimmer than a printer that never jams. (Basically, not happening.)
                    </p>
                    <p>
                      We know that might sound a little shady — but trust us, we're the good kind of internet strangers. 
                      The kind who print your stuff on time, reply to your emails, and don't steal your Netflix password.
                    </p>
                    <p className="font-semibold text-pink-600 text-lg flex items-center">
                      <FaHandshake className="mr-2 text-teal-600" />
                      Not a scam. Just digital ninjas doing honest work in our slippers.
                    </p>
                  </div>
                  
                  {/* Courier Notice */}
                  <div className="mt-6 p-4 bg-white rounded-lg border border-purple-300">
                    <p className="text-sm text-gray-700 flex items-center">
                      <FaTruck className="mr-2 text-pink-600" />
                      <span>
                        <strong>Local & National Courier Available</strong><br />
                        We deliver nationwide. Please ensure your address is correct when placing your order.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-pink-600 font-semibold bg-pink-100 px-4 py-2 rounded-full">OUR SERVICES</span>
            <h2 className="text-4xl font-bold text-gray-800 mt-6 mb-6">
              What We <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">Do</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive design and print solutions to elevate your brand
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: FaPalette,
                title: 'Brand Identity Design', 
                desc: 'Logos, style guides, and complete brand systems that make your business unforgettable.',
                color: 'from-pink-500 to-pink-600'
              },
              { 
                icon: FaNewspaper,
                title: 'Print Design', 
                desc: 'Business cards, flyers, brochures, and professional print materials.',
                color: 'from-purple-500 to-purple-600'
              },
              { 
                icon: FaMagnet,
                title: 'Car & Fridge Magnets', 
                desc: 'High-quality promotional magnets for vehicles and refrigerators.',
                color: 'from-teal-500 to-teal-600'
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-teal-100 group">
                <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-white text-2xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <service.icon />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3 group-hover:text-pink-700 transition-colors">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.desc}</p>
                <a href="#services" className="inline-flex items-center text-pink-600 hover:text-pink-700 font-medium text-sm group-hover:translate-x-1 transition-transform">
                  Learn more
                  <FaArrowRight className="ml-1 text-xs" />
                </a>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="#services" className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 inline-flex items-center transform hover:scale-105 shadow-lg">
              View All Services
              <FaArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Review Encouragement Section */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white bg-opacity-20 text-white text-sm font-medium mb-8">
              <FaComments className="mr-2" />
              Your Feedback Matters
            </div>
            
            <h2 className="text-4xl font-bold mb-8">
              Leave a Review – Help Us Prove We Exist
            </h2>
            
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                If you've ordered from us and loved it (or even just liked it), please leave us a review. 
                Not only does it make our day, it also helps new customers believe we're real humans and 
                not just a very enthusiastic AI with access to a printing press.
              </p>
              
              <p className="italic text-pink-100">
                Thanks for trusting us — and for supporting a fully-online small biz that runs on caffeine, 
                pixels, and your kind words.
              </p>

              <p className="font-semibold text-lg flex items-center justify-center">
                <FaHandshake className="mr-2 text-purple-300" />
                Not a scam. Just digital ninjas doing honest work in our slippers.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={openGoogleReview}
                className="bg-white text-pink-700 hover:bg-pink-50 px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
              >
                <FaGoogle className="mr-2" />
                Leave a Google Review
              </button>
              <button 
                onClick={shareOnSocialMedia}
                className="border-2 border-white text-white hover:bg-white hover:text-pink-700 px-8 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center"
              >
                <HiTrendingUp className="mr-2" />
                Share on Social Media
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-pink-600 font-semibold bg-pink-100 px-4 py-2 rounded-full">TRUSTED BY</span>
            <h2 className="text-3xl font-bold text-gray-800 mt-6 mb-6">
              Trusted By Exceptional Brands
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We've partnered with forward-thinking businesses to deliver exceptional design solutions
            </p>
          </div>
          
          {/* Client Logos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Gelfa Academy', project: 'Brand Identity' },
              { name: 'Velvet Skincare', project: 'Complete Rebrand' },
              { name: 'Kanya Consulting', project: 'Print Design' },
              { name: 'Moeti Telecoms', project: 'Print & Branding' },
              { name: 'Ndlovu Jewellery', project: 'Brand Identity' },
              { name: 'City Region Travel', project: 'Brand Design' },
              { name: 'Shalom Computers', project: 'Marketing Materials' },
              { name: 'Becky\'s Hair Studio', project: 'Brand Identity' }
            ].map((client, index) => (
              <div key={index} className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-6 text-center border border-teal-100 hover:border-pink-300 transition-colors group hover:shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm mx-auto mb-3 group-hover:scale-110 transition-transform shadow-lg">
                  {client.name.split(' ').map(word => word[0]).join('')}
                </div>
                <div className="text-gray-800 font-medium text-sm mb-1 group-hover:text-pink-700 transition-colors">{client.name}</div>
                <div className="text-gray-500 text-xs">{client.project}</div>
              </div>
            ))}
          </div>

          {/* Process Preview */}
          <div className="mt-20 max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-teal-600 font-semibold bg-teal-100 px-4 py-2 rounded-full">OUR PROCESS</span>
              <h2 className="text-3xl font-bold text-gray-800 mt-6 mb-6">
                How We <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">Work</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Simple, transparent process from concept to delivery
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Consult', desc: 'We discuss your vision and requirements', icon: FaComments },
                { step: '02', title: 'Design', desc: 'We create and refine your design concepts', icon: FaPencilAlt },
                { step: '03', title: 'Approve', desc: 'You review and approve the final design', icon: FaCheck },
                { step: '04', title: 'Deliver', desc: 'We produce and deliver your finished products', icon: FaTruck }
              ].map((process, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl flex items-center justify-center text-pink-600 text-xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <process.icon />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-pink-700 transition-colors">
                    {process.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {process.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-purple-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Create Something Exceptional?
          </h2>
          <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
            Let's transform your ideas into stunning design solutions that drive real business results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="bg-white text-pink-700 hover:bg-pink-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center">
              <FaRocket className="mr-2" />
              Get Your Free Quote
            </a>
            <a href="#about" className="border-2 border-white text-white hover:bg-white hover:text-pink-700 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center">
              <HiHeart className="mr-2" />
              Learn About Us
            </a>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4 text-pink-200 text-sm">
            <div className="flex items-center">
              <FaTruck className="mr-2 text-purple-300" />
              <span>Local & National Courier</span>
            </div>
            <div className="flex items-center">
              <FaClock className="mr-2 text-purple-300" />
              <span>24-48 Hour Quote Turnaround</span>
            </div>
            <div className="flex items-center">
              <FaHeadset className="mr-2 text-purple-300" />
              <span>Personal Project Manager</span>
            </div>
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

export default Home;