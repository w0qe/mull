import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2 className="text-4xl lg:text-5xl font-bold">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to unlock your potential and create the impact you've been dreaming of? 
            Let's start your transformation journey today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-rose-500 text-white font-semibold rounded-lg hover:bg-rose-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Started Today
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
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-rose-400 mb-2">500+</div>
              <div className="text-gray-400">Lives Transformed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-sky-400 mb-2">50+</div>
              <div className="text-gray-400">Speaking Events</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-rose-400 mb-2">95%</div>
              <div className="text-gray-400">Success Rate</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;