import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <motion.div
      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
      whileHover={{ y: -5, scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-4xl mb-4">{service.icon}</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
      
      <ul className="space-y-2 mb-6">
        {service.features.map((feature, index) => (
          <li key={index} className="flex items-start space-x-2">
            <div className="w-2 h-2 bg-rose-500 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700 text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      {service.price && (
        <div className="flex items-center justify-between mb-6">
          <div>
            <span className="text-3xl font-bold text-gray-900">{service.price}</span>
            <span className="text-gray-600 ml-2">{service.duration}</span>
          </div>
        </div>
      )}

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center space-x-2"
      >
        <span>Learn More</span>
        <ArrowRight size={16} />
      </motion.button>
    </motion.div>
  );
};

export default ServiceCard;