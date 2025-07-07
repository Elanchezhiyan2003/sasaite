import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Play, Eye, Hand, Zap, Sparkles, Calendar, MapPin, Clock, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Experience = () => {
  const { toast } = useToast();

  const handleBookExperience = (type) => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      duration: 3000,
    });
  };

  const handleJoinVirtualExperience = () => {
    const phoneNumber = "919025486901"; // +91 90254 86901 in international format
    const message = encodeURIComponent("Hi! I'm interested in joining your virtual createch experience. Could you please provide details about the next available session and how to participate?");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
  };

  const handleTryVirtualFirst = () => {
    const phoneNumber = "919025486901"; // +91 90254 86901 in international format
    const message = encodeURIComponent("Hi! I'd like to try your virtual createch experience before visiting in person. When is the next virtual session available?");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
  };

  const experiences = [
    {
      title: "Interactive Gallery",
      icon: <Eye className="h-8 w-8" />,
      description: "Walk through our smart resin installations that respond to your presence and touch",
      features: [
        "Motion-activated light displays",
        "Touch-responsive color changes",
        "Sound-reactive patterns",
        "Personalized visual stories"
      ],
      duration: "45 minutes",
      capacity: "Up to 8 people",
      image: "Interactive art gallery with glowing resin installations responding to visitors"
    },
    {
      title: "Hands-On Workshop",
      icon: <Hand className="h-8 w-8" />,
      description: "Create your own smart resin piece with guided instruction from our experts",
      features: [
        "Learn basic resin techniques",
        "Embed LED components",
        "Program simple interactions",
        "Take home your creation"
      ],
      duration: "2 hours",
      capacity: "Up to 6 people",
      image: "Workshop participants creating LED-embedded resin art with expert guidance"
    },
    {
      title: "Tech Demo Session",
      icon: <Zap className="h-8 w-8" />,
      description: "Witness the latest in createch innovation with live demonstrations",
      features: [
        "AI-responsive installations",
        "IoT-connected art pieces",
        "Augmented reality integration",
        "Future tech previews"
      ],
      duration: "30 minutes",
      capacity: "Up to 12 people",
      image: "Live demonstration of cutting-edge createch technology and AI-responsive art"
    },
    {
      title: "Immersive Experience",
      icon: <Sparkles className="h-8 w-8" />,
      description: "Step into a fully immersive createch environment where art and technology merge",
      features: [
        "360-degree interactive space",
        "Biometric-responsive environment",
        "Emotional mapping technology",
        "Personalized art generation"
      ],
      duration: "60 minutes",
      capacity: "Up to 4 people",
      image: "Immersive room with 360-degree interactive resin art responding to biometric data"
    }
  ];

  const upcomingEvents = [
    {
      title: "Fusion Friday: Open Studio",
      date: "Every Friday",
      time: "6:00 PM - 9:00 PM",
      description: "Drop-in sessions to explore our interactive installations",
      price: "₹299 per person"
    },
    {
      title: "Weekend Workshop Series",
      date: "Saturdays & Sundays",
      time: "10:00 AM - 12:00 PM",
      description: "Hands-on createch workshops for beginners",
      price: "₹1,999 per person"
    },
    {
      title: "Tech Demo Showcase",
      date: "First Sunday of every month",
      time: "3:00 PM - 4:00 PM",
      description: "Latest innovations and future tech previews",
      price: "₹199 per person"
    },
    {
      title: "Immersive Experience Sessions",
      date: "By appointment",
      time: "Flexible timing",
      description: "Private immersive createch experiences",
      price: "₹2,999 per session"
    }
  ];

  const testimonials = [
    {
      name: "Priya S.",
      role: "Tech Professional",
      quote: "I never thought art could be so interactive! The way the resin pieces responded to my touch was magical.",
      experience: "Interactive Gallery"
    },
    {
      name: "Arjun M.",
      role: "Design Student",
      quote: "The workshop opened my eyes to possibilities I never imagined. Creating my own smart art piece was incredible.",
      experience: "Hands-On Workshop"
    },
    {
      name: "Kavya R.",
      role: "Artist",
      quote: "The immersive experience was transformative. It felt like stepping into the future of art.",
      experience: "Immersive Experience"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Experience the Fusion - Interactive Createch Experiences | Stasis Artis</title>
        <meta name="description" content="Experience the fusion of art and technology through interactive galleries, hands-on workshops, tech demos, and immersive createch environments." />
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
                <span className="gradient-text">Experience the Fusion</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300">
                Where Art Meets Technology in Living Color
              </p>
              <div className="glass-effect rounded-2xl p-8 max-w-3xl mx-auto">
                <blockquote className="text-lg md:text-xl font-playfair italic">
                  "Don't just see art. Feel it. Touch it. Become part of it."
                </blockquote>
                <p className="text-teal-400 mt-4">— The Createch Experience</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience Types */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-playfair font-bold gradient-text mb-4">
                Choose Your Experience
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From gentle introductions to full immersion, find the perfect way to explore createch
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {experiences.map((experience, index) => (
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
                        {experience.icon}
                      </div>
                      <h3 className="text-2xl font-playfair font-bold text-white">
                        {experience.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed">
                      {experience.description}
                    </p>
                    
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-teal-400">What You'll Experience:</h4>
                      {experience.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400"></div>
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-teal-400" />
                        <span className="text-gray-300">{experience.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-teal-400" />
                        <span className="text-gray-300">{experience.capacity}</span>
                      </div>
                    </div>
                    
                    <Button
                      className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-black font-semibold py-3 rounded-full hover-lift"
                      onClick={() => handleBookExperience(experience.title)}
                    >
                      <Play className="mr-2 h-4 w-4" />
                      Book This Experience
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-20 bg-gradient-to-b from-transparent to-gray-900/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">
                Upcoming <span className="gradient-text">Events</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Regular opportunities to experience the magic of createch
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-effect rounded-xl p-6 hover-lift"
                >
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white">{event.title}</h3>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-teal-400" />
                        <span className="text-gray-300">{event.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-teal-400" />
                        <span className="text-gray-300">{event.time}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed">{event.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold gradient-text">{event.price}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-black"
                        onClick={() => handleBookExperience(event.title)}
                      >
                        Book Now
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Virtual Preview */}
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
                  Can't Visit? <span className="gradient-text">Experience Virtually</span>
                </h2>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    Get a taste of our createch experiences from anywhere in the world with our virtual preview sessions.
                  </p>
                  <p>
                    Through live streaming and interactive demos, you can see our installations in action and even control some elements remotely.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-white">Virtual Experience Features:</h3>
                  {[
                    "Live HD streaming of installations",
                    "Remote interaction capabilities",
                    "Real-time Q&A with experts",
                    "Personalized virtual tours",
                    "Digital takeaway materials"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400"></div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button
                  className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-black font-semibold px-6 py-3 rounded-full hover-lift"
                  onClick={handleJoinVirtualExperience}
                >
                  <Play className="mr-2 h-5 w-5" />
                  Join Virtual Experience
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="glass-effect rounded-2xl p-4 hover-lift"
              >
                <img  
                  className="w-full h-80 object-cover rounded-xl" 
                  alt="Virtual createch experience with interactive streaming setup"
                  src="https://images.unsplash.com/photo-1633356122544-f134324a6cee" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gradient-to-r from-teal-900/20 to-cyan-900/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">
                What People <span className="gradient-text">Experience</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="glass-effect rounded-xl p-6 hover-lift"
                >
                  <div className="space-y-4">
                    <blockquote className="text-gray-300 italic leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="border-t border-gray-700 pt-4">
                      <p className="text-white font-semibold">{testimonial.name}</p>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                      <p className="text-teal-400 text-xs mt-1">{testimonial.experience}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Location & Contact */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">
                Visit Our <span className="gradient-text">Experience Center</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div className="glass-effect rounded-xl p-6">
                  <h3 className="text-2xl font-semibold text-white mb-4">Location & Hours</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-teal-400 mt-1" />
                      <div>
                        <p className="text-white font-medium">Stasis Artis Experience Center</p>
                        <p className="text-gray-300">Coimbatore, Tamil Nadu</p>
                        <p className="text-gray-400 text-sm">Exact address shared upon booking</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Clock className="h-5 w-5 text-teal-400 mt-1" />
                      <div>
                        <p className="text-white font-medium">Operating Hours</p>
                        <p className="text-gray-300">Tuesday - Sunday: 10:00 AM - 8:00 PM</p>
                        <p className="text-gray-400 text-sm">Closed on Mondays</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="glass-effect rounded-xl p-6">
                  <h3 className="text-2xl font-semibold text-white mb-4">Booking Information</h3>
                  <div className="space-y-3 text-gray-300">
                    <p>• All experiences require advance booking</p>
                    <p>• Group discounts available for 4+ people</p>
                    <p>• Private sessions can be arranged</p>
                    <p>• Cancellation allowed up to 24 hours before</p>
                    <p>• Age restrictions may apply for certain experiences</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="glass-effect rounded-2xl p-4 hover-lift"
              >
                <img  
                  className="w-full h-96 object-cover rounded-xl" 
                  alt="Modern createch experience center with interactive installations"
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-transparent to-gray-900/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-8 max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white">
                Ready to <span className="gradient-text">Experience the Magic</span>?
              </h2>
              <p className="text-xl text-gray-300">
                Book your createch experience today and discover what happens when art and technology become one.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-black font-semibold px-8 py-3 rounded-full glow-effect hover-lift"
                  onClick={() => handleBookExperience('General')}
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Experience
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-black px-8 py-3 rounded-full hover-lift"
                  onClick={handleTryVirtualFirst}
                >
                  <Play className="mr-2 h-5 w-5" />
                  Try Virtual First
                </Button>
              </div>
              <div className="text-sm text-gray-400 space-y-1">
                <p>💬 WhatsApp: +91 90254 86901</p>
                <p>Limited slots available • Book in advance • Group discounts available</p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Experience;