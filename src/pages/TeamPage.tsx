import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Target, Zap, Users, Award, TrendingUp } from 'lucide-react';
import TeamCard from '../components/TeamCard';
import { teamMembers } from '../data/mockData';

const TeamPage: React.FC = () => {
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

  const values = [
    {
      icon: Heart,
      title: 'Authenticity',
      description: 'We believe in being genuine and true to ourselves and our clients.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for the highest standards in everything we do.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We continuously evolve our methods to deliver better results.'
    }
  ];

  const culture = [
    {
      title: 'Collaborative Spirit',
      description: 'We work together as a unified team, supporting each other and our clients.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Continuous Learning',
      description: 'We invest in our growth and development to better serve our mission.',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Impact-Driven',
      description: 'Every decision we make is guided by the positive impact we can create.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
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
              Meet the{' '}
              <span className="text-rose-400">Team</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Behind every transformation is a dedicated team of professionals committed 
              to helping you achieve your goals and create lasting impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Core Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the talented individuals who make the magic happen behind the scenes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                variants={itemVariants}
                custom={index}
              >
                <TeamCard member={member} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Mission & Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our work and define who we are as a team
            </p>
          </motion.div>

          {/* Mission Statement */}
          <motion.div variants={itemVariants} className="bg-white rounded-2xl p-12 shadow-lg mb-16">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                To empower individuals and organizations to unlock their full potential, 
                build unshakeable confidence, and create meaningful impact in their lives, 
                careers, and communities through transformational coaching, speaking, and 
                personal development programs.
              </p>
            </div>
          </motion.div>

          {/* Values */}
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={itemVariants}
                custom={index}
                className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              >
                <value.icon className="w-12 h-12 text-rose-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Culture */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Culture
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What makes our team special and how we work together to serve our clients
            </p>
          </motion.div>

          <div className="space-y-16">
            {culture.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                custom={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">{item.description}</p>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="rounded-2xl shadow-lg w-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Team Impact</h2>
            <p className="text-xl text-gray-300">
              Together, we've achieved remarkable results
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, number: '500+', label: 'Clients Served' },
              { icon: Award, number: '50+', label: 'Events Delivered' },
              { icon: TrendingUp, number: '95%', label: 'Success Rate' },
              { icon: Heart, number: '100%', label: 'Passion & Dedication' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                custom={index}
                className="text-center"
              >
                <stat.icon className="h-12 w-12 text-rose-400 mx-auto mb-4" />
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={itemVariants} className="space-y-8">
            <h2 className="text-4xl font-bold text-gray-900">
              Want to Join Our Mission?
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              We're always looking for passionate individuals who share our commitment 
              to helping others unlock their potential and create meaningful impact.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-rose-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-rose-600 transition-colors duration-200"
            >
              View Open Positions
            </motion.button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default TeamPage;