import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';


const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const finalFormData = {
      ...formData,
      apikey: '53d4e36e-83ca-402d-8ce1-4e43d6530b98',
      subject: `New Contact Form Submission: ${formData.subject}`,
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(finalFormData),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: '✅ Message sent successfully!',
          description: "Thank you for contacting us. We'll get back to you within 24 hours.",
          duration: 5000,
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          organization: '',
          subject: '',
          message: '',
          inquiryType: 'general'
        });
      } else {
        throw new Error(result.message || 'An unknown error occurred.');
      }
    } catch (error) {
      toast({
        title: '❌ Failed to send message',
        description: error.message || 'There was an error sending your message. Please try again or contact us directly.',
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'bulk', label: 'Bulk Orders' },
    { value: 'collaboration', label: 'Collaboration' },
    { value: 'internship', label: 'Internship Program' },
    { value: 'community', label: 'Nebulher Community' },
    { value: 'custom', label: 'Custom Project' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-8"
    >
      <div>
        <h2 className="text-3xl font-playfair font-bold text-white mb-4">
          Send Us a Message
        </h2>
        <p className="text-gray-300">
          Fill out the form below and we'll get back to you within 24 hours.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              disabled={isSubmitting}
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:border-teal-400 focus:outline-none transition-colors disabled:opacity-50"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              disabled={isSubmitting}
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:border-teal-400 focus:outline-none transition-colors disabled:opacity-50"
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              disabled={isSubmitting}
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:border-teal-400 focus:outline-none transition-colors disabled:opacity-50"
              placeholder="+91 XXXXX XXXXX"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Organization
            </label>
            <input
              type="text"
              name="organization"
              value={formData.organization}
              onChange={handleInputChange}
              disabled={isSubmitting}
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:border-teal-400 focus:outline-none transition-colors disabled:opacity-50"
              placeholder="Your organization"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Inquiry Type
          </label>
          <select
            name="inquiryType"
            value={formData.inquiryType}
            onChange={handleInputChange}
            disabled={isSubmitting}
            className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-teal-400 focus:outline-none transition-colors disabled:opacity-50"
          >
            {inquiryTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Subject *
          </label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            required
            disabled={isSubmitting}
            className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:border-teal-400 focus:outline-none transition-colors disabled:opacity-50"
            placeholder="Brief subject of your inquiry"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Message *
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            disabled={isSubmitting}
            rows={6}
            className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:border-teal-400 focus:outline-none transition-colors resize-vertical disabled:opacity-50"
            placeholder="Tell us about your project, requirements, or questions..."
          />
        </div>

        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-black font-semibold py-3 rounded-full glow-effect hover-lift disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Send className="mr-2 h-5 w-5" />
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </motion.div>
  );
};

export default ContactForm;