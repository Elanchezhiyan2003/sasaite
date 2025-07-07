
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Heart, Code, Palette, Award, Users, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Where Code Meets Craft | Stasis Artis</title>
        <meta name="description" content="Discover the story of Asmiya Bincy and how Stasis Artis was born to merge logic and light, tech and tenderness, circuits and creativity." />
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
                <span className="gradient-text">Where Code Meets Craft</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300">
                My Journey as Asmiya Bincy
              </p>
              <div className="glass-effect rounded-2xl p-8 mt-8">
                <blockquote className="text-lg md:text-xl font-playfair italic">
                  "Why choose between circuits and color, when both can hold emotion?"
                </blockquote>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Founder Story */}
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
                  The Vision Behind <span className="gradient-text">Stasis Artis</span>
                </h2>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    In a world that constantly asks us to choose between logic and creativity, between technology and art, I refused to pick a side. As a woman in tech, I've always believed that the most beautiful innovations happen at the intersection of seemingly opposite worlds.
                  </p>
                  <p>
                    Stasis Artis was born from a simple yet revolutionary idea: What if we could encode emotions into materials? What if resin could hold not just pigments, but memories? What if circuits could carry not just electricity, but feelings?
                  </p>
                  <p>
                    This isn't just about creating pretty objects. It's about challenging the notion that technology must be cold, that art must be static, that creativity and code can't coexist in perfect harmony.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="glass-effect rounded-2xl p-8 space-y-6">
                  <img  
                    className="w-full h-64 object-cover rounded-xl" 
                    alt="Asmiya Bincy working on resin art with embedded technology"
                   src="https://images.unsplash.com/photo-1581094271901-8022df4466f9" />
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-white">Asmiya Bincy</h3>
                    <p className="text-teal-400">Founder & Creative Technologist</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-20 bg-gradient-to-b from-transparent to-gray-900/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-playfair font-bold gradient-text mb-4">
                Our Mission & Values
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Building bridges between worlds that were never meant to be separate
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Heart className="h-8 w-8" />,
                  title: "Emotion First",
                  description: "Every creation starts with a feeling, a memory, a story that deserves to be preserved and shared."
                },
                {
                  icon: <Code className="h-8 w-8" />,
                  title: "Tech with Purpose",
                  description: "Technology should enhance human connection, not replace it. We use code to amplify emotion."
                },
                {
                  icon: <Palette className="h-8 w-8" />,
                  title: "Handcrafted Excellence",
                  description: "In an age of mass production, we believe in the irreplaceable value of human touch and artistry."
                },
                {
                  icon: <Users className="h-8 w-8" />,
                  title: "Community Driven",
                  description: "We're building an ecosystem where creators, coders, and dreamers can collaborate and grow together."
                },
                {
                  icon: <Award className="h-8 w-8" />,
                  title: "Women Leadership",
                  description: "Proudly India's first women-led MSME-registered createch studio, paving the way for others."
                },
                {
                  icon: <Lightbulb className="h-8 w-8" />,
                  title: "Educational Impact",
                  description: "Teaching the next generation that creativity and logic are not opposites, but perfect partners."
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-effect rounded-xl p-6 hover-lift group text-center"
                >
                  <div className="text-teal-400 mb-4 flex justify-center group-hover:scale-110 transition-transform">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* MSME Recognition */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="glass-effect rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto"
            >
              <div className="space-y-6">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 flex items-center justify-center">
                  <Award className="h-8 w-8 text-black" />
                </div>
                <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white">
                  MSME Registered Enterprise
                </h2>
                {/* <div className="space-y-2 text-gray-300">
                  <p className="text-lg">
                    <strong className="text-teal-400">Registration Number:</strong> UDYAM-TN-02-00069559HH
                  </p>
                  <p>
                    <strong className="text-teal-400">Category:</strong> Micro Enterprise – Manufacturing & Services
                  </p>
                  <p>
                    <strong className="text-teal-400">Location:</strong> Coimbatore, Tamil Nadu
                  </p>
                </div> */}
                <p className="text-lg text-gray-300 leading-relaxed">
                  As India's first women-led MSME-registered createch studio, we're not just creating art and technology – we're creating opportunities, inspiring change, and proving that innovation knows no boundaries.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Philosophy Quote */}
        <section className="py-20 bg-gradient-to-r from-teal-900/20 to-cyan-900/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto space-y-8"
            >
              <blockquote className="text-3xl md:text-4xl font-playfair italic text-white">
                "In a world of automation, we choose sensation. In a world of code, we choose craft. But most importantly, we choose both."
              </blockquote>
              <p className="text-teal-400 text-lg">— The Stasis Artis Philosophy</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">2024</div>
                  <p className="text-gray-300">Founded</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">1st</div>
                  <p className="text-gray-300">Women-Led Createch Studio</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">∞</div>
                  <p className="text-gray-300">Possibilities Ahead</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
