import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const ContactCTA = () => {
  const { toast } = useToast();

  const handleWhatsAppClick = () => {
    const phoneNumber = "919025486901"; // +91 90254 86901 in international format
    const message = encodeURIComponent("Hi! I'm interested in learning more about Stasis Artis and your createch solutions. Could we discuss how you can help with my project?");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
  };

  const handleScheduleCall = () => {
    const phoneNumber = "919025486901"; // +91 90254 86901 in international format
    const message = encodeURIComponent("Hi! I'd like to schedule a call to discuss my createch project requirements. When would be a good time for a consultation?");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-r from-teal-900/20 to-cyan-900/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8 max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white">
            Ready to Start Your <span className="gradient-text">Journey</span>?
          </h2>
          <p className="text-xl text-gray-300">
            Whether you have a specific project in mind or just want to explore possibilities, we're here to help you discover what's possible when art meets technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-black font-semibold px-8 py-3 rounded-full glow-effect hover-lift"
              onClick={handleWhatsAppClick}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Start a Conversation
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-black px-8 py-3 rounded-full hover-lift"
              onClick={handleScheduleCall}
            >
              <Phone className="mr-2 h-5 w-5" />
              Schedule a Call
            </Button>
          </div>
          <div className="text-sm text-gray-400 space-y-1">
            <p>💬 WhatsApp: +91 90254 86901</p>
            <p>Quick response • Personalized consultation • Free initial discussion</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;