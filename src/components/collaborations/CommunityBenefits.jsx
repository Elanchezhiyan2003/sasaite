import React from 'react';
import { motion } from 'framer-motion';
import { Users, Lightbulb, Award, Calendar, MessageCircle, Zap, Heart, Code } from 'lucide-react';

const CommunityBenefits = () => {
  const membershipTiers = [
    {
      tier: "Explorer",
      description: "Perfect for beginners and curious minds",
      color: "from-blue-400 to-cyan-400",
      benefits: [
        "Access to community forums",
        "Monthly newsletter",
        "Basic resource library",
        "Virtual meetup invitations"
      ],
      commitment: "1-2 hours/week"
    },
    {
      tier: "Creator",
      description: "For active participants and contributors",
      color: "from-teal-400 to-green-400",
      benefits: [
        "All Explorer benefits",
        "Workshop participation",
        "Project collaboration access",
        "Mentorship opportunities",
        "Skill-sharing sessions"
      ],
      commitment: "3-5 hours/week"
    },
    {
      tier: "Innovator",
      description: "For leaders and community builders",
      color: "from-purple-400 to-pink-400",
      benefits: [
        "All Creator benefits",
        "Lead community projects",
        "Mentor other members",
        "Early access to new programs",
        "Direct input on community direction"
      ],
      commitment: "6+ hours/week"
    }
  ];

  const communityFeatures = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Collaborative Projects",
      description: "Work together on real createch projects that make a difference"
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Skill Sharing",
      description: "Learn from experts and share your own knowledge with the community"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Recognition Program",
      description: "Get recognized for your contributions and achievements"
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Regular Events",
      description: "Monthly workshops, quarterly meetups, and annual conferences"
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "Mentorship Network",
      description: "Connect with mentors and become a mentor yourself"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Innovation Challenges",
      description: "Participate in exciting challenges and competitions"
    }
  ];

  const successMetrics = [
    { number: "200+", label: "Active Members" },
    { number: "50+", label: "Completed Projects" },
    { number: "25+", label: "Monthly Events" },
    { number: "15+", label: "Countries Represented" }
  ];

  return (
    <div className="space-y-16">
      {/* Community Features */}
      <div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-playfair font-bold text-white mb-4">
            Community <span className="gradient-text">Features</span>
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Discover what makes our Creator Circle a thriving ecosystem of innovation and collaboration
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {communityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-effect rounded-xl p-6 hover-lift group text-center"
            >
              <div className="text-teal-400 mb-4 flex justify-center group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">{feature.title}</h4>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Membership Tiers */}
      <div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-playfair font-bold text-white mb-4">
            Membership <span className="gradient-text">Tiers</span>
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Choose your level of involvement based on your time and interests
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {membershipTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`glass-effect rounded-xl p-6 hover-lift ${
                index === 1 ? 'ring-2 ring-teal-400 scale-105' : ''
              }`}
            >
              <div className="text-center space-y-4">
                <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${tier.color} flex items-center justify-center text-black font-bold text-xl`}>
                  {tier.tier.charAt(0)}
                </div>
                
                <h4 className="text-2xl font-semibold text-white">{tier.tier}</h4>
                <p className="text-gray-300 text-sm">{tier.description}</p>
                
                <div className="space-y-2">
                  {tier.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400"></div>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-4 border-t border-gray-700">
                  <p className="text-xs text-gray-400">
                    <strong className="text-teal-400">Time Commitment:</strong> {tier.commitment}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Success Metrics */}
      <div className="bg-gradient-to-r from-teal-900/20 to-cyan-900/20 rounded-2xl p-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h3 className="text-3xl font-playfair font-bold text-white mb-4">
            Community <span className="gradient-text">Impact</span>
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            See the growing impact of our Creator Circle community
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {successMetrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold gradient-text mb-2">{metric.number}</div>
              <p className="text-gray-300 text-sm">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Community Guidelines */}
      <div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-playfair font-bold text-white mb-4">
            Community <span className="gradient-text">Guidelines</span>
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our shared values that make the Creator Circle a welcoming and productive space
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              icon: <Heart className="h-6 w-6" />,
              title: "Respect & Inclusivity",
              description: "We celebrate diverse perspectives and treat everyone with respect, regardless of background or experience level."
            },
            {
              icon: <Lightbulb className="h-6 w-6" />,
              title: "Knowledge Sharing",
              description: "We believe in open collaboration and sharing knowledge freely to help everyone grow and learn."
            },
            {
              icon: <Code className="h-6 w-6" />,
              title: "Quality & Innovation",
              description: "We strive for excellence in our work while encouraging experimentation and creative risk-taking."
            },
            {
              icon: <Users className="h-6 w-6" />,
              title: "Community First",
              description: "We prioritize the collective success of our community and support each other's growth and achievements."
            }
          ].map((guideline, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-effect rounded-xl p-6 hover-lift"
            >
              <div className="flex items-start space-x-4">
                <div className="text-teal-400 mt-1">
                  {guideline.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">{guideline.title}</h4>
                  <p className="text-gray-300 leading-relaxed text-sm">{guideline.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommunityBenefits;