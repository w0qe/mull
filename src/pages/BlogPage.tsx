import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, ArrowRight, Mail } from 'lucide-react';
import BlogCard from '../components/BlogCard';
import { blogPosts } from '../data/mockData';

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('all');

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

  // Get all unique tags
  const allTags = ['all', ...Array.from(new Set(blogPosts.flatMap(post => post.tags)))];

  // Filter posts based on search and tag
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag === 'all' || post.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  const featuredPost = blogPosts[0];

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
              Insights & <span className="text-rose-400">Inspiration</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Practical strategies, mindset shifts, and actionable insights to help you 
              build confidence, find your purpose, and create lasting impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured Article
            </h2>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-gray-50 rounded-2xl overflow-hidden shadow-xl">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover min-h-[400px]"
                />
                <div className="absolute top-6 left-6">
                  <div className="flex flex-wrap gap-2">
                    {featuredPost.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-12 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{featuredPost.title}</h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                  <span>By {featuredPost.author}</span>
                  <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                  <span>{featuredPost.readTime}</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-rose-500 text-white px-6 py-3 rounded-lg hover:bg-rose-600 transition-colors duration-200 flex items-center space-x-2 self-start"
                >
                  <span>Read Full Article</span>
                  <ArrowRight size={16} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-rose-500"
              />
            </div>

            {/* Tags Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <div className="flex flex-wrap gap-2">
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200 ${
                      selectedTag === tag
                        ? 'bg-rose-500 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {tag.charAt(0).toUpperCase() + tag.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Latest Articles
            </h2>
            <p className="text-xl text-gray-600">
              {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post, index) => (
              <motion.div
                key={post.id}
                variants={itemVariants}
                custom={index}
              >
                <BlogCard post={post} />
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          <motion.div variants={itemVariants} className="flex justify-center mt-16">
            <div className="flex space-x-2">
              {[1, 2, 3].map((page) => (
                <button
                  key={page}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                    page === 1
                      ? 'bg-rose-500 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="w-16 h-16 bg-rose-500 rounded-full flex items-center justify-center mx-auto">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900">
              Never Miss an Insight
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Get weekly articles on personal growth, leadership, and creating impact 
              delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-rose-500"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-rose-500 text-white px-6 py-3 rounded-lg hover:bg-rose-600 transition-colors duration-200 font-semibold"
              >
                Subscribe
              </motion.button>
            </div>
            <p className="text-sm text-gray-500">
              Join 5,000+ readers. Unsubscribe anytime.
            </p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default BlogPage;