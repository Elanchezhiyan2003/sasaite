import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Zap, Heart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import VisionMission from "@/components/home/VisionMission";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Stasis Artis - Code n Craft</title>
        <meta
          name="description"
          content="India's First Women-Led MSME-Registered Createch Studio, fusing resin art with embedded technology. Sculpting emotion through resin and code."
        />
      </Helmet>

      <div className="min-h-screen bg-ivory">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Image */}

              {/* Right Side - Text Content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <h1 className="text-4xl md:text-6xl font-playfair font-bold text-gray-900 leading-tight">
                  <span className="gradient-text">Art Isn't Static</span>
                  <br />
                  <span>Neither Are We</span>
                </h1>

                <p className="text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed">
                  We don't just make art. We encode memories into materials —
                  blending handcrafted resin design with digital fluidity,
                  intelligent motion, and emotional software.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/experience">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-black font-semibold px-8 py-3 rounded-full glow-effect hover-lift"
                    >
                      <Sparkles className="mr-2 h-5 w-5" />
                      Experience the Fusion
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-black px-8 py-3 rounded-full hover-lift"
                    >
                      <Zap className="mr-2 h-5 w-5" />
                      Create With Us
                    </Button>
                  </Link>
                </div>
                {/* 
        <blockquote className="mt-8 italic font-playfair text-gray-700 text-lg">
          "In a world of automation, we choose sensation. In a world of code, we choose craft."
          <p className="text-teal-400 mt-2">— Our Manifesto</p>
        </blockquote> */}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full"
              >
                <img
                  src="https://images.unsplash.com/photo-1581094271901-8022df4466f9"
                  alt="Resin Tech Art"
                  className="w-full h-auto rounded-2xl shadow-lg object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>
        {/* <section className="w-full bg-teal-600 py-8">
          <div className="container mx-auto px-4">
            <p className="text-center text-white text-lg md:text-xl font-playfair italic tracking-wide">
              "In a world of automation, we choose sensation. In a world of
              code, we choose craft."
              <span className="font-semibold"> — Our Manifesto</span>
            </p>
          </div>
        </section> */}
        <section className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 py-12">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
              {/* Manifesto Heading with vertical border */}
              <div className="flex justify-center md:justify-end">
                <h2 className="text-3xl md:text-4xl font-bold font-playfair text-ivory text-right border-r-4 border-white pr-6">
                  Our
                  <br />
                  Manifesto
                </h2>
              </div>

              {/* Manifesto Quote */}
              <div className="pl-0 md:pl-6 text-left">
                <p className="text-white text-lg md:text-xl font-playfair italic tracking-wide leading-relaxed">
                  "In a world of automation, we choose sensation. In a world of
                  code, we choose craft."
                </p>
                <p className="text-black text-md mt-2 font-semibold">
                  — The Fusion Philosophy
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="relative py-2 bg-gradient-to-b from-transparent to-gray-900/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
            </motion.div>
            <section className="py-20">
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Left Text Side */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-10 lg:pr-8"
                  >
                    <h2 className="text-4xl font-playfair font-bold gradient-text">
                      The Vision Behind{" "}
                      <span className="gradient-text">Stasis Artis</span>
                    </h2>
                    <div className="space-y-5 text-black leading-relaxed">
                      <p>
                        In a world that constantly asks us to choose between
                        logic and creativity, between technology and art, we
                        refused to pick a side. As a woman in tech, I've always
                        believed that the most beautiful innovations happen at
                        the intersection of seemingly opposite worlds.
                      </p>
                      <p>
                        Stasis Artis was born from a simple yet revolutionary
                        idea: What if we could encode emotions into materials?
                        What if resin could hold not just pigments, but
                        memories? What if circuits could carry not just
                        electricity, but feelings?
                      </p>
                      <p>
                        This isn't just about creating pretty objects. It's
                        about challenging the notion that technology must be
                        cold, that art must be static, that creativity and code
                        can't coexist in perfect harmony.
                      </p>
                    </div>
                  </motion.div>

                  {/* Right Image Side */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                  >
                    <div className="glass-effect rounded-2xl p-8 space-y-4 h-full flex flex-col justify-between">
                      <img
                        className="w-full h-64 object-cover rounded-xl"
                        alt="Asmiya Bincy working on resin art with embedded technology"
                        src="https://images.unsplash.com/photo-1581094271901-8022df4466f9"
                      />
                      <div className="text-center mt-4">
                        <h3 className="text-xl font-semibold text-white">
                          Asmiya Bincy
                        </h3>
                        <p className="text-teal-400">
                          Founder & Creative Technologist
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>

            {/* <Link to="/about" className='mt-8 flex justify-start '>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-black font-semibold px-8 py-3 rounded-full glow-effect hover-lift"
                  >
                    <Sparkles className="mr-2 h-5 w-5" />
                    About Us <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link> */}
          </div>
        </section>

        {/* Vision & Mission Section */}
        {/* <VisionMission /> */}
        <div className="mt-44 mb-10 container mx-auto px-4">
          <h2 className="text-4xl font-playfair font-bold text-white text-center ">
            What we offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-16  mx-auto px-4">
            {[
              {
                icon: <Heart className="h-8 w-8" />,
                title: "Code",
                description:
                  "We embed feelings into circuits, creating tech that responds to human emotion and connection.",
              },
              {
                icon: <Sparkles className="h-8 w-8" />,
                title: "Craft",
                description:
                  "Handcrafted resin creations that capture memories, stories, and moments in crystalline beauty.",
              },
              {
                icon: <Zap className="h-8 w-8" />,
                title: "Code n Craft",
                description:
                  "LEDs, sensors, and interactive elements that bring static art to dynamic life.",
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Programs",
                description:
                  "Building a ecosystem of creators, coders, and dreamers who refuse to pick just one title.",
              },
              {
                icon: <ArrowRight className="h-8 w-8" />,
                title: "Bulk Orders",
                description:
                  "India's first women-led MSME-registered createch studio, pioneering the fusion movement.",
              },
              {
                icon: <Heart className="h-8 w-8" />,
                title: "Createch Internship",
                description:
                  "Teaching the next generation that creativity and technology are not opposites, but partners.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-effect rounded-xl p-6 hover-lift group"
              >
                <div className="text-teal-400 mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-28 mx-auto px-4">
              {[
                {
                  icon: <Heart className="h-8 w-8" />,
                  title: "Emotional Technology",
                  description: "We embed feelings into circuits, creating tech that responds to human emotion and connection."
                },
                {
                  icon: <Sparkles className="h-8 w-8" />,
                  title: "Resin Artistry",
                  description: "Handcrafted resin creations that capture memories, stories, and moments in crystalline beauty."
                },
                {
                  icon: <Zap className="h-8 w-8" />,
                  title: "Smart Integration",
                  description: "LEDs, sensors, and interactive elements that bring static art to dynamic life."
                },
                {
                  icon: <Users className="h-8 w-8" />,
                  title: "Community Driven",
                  description: "Building a ecosystem of creators, coders, and dreamers who refuse to pick just one title."
                },
                {
                  icon: <ArrowRight className="h-8 w-8" />,
                  title: "MSME Certified",
                  description: "India's first women-led MSME-registered createch studio, pioneering the fusion movement."
                },
                {
                  icon: <Heart className="h-8 w-8" />,
                  title: "Educational Impact",
                  description: "Teaching the next generation that creativity and technology are not opposites, but partners."
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-effect rounded-xl p-6 hover-lift group"
                >
                  <div className="text-teal-400 mb-4 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div> */}

        {/* Quote Section */}
        {/* <section className="py-20 bg-gradient-to-r from-teal-900/20 to-cyan-900/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <blockquote className="text-3xl md:text-4xl font-playfair italic text-white mb-6">
                "Why choose between circuits and color, when both can hold emotion?"
              </blockquote>
              <p className="text-teal-400 text-lg">— Asmiya Bincy, Founder</p>
            </motion.div>
          </div>
        </section> */}

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white">
                Ready to Create Something{" "}
                <span className="gradient-text">Extraordinary</span>?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Join us in redefining what's possible when art meets technology,
                when craft meets code.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/offerings">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-black font-semibold px-8 py-3 rounded-full glow-effect hover-lift"
                  >
                    Explore Our Offerings
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-black px-8 py-3 rounded-full hover-lift"
                  >
                    Get In Touch
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
