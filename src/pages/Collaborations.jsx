import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Building, Users, Palette, Camera, Home, Heart, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import CreatorCircleForm from '@/components/collaborations/CreatorCircleForm';
import CommunityBenefits from '@/components/collaborations/CommunityBenefits';
import B2BCallForm from '@/components/collaborations/B2BCallForm';
import B2BConsultationInfo from '@/components/collaborations/B2BConsultationInfo';

const Collaborations = () => {
  const { toast } = useToast();
  const [showCreatorForm, setShowCreatorForm] = useState(false);
  const [showB2BForm, setShowB2BForm] = useState(false);

  const handleContactClick = (type) => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      duration: 3000,
    });
  };

  const handleJoinCreatorCircle = () => {
    setShowCreatorForm(true);
    // Scroll to form
    setTimeout(() => {
      document.getElementById('creator-circle-form')?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }, 100);
  };

  const handleBookB2BCall = () => {
    setShowB2BForm(true);
    // Scroll to form
    setTimeout(() => {
      document.getElementById('b2b-call-form')?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }, 100);
  };

  const b2bPartners = [
    {
      icon: <Home className="h-8 w-8" />,
      title: "Interior Designers",
      description: "Custom resin installations that transform spaces with embedded technology",
      services: ["Smart wall art", "Interactive installations", "Ambient lighting solutions", "Custom color schemes"]
    },
    {
      icon: <Camera className="h-8 w-8" />,
      title: "Photographers",
      description: "Tech-enhanced backdrops and props that respond to camera flashes and movement",
      services: ["Interactive photo props", "LED-responsive backdrops", "Smart photo frames", "Event installations"]
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Architects",
      description: "Structural resin elements with integrated smart features for modern buildings",
      services: ["Smart building elements", "Interactive facades", "Responsive installations", "Architectural accents"]
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Wedding Planners",
      description: "Memorable resin keepsakes and installations that capture the magic of special moments",
      services: ["Wedding centerpieces", "Memory preservation", "Interactive guest books", "Custom ceremonies"]
    }
  ];

  const creatorTypes = [
    {
      title: "Educators",
      description: "Teachers and professors looking to integrate createch into their curriculum",
      benefits: ["Educational resources", "Workshop materials", "Student project ideas", "Curriculum support"]
    },
    {
      title: "Coders",
      description: "Developers interested in exploring the intersection of code and physical art",
      benefits: ["Hardware integration", "IoT projects", "App development", "Tech mentorship"]
    },
    {
      title: "Resin Artists",
      description: "Traditional resin artists ready to explore the tech-enhanced possibilities",
      benefits: ["Tech integration training", "New market opportunities", "Skill expansion", "Collaboration projects"]
    },
    {
      title: "Hobbyists",
      description: "Creative individuals passionate about blending technology with hands-on crafting",
      benefits: ["Community access", "Project sharing", "Skill development", "Creative challenges"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Collaborations - B2B Partnerships & Creator Circle | Stasis Artis</title>
        <meta name="description" content="Partner with us for B2B collaborations or join our Creator Circle. Working with interior designers, photographers, architects, and creative professionals." />
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
                <span className="gradient-text">Collaborations</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300">
                B2B Partnerships & Creator Circle
              </p>
              <div className="glass-effect rounded-2xl p-6 max-w-2xl mx-auto">
                <p className="text-lg text-gray-300">
                  Building bridges between industries, creators, and innovators to expand the boundaries of what's possible in createch.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* B2B Partnerships */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-playfair font-bold gradient-text mb-4">
                B2B Partnerships
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transforming industries through strategic collaborations that blend creativity with technology
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {b2bPartners.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-effect rounded-xl p-8 hover-lift group"
                >
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="text-teal-400 group-hover:scale-110 transition-transform">
                        {partner.icon}
                      </div>
                      <h3 className="text-2xl font-playfair font-bold text-white">
                        {partner.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed">
                      {partner.description}
                    </p>
                    
                    <div className="space-y-2">
                      <h4 className="text-lg font-semibold text-teal-400">Our Services:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {partner.services.map((service, serviceIndex) => (
                          <div key={serviceIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400"></div>
                            <span className="text-gray-300 text-sm">{service}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Button
                      variant="outline"
                      className="w-full border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-black group-hover:scale-105 transition-transform"
                      onClick={handleBookB2BCall}
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      Book a B2B Call
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* B2B Consultation Info */}
        <section className="py-20 bg-gradient-to-b from-transparent to-gray-900/50">
          <div className="container mx-auto px-4">
            <B2BConsultationInfo />
          </div>
        </section>

        {/* B2B Call Form */}
        {showB2BForm && (
          <section id="b2b-call-form" className="py-20 bg-gradient-to-b from-gray-900/50 to-black">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
              >
                <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">
                  Schedule Your <span className="gradient-text">B2B Consultation</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Let's discuss how we can collaborate to bring innovative createch solutions to your business
                </p>
              </motion.div>

              <B2BCallForm />
            </div>
          </section>
        )}

        {/* Creator Circle */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">
                Creator <span className="gradient-text">Circle</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join our community of educators, coders, resin artists, techies, and hobbyists who are passionate about co-creating the future
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {creatorTypes.map((creator, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-effect rounded-xl p-6 hover-lift"
                >
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold text-white">{creator.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{creator.description}</p>
                    
                    <div className="space-y-2">
                      <h4 className="text-lg font-semibold text-teal-400">What You Get:</h4>
                      {creator.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400"></div>
                          <span className="text-gray-300 text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-black font-semibold px-8 py-3 rounded-full glow-effect hover-lift"
                onClick={handleJoinCreatorCircle}
              >
                <Users className="mr-2 h-5 w-5" />
                Join the Creator Circle
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Community Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <CommunityBenefits />
          </div>
        </section>

        {/* Collaboration Process */}
        <section className="py-20 bg-gradient-to-b from-transparent to-gray-900/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">
                How We <span className="gradient-text">Collaborate</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our collaborative process is designed to ensure every partnership creates maximum value for all involved
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Discovery Call",
                  description: "We start with understanding your vision, needs, and how createch can enhance your work or business."
                },
                {
                  step: "02",
                  title: "Collaborative Design",
                  description: "Together, we design solutions that perfectly blend your expertise with our createch capabilities."
                },
                {
                  step: "03",
                  title: "Co-Creation",
                  description: "We work side by side to bring the vision to life, ensuring every detail meets our shared standards."
                }
              ].map((process, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="text-center space-y-4"
                >
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 flex items-center justify-center text-black font-bold text-xl">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{process.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{process.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories Preview */}
        <section className="py-20 bg-gradient-to-r from-teal-900/20 to-cyan-900/20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <h2 className="text-4xl font-playfair font-bold text-white">
                  Success <span className="gradient-text">Stories</span>
                </h2>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    Our collaborations have resulted in groundbreaking installations, innovative products, and transformative educational experiences.
                  </p>
                  <p>
                    From smart wedding centerpieces that respond to music, to interactive architectural elements that change with the weather, our partnerships push the boundaries of what's possible.
                  </p>
                  <p>
                    Join our growing network of collaborators who are redefining their industries through the power of createch.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="glass-effect rounded-2xl p-8"
              >
                <img  
                  className="w-full h-64 object-cover rounded-xl mb-6" 
                  alt="Collaborative createch installation in a modern space"
                 src="https://images.unsplash.com/photo-1662353535661-202681bc2247" />
                <blockquote className="text-lg font-playfair italic text-center text-gray-300">
                  "Working with Stasis Artis transformed how we approach interior design. The smart resin installations don't just decorate spaces – they make them alive."
                </blockquote>
                <p className="text-teal-400 text-center mt-4">— Interior Design Partner</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Creator Circle Application Form */}
        {showCreatorForm && (
          <section id="creator-circle-form" className="py-20 bg-gradient-to-b from-gray-900/50 to-black">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
              >
                <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">
                  Join the <span className="gradient-text">Creator Circle</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Take the first step towards joining our vibrant community of createch innovators
                </p>
              </motion.div>

              <CreatorCircleForm />
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-8 max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white">
                Ready to <span className="gradient-text">Collaborate</span>?
              </h2>
              <p className="text-xl text-gray-300">
                Whether you're looking for a B2B partnership or want to join our Creator Circle, we're excited to explore what we can create together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-black font-semibold px-8 py-3 rounded-full glow-effect hover-lift"
                  onClick={handleBookB2BCall}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Book a B2B Call
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-black px-8 py-3 rounded-full hover-lift"
                  onClick={handleJoinCreatorCircle}
                >
                  <Users className="mr-2 h-5 w-5" />
                  Join Creator Circle
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Collaborations;