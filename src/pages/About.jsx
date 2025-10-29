import React from 'react';
import { 
  FaEye, 
  FaBullseye, 
  FaGem, 
  FaUser, 
  FaBrain, 
  FaHandshake, 
  FaLightbulb, 
  FaPalette, 
  FaStar, 
  FaUsers,
  FaCheck,
  FaQuoteLeft,
  FaAward,
  FaRocket,
  FaPencilAlt,
  FaShieldAlt
} from 'react-icons/fa';
import { 
  HiAcademicCap,
  HiBriefcase,
  HiChartBar,
  HiGlobe,
  HiHeart,
  HiLightningBolt,
  HiTrendingUp
} from 'react-icons/hi';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50 pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-pink-50 to-amber-50 py-20 lg:py-32 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-purple-200 shadow-sm">
              <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
              <span className="text-purple-800 text-sm font-medium">SINCE 2018</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Creative Elephant</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Where good design meets good business. We build exceptional design solutions 
              that transform brands and drive lasting competitiveness.
            </p>
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <FaPencilAlt className="mr-2" />
              Be Exceptional
            </div>
          </div>
        </div>
      </section>

      {/* Company Background */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-purple-600 font-semibold bg-purple-100 px-4 py-2 rounded-full">ABOUT US</span>
              <h2 className="text-4xl font-bold text-gray-800 mt-6 mb-6">
                Company Background
              </h2>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 md:p-12 shadow-lg border border-purple-100">
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                Founded in April 2018, Creative Elephant is a creative and innovative design firm 
                with a mandate to build iconic design solutions for its prospective clients, 
                by design thinking and differentiation through design.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                With our combined experience, our resilience to the industry, the quality work we produce, 
                our creative and innovative team, the decision to engage Creative Elephant proves to be 
                a feasible and viable business decision.
              </p>
            </div>

            {/* Mission, Vision & Values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center bg-white rounded-2xl p-8 shadow-lg border border-pink-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 text-2xl mb-4 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <FaEye className="text-xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To empower businesses through design thinking and innovative design solutions, 
                  giving them value through design.
                </p>
              </div>

              <div className="text-center bg-white rounded-2xl p-8 shadow-lg border border-pink-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center text-pink-600 text-2xl mb-4 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <FaBullseye className="text-xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To produce iconic, creative and innovative design solutions that help serve 
                  the best interests of the client and target stakeholders.
                </p>
              </div>

              <div className="text-center bg-white rounded-2xl p-8 shadow-lg border border-pink-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-600 text-2xl mb-4 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <FaGem className="text-xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Focus</h3>
                <p className="text-gray-600">
                  Priority on earning and maintaining our customer's trust through 
                  exceptional service and world-class design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Story */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-6 flex items-center justify-center">
                <FaUser className="text-purple-600 mr-3" />
                Meet the Human Behind the Pixels
              </h2>
            </div>

            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-pink-200">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-xl border-4 border-white">
                    <div className="flex flex-col items-center justify-center text-white font-bold text-sm leading-4">
                      <span>Creative</span>
                      <span>elephant</span>
                    </div>
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                    Hi, I'm the founder, designer, estimator, email-answerer, and official snack-eater behind this online print & design studio!
                  </h3>
                  
                  <div className="space-y-6 text-gray-700 leading-relaxed">
                    <p className="flex items-start">
                      <HiAcademicCap className="text-purple-500 mr-3 mt-1 flex-shrink-0 text-xl" />
                      <span>
                        I'm a qualified Graphic Designer with a <strong>Bachelor of Arts in Visual Multimedia Arts</strong> from the University of South Africa (yes, I've got the papers to prove I can do more than just make things "pop"). I also completed a Digital Marketing short course at the University of Cape Town, where I picked up all the practical magic like SEO, social media, and analytics — so your brand doesn't just look good, it performs too.
                      </span>
                    </p>

                    {/* Experience Section */}
                    <div className="bg-purple-50 rounded-xl p-6 border-l-4 border-purple-500 shadow-sm">
                      <h4 className="font-semibold text-lg text-gray-800 mb-4 flex items-center">
                        <FaBrain className="text-purple-600 mr-2" /> Experience? Got It.
                      </h4>
                      <p className="mb-4">
                        From years in counter sales (yes, I know how to deal with real humans), to estimating print jobs down to the last dot, and crafting pixel-perfect designs — I've seen (and solved) it all. Somewhere along the way, I had an epiphany:
                      </p>
                      <p className="text-purple-700 font-semibold text-lg italic bg-white p-4 rounded-xl border border-purple-200 flex items-start">
                        <FaLightbulb className="text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                        "Hey, I'm really good at this. Why not do it for myself?"
                      </p>
                    </div>

                    {/* People First Section */}
                    <div className="bg-pink-50 rounded-xl p-6 border-l-4 border-pink-500 shadow-sm">
                      <h4 className="font-semibold text-lg text-gray-800 mb-4 flex items-center">
                        <FaHandshake className="text-pink-600 mr-2" /> People First, Always
                      </h4>
                      <p>
                        I'm a big believer in treating every client like they're the only one. I take the time to understand your vision, your needs, and your "please-don't-make-it-look-like-clipart" energy. I'm a people person with a healthy dose of empathy — I put myself in your shoes so we can create something you're actually proud of.
                      </p>
                      <p className="mt-4 font-semibold text-gray-800 flex items-start">
                        <HiHeart className="text-red-500 mr-2 mt-1 flex-shrink-0" />
                        So whether you need killer prints, a fresh new logo, or just someone who knows how to explain "bleed" without making your head hurt — I've got you.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-pink-600 font-semibold bg-pink-100 px-4 py-2 rounded-full">OUR VALUES</span>
              <h2 className="text-4xl font-bold text-gray-800 mt-6 mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Core Values</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: FaLightbulb,
                  title: 'INNOVATION',
                  description: 'Distinctive solutions help give competitive advantage.',
                  color: 'text-purple-600'
                },
                {
                  icon: FaPalette,
                  title: 'CREATIVITY',
                  description: 'Promotes differentiation through design by giving unique solutions',
                  color: 'text-pink-600'
                },
                {
                  icon: FaStar,
                  title: 'GOOD DESIGN',
                  description: 'Good design is good business. Design is an investment/asset not an expense',
                  color: 'text-amber-600'
                },
                {
                  icon: FaUsers,
                  title: 'TEAMWORK',
                  description: 'Co-creation helps develop customer centered solutions.',
                  color: 'text-purple-600'
                }
              ].map((value, index) => (
                <div key={index} className="bg-gradient-to-br from-white to-pink-50 rounded-2xl p-8 shadow-lg border border-pink-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                  <div className={`text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 ${value.color}`}>
                    <value.icon />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">
              Why Choose <span className="text-amber-300">Creative Elephant</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-12">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                    <FaAward className="text-white text-xs" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Exceptional Culture</h4>
                    <p className="text-purple-100">
                      We focus on creating an 'Exceptional Culture' which is a differentiator from other design firms.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                    <FaShieldAlt className="text-white text-xs" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Quality Assurance</h4>
                    <p className="text-purple-100">
                      All designs are put through our 'exceptional filter' - designs that fail to meet our standard are disqualified.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                    <HiLightningBolt className="text-white text-xs" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Current Technology</h4>
                    <p className="text-purple-100">
                      We build our services on current technology and relevant equipment, always moving with time.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                    <HiTrendingUp className="text-white text-xs" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Continuous Learning</h4>
                    <p className="text-purple-100">
                      Our team invests time in learning new design knowledge and skills to evolve with design trends.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-xl text-purple-100 italic max-w-2xl mx-auto bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <FaQuoteLeft className="text-amber-300 mb-4 text-2xl" />
              "We provide exceptional world class design solutions with a proven track record of established organizations."
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              What We <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Do</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              {[
                'Brand & Design Strategy',
                'Brand Identity Design', 
                'Website Design and Development',
                'Social Media Strategy, Design and Management',
                'Advertising, Print & Publications Design',
                'Signage Design and Branding',
                'Digital Printing Services',
                'E-commerce Design and Development'
              ].map((service, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-pink-50 rounded-xl hover:bg-pink-100 transition-colors group border border-pink-200">
                  <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <FaCheck className="text-xs" />
                  </div>
                  <span className="text-gray-700 font-medium">{service}</span>
                </div>
              ))}
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

export default About;