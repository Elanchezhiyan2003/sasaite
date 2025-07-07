
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-black to-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              {/* <div className="w-10 h-10 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 flex items-center justify-center font-bold text-black">
                SA
              </div> */}
                          <img src="/sa.jpg" alt="SA Logo" className="h-10 w-auto rounded-full" />

              <div>
                <span className="text-lg font-playfair font-bold gradient-text">Stasis Artis</span>
                <p className="text-xs text-gray-400">Createch Studio</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              India's First Women-Led MSME-Registered Createch Studio, fusing resin art with embedded technology.
            </p>
            {/* <div className="text-xs text-gray-400">
              <p>MSME Registration: UDYAM-TN-02-00069559HH</p>
              <p>Micro Enterprise – Manufacturing & Services</p>
            </div> */}
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <span className="text-lg font-semibold text-white">Quick Links</span>
            <div className="space-y-2">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Our Offerings', path: '/offerings' },
                { name: 'Createch Internship', path: '/internship' },
                { name: 'Community', path: '/community' },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-gray-300 hover:text-teal-400 transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <span className="text-lg font-semibold text-white">Services</span>
            <div className="space-y-2">
              {[
                'Resin Art Creations',
                'Tech-Infused Artistry',
                'MIY Kits',
                'B2B Collaborations',
                'Bulk Orders',
              ].map((service) => (
                <p key={service} className="text-gray-300 text-sm">
                  {service}
                </p>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <span className="text-lg font-semibold text-white">Contact</span>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="h-4 w-4 text-teal-400" />
                <span className="text-sm">Coimbatore, Tamil Nadu</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="h-4 w-4 text-teal-400" />
                <span className="text-sm">hello@stasisartis.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="h-4 w-4 text-teal-400" />
                <span className="text-sm">+91 XXXXX XXXXX</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 pt-2">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="w-8 h-8 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 flex items-center justify-center text-black hover:shadow-lg transition-shadow"
              >
                <Instagram className="h-4 w-4" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="w-8 h-8 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 flex items-center justify-center text-black hover:shadow-lg transition-shadow"
              >
                <Linkedin className="h-4 w-4" />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-gray-400 text-sm font-playfair italic"
            >
              "Art is eternal. Tech makes it boundless."
            </motion.p>
            <p className="text-gray-400 text-sm">
              © 2024 Stasis Artis. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
