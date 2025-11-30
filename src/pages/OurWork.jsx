import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { FaExternalLinkAlt, FaStar, FaHeart, FaRocket, FaPalette, FaUsers } from 'react-icons/fa';

const FloatingShape = ({ position, color }) => {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <Sphere ref={meshRef} position={position} scale={hovered ? 1.2 : 1}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}>
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={0.5}
        speed={2}
        roughness={0.2}
        metalness={0.1}
      />
    </Sphere>
  );
};

const ThreeScene = () => {
  return (
    <Canvas className="absolute inset-0">
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <FloatingShape position={[-2, 0, 0]} color="#EC4899" />
      <FloatingShape position={[2, 1, 0]} color="#8B5CF6" />
      <FloatingShape position={[0, -1, 0]} color="#14B8A6" />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
    </Canvas>
  );
};

const OurWork = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredCard, setHoveredCard] = useState(null);

  const clients = [
    {
      id: 1,
      name: 'MVP Electricity',
      category: 'corporate',
      description: 'Complete brand identity and marketing materials for energy solutions provider',
      services: ['Brand Identity', 'Print Materials', 'Digital Marketing'],
      color: 'from-pink-500 to-purple-500',
      featured: true
    },
    {
      id: 2,
      name: 'State Assembly',
      category: 'government',
      description: 'Official documentation and public communication materials',
      services: ['Publications', 'Official Documents', 'Brand Guidelines'],
      color: 'from-pink-600 to-purple-500',
      featured: true
    },
    {
      id: 3,
      name: 'Business Authority',
      category: 'corporate',
      description: 'Corporate branding and business development materials',
      services: ['Corporate Identity', 'Business Cards', 'Presentation Design'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 4,
      name: 'Mobile College',
      category: 'education',
      description: 'Educational materials and institutional branding',
      services: ['Educational Materials', 'Brand Identity', 'Digital Presence'],
      color: 'from-teal-500 to-purple-500'
    },
    {
      id: 5,
      name: 'Shanell Logistics',
      category: 'logistics',
      description: 'Logistics company branding and operational materials',
      services: ['Fleet Branding', 'Corporate Identity', 'Marketing Collateral'],
      color: 'from-pink-500 to-purple-500'
    },
    {
      id: 6,
      name: 'Kanya Communication Consulting',
      category: 'consulting',
      description: 'Communication consultancy brand development',
      services: ['Brand Strategy', 'Visual Identity', 'Marketing Materials'],
      color: 'from-purple-500 to-teal-500'
    },
    {
      id: 7,
      name: 'Faramaks',
      category: 'corporate',
      description: 'Comprehensive branding solution for manufacturing',
      services: ['Product Packaging', 'Brand Identity', 'Trade Materials'],
      color: 'from-pink-600 to-purple-600'
    },
    {
      id: 8,
      name: 'Velvet Skincare',
      category: 'beauty',
      description: 'Luxury skincare brand identity and packaging',
      services: ['Packaging Design', 'Brand Identity', 'Social Media'],
      color: 'from-purple-400 to-pink-400'
    },
    {
      id: 9,
      name: 'City Region Travel Agency',
      category: 'travel',
      description: 'Travel agency branding and promotional materials',
      services: ['Brand Identity', 'Tour Packages', 'Digital Marketing'],
      color: 'from-pink-400 to-purple-400'
    },
    {
      id: 10,
      name: 'Positive Minds Radio',
      category: 'media',
      description: 'Radio station branding and promotional content',
      services: ['Station Branding', 'Promotional Materials', 'Social Media'],
      color: 'from-teal-400 to-purple-400'
    },
    {
      id: 11,
      name: 'Global Knowledge',
      category: 'education',
      description: 'Educational institution international branding',
      services: ['International Branding', 'Educational Materials', 'Digital Platform'],
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', count: clients.length },
    { id: 'corporate', name: 'Corporate', count: clients.filter(c => c.category === 'corporate').length },
    { id: 'government', name: 'Government', count: clients.filter(c => c.category === 'government').length },
    { id: 'education', name: 'Education', count: clients.filter(c => c.category === 'education').length },
    { id: 'logistics', name: 'Logistics', count: clients.filter(c => c.category === 'logistics').length },
    { id: 'consulting', name: 'Consulting', count: clients.filter(c => c.category === 'consulting').length },
    { id: 'beauty', name: 'Beauty & Wellness', count: clients.filter(c => c.category === 'beauty').length },
    { id: 'travel', name: 'Travel', count: clients.filter(c => c.category === 'travel').length },
    { id: 'media', name: 'Media', count: clients.filter(c => c.category === 'media').length }
  ];

  const filteredClients = activeCategory === 'all' 
    ? clients 
    : clients.filter(client => client.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 pt-20">
      {/* Hero Section with Three.js */}
      <section className="py-20 lg:py-32 relative overflow-hidden bg-gradient-to-br from-pink-600 to-purple-600 text-white">
        <div className="absolute inset-0 opacity-20">
          <ThreeScene />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/30">
              <span className="w-2 h-2 bg-teal-300 rounded-full animate-pulse"></span>
              <span className="text-white text-sm font-medium">TRUSTED BY INDUSTRY LEADERS</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-purple-300">Creative Work</span>
            </h1>
            <p className="text-xl text-pink-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              Discover how we've helped businesses transform their brands and achieve exceptional results 
              through innovative design solutions and strategic thinking.
            </p>
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white text-pink-600 font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <FaRocket className="mr-2" />
              Explore Our Portfolio
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '50+', label: 'Projects Completed', icon: FaPalette },
              { number: '30+', label: 'Happy Clients', icon: FaUsers },
              { number: '100%', label: 'Client Satisfaction', icon: FaHeart },
              { number: '5★', label: 'Average Rating', icon: FaStar }
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center text-white text-2xl mb-4 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <stat.icon />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container mx-auto px-6">
          {/* Category Filters */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Browse through our diverse portfolio of successful projects across various industries
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-pink-50 border border-pink-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredClients.map((client, index) => (
              <div
                key={client.id}
                className={`bg-white rounded-2xl p-6 shadow-lg border border-pink-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group ${
                  hoveredCard === client.id ? 'scale-105' : ''
                }`}
                onMouseEnter={() => setHoveredCard(client.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Client Header */}
                <div className={`h-32 bg-gradient-to-br ${client.color} rounded-xl mb-6 relative overflow-hidden flex items-center justify-center text-white font-bold text-xl p-4 shadow-lg`}>
                  {client.featured && (
                    <div className="absolute top-3 right-3 bg-teal-400 text-teal-900 px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                      <FaStar className="mr-1" />
                      Featured
                    </div>
                  )}
                  <div className="text-center">
                    <div className="text-2xl font-bold">{client.name.split(' ')[0]}</div>
                    {client.name.split(' ').length > 1 && (
                      <div className="text-lg opacity-90">{client.name.split(' ').slice(1).join(' ')}</div>
                    )}
                  </div>
                </div>

                {/* Client Details */}
                <div className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    {client.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-800 text-sm uppercase tracking-wide">Services Provided:</h4>
                    <div className="flex flex-wrap gap-2">
                      {client.services.map((service, serviceIndex) => (
                        <span
                          key={serviceIndex}
                          className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-xs font-medium"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <span className="text-sm text-gray-500 capitalize">
                      {client.category}
                    </span>
                    <button className="flex items-center space-x-2 bg-pink-50 hover:bg-pink-100 text-pink-700 px-4 py-2 rounded-lg transition-colors duration-300 group-hover:translate-x-1">
                      <span className="text-sm font-medium">View Case</span>
                      <FaExternalLinkAlt className="text-xs" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl p-12 text-white shadow-xl">
              <h3 className="text-3xl font-bold mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
                Join our growing list of satisfied clients and let's create something exceptional together
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-pink-600 hover:bg-pink-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Start Your Project
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-pink-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
                  View Full Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">
              What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">Clients Say</span>
            </h2>
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 shadow-lg border border-pink-200">
              <p className="text-xl text-gray-700 italic mb-6">
                "Creative Elephant transformed our brand identity completely. Their attention to detail and 
                creative approach helped us stand out in a competitive market. Exceptional work!"
              </p>
              <div className="font-semibold text-gray-800">— MVP Electricity Team</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurWork;