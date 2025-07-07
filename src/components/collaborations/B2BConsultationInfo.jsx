import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, CheckCircle, Star, Phone, Video, MapPin, Calendar } from 'lucide-react';

const B2BConsultationInfo = () => {
  const consultationTypes = [
    {
      type: "Discovery Call",
      duration: "30 minutes",
      description: "Initial consultation to understand your needs and explore possibilities",
      includes: [
        "Project requirement analysis",
        "Createch solution overview",
        "Feasibility assessment",
        "Next steps planning"
      ],
      bestFor: "First-time collaborators, Quick assessments"
    },
    {
      type: "Strategy Session",
      duration: "45-60 minutes",
      description: "Comprehensive planning session for detailed project development",
      includes: [
        "In-depth project planning",
        "Technical specifications",
        "Timeline & milestone planning",
        "Budget estimation",
        "Team introduction"
      ],
      bestFor: "Serious projects, Detailed planning needed"
    },
    {
      type: "Partnership Planning",
      duration: "60-90 minutes",
      description: "Strategic partnership discussion for long-term collaborations",
      includes: [
        "Partnership structure planning",
        "Revenue sharing models",
        "Joint venture opportunities",
        "Market expansion strategies",
        "Legal framework discussion"
      ],
      bestFor: "Long-term partnerships, Strategic alliances"
    }
  ];

  const preparationChecklist = [
    {
      category: "Before the Call",
      items: [
        "Prepare your project brief and requirements",
        "Gather reference materials and inspiration",
        "Define your budget range and timeline",
        "List key stakeholders who should be involved",
        "Prepare questions about our capabilities"
      ]
    },
    {
      category: "During the Call",
      items: [
        "Share your vision and project goals clearly",
        "Discuss technical requirements and constraints",
        "Ask about our previous similar projects",
        "Understand our development process",
        "Clarify next steps and deliverables"
      ]
    },
    {
      category: "After the Call",
      items: [
        "Review the consultation summary we provide",
        "Evaluate the proposed solution approach",
        "Discuss internally with your team",
        "Provide feedback on the initial proposal",
        "Confirm interest in moving forward"
      ]
    }
  ];

  const meetingOptions = [
    {
      type: "Video Conference",
      icon: <Video className="h-6 w-6" />,
      description: "Google Meet, Zoom, or Microsoft Teams",
      benefits: ["Screen sharing capabilities", "Recording available", "Multiple participants", "Document sharing"]
    },
    {
      type: "Phone Call",
      icon: <Phone className="h-6 w-6" />,
      description: "Traditional phone consultation",
      benefits: ["Simple and reliable", "No technical setup", "Clear audio quality", "Easy scheduling"]
    },
    {
      type: "In-Person Meeting",
      icon: <MapPin className="h-6 w-6" />,
      description: "Visit our studio in Coimbatore",
      benefits: ["Hands-on demonstrations", "See our workspace", "Meet the team", "Experience our creations"]
    }
  ];

  const successStories = [
    {
      client: "Luxury Interior Design Firm",
      project: "Smart Resin Wall Installation",
      result: "300% increase in client engagement, featured in design magazines",
      testimonial: "The createch installation became the centerpiece of our showroom."
    },
    {
      client: "Wedding Photography Studio",
      project: "Interactive Photo Props",
      result: "50+ bookings in first month, unique selling proposition",
      testimonial: "Our clients love the tech-enhanced photo experiences."
    },
    {
      client: "Corporate Office",
      project: "Branded Smart Decor",
      result: "Enhanced brand presence, improved employee satisfaction",
      testimonial: "The smart installations perfectly represent our innovation culture."
    }
  ];

  return (
    <div className="space-y-16">
      {/* Consultation Types */}
      <div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-playfair font-bold text-white mb-4">
            Consultation <span className="gradient-text">Options</span>
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Choose the consultation format that best fits your project needs and timeline
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {consultationTypes.map((consultation, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`glass-effect rounded-xl p-6 hover-lift ${
                index === 1 ? 'ring-2 ring-teal-400 scale-105' : ''
              }`}
            >
              <div className="space-y-4">
                <div className="text-center">
                  <h4 className="text-xl font-semibold text-white">{consultation.type}</h4>
                  <div className="flex items-center justify-center space-x-2 mt-2">
                    <Clock className="h-4 w-4 text-teal-400" />
                    <span className="text-teal-400 font-medium">{consultation.duration}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm leading-relaxed">
                  {consultation.description}
                </p>
                
                <div className="space-y-2">
                  <h5 className="text-sm font-semibold text-white">Includes:</h5>
                  {consultation.includes.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center space-x-2 text-xs text-gray-300">
                      <CheckCircle className="h-3 w-3 text-teal-400" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-3 border-t border-gray-700">
                  <p className="text-xs text-gray-400">
                    <strong className="text-teal-400">Best for:</strong> {consultation.bestFor}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Meeting Options */}
      <div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-playfair font-bold text-white mb-4">
            Meeting <span className="gradient-text">Formats</span>
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Flexible meeting options to accommodate your preferences and location
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {meetingOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-effect rounded-xl p-6 hover-lift"
            >
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-teal-400 mb-3 flex justify-center">
                    {option.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-white">{option.type}</h4>
                  <p className="text-gray-400 text-sm">{option.description}</p>
                </div>
                
                <div className="space-y-2">
                  {option.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400"></div>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Preparation Checklist */}
      <div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-playfair font-bold text-white mb-4">
            Preparation <span className="gradient-text">Checklist</span>
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Make the most of your consultation with proper preparation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {preparationChecklist.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-effect rounded-xl p-6 hover-lift"
            >
              <h4 className="text-lg font-semibold text-white mb-4">{section.category}</h4>
              <div className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start space-x-3">
                    <CheckCircle className="h-4 w-4 text-teal-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Success Stories */}
      <div className="bg-gradient-to-r from-teal-900/20 to-cyan-900/20 rounded-2xl p-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-playfair font-bold text-white mb-4">
            B2B Success <span className="gradient-text">Stories</span>
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            See how our B2B collaborations have transformed businesses
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {successStories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-effect rounded-xl p-6 hover-lift"
            >
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-white">{story.client}</h4>
                  <p className="text-teal-400 text-sm">{story.project}</p>
                </div>
                
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 text-sm leading-relaxed">
                  <strong className="text-white">Result:</strong> {story.result}
                </p>
                
                <blockquote className="text-gray-300 text-sm italic border-l-2 border-teal-400 pl-3">
                  "{story.testimonial}"
                </blockquote>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Next Steps */}
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass-effect rounded-xl p-8 max-w-2xl mx-auto"
        >
          <Calendar className="h-12 w-12 text-teal-400 mx-auto mb-4" />
          <h3 className="text-2xl font-playfair font-bold text-white mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-gray-300 mb-6">
            Schedule your B2B consultation today and discover how createch can transform your business.
          </p>
          <div className="space-y-2 text-sm text-gray-400">
            <p>✓ Free initial consultation</p>
            <p>✓ Custom solution proposal</p>
            <p>✓ No obligation to proceed</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default B2BConsultationInfo;