import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Target, Heart, Lightbulb, Zap, Users } from 'lucide-react';

const VisionMission = () => {
  const visionPoints = [
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Redefining Art",
      description: "To make art interactive, responsive, and emotionally intelligent"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Technology with Soul",
      description: "Creating technology that enhances human connection rather than replacing it"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Global Movement",
      description: "Building a worldwide community of createch innovators and artists"
    }
  ];

  const missionPoints = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Bridge the Gap",
      description: "Connecting the worlds of traditional artistry and modern technology"
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Empower Women",
      description: "Leading as India's first women-led MSME createch studio"
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Educate & Inspire",
      description: "Teaching the next generation that creativity and code are perfect partners"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-transparent to-gray-900/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">
            Our Vision & <span className="gradient-text">Mission</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Driving the future of createch through innovation, education, and community
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Vision Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-effect rounded-2xl p-8 hover-lift"
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 flex items-center justify-center mb-4">
                <Eye className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-3xl font-playfair font-bold text-white">Our Vision</h3>
              <p className="text-gray-300 mt-2">Where we're heading</p>
            </div>

            <div className="space-y-6">
              {visionPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="text-teal-400 mt-1">
                    {point.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">{point.title}</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{point.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-gradient-to-r from-teal-900/20 to-cyan-900/20 rounded-xl">
              <blockquote className="text-center text-gray-300 italic">
                "To create a world where art and technology dance together in perfect harmony"
              </blockquote>
            </div>
          </motion.div>

          {/* Mission Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-effect rounded-2xl p-8 hover-lift"
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 flex items-center justify-center mb-4">
                <Target className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-3xl font-playfair font-bold text-white">Our Mission</h3>
              <p className="text-gray-300 mt-2">How we're getting there</p>
            </div>

            <div className="space-y-6">
              {missionPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="text-cyan-400 mt-1">
                    {point.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">{point.title}</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{point.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-gradient-to-r from-cyan-900/20 to-teal-900/20 rounded-xl">
              <blockquote className="text-center text-gray-300 italic">
                "Empowering creators to build the future, one resin piece at a time"
              </blockquote>
            </div>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-playfair font-bold text-white mb-8">
            Built on <span className="gradient-text">Core Values</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { value: "Innovation", description: "Pushing boundaries" },
              { value: "Inclusion", description: "Everyone belongs" },
              { value: "Integrity", description: "Authentic creation" },
              { value: "Impact", description: "Meaningful change" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-effect rounded-xl p-4 hover-lift"
              >
                <h4 className="text-lg font-semibold gradient-text mb-2">{item.value}</h4>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionMission;