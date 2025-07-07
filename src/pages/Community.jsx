import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Users, Heart, Code, Palette, Lightbulb, Star, Calendar, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import CommunityJoinForm from '@/components/community/CommunityJoinForm';
import CommunityOnboarding from '@/components/community/CommunityOnboarding';

const Community = () => {
  const { toast } = useToast();
  const [showJoinForm, setShowJoinForm] = useState(false);

  const handleJoinClick = () => {
    setShowJoinForm(true);
    // Scroll to form
    setTimeout(() => {
      document.getElementById('community-join-form')?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }, 100);
  };

  const offerings = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Monthly Glow Circles",
      description: "Intimate gatherings where we share stories, celebrate achievements, and support each other's creative journeys.",
      frequency: "Every first Saturday",
      format: "Hybrid (Online + Offline)"
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Tech & Story Labs",
      description: "Hands-on workshops where we explore the intersection of technology and storytelling through resin art.",
      frequency: "Bi-weekly",
      format: "Interactive Workshops"
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Resin + Robotics Workshops",
      description: "Learn to integrate sensors, LEDs, and smart components into your resin creations.",
      frequency: "Monthly",
      format: "Technical Deep-dives"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Mentorship Pods",
      description: "Small group mentoring sessions with industry experts and successful community members.",
      frequency: "Weekly",
      format: "Small Groups (4-6 members)"
    }
  ];

  const communityValues = [
    {
      title: "Inclusive Innovation",
      description: "We believe the best ideas come from diverse perspectives and experiences."
    },
    {
      title: "Supportive Growth",
      description: "Every member's success is celebrated as a community achievement."
    },
    {
      title: "Creative Courage",
      description: "We encourage bold experiments and learn from every attempt."
    },
    {
      title: "Tech with Heart",
      description: "Technology should amplify human connection, not replace it."
    }
  ];

  const memberSpotlights = [
    {
      name: "Priya K.",
      title: "Software Engineer & Resin Artist",
      story: "Started as a weekend hobbyist, now runs her own createch studio in Bangalore.",
      achievement: "Featured in TechCrunch for her IoT-enabled resin installations"
    },
    {
      name: "Ananya M.",
      title: "Homemaker & Tech Enthusiast",
      story: "Discovered her passion for electronics through our workshops, now teaches kids coding through art.",
      achievement: "Launched 'Code & Craft' program in her local community"
    },
    {
      name: "Divya R.",
      title: "Product Designer",
      story: "Combined her design skills with resin art to create award-winning smart home accessories.",
      achievement: "Won 'Innovation in Design' at National Maker Fest"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Nebulher Community - Women-Only Createch Ecosystem | Stasis Artis</title>
        <meta name="description" content="Join Nebulher, our women-only ecosystem for girl coders, creators, homemakers, and thinkers who refuse to pick just one title." />
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
                <span className="gradient-text">Nebulher</span> Community
              </h1>
              <p className="text-xl md:text-2xl text-gray-300">
                A Women-Only Ecosystem Powered by Stasis Artis
              </p>
              <div className="glass-effect rounded-2xl p-8 max-w-3xl mx-auto">
                <blockquote className="text-lg md:text-xl font-playfair italic">
                  "For girl coders, creators, homemakers, thinkers — who refuse to pick just one title."
                </blockquote>
                <p className="text-teal-400 mt-4">— The Nebulher Manifesto</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Community Offerings */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-playfair font-bold gradient-text mb-4">
                Core Offerings
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Designed specifically for women who want to explore, create, and grow in the createch space
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {offerings.map((offering, index) => (
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
                        {offering.icon}
                      </div>
                      <h3 className="text-2xl font-playfair font-bold text-white">
                        {offering.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed">
                      {offering.description}
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-teal-400" />
                        <span className="text-gray-300">{offering.frequency}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MessageCircle className="h-4 w-4 text-teal-400" />
                        <span className="text-gray-300">{offering.format}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Community Values */}
        <section className="py-20 bg-gradient-to-b from-transparent to-gray-900/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">
                Our <span className="gradient-text">Values</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The principles that guide our community and shape every interaction
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {communityValues.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-effect rounded-xl p-6 hover-lift text-center"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 flex items-center justify-center">
                      <Star className="h-6 w-6 text-black" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{value.title}</h3>
                    <p className="text-gray-300 leading-relaxed text-sm">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Member Spotlights */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">
                Member <span className="gradient-text">Spotlights</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Celebrating the incredible women who are shaping the future of createch
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {memberSpotlights.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="glass-effect rounded-xl p-6 hover-lift"
                >
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 flex items-center justify-center text-black font-bold text-xl mb-4">
                        {member.name.charAt(0)}
                      </div>
                      <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                      <p className="text-teal-400 text-sm">{member.title}</p>
                    </div>
                    
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {member.story}
                    </p>
                    
                    <div className="bg-gradient-to-r from-teal-900/20 to-cyan-900/20 rounded-lg p-3">
                      <p className="text-xs text-gray-300">
                        <strong className="text-teal-400">Achievement:</strong> {member.achievement}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Community Onboarding Info */}
        <section className="py-20 bg-gradient-to-b from-transparent to-gray-900/50">
          <div className="container mx-auto px-4">
            <CommunityOnboarding />
          </div>
        </section>

        {/* Community Impact */}
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
                  Building the Future <span className="gradient-text">Together</span>
                </h2>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    Nebulher isn't just a community – it's a movement. We're proving that when women support women in tech and creativity, incredible things happen.
                  </p>
                  <p>
                    Our members have launched startups, won awards, changed careers, and most importantly, found their tribe of like-minded women who understand the unique challenges and opportunities we face.
                  </p>
                  <p>
                    Join us in redefining what it means to be a woman in the createch space. Your voice, your ideas, and your dreams matter here.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-6 pt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text">200+</div>
                    <p className="text-gray-400 text-sm">Active Members</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text">50+</div>
                    <p className="text-gray-400 text-sm">Success Stories</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text">25+</div>
                    <p className="text-gray-400 text-sm">Monthly Events</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text">100%</div>
                    <p className="text-gray-400 text-sm">Women-Led</p>
                  </div>
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
                  alt="Women working together on createch projects in the Nebulher community"
                 src="https://images.unsplash.com/photo-1653669486992-66a21d74d716" />
                <blockquote className="text-lg font-playfair italic text-center text-gray-300">
                  "Nebulher gave me the confidence to quit my corporate job and start my own createch studio. The support here is unmatched."
                </blockquote>
                <p className="text-teal-400 text-center mt-4">— Community Member</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Join CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-8 max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white">
                Ready to Join <span className="gradient-text">Nebulher</span>?
              </h2>
              <p className="text-xl text-gray-300">
                Whether you're a seasoned professional or just starting your journey, there's a place for you in our community.
              </p>
              <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto">
                <h3 className="text-2xl font-semibold text-white mb-4">Membership Benefits</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400"></div>
                    <span>Access to all workshops</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400"></div>
                    <span>Mentorship opportunities</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400"></div>
                    <span>Exclusive community events</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400"></div>
                    <span>Project collaboration platform</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400"></div>
                    <span>Resource library access</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400"></div>
                    <span>Career support network</span>
                  </div>
                </div>
              </div>
              <Button
                size="lg"
                className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-black font-semibold px-8 py-3 rounded-full glow-effect hover-lift"
                onClick={handleJoinClick}
              >
                <Users className="mr-2 h-5 w-5" />
                Join Nebulher Community
              </Button>
              <p className="text-sm text-gray-400">
                Free to join • Women-only space • Supportive community
              </p>
            </motion.div>
          </div>
        </section>

        {/* Community Join Form */}
        {showJoinForm && (
          <section id="community-join-form" className="py-20 bg-gradient-to-b from-gray-900/50 to-black">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
              >
                <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">
                  Join <span className="gradient-text">Nebulher Community</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Take the first step towards joining our vibrant community of women createch innovators
                </p>
              </motion.div>

              <CommunityJoinForm />
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default Community;