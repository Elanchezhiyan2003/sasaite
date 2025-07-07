
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Award } from 'lucide-react';

const ContactInfo = () => {
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      details: ["Coimbatore, Tamil Nadu", "India"]
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: ["hello@stasisartis.com", "support@stasisartis.com"]
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      details: ["+91 XXXXX XXXXX", "WhatsApp Available"]
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-8"
    >
      <div>
        <h2 className="text-3xl font-playfair font-bold text-white mb-4">
          Get in Touch
        </h2>
        <p className="text-gray-300">
          We're always excited to discuss new projects and collaborations.
        </p>
      </div>

      <div className="space-y-6">
        {contactInfo.map((info, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="glass-effect rounded-xl p-6 hover-lift"
          >
            <div className="flex items-start space-x-4">
              <div className="text-teal-400 mt-1">
                {info.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {info.title}
                </h3>
                {info.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="text-gray-300 text-sm">
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="glass-effect rounded-xl p-6 bg-gradient-to-br from-teal-900/20 to-cyan-900/20"
      >
        <div className="flex items-start space-x-4">
          <Award className="h-6 w-6 text-teal-400 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">
              MSME Registered
            </h3>
            <p className="text-gray-300 text-sm mb-2">
              UDYAM-TN-02-00069559HH
            </p>
            <p className="text-gray-400 text-xs">
              Micro Enterprise – Manufacturing & Services
            </p>
          </div>
        </div>
      </motion.div> */}
    </motion.div>
  );
};

export default ContactInfo;
