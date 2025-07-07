import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Calendar, Award, Users, Lightbulb, Code, Palette, Zap, CheckCircle, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import ApplicationForm from '@/components/internship/ApplicationForm';
import ApplicationProcess from '@/components/internship/ApplicationProcess';

const Internship = () => {
  const { toast } = useToast();
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  const handleApplyClick = () => {
    setShowApplicationForm(true);
    // Scroll to application form
    setTimeout(() => {
      document.getElementById('application-form')?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }, 100);
  };

  const handleDownloadBrochure = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      duration: 3000,
    });
  };

  const modules = [
    {
      week: 1,
      title: "Foundation: Resin + Embedded Systems",
      icon: <Lightbulb className="h-6 w-6" />,
      topics: [
        "Introduction to resin chemistry and properties",
        "Basic electronics and embedded systems",
        "Safety protocols and workspace setup",
        "Understanding color theory and pigments",
        "Simple circuit design principles"
      ],
      project: "Create your first LED-embedded resin piece"
    },
    {
      week: 2,
      title: "Fusion: Resin + LEDs/Motion",
      icon: <Zap className="h-6 w-6" />,
      topics: [
        "Advanced LED integration techniques",
        "Motion sensors and responsive systems",
        "Programming basics for interactive art",
        "Power management and battery systems",
        "Troubleshooting common issues"
      ],
      project: "Build a motion-responsive resin sculpture"
    },
    {
      week: 3,
      title: "Innovation: Build Smart Resin Product",
      icon: <Code className="h-6 w-6" />,
      topics: [
        "IoT integration and connectivity",
        "Mobile app interaction design",
        "Data visualization in art",
        "User experience in interactive art",
        "Prototyping and iteration methods"
      ],
      project: "Develop a smart resin product prototype"
    },
    {
      week: 4,
      title: "Showcase: Presentation + MSME Certificate",
      icon: <Award className="h-6 w-6" />,
      topics: [
        "Project documentation and presentation",
        "Portfolio development",
        "Business aspects of createch",
        "Marketing your creations",
        "Building your personal brand"
      ],
      project: "Final presentation and certification ceremony"
    }
  ];

  const benefits = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "MSME Certificate",
      description: "Official certification from India's first women-led MSME createch studio"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Website Feature",
      description: "Your work showcased on our official website and social media"
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "LinkedIn Badge",
      description: "Professional credential to enhance your LinkedIn profile"
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Project Portfolio",
      description: "Complete documentation of all your creations during the program"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Createch Internship Program - The Createch Capsule | Stasis Artis</title>
        <meta name="description" content="4-week intensive program combining resin art with embedded technology. Learn from Foundation to Innovation with MSME certification." />
      </Helmet>

      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-20 pattern-bg">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-6 max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-playfair font-bold">
                <span className="gradient-text">The Createch Capsule</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300">
                Resin Meets Tech: 4-Week Intensive Program
              </p>
              <div className="glass-effect rounded-2xl p-6 max-w-2xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold gradient-text">4</div>
                    <p className="text-sm text-gray-400">Weeks</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold gradient-text">4</div>
                    <p className="text-sm text-gray-400">Modules</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold gradient-text">1</div>
                    <p className="text-sm text-gray-400">Certificate</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold gradient-text">∞</div>
                    <p className="text-sm text-gray-400">Possibilities</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Program Overview */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-playfair font-bold gradient-text mb-4">
                Program Modules
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A comprehensive journey from foundation to innovation, designed to transform you into a createch artist
              </p>
            </motion.div>

            <div className="space-y-8">
              {modules.map((module, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="glass-effect rounded-2xl p-8 hover-lift"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 flex items-center justify-center text-black font-bold">
                          {module.week}
                        </div>
                        <div className="text-teal-400">
                          {module.icon}
                        </div>
                      </div>
                      <h3 className="text-2xl font-playfair font-bold text-white">
                        {module.title}
                      </h3>
                    </div>

                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-teal-400">Learning Topics:</h4>
                      {module.topics.map((topic, topicIndex) => (
                        <div key={topicIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300 text-sm">{topic}</span>
                        </div>
                      ))}
                    </div>

                    <div className="glass-effect rounded-xl p-4 bg-gradient-to-br from-teal-900/20 to-cyan-900/20">
                      <h4 className="text-lg font-semibold text-white mb-2">Week Project:</h4>
                      <p className="text-gray-300">{module.project}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-b from-transparent to-gray-900/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">
                Program <span className="gradient-text">Benefits</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                More than just learning - we're building your future in the createch industry
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-effect rounded-xl p-6 hover-lift group text-center"
                >
                  <div className="text-teal-400 mb-4 flex justify-center group-hover:scale-110 transition-transform">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Program Details */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <h2 className="text-4xl font-playfair font-bold text-white">
                  Why Choose <span className="gradient-text">Createch Capsule</span>?
                </h2>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    This isn't just another internship program. It's a transformative journey that bridges the gap between traditional artistry and cutting-edge technology.
                  </p>
                  <p>
                    You'll work directly with industry pioneers, learning not just the technical skills, but the creative mindset needed to innovate in the createch space.
                  </p>
                  <p>
                    By the end of 4 weeks, you'll have a portfolio of smart resin creations, industry connections, and the confidence to launch your own createch journey.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">Program Highlights:</h3>
                  {[
                    "Hands-on learning with real projects",
                    "One-on-one mentorship sessions",
                    "Access to professional tools and materials",
                    "Industry networking opportunities",
                    "Career guidance and placement support"
                  ].map((highlight, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-teal-400" />
                      <span className="text-gray-300">{highlight}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div className="glass-effect rounded-2xl p-8">
                  <img  
                    className="w-full h-64 object-cover rounded-xl mb-6" 
                    alt="Students working on createch projects in the internship program"
                   src="https://images.unsplash.com/photo-1703158008829-28d3ca94cee8" />
                  
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold text-white">Program Details</h3>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4 text-teal-400" />
                          <span className="text-gray-300">Duration: 4 Weeks</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="h-4 w-4 text-teal-400" />
                          <span className="text-gray-300">Batch Size: 12 Students</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Award className="h-4 w-4 text-teal-400" />
                          <span className="text-gray-300">Certification: MSME</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Lightbulb className="h-4 w-4 text-teal-400" />
                          <span className="text-gray-300">Mode: Hybrid</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Application Process Section */}
        <section className="py-20 bg-gradient-to-b from-transparent to-gray-900/50">
          <div className="container mx-auto px-4">
            <ApplicationProcess />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-teal-900/20 to-cyan-900/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-8 max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white">
                Ready to Start Your <span className="gradient-text">Createch Journey</span>?
              </h2>
              <p className="text-xl text-gray-300">
                Join the next batch of createch innovators and transform your creative potential into professional expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-black font-semibold px-8 py-3 rounded-full glow-effect hover-lift"
                  onClick={handleApplyClick}
                >
                  <FileText className="mr-2 h-5 w-5" />
                  Apply Now
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-black px-8 py-3 rounded-full hover-lift"
                  onClick={handleDownloadBrochure}
                >
                  Download Brochure
                </Button>
              </div>
              <p className="text-sm text-gray-400">
                Limited seats available. Applications close soon!
              </p>
            </motion.div>
          </div>
        </section>

        {/* Application Form Section */}
        {showApplicationForm && (
          <section id="application-form" className="py-20 bg-gradient-to-b from-gray-900/50 to-black">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
              >
                <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">
                  <span className="gradient-text">Application Form</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Take the first step towards your createch journey. Complete the form below to apply for our next batch.
                </p>
              </motion.div>

              <ApplicationForm />
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default Internship;