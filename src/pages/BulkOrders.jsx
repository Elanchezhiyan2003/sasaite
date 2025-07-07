import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { GraduationCap, Building, Package, Users, Truck, Calendar, CheckCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const BulkOrders = () => {
  const { toast } = useToast();

  const handleRequestBulkQuote = () => {
    const phoneNumber = "919025486901"; // +91 90254 86901 in international format
    const message = encodeURIComponent("Hi! I'm interested in bulk orders for my organization. Could you please provide a detailed quote and discuss our requirements? We're looking at educational/corporate solutions from Stasis Artis.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
  };

  const handleScheduleConsultation = () => {
    const phoneNumber = "919025486901"; // +91 90254 86901 in international format
    const message = encodeURIComponent("Hi! I'd like to schedule a consultation for bulk orders. We're interested in createch solutions for our organization and would like to discuss our specific needs, timeline, and pricing options.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
  };

  const educationOfferings = [
    {
      title: "Creative Learning Kits",
      description: "Resin-based educational kits designed to make learning interactive and memorable",
      features: ["Age-appropriate materials", "Curriculum integration guides", "Safety protocols", "Teacher training included"],
      suitableFor: "Schools, Colleges, Educational Institutions"
    },
    {
      title: "Fusion Workshops",
      description: "Hands-on workshops combining resin art with technology for STEAM education",
      features: ["Expert facilitators", "All materials provided", "Project-based learning", "Student certificates"],
      suitableFor: "Schools, Summer Camps, Educational Programs"
    },
    {
      title: "Art-Tech Curriculum Modules",
      description: "Complete curriculum modules integrating createch into existing programs",
      features: ["Lesson plans", "Assessment rubrics", "Digital resources", "Ongoing support"],
      suitableFor: "Educational Boards, Universities, Training Centers"
    },
    {
      title: "ATL/STEM Integration",
      description: "Specialized programs for Atal Tinkering Labs and STEM initiatives",
      features: ["ATL-compliant activities", "Innovation projects", "Mentor support", "Competition preparation"],
      suitableFor: "ATL Labs, STEM Centers, Innovation Hubs"
    }
  ];

  const corporateOfferings = [
    {
      title: "Team Bonding Resin Sessions",
      description: "Interactive team-building activities that create lasting memories and stronger bonds",
      features: ["Professional facilitation", "Custom themes", "Take-home creations", "Team challenges"],
      benefits: ["Improved collaboration", "Stress relief", "Creative thinking", "Memorable experience"]
    },
    {
      title: "Smart Corporate Gifting",
      description: "Custom tech-enhanced resin items perfect for corporate gifts and awards",
      features: ["Brand integration", "NFC/QR embedding", "Custom packaging", "Bulk pricing"],
      benefits: ["Unique brand presence", "Tech-forward image", "Memorable impact", "Sustainable materials"]
    },
    {
      title: "Custom Branding Solutions",
      description: "Resin installations and products featuring your brand in innovative ways",
      features: ["Logo embedding", "Color matching", "Interactive elements", "Installation support"],
      benefits: ["Brand differentiation", "Modern aesthetics", "Interactive engagement", "Long-lasting impact"]
    }
  ];

  const pricingTiers = [
    {
      quantity: "25-50 Units",
      discount: "10% Off",
      features: ["Standard packaging", "Basic customization", "Email support", "2-week delivery"],
      bestFor: "Small teams, Pilot programs"
    },
    {
      quantity: "51-100 Units",
      discount: "15% Off",
      features: ["Premium packaging", "Advanced customization", "Priority support", "1-week delivery"],
      bestFor: "Medium organizations, Events"
    },
    {
      quantity: "100+ Units",
      discount: "20% Off",
      features: ["Luxury packaging", "Full customization", "Dedicated account manager", "Express delivery"],
      bestFor: "Large corporations, Institutions"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Bulk Orders - Schools, Colleges & Corporates | Stasis Artis</title>
        <meta name="description" content="Bulk orders for educational institutions and corporates. Creative learning kits, fusion workshops, team bonding sessions, and smart corporate gifting." />
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
                <span className="gradient-text">Bulk Orders</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300">
                Schools, Colleges & Corporates
              </p>
              <div className="glass-effect rounded-2xl p-6 max-w-2xl mx-auto">
                <p className="text-lg text-gray-300">
                  Transforming education and corporate experiences through createch innovation at scale
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center space-x-4 mb-4">
                <GraduationCap className="h-12 w-12 text-teal-400" />
                <h2 className="text-4xl md:text-5xl font-playfair font-bold gradient-text">
                  Education Solutions
                </h2>
              </div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Bringing createch innovation to classrooms, labs, and learning spaces across India
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {educationOfferings.map((offering, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-effect rounded-xl p-8 hover-lift"
                >
                  <div className="space-y-6">
                    <h3 className="text-2xl font-playfair font-bold text-white">
                      {offering.title}
                    </h3>
                    
                    <p className="text-gray-300 leading-relaxed">
                      {offering.description}
                    </p>
                    
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-teal-400">Features:</h4>
                      {offering.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="h-4 w-4 text-teal-400" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="bg-gradient-to-r from-teal-900/20 to-cyan-900/20 rounded-lg p-4">
                      <p className="text-sm text-gray-300">
                        <strong className="text-teal-400">Suitable for:</strong> {offering.suitableFor}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Corporate Section */}
        <section className="py-20 bg-gradient-to-b from-transparent to-gray-900/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center space-x-4 mb-4">
                <Building className="h-12 w-12 text-teal-400" />
                <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white">
                  Corporate <span className="gradient-text">Solutions</span>
                </h2>
              </div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Elevate your corporate culture and brand presence with innovative createch experiences
              </p>
            </motion.div>

            <div className="space-y-12">
              {corporateOfferings.map((offering, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <h3 className="text-3xl font-playfair font-bold text-white">
                      {offering.title}
                    </h3>
                    
                    <p className="text-xl text-gray-300 leading-relaxed">
                      {offering.description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <h4 className="text-lg font-semibold text-teal-400">Features:</h4>
                        {offering.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-3">
                            <Star className="h-4 w-4 text-teal-400" />
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="space-y-3">
                        <h4 className="text-lg font-semibold text-teal-400">Benefits:</h4>
                        {offering.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center space-x-3">
                            <CheckCircle className="h-4 w-4 text-teal-400" />
                            <span className="text-gray-300 text-sm">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Button
                      className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-black font-semibold px-6 py-3 rounded-full hover-lift"
                      onClick={handleRequestBulkQuote}
                    >
                      Comming Soon
                    </Button>
                  </div>
                  
                  <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="glass-effect rounded-2xl p-4 hover-lift">
                      <img  
                        className="w-full h-80 object-cover rounded-xl" 
                        alt={`${offering.title} in action`}
                       src="https://images.unsplash.com/photo-1552664730-d307ca884978" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">
                Pricing <span className="gradient-text">Tiers</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing options designed to meet your organization's needs and budget
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`glass-effect rounded-xl p-8 hover-lift text-center ${
                    index === 1 ? 'ring-2 ring-teal-400 scale-105' : ''
                  }`}
                >
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-semibold text-white mb-2">{tier.quantity}</h3>
                      <div className="text-3xl font-bold gradient-text">{tier.discount}</div>
                      <p className="text-gray-400 text-sm mt-2">{tier.bestFor}</p>
                    </div>
                    
                    <div className="space-y-3">
                      {tier.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="h-4 w-4 text-teal-400" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button
                      variant={index === 1 ? "default" : "outline"}
                      className={`w-full ${
                        index === 1 
                          ? "bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-black" 
                          : "border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-black"
                      } font-semibold py-3 rounded-full hover-lift`}
                      onClick={handleRequestBulkQuote}
                    >
                      {/* {index === 1 ? "Most Popular" : "Get Started"} */}
                      {index === 1 ? "Comming Soon" : "Comming Soon"}
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process & Logistics */}
        <section className="py-20 bg-gradient-to-b from-transparent to-gray-900/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">
                Process & <span className="gradient-text">Logistics</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Streamlined ordering process with reliable delivery and comprehensive support
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Users className="h-8 w-8" />,
                  title: "Consultation",
                  description: "Free consultation to understand your specific needs and customize solutions"
                },
                {
                  icon: <Package className="h-8 w-8" />,
                  title: "Custom Packaging",
                  description: "Professional packaging with your branding and detailed instruction materials"
                },
                {
                  icon: <Truck className="h-8 w-8" />,
                  title: "Delivery Logistics",
                  description: "Reliable delivery across India with tracking and insurance coverage"
                },
                {
                  icon: <Calendar className="h-8 w-8" />,
                  title: "Workshop Facilitation",
                  description: "Expert facilitators available for on-site workshops and training sessions"
                }
              ].map((process, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-effect rounded-xl p-6 hover-lift text-center"
                >
                  <div className="text-teal-400 mb-4 flex justify-center">
                    {process.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{process.title}</h3>
                  <p className="text-gray-300 leading-relaxed text-sm">{process.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">
                Success <span className="gradient-text">Stories</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="glass-effect rounded-xl p-8"
              >
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <GraduationCap className="h-8 w-8 text-teal-400" />
                    <div>
                      <h3 className="text-xl font-semibold text-white">Delhi Public School</h3>
                      <p className="text-gray-400 text-sm">500 Student Workshop Series</p>
                    </div>
                  </div>
                  <blockquote className="text-gray-300 italic">
                    "The createch workshops transformed how our students think about the intersection of art and technology. The engagement levels were unprecedented."
                  </blockquote>
                  <p className="text-teal-400 text-sm">— Principal, DPS Bangalore</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="glass-effect rounded-xl p-8"
              >
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Building className="h-8 w-8 text-teal-400" />
                    <div>
                      <h3 className="text-xl font-semibold text-white">Tech Mahindra</h3>
                      <p className="text-gray-400 text-sm">Corporate Team Building</p>
                    </div>
                  </div>
                  <blockquote className="text-gray-300 italic">
                    "The smart resin team-building session was unlike anything we've done before. It brought our teams closer while showcasing innovation."
                  </blockquote>
                  <p className="text-teal-400 text-sm">— HR Director, Tech Mahindra</p>
                </div>
              </motion.div>
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
                Ready to Transform Your <span className="gradient-text">Organization</span>?
              </h2>
              <p className="text-xl text-gray-300">
                Whether you're an educational institution looking to innovate learning or a corporation seeking unique experiences, we're here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-black font-semibold px-8 py-3 rounded-full glow-effect hover-lift"
                  onClick={handleRequestBulkQuote}
                >
                  <Package className="mr-2 h-5 w-5" />
                  Request Bulk Quote
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-black px-8 py-3 rounded-full hover-lift"
                  onClick={handleScheduleConsultation}
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Consultation
                </Button>
              </div>
              <div className="text-sm text-gray-400 space-y-1">
                <p>💬 WhatsApp: +91 90254 86901</p>
                <p>Free consultation • Custom solutions • Nationwide delivery</p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BulkOrders;