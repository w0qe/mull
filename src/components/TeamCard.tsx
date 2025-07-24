import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Instagram } from 'lucide-react';
import { TeamMember } from '../types';

interface TeamCardProps {
  member: TeamMember;
}

const TeamCard: React.FC<TeamCardProps> = ({ member }) => {
  return (
    <motion.div
      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center"
      whileHover={{ y: -5, scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative mb-6">
        <img
          src={member.image}
          alt={member.name}
          className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
        />
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-rose-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
          {member.role}
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">{member.bio}</p>
      
      <div className="flex justify-center space-x-4">
        {member.social.linkedin && (
          <motion.a
            href={member.social.linkedin}
            whileHover={{ scale: 1.1 }}
            className="text-gray-400 hover:text-blue-600 transition-colors"
          >
            <Linkedin size={20} />
          </motion.a>
        )}
        {member.social.twitter && (
          <motion.a
            href={member.social.twitter}
            whileHover={{ scale: 1.1 }}
            className="text-gray-400 hover:text-blue-400 transition-colors"
          >
            <Twitter size={20} />
          </motion.a>
        )}
        {member.social.instagram && (
          <motion.a
            href={member.social.instagram}
            whileHover={{ scale: 1.1 }}
            className="text-gray-400 hover:text-pink-600 transition-colors"
          >
            <Instagram size={20} />
          </motion.a>
        )}
      </div>
    </motion.div>
  );
};

export default TeamCard;