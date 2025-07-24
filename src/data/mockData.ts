import { Service, Testimonial, TeamMember, BlogPost, Package } from '../types';

export const services: Service[] = [
  {
    id: 1,
    title: "1-on-1 Coaching",
    description: "Personalized coaching sessions to unlock your potential and achieve your goals.",
    icon: "👤",
    features: [
      "Weekly 60-minute sessions",
      "Personalized action plans",
      "Goal tracking & accountability",
      "Email support between sessions"
    ],
    price: "$200",
    duration: "per session"
  },
  {
    id: 2,
    title: "Keynote Speaking",
    description: "Inspiring presentations that motivate and transform your audience.",
    icon: "🎤",
    features: [
      "Customized content for your event",
      "Interactive audience engagement",
      "Post-event resources",
      "Virtual or in-person delivery"
    ],
    price: "$5,000",
    duration: "per event"
  },
  {
    id: 3,
    title: "Personal Brand Strategy",
    description: "Build an authentic brand that resonates with your target audience.",
    icon: "🎯",
    features: [
      "Brand audit & analysis",
      "Content strategy development",
      "Social media optimization",
      "Brand guidelines creation"
    ],
    price: "$1,500",
    duration: "4-week program"
  },
  {
    id: 4,
    title: "Leadership Development",
    description: "Develop the leadership skills needed to inspire and guide others.",
    icon: "👑",
    features: [
      "Leadership assessment",
      "Skills development plan",
      "Team dynamics training",
      "Ongoing mentorship"
    ],
    price: "$300",
    duration: "per session"
  }
];

export const packages: Package[] = [
  {
    id: 1,
    name: "Starter Package",
    tier: "Bronze",
    price: "$997",
    duration: "4 weeks",
    features: [
      "4 x 1-hour coaching sessions",
      "Goal setting & action planning",
      "Email support",
      "Resource library access"
    ]
  },
  {
    id: 2,
    name: "Growth Package",
    tier: "Gold",
    price: "$2,497",
    duration: "12 weeks",
    features: [
      "12 x 1-hour coaching sessions",
      "Personal brand audit",
      "Content strategy development",
      "Weekly check-ins",
      "Priority email support",
      "Group mastermind access"
    ],
    popular: true
  },
  {
    id: 3,
    name: "Transformation Package",
    tier: "VIP",
    price: "$4,997",
    duration: "6 months",
    features: [
      "24 x 1-hour coaching sessions",
      "Complete brand overhaul",
      "Speaking opportunity coaching",
      "Daily text support",
      "Monthly group calls",
      "Lifetime resource access",
      "1-on-1 strategy sessions"
    ]
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sam Martinez",
    role: "Creative Director",
    company: "Design Studio",
    content: "Jordan helped me unlock my potential. Game-changing experience that transformed how I approach leadership and creativity.",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 5
  },
  {
    id: 2,
    name: "Emily Chen",
    role: "Startup Founder",
    company: "TechFlow",
    content: "Working with Jordan was the best investment I made for my business. His insights on personal branding were invaluable.",
    image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 5
  },
  {
    id: 3,
    name: "Marcus Johnson",
    role: "Sales Manager",
    company: "Global Corp",
    content: "Jordan's coaching helped me develop the confidence to lead my team effectively. The results speak for themselves.",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 5
  },
  {
    id: 4,
    name: "Sarah Williams",
    role: "Marketing Director",
    company: "Brand Agency",
    content: "The personal brand strategy session was eye-opening. Jordan helped me find my authentic voice and purpose.",
    image: "https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 5
  },
  {
    id: 5,
    name: "David Rodriguez",
    role: "Executive Coach",
    company: "Leadership Institute",
    content: "Jordan's approach to leadership development is refreshing and effective. Highly recommend his services.",
    image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 5
  },
  {
    id: 6,
    name: "Lisa Thompson",
    role: "Entrepreneur",
    company: "Wellness Co",
    content: "The transformation I experienced working with Jordan exceeded all my expectations. Truly life-changing.",
    image: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 5
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Maya Lopez",
    role: "Executive Assistant",
    bio: "Maya ensures everything runs smoothly behind the scenes. With 8 years of experience in executive support, she's the backbone of our operations.",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400",
    social: {
      linkedin: "https://linkedin.com/in/mayalopez",
      instagram: "https://instagram.com/mayalopez"
    }
  },
  {
    id: 2,
    name: "Rico Torres",
    role: "Content Director",
    bio: "Rico crafts compelling content that resonates with our audience. His creative vision and strategic thinking drive our content marketing efforts.",
    image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400",
    social: {
      linkedin: "https://linkedin.com/in/ricotorres",
      twitter: "https://twitter.com/ricotorres",
      instagram: "https://instagram.com/ricotorres"
    }
  },
  {
    id: 3,
    name: "Aaliyah Kim",
    role: "Media & PR",
    bio: "Aaliyah manages our media relationships and public presence. Her expertise in PR and communications helps amplify our message.",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400",
    social: {
      linkedin: "https://linkedin.com/in/aaliyahkim",
      twitter: "https://twitter.com/aaliyahkim"
    }
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "5 Mindset Shifts That Changed My Life",
    excerpt: "Discover the powerful mindset changes that transformed my approach to success and fulfillment.",
    content: "Full blog content here...",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    author: "Jordan Reeve",
    date: "2024-01-15",
    tags: ["Mindset", "Personal Growth", "Success"],
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Building a Brand That Feels Like You",
    excerpt: "Learn how to create an authentic personal brand that truly represents who you are and what you stand for.",
    content: "Full blog content here...",
    image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800",
    author: "Jordan Reeve",
    date: "2024-01-10",
    tags: ["Branding", "Authenticity", "Marketing"],
    readTime: "7 min read"
  },
  {
    id: 3,
    title: "How to Grow Without Burning Out",
    excerpt: "Sustainable growth strategies that help you achieve your goals while maintaining your well-being.",
    content: "Full blog content here...",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
    author: "Jordan Reeve",
    date: "2024-01-05",
    tags: ["Growth", "Wellness", "Productivity"],
    readTime: "6 min read"
  },
  {
    id: 4,
    title: "The Power of Authentic Leadership",
    excerpt: "Why authentic leadership is more important than ever and how to develop your unique leadership style.",
    content: "Full blog content here...",
    image: "https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=800",
    author: "Jordan Reeve",
    date: "2023-12-28",
    tags: ["Leadership", "Authenticity", "Management"],
    readTime: "8 min read"
  },
  {
    id: 5,
    title: "Finding Your Purpose in a Noisy World",
    excerpt: "Cut through the noise and discover what truly matters to you with these practical strategies.",
    content: "Full blog content here...",
    image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800",
    author: "Jordan Reeve",
    date: "2023-12-20",
    tags: ["Purpose", "Clarity", "Life Design"],
    readTime: "9 min read"
  },
  {
    id: 6,
    title: "The Art of Confident Communication",
    excerpt: "Master the skills of confident communication to enhance your personal and professional relationships.",
    content: "Full blog content here...",
    image: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800",
    author: "Jordan Reeve",
    date: "2023-12-15",
    tags: ["Communication", "Confidence", "Skills"],
    readTime: "6 min read"
  }
];