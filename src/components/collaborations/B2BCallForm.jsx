import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Building, Calendar, Clock, User, Mail, MessageCircle, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';


const B2BCallForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    companyInfo: {
      companyName: '',
      industry: '',
      companySize: '',
      website: '',
      location: ''
    },
    contactInfo: {
      fullName: '',
      position: '',
      email: '',
      phone: '',
      preferredContact: ''
    },
    projectDetails: {
      partnershipType: '',
      projectScope: '',
      budget: '',
      timeline: '',
      requirements: ''
    },
    scheduling: {
      preferredDate: '',
      preferredTime: '',
      timezone: '',
      duration: '',
      meetingType: ''
    }
  });

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const industries = [
    'Interior Design',
    'Photography',
    'Architecture',
    'Event Planning',
    'Hospitality',
    'Retail',
    'Education',
    'Healthcare',
    'Technology',
    'Manufacturing',
    'Real Estate',
    'Entertainment',
    'Other'
  ];

  const partnershipTypes = [
    'Custom Installations',
    'Product Integration',
    'Brand Collaboration',
    'Bulk Orders',
    'Licensing Partnership',
    'Distribution Partnership',
    'Joint Venture',
    'Consulting Services',
    'Training & Workshops',
    'Other'
  ];

  const timeSlots = [
    '9:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '2:00 PM - 3:00 PM',
    '3:00 PM - 4:00 PM',
    '4:00 PM - 5:00 PM',
    '5:00 PM - 6:00 PM'
  ];

  const timezones = [
    'IST (Indian Standard Time)',
    'EST (Eastern Standard Time)',
    'PST (Pacific Standard Time)',
    'GMT (Greenwich Mean Time)',
    'CET (Central European Time)',
    'JST (Japan Standard Time)',
    'AEST (Australian Eastern Standard Time)'
  ];

  const handleInputChange = (section, field, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const finalFormData = {
      apikey: '53d4e36e-83ca-402d-8ce1-4e43d6530b98',
      subject: 'New B2B Collaboration Request',
      ...formData.companyInfo,
      ...formData.contactInfo,
      ...formData.projectDetails,
      ...formData.scheduling,
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
          title: '✅ Consultation Booked!',
          description: "We've received your request and will be in touch shortly.",
          duration: 5000,
        });
        // Reset form to initial state
        setFormData({
          companyInfo: { companyName: '', industry: '', companySize: '', website: '', location: '' },
          contactInfo: { fullName: '', position: '', email: '', phone: '', preferredContact: '' },
          projectDetails: { partnershipType: '', projectScope: '', budget: '', timeline: '', requirements: '' },
          scheduling: { preferredDate: '', preferredTime: '', timezone: '', duration: '', meetingType: '' },
        });
        setCurrentStep(1);
      } else {
        throw new Error(result.message || 'An unknown error occurred.');
      }
    } catch (error) {
      toast({
        title: '❌ Failed to schedule consultation',
        description: error.message || 'There was an error scheduling your consultation. Please try again or contact us directly.',
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Building className="h-12 w-12 text-teal-400 mx-auto mb-4" />
              <h3 className="text-2xl font-playfair font-bold text-white">Company Information</h3>
              <p className="text-gray-300">Tell us about your organization</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  value={formData.companyInfo.companyName}
                  onChange={(e) => handleInputChange('companyInfo', 'companyName', e.target.value)}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:border-teal-400 focus:outline-none transition-colors disabled:opacity-50"
                  placeholder="Your company name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Industry *
                </label>
                <select
                  value={formData.companyInfo.industry}
                  onChange={(e) => handleInputChange('companyInfo', 'industry', e.target.value)}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-teal-400 focus:outline-none transition-colors disabled:opacity-50"
                >
                  <option value="">Select your industry</option>
                  {industries.map((industry) => (
                    <option key={industry} value={industry}>{industry}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Company Size *
                </label>
                <select
                  value={formData.companyInfo.companySize}
                  onChange={(e) => handleInputChange('companyInfo', 'companySize', e.target.value)}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-teal-400 focus:outline-none transition-colors disabled:opacity-50"
                >
                  <option value="">Select company size</option>
                  <option value="1-10">1-10 employees (Startup)</option>
                  <option value="11-50">11-50 employees (Small)</option>
                  <option value="51-200">51-200 employees (Medium)</option>
                  <option value="201-1000">201-1000 employees (Large)</option>
                  <option value="1000+">1000+ employees (Enterprise)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Company Website
                </label>
                <input
                  type="url"
                  value={formData.companyInfo.website}
                  onChange={(e) => handleInputChange('companyInfo', 'website', e.target.value)}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:border-teal-400 focus:outline-none transition-colors disabled:opacity-50"
                  placeholder="https://yourcompany.com"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Company Location *
                </label>
                <input
                  type="text"
                  value={formData.companyInfo.location}
                  onChange={(e) => handleInputChange('companyInfo', 'location', e.target.value)}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:border-teal-400 focus:outline-none transition-colors disabled:opacity-50"
                  placeholder="City, State/Country"
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <User className="h-12 w-12 text-teal-400 mx-auto mb-4" />
              <h3 className="text-2xl font-playfair font-bold text-white">Contact Information</h3>
              <p className="text-gray-300">Your details for the consultation</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={formData.contactInfo.fullName}
                  onChange={(e) => handleInputChange('contactInfo', 'fullName', e.target.value)}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:border-teal-400 focus:outline-none transition-colors disabled:opacity-50"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Position/Title *
                </label>
                <input
                  type="text"
                  value={formData.contactInfo.position}
                  onChange={(e) => handleInputChange('contactInfo', 'position', e.target.value)}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:border-teal-400 focus:outline-none transition-colors disabled:opacity-50"
                  placeholder="Your job title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Business Email *
                </label>
                <input
                  type="email"
                  value={formData.contactInfo.email}
                  onChange={(e) => handleInputChange('contactInfo', 'email', e.target.value)}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:border-teal-400 focus:outline-none transition-colors disabled:opacity-50"
                  placeholder="your@company.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  value={formData.contactInfo.phone}
                  onChange={(e) => handleInputChange('contactInfo', 'phone', e.target.value)}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:border-teal-400 focus:outline-none transition-colors disabled:opacity-50"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Preferred Contact Method *
                </label>
                <select
                  value={formData.contactInfo.preferredContact}
                  onChange={(e) => handleInputChange('contactInfo', 'preferredContact', e.target.value)}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-teal-400 focus:outline-none transition-colors disabled:opacity-50"
                >
                  <option value="">Select preferred contact method</option>
                  <option value="email">Email</option>
                  <option value="phone">Phone Call</option>
                  <option value="whatsapp">WhatsApp</option>
                  <option value="video">Video Call</option>
                </select>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <MessageCircle className="h-12 w-12 text-teal-400 mx-auto mb-4" />
              <h3 className="text-2xl font-playfair font-bold text-white">Project Details</h3>
              <p className="text-gray-300">What collaboration are you interested in?</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Partnership Type *
                </label>
                <select
                  value={formData.projectDetails.partnershipType}
                  onChange={(e) => handleInputChange('projectDetails', 'partnershipType', e.target.value)}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-teal-400 focus:outline-none transition-colors disabled:opacity-50"
                >
                  <option value="">Select partnership type</option>
                  {partnershipTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Project Scope & Objectives *
                </label>
                <textarea
                  value={formData.projectDetails.projectScope}
                  onChange={(e) => handleInputChange('projectDetails', 'projectScope', e.target.value)}
                  required
                  rows={4}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:border-teal-400 focus:outline-none transition-colors resize-vertical disabled:opacity-50"
                  placeholder="Describe your project goals, target audience, and expected outcomes..."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Budget Range *
                  </label>
                  <select
                    value={formData.projectDetails.budget}
                    onChange={(e) => handleInputChange('projectDetails', 'budget', e.target.value)}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-teal-400 focus:outline-none transition-colors disabled:opacity-50"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-50k">Under ₹50,000</option>
                    <option value="50k-1l">₹50,000 - ₹1,00,000</option>
                    <option value="1l-5l">₹1,00,000 - ₹5,00,000</option>
                    <option value="5l-10l">₹5,00,000 - ₹10,00,000</option>
                    <option value="10l-25l">₹10,00,000 - ₹25,00,000</option>
                    <option value="25l+">₹25,00,000+</option>
                    <option value="discuss">Prefer to discuss</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Project Timeline *
                  </label>
                  <select
                    value={formData.projectDetails.timeline}
                    onChange={(e) => handleInputChange('projectDetails', 'timeline', e.target.value)}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-teal-400 focus:outline-none transition-colors disabled:opacity-50"
                  >
                    <option value="">Select timeline</option>
                    <option value="immediate">Immediate (Within 1 month)</option>
                    <option value="short">Short-term (1-3 months)</option>
                    <option value="medium">Medium-term (3-6 months)</option>
                    <option value="long">Long-term (6+ months)</option>
                    <option value="ongoing">Ongoing partnership</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Specific Requirements & Expectations
                </label>
                <textarea
                  value={formData.projectDetails.requirements}
                  onChange={(e) => handleInputChange('projectDetails', 'requirements', e.target.value)}
                  rows={4}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:border-teal-400 focus:outline-none transition-colors resize-vertical disabled:opacity-50"
                  placeholder="Any specific technical requirements, design preferences, or special considerations..."
                />
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Calendar className="h-12 w-12 text-teal-400 mx-auto mb-4" />
              <h3 className="text-2xl font-playfair font-bold text-white">Schedule Your Call</h3>
              <p className="text-gray-300">Choose your preferred time for consultation</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  value={formData.scheduling.preferredDate}
                  onChange={(e) => handleInputChange('scheduling', 'preferredDate', e.target.value)}
                  required
                  min={new Date().toISOString().split('T')[0]}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-teal-400 focus:outline-none transition-colors disabled:opacity-50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Preferred Time *
                </label>
                <select
                  value={formData.scheduling.preferredTime}
                  onChange={(e) => handleInputChange('scheduling', 'preferredTime', e.target.value)}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-teal-400 focus:outline-none transition-colors disabled:opacity-50"
                >
                  <option value="">Select time slot</option>
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot}>{slot}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Timezone *
                </label>
                <select
                  value={formData.scheduling.timezone}
                  onChange={(e) => handleInputChange('scheduling', 'timezone', e.target.value)}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-teal-400 focus:outline-none transition-colors disabled:opacity-50"
                >
                  <option value="">Select timezone</option>
                  {timezones.map((tz) => (
                    <option key={tz} value={tz}>{tz}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Call Duration *
                </label>
                <select
                  value={formData.scheduling.duration}
                  onChange={(e) => handleInputChange('scheduling', 'duration', e.target.value)}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-teal-400 focus:outline-none transition-colors disabled:opacity-50"
                >
                  <option value="">Select duration</option>
                  <option value="30">30 minutes (Quick consultation)</option>
                  <option value="45">45 minutes (Standard consultation)</option>
                  <option value="60">60 minutes (Detailed discussion)</option>
                  <option value="90">90 minutes (Comprehensive planning)</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Meeting Type *
                </label>
                <select
                  value={formData.scheduling.meetingType}
                  onChange={(e) => handleInputChange('scheduling', 'meetingType', e.target.value)}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-teal-400 focus:outline-none transition-colors disabled:opacity-50"
                >
                  <option value="">Select meeting type</option>
                  <option value="video">Video Call (Google Meet/Zoom)</option>
                  <option value="phone">Phone Call</option>
                  <option value="in-person">In-Person Meeting (Coimbatore)</option>
                  <option value="hybrid">Hybrid (Video + In-Person team)</option>
                </select>
              </div>
            </div>

            {/* Call Preparation Info */}
            <div className="glass-effect rounded-xl p-6 bg-gradient-to-br from-teal-900/20 to-cyan-900/20">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                <CheckCircle className="h-5 w-5 text-teal-400 mr-2" />
                What to Expect
              </h4>
              <div className="space-y-2 text-sm text-gray-300">
                <p>• Detailed discussion about your project requirements and goals</p>
                <p>• Exploration of createch solutions tailored to your needs</p>
                <p>• Timeline and budget planning for your collaboration</p>
                <p>• Q&A session about our processes and capabilities</p>
                <p>• Next steps and proposal timeline discussion</p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-gray-400">Step {currentStep} of {totalSteps}</span>
          <span className="text-sm text-gray-400">{Math.round((currentStep / totalSteps) * 100)}% Complete</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-teal-400 to-cyan-400 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          ></div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="glass-effect rounded-2xl p-8">
        {renderStepContent()}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8 pt-6 border-t border-gray-700">
          <Button
            type="button"
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 1 || isSubmitting}
            className="border-gray-600 text-gray-400 hover:bg-gray-700 disabled:opacity-50"
          >
            Previous
          </Button>

          {currentStep < totalSteps ? (
            <Button
              type="button"
              onClick={nextStep}
              disabled={isSubmitting}
              className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-black font-semibold disabled:opacity-50"
            >
              Next Step
            </Button>
          ) : (
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-black font-semibold disabled:opacity-50"
            >
              <Phone className="mr-2 h-4 w-4" />
              {isSubmitting ? 'Scheduling...' : 'Schedule B2B Call'}
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default B2BCallForm;