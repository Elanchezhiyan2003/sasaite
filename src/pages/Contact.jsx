
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';
import ContactFAQ from '@/components/contact/ContactFAQ';
import ContactCTA from '@/components/contact/ContactCTA';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Get in Touch with Stasis Artis | Createch Studio</title>
        <meta name="description" content="Contact Stasis Artis for createch projects, bulk orders, collaborations, and internship programs. Located in Coimbatore, Tamil Nadu." />
      </Helmet>

      <div className="min-h-screen pt-20">
        <section className="py-20 pattern-bg">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-6 max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-playfair font-bold">
                <span className="gradient-text">Contact Us</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300">
                Let's Create Something Extraordinary Together
              </p>
              <div className="glass-effect rounded-2xl p-6 max-w-2xl mx-auto">
                <p className="text-lg text-gray-300">
                  Ready to explore the fusion of art and technology? We're here to bring your vision to life.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <ContactForm />
              <ContactInfo />
            </div>
          </div>
        </section>

        <ContactFAQ />
        <ContactCTA />
      </div>
    </>
  );
};

export default Contact;
