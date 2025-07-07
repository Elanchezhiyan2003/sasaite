
import React from 'react';
import { motion } from 'framer-motion';

const ContactFAQ = () => {
  const faqs = [
    {
      question: "What is createch?",
      answer: "Createch is our term for the fusion of creativity and technology - specifically combining traditional resin art with embedded electronics, sensors, and smart features."
    },
    {
      question: "Do you ship nationwide?",
      answer: "Yes, we ship across India. For bulk orders, we provide special logistics support and can arrange on-site workshops and training."
    },
    {
      question: "Can I customize products for my organization?",
      answer: "Absolutely! We specialize in custom solutions for educational institutions and corporates, including branding, specific features, and tailored experiences."
    },
    {
      question: "What's the typical project timeline?",
      answer: "Project timelines vary based on complexity. Simple custom pieces take 1-2 weeks, while large installations or bulk orders may take 4-6 weeks."
    },
    {
      question: "Do you provide training and support?",
      answer: "Yes, we offer comprehensive training for our products, especially for educational institutions. We also provide ongoing support and troubleshooting."
    },
    {
      question: "How can I join the Nebulher community?",
      answer: "The Nebulher community is open to all women interested in createch. You can join through our website or contact us directly for more information."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-transparent to-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-effect rounded-xl p-6 hover-lift"
            >
              <h3 className="text-lg font-semibold text-white mb-3">
                {faq.question}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {faq.answer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactFAQ;
