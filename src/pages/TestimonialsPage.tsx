import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Play, Filter } from 'lucide-react';
import TestimonialCard from '../components/TestimonialCard';
import { testimonials } from '../data/mockData';

const TestimonialsPage: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const categories = [
    { id: 'all', label: 'All Stories' },
    { id: 'coaching', label: 'Coaching' },
    { id: 'speaking', label: 'Speaking' },
    { id: 'branding', label: 'Branding' },
  ];

  return (
    <motion.div
      className="min-h-screen pt-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={itemVariants} className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Success{' '}
              <span className="text-rose-400">Stories</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Real transformations from real people. Discover how others have unlocked their 
              potential and created lasting impact in their lives and careers.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-rose-400 mb-2">500+</div>
                <div className="text-gray-300">Lives Transformed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-sky-400 mb-2">4.9</div>
                <div className="text-gray-300">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-rose-400 mb-2">95%</div>
                <div className="text-gray-300">Success Rate</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="flex items-center justify-center space-x-4">
            <Filter className="w-5 h-5 text-gray-600" />
            <div className="flex space-x-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setFilter(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    filter === category.id
                      ? 'bg-rose-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Video Testimonials
            </h2>
            <p className="text-xl text-gray-600">
              Hear directly from clients about their transformation journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: 'Sarah Williams',
                role: 'Marketing Director',
                thumbnail: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=800'
              },
              {
                name: 'Marcus Johnson',
                role: 'Sales Manager',
                thumbnail: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800'
              }
            ].map((video, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                <div className="aspect-video relative">
                  <img
                    src={video.thumbnail}
                    alt={video.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-gray-900 ml-1" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{video.name}</h3>
                  <p className="text-gray-600">{video.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Written Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Client Stories
            </h2>
            <p className="text-xl text-gray-600">
              Read detailed accounts of transformation and growth
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                variants={itemVariants}
                custom={index}
              >
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Success Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="bg-white rounded-2xl p-12 shadow-xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-2xl text-gray-700 mb-6 leading-relaxed italic">
                  "Working with Jordan was the turning point in my career. His coaching helped me 
                  overcome imposter syndrome and step into a leadership role I never thought possible. 
                  The confidence and clarity I gained transformed not just my work, but my entire life."
                </blockquote>
                <div className="flex items-center space-x-4">
                  <img
                    src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Emily Chen"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">Emily Chen</h4>
                    <p className="text-gray-600">Startup Founder, TechFlow</p>
                    <p className="text-sm text-gray-500">6-month VIP Program Graduate</p>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Emily Chen Success Story"
                  className="rounded-2xl shadow-lg w-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={itemVariants} className="space-y-8">
            <h2 className="text-4xl font-bold">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Join hundreds of others who have transformed their lives and careers. 
              Your breakthrough moment is waiting.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-rose-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-rose-600 transition-colors duration-200"
            >
              Start Your Transformation
            </motion.button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default TestimonialsPage;