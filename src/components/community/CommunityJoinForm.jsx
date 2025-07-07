import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Heart, Code, Palette, Lightbulb, Users, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';


const CommunityJoinForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    personalInfo: {
      fullName: '',
      email: '',
      phone: '',
      age: '',
      location: '',
      profession: '',
      pronouns: ''
    },
    background: {
      education: '',
      currentRole: '',
      experience: '',
      skills: [],
      interests: [],
      portfolio: ''
    },
    motivation: {
      whyJoin: '',
      goals: '',
      contribution: '',
      challenges: '',
      inspiration: ''
    },
    community: {
      participationLevel: '',
      timeCommitment: '',
      mentorshipInterest: '',
      eventPreference: '',
      communicationStyle: ''
    }
  });

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const skillAreas = [
    'Resin Art & Crafting',
    'Programming & Development',
    'Electronics & IoT',
    'Digital Design & UI/UX',
    'Teaching & Education',
    'Project Management',
    'Content Creation',
    'Photography/Videography',
    'Marketing & Social Media',
    'Business Development',
    'Research & Innovation',
    'Community Building',
    'Writing & Documentation',
    'Public Speaking',
    'Event Planning',
    'Mentoring & Coaching'
  ];

  const interestAreas = [
    'Smart Home Technology',
    'Wearable Tech',
    'Interactive Art',
    'Educational Tools',
    'Sustainable Technology',
    'Women in Tech',
    'Entrepreneurship',
    'Open Source Projects',
    'Maker Movement',
    'STEM Education',
    'Creative Coding',
    'Hardware Hacking',
    'Social Impact Tech',
    'Accessibility Technology',
    'Environmental Tech',
    'Health & Wellness Tech'
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
      subject: 'New Nebulher Community Application',
      ...formData.personalInfo,
      ...formData.background,
      ...formData.motivation,
      ...formData.community,
      skills: formData.background.skills.join(', '),
      interests: formData.background.interests.join(', '),
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
          title: '🎉 Welcome to Nebulher! Your application has been submitted successfully.',
          description: "We're excited to have you join our community! You'll receive a welcome email with next steps within 24 hours.",
          duration: 5000,
        });
        // Reset form
        setFormData({
          personalInfo: { fullName: '', email: '', phone: '', age: '', location: '', profession: '', pronouns: '' },
          background: { education: '', currentRole: '', experience: '', skills: [], interests: [], portfolio: '' },
          motivation: { whyJoin: '', goals: '', contribution: '', challenges: '', inspiration: '' },
          community: { participationLevel: '', timeCommitment: '', mentorshipInterest: '', eventPreference: '', communicationStyle: '' },
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
                  Age *
                </label>
                <input
                  type="number"
                  value={formData.personalInfo.age}
                  onChange={(e) => handleInputChange('personalInfo', 'age', e.target.value)}
                  required
                  min="16"
                  max="65"
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:border-teal-400 focus:outline-none transition-colors disabled:opacity-50"
                  placeholder="Your age"
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
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Pronouns (Optional)
                </label>
                <select
                  value={formData.personalInfo.pronouns}
                  onChange={(e) => handleInputChange('personalInfo', 'pronouns', e.target.value)}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-teal-400 focus:outline-none transition-colors disabled:opacity-50"
                >
                  <option value="">Select pronouns</option>
                  <option value="she/her">She/Her</option>
                  <option value="he/him">He/Him</option>
                  <option value="they/them">They/Them</option>
                  <option value="other">Other</option>
                  <option value="prefer-not-to-say">Prefer not to say</option>
                </select>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Code className="h-12 w-12 text-teal-400 mx-auto mb-4" />
              <h3 className="text-2xl font-playfair font-bold text-white">Background & Skills</h3>
              <p className="text-gray-300">Your experience and expertise</p>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Educational Background *
                </label>
                <select
                  value={formData.background.education}
                  onChange={(e) => handleInputChange('background', 'education', e.target.value)}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-teal-400 focus:outline-none transition-colors disabled:opacity-50"
                >
                  <option value="">Select your education level</option>
                  <option value="high-school">High School</option>
                  <option value="diploma">Diploma</option>
                  <option value="undergraduate">Undergraduate Degree</option>
                  <option value="postgraduate">Postgraduate Degree</option>
                  <option value="phd">PhD/Doctorate</option>
                  <option value="professional">Professional Certification</option>
                  <option value="self-taught">Self-taught</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Current Role/Status *
                </label>
                <select
                  value={formData.background.currentRole}
                  onChange={(e) => handleInputChange('background', 'currentRole', e.target.value)}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-teal-400 focus:outline-none transition-colors disabled:opacity-50"
                >
                  <option value="">Select your current status</option>
                  <option value="student">Student</option>
                  <option value="working-professional">Working Professional</option>
                  <option value="entrepreneur">Entrepreneur</option>
                  <option value="freelancer">Freelancer</option>
                  <option value="homemaker">Homemaker</option>
                  <option value="career-break">Career Break</option>
                  <option value="retired">Retired</option>
                  <option value="job-seeking">Job Seeking</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Experience Level *
                </label>
                <select
                  value={formData.background.experience}
                  onChange={(e) => handleInputChange('background', 'experience', e.target.value)}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-teal-400 focus:outline-none transition-colors disabled:opacity-50"
                >
                  <option value="">Select experience level</option>
                  <option value="complete-beginner">Complete Beginner</option>
                  <option value="some-experience">Some Experience (1-2 years)</option>
                  <option value="intermediate">Intermediate (3-5 years)</option>
                  <option value="experienced">Experienced (6-10 years)</option>
                  <option value="expert">Expert (10+ years)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Skills & Expertise (Select all that apply) *
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3 max-h-48 overflow-y-auto">
                  {skillAreas.map((skill) => (
                    <label key={skill} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.background.skills.includes(skill)}
                        onChange={() => handleArrayToggle('background', 'skills', skill)}
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
                  Interest Areas (Select all that apply) *
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3 max-h-48 overflow-y-auto">
                  {interestAreas.map((interest) => (
                    <label key={interest} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.background.interests.includes(interest)}
                        onChange={() => handleArrayToggle('background', 'interests', interest)}
                        disabled={isSubmitting}
                        className="w-4 h-4 text-teal-400 bg-gray-800 border-gray-600 rounded focus:ring-teal-400 focus:ring-2 disabled:opacity-50"
                      />
                      <span className="text-gray-300 text-sm">{interest}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Portfolio/Work Samples (Optional)
                </label>
                <input
                  type="url"
                  value={formData.background.portfolio}
                  onChange={(e) => handleInputChange('background', 'portfolio', e.target.value)}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:border-teal-400 focus:outline-none transition-colors disabled:opacity-50"
                  placeholder="Link to your portfolio, GitHub, LinkedIn, etc."
                />
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
              <p className="text-gray-300">Why Nebulher? What drives you?</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Why do you want to join Nebulher? *
                </label>
                <textarea
                  value={formData.motivation.whyJoin}
                  onChange={(e) => handleInputChange('motivation', 'whyJoin', e.target.value)}
                  required
                  rows={4}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:border-teal-400 focus:outline-none transition-colors resize-vertical disabled:opacity-50"
                  placeholder="What attracts you to our women-only createch community?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  What are your goals within the community? *
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
                  What challenges do you face as a woman in tech/creativity? *
                </label>
                <textarea
                  value={formData.motivation.challenges}
                  onChange={(e) => handleInputChange('motivation', 'challenges', e.target.value)}
                  required
                  rows={4}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:border-teal-400 focus:outline-none transition-colors resize-vertical disabled:opacity-50"
                  placeholder="Share your experiences and challenges you'd like support with..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  What inspires you most about the intersection of art and technology?
                </label>
                <textarea
                  value={formData.motivation.inspiration}
                  onChange={(e) => handleInputChange('motivation', 'inspiration', e.target.value)}
                  rows={4}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:border-teal-400 focus:outline-none transition-colors resize-vertical disabled:opacity-50"
                  placeholder="What excites you about createch and its possibilities?"
                />
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Users className="h-12 w-12 text-teal-400 mx-auto mb-4" />
              <h3 className="text-2xl font-playfair font-bold text-white">Community Preferences</h3>
              <p className="text-gray-300">How you'd like to engage</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Desired Participation Level *
                </label>
                <select
                  value={formData.community.participationLevel}
                  onChange={(e) => handleInputChange('community', 'participationLevel', e.target.value)}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-teal-400 focus:outline-none transition-colors disabled:opacity-50"
                >
                  <option value="">Select participation level</option>
                  <option value="observer">Observer (Learn and watch)</option>
                  <option value="participant">Participant (Join activities)</option>
                  <option value="contributor">Contributor (Lead initiatives)</option>
                  <option value="mentor">Mentor (Guide others)</option>
                  <option value="leader">Community Leader</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Time Commitment *
                </label>
                <select
                  value={formData.community.timeCommitment}
                  onChange={(e) => handleInputChange('community', 'timeCommitment', e.target.value)}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-teal-400 focus:outline-none transition-colors disabled:opacity-50"
                >
                  <option value="">Select your availability</option>
                  <option value="minimal">Minimal (1-2 hours/week)</option>
                  <option value="casual">Casual (3-5 hours/week)</option>
                  <option value="regular">Regular (6-10 hours/week)</option>
                  <option value="active">Active (11-15 hours/week)</option>
                  <option value="dedicated">Dedicated (15+ hours/week)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Mentorship Interest *
                </label>
                <select
                  value={formData.community.mentorshipInterest}
                  onChange={(e) => handleInputChange('community', 'mentorshipInterest', e.target.value)}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-teal-400 focus:outline-none transition-colors disabled:opacity-50"
                >
                  <option value="">Select mentorship preference</option>
                  <option value="seeking-mentor">Looking for a mentor</option>
                  <option value="willing-to-mentor">Willing to mentor others</option>
                  <option value="peer-mentoring">Interested in peer mentoring</option>
                  <option value="both">Both seeking and offering mentorship</option>
                  <option value="not-interested">Not interested in mentorship</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Event Preference *
                </label>
                <select
                  value={formData.community.eventPreference}
                  onChange={(e) => handleInputChange('community', 'eventPreference', e.target.value)}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-teal-400 focus:outline-none transition-colors disabled:opacity-50"
                >
                  <option value="">Select event preference</option>
                  <option value="online-only">Online events only</option>
                  <option value="offline-only">In-person events only</option>
                  <option value="hybrid">Both online and in-person</option>
                  <option value="flexible">Flexible based on content</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Communication Style *
                </label>
                <select
                  value={formData.community.communicationStyle}
                  onChange={(e) => handleInputChange('community', 'communicationStyle', e.target.value)}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-teal-400 focus:outline-none transition-colors disabled:opacity-50"
                >
                  <option value="">Select communication style</option>
                  <option value="direct">Direct and straightforward</option>
                  <option value="collaborative">Collaborative and consensus-building</option>
                  <option value="supportive">Supportive and encouraging</option>
                  <option value="analytical">Analytical and detail-oriented</option>
                  <option value="creative">Creative and expressive</option>
                  <option value="adaptive">Adaptive to situation</option>
                </select>
              </div>
            </div>

            {/* Community Guidelines Acknowledgment */}
            <div className="glass-effect rounded-xl p-6 bg-gradient-to-br from-teal-900/20 to-cyan-900/20">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Star className="h-5 w-5 text-teal-400 mr-2" />
                Community Guidelines
              </h4>
              <div className="space-y-2 text-sm text-gray-300 mb-4">
                <p>• Respect and inclusivity for all members</p>
                <p>• Open knowledge sharing and collaboration</p>
                <p>• Quality contributions and constructive feedback</p>
                <p>• Support for each other's growth and success</p>
                <p>• Commitment to the community's values and mission</p>
              </div>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  required
                  disabled={isSubmitting}
                  className="w-4 h-4 text-teal-400 bg-gray-800 border-gray-600 rounded focus:ring-teal-400 focus:ring-2 disabled:opacity-50"
                />
                <span className="text-white text-sm">
                  I agree to follow the Nebulher community guidelines and values *
                </span>
              </label>
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
              {isSubmitting ? 'Submitting...' : 'Join Nebulher Community'}
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default CommunityJoinForm;