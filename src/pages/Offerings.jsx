
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Palette, Zap, HeartHandshake as Handshake, Package, Lightbulb, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Offerings = () => {
  const { toast } = useToast();

  const handleOrderClick = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      duration: 3000,
    });
  };

  const offerings = [
    {
      // title: "Craftware Studio",
      title: "Comming Soon",
      icon: <Palette className="h-8 w-8" />,
      description: "Handcrafted resin creations that capture memories and emotions",
      services: [
        "Personalized resin creations",
        "MIY Kits (Make-It-Yourself)",
        "Memory Capsules & StoryFrames",
        "Custom color palettes",
        "Preservation techniques"
      ],
      image: "Artisan hands working with colorful resin, creating beautiful translucent art pieces"
    },
    {
      // title: "Tech-Infused Artistry",
      title: "Commin Soon",
      icon: <Zap className="h-8 w-8" />,
      description: "Where technology meets artistry in perfect harmony",
      services: [
        "LED + Motion Interactive Art",
        "Smart Keepsakes",
        "AI-Personalized Resin Decor (Coming Soon)",
        "Sensor-responsive installations",
        "NFC-enabled art pieces"
      ],
      image: "Glowing resin art with embedded LED lights and electronic components creating mesmerizing patterns"
    },
    {
      // title: "Commission & Collab",
      title: "Comming Soon",
      icon: <Handshake className="h-8 w-8" />,
      description: "Collaborative creations for unique spaces and special moments",
      services: [
        "Artist Collaborations",
        "Interior Installations",
        "Storytelling Design Gifting",
        "Event-specific creations",
        "Brand partnership pieces"
      ],
      image: "Large-scale resin installation in a modern interior space with ambient lighting"
    }
  ];

  const kitTypes = [
    {
      type: "🎨 Art-Only Kits",
      description: "Resin pigments, molds, tools, guides",
      contents: ["Premium resin materials", "Color pigments", "Silicone molds", "Mixing tools", "Step-by-step guides"],
      price: "Starting from ₹1,999"
    },
    {
      type: "🔌 Tech-Only Kits",
      description: "Sensors, LEDs, NFC chips, solar panels",
      contents: ["LED strips & modules", "Motion sensors", "NFC chips", "Solar panels", "Programming guides"],
      price: "Starting from ₹2,499"
    },
    {
      type: "🌀 Fusion Kits",
      description: "Resin + Tech combined for smart resin builds",
      contents: ["Complete resin set", "Tech components", "Integration guides", "Project templates", "Support access"],
      price: "Starting from ₹3,999"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Offerings - Resin Art Meets Technology | Stasis Artis</title>
        <meta name="description" content="Explore our three pillars: Craftware Studio, Tech-Infused Artistry, and Commission & Collab. Discover MIY kits and custom creations." />
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
                Our <span className="gradient-text">Offerings</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300">
                Three pillars of creativity where emotion meets innovation
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Offerings */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="space-y-20">
              {offerings.map((offering, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="flex items-center space-x-4">
                      <div className="text-teal-400">
                        {offering.icon}
                      </div>
                      <h2 className="text-4xl font-playfair font-bold text-white">
                        {offering.title}
                      </h2>
                    </div>
                    
                    <p className="text-xl text-gray-300 leading-relaxed">
                      {offering.description}
                    </p>
                    
                    <div className="space-y-3">
                      {offering.services.map((service, serviceIndex) => (
                        <div key={serviceIndex} className="flex items-center space-x-3">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400"></div>
                          <span className="text-gray-300">{service}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button
                      className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-black font-semibold px-6 py-3 rounded-full hover-lift"
                      onClick={handleOrderClick}
                    >
                      Explore {offering.title}
                    </Button>
                  </div>
                  
                  <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="glass-effect rounded-2xl p-4 hover-lift">
                      <img  
                        className="w-full h-80 object-cover rounded-xl" 
                        alt={`${offering.title} showcase`}
                       src="https://images.unsplash.com/photo-1632237405949-50d7c6fa975d" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* MIY Kits Section */}
        <section className="py-20 bg-gradient-to-b from-transparent to-gray-900/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-playfair font-bold gradient-text mb-4">
                MIY Kit Collection
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Make-It-Yourself kits designed to bring the magic of createch to your home
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {kitTypes.map((kit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="glass-effect rounded-xl p-6 hover-lift group"
                >
                  <div className="text-center space-y-4">
                    <h3 className="text-2xl font-semibold text-white">{kit.type}</h3>
                    <p className="text-gray-300">{kit.description}</p>
                    
                    <div className="space-y-2">
                      {kit.contents.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                          <Package className="h-4 w-4 text-teal-400" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="pt-4 border-t border-gray-700">
                      <p className="text-lg font-semibold gradient-text">{kit.price}</p>
                    </div>
                    
                    <Button
                      variant="outline"
                      className="w-full border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-black group-hover:scale-105 transition-transform"
                      onClick={handleOrderClick}
                    >
                      {/* Order Kit */}
                      Comming Soon
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Special Features */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">
                What Makes Us <span className="gradient-text">Special</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Heart className="h-8 w-8" />,
                  title: "Emotion-Encoded",
                  description: "Every piece carries the story and emotion you want to preserve forever."
                },
                {
                  icon: <Lightbulb className="h-8 w-8" />,
                  title: "Smart Integration",
                  description: "Seamlessly blend traditional artistry with cutting-edge technology."
                },
                {
                  icon: <Package className="h-8 w-8" />,
                  title: "Complete Kits",
                  description: "Everything you need to create your own masterpiece, with expert guidance."
                },
                {
                  icon: <Handshake className="h-8 w-8" />,
                  title: "Personal Touch",
                  description: "Each creation is uniquely yours, crafted with attention to your vision."
                },
                {
                  icon: <Zap className="h-8 w-8" />,
                  title: "Interactive Elements",
                  description: "Art that responds, changes, and evolves with its environment."
                },
                {
                  icon: <Palette className="h-8 w-8" />,
                  title: "Endless Possibilities",
                  description: "From simple keepsakes to complex installations, we bring ideas to life."
                }
              ].map((feature, index) => (
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
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
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
                Ready to Create Your <span className="gradient-text">Masterpiece</span>?
              </h2>
              <p className="text-xl text-gray-300">
                Whether you're looking for a custom creation or want to try your hand at our MIY kits, we're here to guide you through the journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-black font-semibold px-8 py-3 rounded-full glow-effect hover-lift"
                  onClick={handleOrderClick}
                >
                  Start Your Project
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-black px-8 py-3 rounded-full hover-lift"
                  onClick={handleOrderClick}
                >
                  Browse Kits
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Offerings;
