import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Users, Video, Award, Calendar, CheckCircle } from 'lucide-react';

const ApplicationProcess = () => {
  const processSteps = [
    {
      step: 1,
      icon: <FileText className="h-8 w-8" />,
      title: "Submit Application",
      description: "Complete our comprehensive application form with your background, motivation, and goals.",
      timeline: "5-10 minutes",
      details: [
        "Personal information",
        "Educational background",
        "Skills assessment",
        "Portfolio submission (optional)"
      ]
    },
    {
      step: 2,
      icon: <Users className="h-8 w-8" />,
      title: "Initial Screening",
      description: "Our team reviews applications and shortlists candidates based on fit and potential.",
      timeline: "3-5 business days",
      details: [
        "Application review",
        "Background verification",
        "Skills evaluation",
        "Motivation assessment"
      ]
    },
    {
      step: 3,
      icon: <Video className="h-8 w-8" />,
      title: "Virtual Interview",
      description: "One-on-one conversation with our createch experts to understand your passion and goals.",
      timeline: "30-45 minutes",
      details: [
        "Personal introduction",
        "Technical discussion",
        "Project interests",
        "Q&A session"
      ]
    },
    {
      step: 4,
      icon: <Award className="h-8 w-8" />,
      title: "Final Selection",
      description: "Selected candidates receive confirmation and program details to begin their createch journey.",
      timeline: "2-3 business days",
      details: [
        "Selection notification",
        "Program orientation",
        "Material kit dispatch",
        "Batch assignment"
      ]
    }
  ];

  const requirements = [
    {
      category: "Age & Education",
      items: [
        "Age: 16-35 years",
        "Minimum: 12th grade completed",
        "Any field of study welcome",
        "No prior experience required"
      ]
    },
    {
      category: "Technical Requirements",
      items: [
        "Basic computer literacy",
        "Stable internet connection",
        "Willingness to learn new tools",
        "Access to workspace at home"
      ]
    },
    {
      category: "Personal Qualities",
      items: [
        "Curiosity about art + technology",
        "Commitment to 4-week program",
        "Open to experimentation",
        "Collaborative mindset"
      ]
    }
  ];

  const batchInfo = [
    {
      batch: "Batch 1",
      startDate: "March 15, 2024",
      applicationDeadline: "March 1, 2024",
      status: "Open",
      seats: "8/12 filled"
    },
    {
      batch: "Batch 2",
      startDate: "April 15, 2024",
      applicationDeadline: "April 1, 2024",
      status: "Open",
      seats: "3/12 filled"
    },
    {
      batch: "Batch 3",
      startDate: "May 15, 2024",
      applicationDeadline: "May 1, 2024",
      status: "Coming Soon",
      seats: "0/12 filled"
    }
  ];

  return (
    <div className="space-y-16">
      {/* Application Process */}
      <div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-playfair font-bold text-white mb-4">
            Application <span className="gradient-text">Process</span>
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A simple 4-step process designed to find passionate individuals ready to explore createch
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, index) => (
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

      {/* Requirements */}
      <div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-playfair font-bold text-white mb-4">
            Who Can <span className="gradient-text">Apply</span>?
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We welcome diverse backgrounds and experiences. Here's what we're looking for:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {requirements.map((req, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-effect rounded-xl p-6 hover-lift"
            >
              <h4 className="text-xl font-semibold text-white mb-4">{req.category}</h4>
              <div className="space-y-3">
                {req.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-teal-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Batch Information */}
      <div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-playfair font-bold text-white mb-4">
            Upcoming <span className="gradient-text">Batches</span>
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Choose the batch that works best for your schedule. Limited seats available!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {batchInfo.map((batch, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`glass-effect rounded-xl p-6 hover-lift ${
                batch.status === 'Open' ? 'ring-2 ring-teal-400' : ''
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-xl font-semibold text-white">{batch.batch}</h4>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    batch.status === 'Open' 
                      ? 'bg-green-900/50 text-green-400' 
                      : 'bg-gray-700 text-gray-400'
                  }`}>
                    {batch.status}
                  </span>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-teal-400" />
                    <span className="text-gray-300">Starts: {batch.startDate}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FileText className="h-4 w-4 text-teal-400" />
                    <span className="text-gray-300">Apply by: {batch.applicationDeadline}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-teal-400" />
                    <span className="text-gray-300">Seats: {batch.seats}</span>
                  </div>
                </div>
                
                {batch.status === 'Open' && (
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-teal-400 to-cyan-400 h-2 rounded-full"
                      style={{ width: `${(parseInt(batch.seats.split('/')[0]) / 12) * 100}%` }}
                    ></div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ApplicationProcess;