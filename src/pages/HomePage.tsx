import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Award, TrendingUp } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import BlogCard from '../components/BlogCard';
import CTASection from '../components/CTASection';
import { services, testimonials, blogPosts } from '../data/mockData';

const HomePage: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return (
    <motion.div
      className="min-h-screen"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Helping You Build{' '}
                <span className="text-rose-400">Confidence</span>,{' '}
                <span className="text-sky-400">Purpose</span> &{' '}
                <span className="text-rose-400">Impact</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Speaker, Coach, Entrepreneur.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed max-w-lg">
                Transform your mindset, unlock your potential, and create the life and career you've always dreamed of.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-8 py-4 bg-rose-500 text-white font-semibold rounded-lg hover:bg-rose-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Book Me
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/services"
                    className="inline-flex items-center px-8 py-4 border-2 border-sky-400 text-sky-400 font-semibold rounded-lg hover:bg-sky-400 hover:text-white transition-all duration-300"
                  >
                    Explore Services
                  </Link>
                </motion.div>
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="relative">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Jordan Reeve"
                  className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-2">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="text-gray-900 font-semibold">4.9/5</span>
                    <span className="text-gray-600">Rating</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { icon: Users, number: '500+', label: 'Clients Coached' },
              { icon: Award, number: '50+', label: 'Speaking Events' },
              { icon: TrendingUp, number: '95%', label: 'Success Rate' },
              { icon: Star, number: '4.9', label: 'Average Rating' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-8 w-8 text-rose-500 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <img
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Jordan Reeve speaking"
                className="rounded-2xl shadow-xl w-full"
              />
            </motion.div>
            <motion.div variants={itemVariants} className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">
                Transforming Lives Through Purpose-Driven Leadership
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                With over a decade of experience in personal development and business strategy, 
                I've helped hundreds of individuals and organizations unlock their true potential 
                and create lasting impact.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                My mission is simple: to empower you with the confidence, clarity, and tools 
                needed to build a life and career that truly matters.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center text-rose-500 font-semibold hover:text-rose-600 transition-colors duration-200"
              >
                Learn More About My Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How I Can Help You Grow
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the services designed to unlock your potential and accelerate your success
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                custom={index}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </div>
          <motion.div variants={itemVariants} className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Real stories from real people who've transformed their lives
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                variants={itemVariants}
                custom={index}
              >
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            ))}
          </div>
          <motion.div variants={itemVariants} className="text-center mt-12">
            <Link
              to="/testimonials"
              className="inline-flex items-center text-rose-500 font-semibold hover:text-rose-600 transition-colors duration-200"
            >
              Read More Success Stories
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Latest Insights
            </h2>
            <p className="text-xl text-gray-600">
              Practical tips and strategies for personal and professional growth
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map((post, index) => (
              <motion.div
                key={post.id}
                variants={itemVariants}
                custom={index}
              >
                <BlogCard post={post} />
              </motion.div>
            ))}
          </div>
          <motion.div variants={itemVariants} className="text-center mt-12">
            <Link
              to="/blog"
              className="inline-flex items-center px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
            >
              Read More Articles
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </motion.div>
  );
};

export default HomePage;