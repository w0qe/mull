import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, TrendingUp, Heart, Target, Zap } from 'lucide-react';

const AboutPage: React.FC = () => {
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

  const milestones = [
    { year: '2015', title: 'Started Coaching Journey', description: 'Began helping individuals unlock their potential' },
    { year: '2017', title: 'First Keynote Speech', description: 'Delivered transformational talk to 500+ audience' },
    { year: '2019', title: 'Founded Coaching Practice', description: 'Established comprehensive coaching programs' },
    { year: '2021', title: 'Published Methodology', description: 'Developed signature confidence-building framework' },
    { year: '2023', title: 'Global Recognition', description: 'Featured in major publications and podcasts' },
    { year: '2024', title: 'Impact Milestone', description: 'Helped 500+ individuals transform their lives' },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Authenticity',
      description: 'Being true to yourself is the foundation of all meaningful success.'
    },
    {
      icon: Target,
      title: 'Purpose-Driven',
      description: 'Every action should align with your deeper purpose and values.'
    },
    {
      icon: Zap,
      title: 'Transformation',
      description: 'Real change happens when we commit to continuous growth and evolution.'
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                My Journey to{' '}
                <span className="text-rose-400">Empowering</span>{' '}
                Others
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                From struggling with self-doubt to helping hundreds find their confidence, 
                purpose, and create lasting impact in their lives and careers.
              </p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Jordan Reeve"
                className="rounded-2xl shadow-2xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="space-y-8">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
              The Story Behind the Mission
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
              <p>
                My journey wasn't always about confidence and purpose. In fact, it started from quite the opposite place. 
                Early in my career, I struggled with imposter syndrome, unclear direction, and the constant feeling that 
                I wasn't living up to my potential.
              </p>
              
              <p>
                It was during this challenging period that I discovered the transformative power of intentional personal 
                development. Through mentorship, self-reflection, and a commitment to growth, I began to unlock parts of 
                myself I never knew existed. The confidence I built, the clarity I gained, and the impact I started making 
                changed everything.
              </p>
              
              <p>
                This transformation was so profound that I knew I had to share it with others. I began coaching friends 
                and colleagues, speaking at local events, and developing frameworks that could help others experience 
                similar breakthroughs. What started as personal healing became a mission to help others find their own 
                path to confidence, purpose, and impact.
              </p>
              
              <p>
                Today, I've had the privilege of working with hundreds of individuals from all walks of life - entrepreneurs, 
                executives, creatives, and change-makers. Each person's journey is unique, but the core principles remain 
                the same: authentic self-awareness, purposeful action, and the courage to step into your full potential.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Journey Milestones
            </h2>
            <p className="text-xl text-gray-600">
              Key moments that shaped my mission and approach
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-rose-200"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  variants={itemVariants}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                      <div className="text-rose-500 font-bold text-lg mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-rose-500 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Core Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything I do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={itemVariants}
                className="text-center p-8 bg-gray-50 rounded-2xl"
              >
                <value.icon className="w-12 h-12 text-rose-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Impact by the Numbers</h2>
            <p className="text-xl text-gray-300">
              The results speak for themselves
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, number: '500+', label: 'Lives Transformed' },
              { icon: Award, number: '50+', label: 'Speaking Events' },
              { icon: TrendingUp, number: '95%', label: 'Success Rate' },
              { icon: Heart, number: '10+', label: 'Years Experience' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
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

      {/* Video/Media Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              See Me in Action
            </h2>
            <p className="text-xl text-gray-600">
              Watch highlights from recent speaking engagements and coaching sessions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-rose-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                    </svg>
                  </div>
                  <p className="text-gray-600">Keynote: "Building Unshakeable Confidence"</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-sky-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                    </svg>
                  </div>
                  <p className="text-gray-600">Workshop: "Finding Your Purpose"</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutPage;