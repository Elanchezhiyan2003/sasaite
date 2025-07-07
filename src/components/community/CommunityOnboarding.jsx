import React from 'react';
import { motion } from 'framer-motion';
import { Users, Calendar, MessageCircle, Award, Lightbulb, Heart, CheckCircle, Star } from 'lucide-react';

const CommunityOnboarding = () => {
  const onboardingSteps = [
    {
      step: 1,
      icon: <Users className="h-8 w-8" />,
      title: "Application Review",
      description: "Our team reviews your application and ensures you're a great fit for our community values.",
      timeline: "24-48 hours",
      details: [
        "Application assessment",
        "Background verification",
        "Community fit evaluation",
        "Welcome email sent"
      ]
    },
    {
      step: 2,
      icon: <MessageCircle className="h-8 w-8" />,
      title: "Welcome Orientation",
      description: "Join our virtual welcome session to meet the team and other new members.",
      timeline: "Within 1 week",
      details: [
        "Community introduction",
        "Platform walkthrough",
        "Meet your buddy",
        "Q&A session"
      ]
    },
    {
      step: 3,
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Skill Assessment",
      description: "Optional skill assessment to help us match you with relevant projects and mentors.",
      timeline: "First 2 weeks",
      details: [
        "Skills evaluation",
        "Interest mapping",
        "Project matching",
        "Mentor assignment"
      ]
    },
    {
      step: 4,
      icon: <Heart className="h-8 w-8" />,
      title: "Full Integration",
      description: "Start participating in projects, events, and become an active community member.",
      timeline: "Ongoing",
      details: [
        "Project participation",
        "Event attendance",
        "Mentorship activities",
        "Community contributions"
      ]
    }
  ];

  const membershipBenefits = [
    {
      category: "Learning & Growth",
      benefits: [
        "Access to exclusive workshops and masterclasses",
        "Personalized learning paths based on your goals",
        "Skill-building challenges and competitions",
        "Resource library with tutorials and guides",
        "Certification programs and badges"
      ]
    },
    {
      category: "Networking & Mentorship",
      benefits: [
        "1:1 mentorship matching program",
        "Peer mentoring circles",
        "Industry expert guest sessions",
        "Networking events and meetups",
        "Alumni network access"
      ]
    },
    {
      category: "Project Opportunities",
      benefits: [
        "Collaborative createch projects",
        "Open source contribution opportunities",
        "Client project participation",
        "Innovation challenges",
        "Portfolio building support"
      ]
    },
    {
      category: "Career Support",
      benefits: [
        "Job board access",
        "Resume and portfolio reviews",
        "Interview preparation sessions",
        "Career transition guidance",
        "Entrepreneurship support"
      ]
    }
  ];

  const communityPlatforms = [
    {
      platform: "Discord Server",
      description: "Real-time chat, voice channels, and project coordination",
      features: ["Daily discussions", "Voice meetups", "Screen sharing", "Project channels"]
    },
    {
      platform: "Learning Portal",
      description: "Structured courses, resources, and progress tracking",
      features: ["Video tutorials", "Interactive exercises", "Progress tracking", "Certificates"]
    },
    {
      platform: "Project Hub",
      description: "Collaborative workspace for community projects",
      features: ["Project boards", "File sharing", "Version control", "Team coordination"]
    },
    {
      platform: "Event Platform",
      description: "Virtual and in-person event management",
      features: ["Event calendar", "Registration", "Live streaming", "Recordings"]
    }
  ];

  const firstWeekActivities = [
    {
      day: "Day 1",
      activity: "Welcome Email & Platform Access",
      description: "Receive login credentials and platform tour"
    },
    {
      day: "Day 2-3",
      activity: "Profile Setup & Introduction",
      description: "Complete your profile and introduce yourself to the community"
    },
    {
      day: "Day 4-5",
      activity: "Buddy System Activation",
      description: "Get paired with a community buddy for guidance"
    },
    {
      day: "Day 6-7",
      activity: "First Project Exploration",
      description: "Browse ongoing projects and express interest"
    }
  ];

  return (
    <div className="space-y-16">
      {/* Onboarding Process */}
      <div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-playfair font-bold text-white mb-4">
            Onboarding <span className="gradient-text">Process</span>
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Your journey from application to becoming a fully integrated Nebulher community member
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {onboardingSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-effect rounded-xl p-6 hover-lift text-center"
            >
              <div className="space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 flex items-center justify-center text-black font-bold text-xl">
                  {step.step}
                </div>
                
                <div className="text-teal-400">
                  {step.icon}
                </div>
                
                <h4 className="text-lg font-semibold text-white">{step.title}</h4>
                
                <p className="text-gray-300 text-sm leading-relaxed">
                  {step.description}
                </p>
                
                <div className="text-xs text-teal-400 font-medium">
                  Timeline: {step.timeline}
                </div>
                
                <div className="space-y-1">
                  {step.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center space-x-2 text-xs text-gray-400">
                      <CheckCircle className="h-3 w-3 text-teal-400" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Membership Benefits */}
      <div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-playfair font-bold text-white mb-4">
            Membership <span className="gradient-text">Benefits</span>
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Comprehensive support for your personal and professional growth in the createch space
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {membershipBenefits.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-effect rounded-xl p-6 hover-lift"
            >
              <h4 className="text-xl font-semibold text-white mb-4">{category.category}</h4>
              <div className="space-y-3">
                {category.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-start space-x-3">
                    <Star className="h-4 w-4 text-teal-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Community Platforms */}
      <div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-playfair font-bold text-white mb-4">
            Community <span className="gradient-text">Platforms</span>
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Multiple platforms designed to support different aspects of your community experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {communityPlatforms.map((platform, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-effect rounded-xl p-6 hover-lift"
            >
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-white">{platform.platform}</h4>
                <p className="text-gray-300">{platform.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {platform.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* First Week Activities */}
      <div className="bg-gradient-to-r from-teal-900/20 to-cyan-900/20 rounded-2xl p-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-playfair font-bold text-white mb-4">
            Your First <span className="gradient-text">Week</span>
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A structured plan to help you get started and feel at home in the Nebulher community
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {firstWeekActivities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-effect rounded-xl p-6 text-center"
            >
              <div className="space-y-3">
                <div className="text-lg font-bold gradient-text">{activity.day}</div>
                <h4 className="text-white font-semibold">{activity.activity}</h4>
                <p className="text-gray-300 text-sm">{activity.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Success Metrics */}
      <div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-playfair font-bold text-white mb-4">
            Community <span className="gradient-text">Impact</span>
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            See the positive impact our community has on members' lives and careers
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "95%", label: "Member Satisfaction" },
            { number: "80%", label: "Career Advancement" },
            { number: "150+", label: "Projects Completed" },
            { number: "90%", label: "Skill Improvement" }
          ].map((metric, index) => (
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
    </div>
  );
};

export default CommunityOnboarding;