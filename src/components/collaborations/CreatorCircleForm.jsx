import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Code, Palette, Heart, Lightbulb, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';


const CreatorCircleForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    personalInfo: {
      fullName: '',
      email: '',
      phone: '',
      location: '',
      profession: '',
      experience: ''
    },
    interests: {
      primaryRole: '',
      skillAreas: [],
      projectTypes: [],
      collaborationInterest: ''
    },
    motivation: {
      whyJoin: '',
      contribution: '',
      goals: '',
      timeCommitment: ''
    },
    background: {
      portfolio: '',
      socialMedia: '',
      previousCollabs: '',
      specialSkills: ''
    }
  });

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const creatorRoles = [
    'Educator/Teacher',
    'Software Developer',
    'Resin Artist',
    'Hobbyist/Maker',
    'Designer',
    'Student',
    'Entrepreneur',
    'Content Creator',
    'Other'
  ];

  const skillAreas = [
    'Resin Art & Crafting',
    'Programming & Development',
    'Electronics & IoT',
    'Digital Design',
    'Teaching & Mentoring',
    'Project Management',
    'Content Creation',
    'Photography/Videography',
    'Marketing & Social Media',
    'Business Development',
    'Research & Innovation',
    'Community Building'
  ];

  const projectTypes = [
    'Educational Workshops',
    'Art Installations',
    'Smart Home Projects',
    'Wearable Technology',
    'Interactive Art',
    'MIY Kit Development',
    'Community Events',
    'Online Tutorials',
    'Research Projects',
    'Commercial Products'
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

  const handleArrayToggle = (section, field, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: prev[section][field].includes(value)
          ? prev[section][field].filter(item => item !== value)
          : [...prev[section][field], value]
      }
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const finalFormData = {
      apikey: '53d4e36e-83ca-402d-8ce1-4e43d6530b98',
      subject: 'New Creator Circle Application',
      ...formData.personalInfo,
      ...formData.interests,
      ...formData.motivation,
      ...formData.background,
      skillAreas: formData.interests.skillAreas.join(', '),
      projectTypes: formData.interests.projectTypes.join(', '),
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
          title: '🎉 Welcome to the Creator Circle! Your application has been submitted successfully.',
          description: "We'll review your application and get back to you within 48 hours with next steps.",
          duration: 5000,
        });
        // Reset form
        setFormData({
          personalInfo: { fullName: '', email: '', phone: '', location: '', profession: '', experience: '' },
          interests: { primaryRole: '', skillAreas: [], projectTypes: [], collaborationInterest: '' },
          motivation: { whyJoin: '', contribution: '', goals: '', timeCommitment: '' },
          background: { portfolio: '', socialMedia: '', previousCollabs: '', specialSkills: '' },
        });
        setCurrentStep(1);
      } else {
        throw new Error(result.message || 'An unknown error occurred.');
      }
    } catch (error) {
      toast({
        title: '❌ Failed to submit application',
        description: error.message || 'There was an error submitting your application. Please try again or contact us directly.',
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
              <User className="h-12 w-12 text-teal-400 mx-auto mb-4" />
              <h3 className="text-2xl font-playfair font-bold text-white">Personal Information</h3>
              <p className="text-gray-300">Tell us about yourself</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={formData.personalInfo.fullName}
                  onChange={(e) => handleInputChange('personalInfo', 'fullName', e.target.value)}
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
                  value={formData.personalInfo.email}
                  onChange={(e) => handleInputChange('personalInfo', 'email', e.target.value)}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:border-teal-400 focus:outline-none transition-colors disabled:opacity-50"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={formData.personalInfo.phone}
                  onChange={(e) => handleInputChange('personalInfo', 'phone', e.target.value)}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:border-teal-400 focus:outline-none transition-colors disabled:opacity-50"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Location *
                </label>
                <input
                  type="text"
                  value={formData.personalInfo.location}
                  onChange={(e) => handleInputChange('personalInfo', 'location', e.target.value)}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:border-teal-400 focus:outline-none transition-colors disabled:opacity-50"
                  placeholder="City, State/Country"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Current Profession *
                </label>
                <input
                  type="text"
                  value={formData.personalInfo.profession}
                  onChange={(e) => handleInputChange('personalInfo', 'profession', e.target.value)}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:border-teal-400 focus:outline-none transition-colors disabled:opacity-50"
                  placeholder="Your current job/profession"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Years of Experience *
                </label>
                <select
                  value={formData.personalInfo.experience}
                  onChange={(e) => handleInputChange('personalInfo', 'experience', e.target.value)}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-teal-400 focus:outline-none transition-colors disabled:opacity-50"
                >
                  <option value="">Select experience level</option>
                  <option value="0-1">0-1 years (Beginner)</option>
                  <option value="2-5">2-5 years (Intermediate)</option>
                  <option value="6-10">6-10 years (Experienced)</option>
                  <option value="10+">10+ years (Expert)</option>
                </select>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Lightbulb className="h-12 w-12 text-teal-400 mx-auto mb-4" />
              <h3 className="text-2xl font-playfair font-bold text-white">Interests & Skills</h3>
              <p className="text-gray-300">What drives your creativity?</p>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Primary Creator Role *
                </label>
                <select
                  value={formData.interests.primaryRole}
                  onChange={(e) => handleInputChange('interests', 'primaryRole', e.target.value)}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-teal-400 focus:outline-none transition-colors disabled:opacity-50"
                >
                  <option value="">Select your primary role</option>
                  {creatorRoles.map((role) => (
                    <option key={role} value={role}>{role}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Skill Areas (Select all that apply) *
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                  {skillAreas.map((skill) => (
                    <label key={skill} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.interests.skillAreas.includes(skill)}
                        onChange={() => handleArrayToggle('interests', 'skillAreas', skill)}
                        disabled={isSubmitting}
                        className="w-4 h-4 text-teal-400 bg-gray-800 border-gray-600 rounded focus:ring-teal-400 focus:ring-2 disabled:opacity-50"
                      />
                      <span className="text-gray-300 text-sm">{skill}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Project Types of Interest (Select all that apply) *
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                  {projectTypes.map((project) => (
                    <label key={project} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.interests.projectTypes.includes(project)}
                        onChange={() => handleArrayToggle('interests', 'projectTypes', project)}
                        disabled={isSubmitting}
                        className="w-4 h-4 text-teal-400 bg-gray-800 border-gray-600 rounded focus:ring-teal-400 focus:ring-2 disabled:opacity-50"
                      />
                      <span className="text-gray-300 text-sm">{project}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Collaboration Interest Level *
                </label>
                <select
                  value={formData.interests.collaborationInterest}
                  onChange={(e) => handleInputChange('interests', 'collaborationInterest', e.target.value)}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-teal-400 focus:outline-none transition-colors disabled:opacity-50"
                >
                  <option value="">Select collaboration level</option>
                  <option value="observer">Observer (Learn and watch)</option>
                  <option value="participant">Participant (Join projects)</option>
                  <option value="contributor">Contributor (Lead initiatives)</option>
                  <option value="mentor">Mentor (Guide others)</option>
                </select>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Heart className="h-12 w-12 text-teal-400 mx-auto mb-4" />
              <h3 className="text-2xl font-playfair font-bold text-white">Motivation & Goals</h3>
              <p className="text-gray-300">Why join our community?</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Why do you want to join the Creator Circle? *
                </label>
                <textarea
                  value={formData.motivation.whyJoin}
                  onChange={(e) => handleInputChange('motivation', 'whyJoin', e.target.value)}
                  required
                  rows={4}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:border-teal-400 focus:outline-none transition-colors resize-vertical disabled:opacity-50"
                  placeholder="What attracts you to our community and createch philosophy?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  How do you plan to contribute to the community? *
                </label>
                <textarea
                  value={formData.motivation.contribution}
                  onChange={(e) => handleInputChange('motivation', 'contribution', e.target.value)}
                  required
                  rows={4}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:border-teal-400 focus:outline-none transition-colors resize-vertical disabled:opacity-50"
                  placeholder="What unique skills, perspectives, or resources can you bring?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  What are your goals within the Creator Circle? *
                </label>
                <textarea
                  value={formData.motivation.goals}
                  onChange={(e) => handleInputChange('motivation', 'goals', e.target.value)}
                  required
                  rows={4}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:border-teal-400 focus:outline-none transition-colors resize-vertical disabled:opacity-50"
                  placeholder="What do you hope to achieve or learn through this community?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Time Commitment *
                </label>
                <select
                  value={formData.motivation.timeCommitment}
                  onChange={(e) => handleInputChange('motivation', 'timeCommitment', e.target.value)}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-teal-400 focus:outline-none transition-colors disabled:opacity-50"
                >
                  <option value="">Select your availability</option>
                  <option value="casual">Casual (1-2 hours/week)</option>
                  <option value="regular">Regular (3-5 hours/week)</option>
                  <option value="active">Active (6-10 hours/week)</option>
                  <option value="dedicated">Dedicated (10+ hours/week)</option>
                </select>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Palette className="h-12 w-12 text-teal-400 mx-auto mb-4" />
              <h3 className="text-2xl font-playfair font-bold text-white">Background & Portfolio</h3>
              <p className="text-gray-300">Show us your work</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Portfolio/Work Samples
                </label>
                <input
                  type="url"
                  value={formData.background.portfolio}
                  onChange={(e) => handleInputChange('background', 'portfolio', e.target.value)}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:border-teal-400 focus:outline-none transition-colors disabled:opacity-50"
                  placeholder="Link to your portfolio, GitHub, Behance, etc."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Social Media/Professional Profiles
                </label>
                <input
                  type="url"
                  value={formData.background.socialMedia}
                  onChange={(e) => handleInputChange('background', 'socialMedia', e.target.value)}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:border-teal-400 focus:outline-none transition-colors disabled:opacity-50"
                  placeholder="LinkedIn, Instagram, Twitter, etc."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Previous Collaborations or Community Involvement
                </label>
                <textarea
                  value={formData.background.previousCollabs}
                  onChange={(e) => handleInputChange('background', 'previousCollabs', e.target.value)}
                  rows={4}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:border-teal-400 focus:outline-none transition-colors resize-vertical disabled:opacity-50"
                  placeholder="Tell us about any previous collaborative projects, communities you've been part of, or leadership roles..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Special Skills or Unique Offerings
                </label>
                <textarea
                  value={formData.background.specialSkills}
                  onChange={(e) => handleInputChange('background', 'specialSkills', e.target.value)}
                  rows={4}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:border-teal-400 focus:outline-none transition-colors resize-vertical disabled:opacity-50"
                  placeholder="Any unique skills, tools, resources, or perspectives you bring that might benefit the community..."
                />
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
              <Send className="mr-2 h-4 w-4" />
              {isSubmitting ? 'Submitting...' : 'Join Creator Circle'}
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default CreatorCircleForm;