import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Upload, User, Mail, Phone, GraduationCap, Code, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';


const ApplicationForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    personalInfo: {
      fullName: '',
      email: '',
      phone: '',
      age: '',
      city: '',
      state: ''
    },
    background: {
      education: '',
      field: '',
      experience: '',
      skills: [],
      portfolio: ''
    },
    motivation: {
      whyCreatech: '',
      goals: '',
      contribution: '',
      availability: ''
    },
    preferences: {
      learningStyle: '',
      projectInterest: '',
      techComfort: '',
      artExperience: ''
    }
  });

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const skillOptions = [
    'Programming (Python, JavaScript, etc.)',
    'Electronics & Hardware',
    'Resin Art & Crafting',
    'Digital Design',
    'IoT & Sensors',
    'Mobile App Development',
    'Web Development',
    'Traditional Art',
    'Photography',
    'Video Editing',
    'Project Management',
    'Teaching/Mentoring'
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

  const handleSkillToggle = (skill) => {
    setFormData(prev => ({
      ...prev,
      background: {
        ...prev.background,
        skills: prev.background.skills.includes(skill)
          ? prev.background.skills.filter(s => s !== skill)
          : [...prev.background.skills, skill]
      }
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const finalFormData = {
      apikey: '53d4e36e-83ca-402d-8ce1-4e43d6530b98',
      subject: 'New Internship Application',
      ...formData.personalInfo,
      ...formData.background,
      ...formData.motivation,
      ...formData.preferences,
      skills: formData.background.skills.join(', '),
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
          title: '🎉 Application submitted successfully!',
          description: "Thank you for applying to the Createch Capsule program. We'll review your application and get back to you within 3-5 business days.",
          duration: 5000,
        });
        // Reset form
        setFormData({
          personalInfo: { fullName: '', email: '', phone: '', age: '', city: '', state: '' },
          background: { education: '', field: '', experience: '', skills: [], portfolio: '' },
          motivation: { whyCreatech: '', goals: '', contribution: '', availability: '' },
          preferences: { learningStyle: '', projectInterest: '', techComfort: '', artExperience: '' },
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
                  Phone Number *
                </label>
                <input
                  type="tel"
                  value={formData.personalInfo.phone}
                  onChange={(e) => handleInputChange('personalInfo', 'phone', e.target.value)}
                  required
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
                  max="35"
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:border-teal-400 focus:outline-none transition-colors disabled:opacity-50"
                  placeholder="Your age"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  City *
                </label>
                <input
                  type="text"
                  value={formData.personalInfo.city}
                  onChange={(e) => handleInputChange('personalInfo', 'city', e.target.value)}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:border-teal-400 focus:outline-none transition-colors disabled:opacity-50"
                  placeholder="Your city"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  State *
                </label>
                <input
                  type="text"
                  value={formData.personalInfo.state}
                  onChange={(e) => handleInputChange('personalInfo', 'state', e.target.value)}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:border-teal-400 focus:outline-none transition-colors disabled:opacity-50"
                  placeholder="Your state"
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <GraduationCap className="h-12 w-12 text-teal-400 mx-auto mb-4" />
              <h3 className="text-2xl font-playfair font-bold text-white">Educational Background</h3>
              <p className="text-gray-300">Your learning journey so far</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Current Education Level *
                </label>
                <select
                  value={formData.background.education}
                  onChange={(e) => handleInputChange('background', 'education', e.target.value)}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-teal-400 focus:outline-none transition-colors disabled:opacity-50"
                >
                  <option value="">Select your education level</option>
                  <option value="high-school">High School (12th Grade)</option>
                  <option value="diploma">Diploma</option>
                  <option value="undergraduate">Undergraduate (Pursuing/Completed)</option>
                  <option value="postgraduate">Postgraduate (Pursuing/Completed)</option>
                  <option value="professional">Professional Course</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Field of Study *
                </label>
                <input
                  type="text"
                  value={formData.background.field}
                  onChange={(e) => handleInputChange('background', 'field', e.target.value)}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:border-teal-400 focus:outline-none transition-colors disabled:opacity-50"
                  placeholder="e.g., Computer Science, Fine Arts, Electronics, etc."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Relevant Experience
                </label>
                <textarea
                  value={formData.background.experience}
                  onChange={(e) => handleInputChange('background', 'experience', e.target.value)}
                  rows={4}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:border-teal-400 focus:outline-none transition-colors resize-vertical disabled:opacity-50"
                  placeholder="Any previous experience with art, technology, programming, or related fields..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Current Skills (Select all that apply)
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                  {skillOptions.map((skill) => (
                    <label key={skill} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.background.skills.includes(skill)}
                        onChange={() => handleSkillToggle(skill)}
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
                  Portfolio/Work Samples (Optional)
                </label>
                <input
                  type="url"
                  value={formData.background.portfolio}
                  onChange={(e) => handleInputChange('background', 'portfolio', e.target.value)}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:border-teal-400 focus:outline-none transition-colors disabled:opacity-50"
                  placeholder="Link to your portfolio, GitHub, Instagram, etc."
                />
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Palette className="h-12 w-12 text-teal-400 mx-auto mb-4" />
              <h3 className="text-2xl font-playfair font-bold text-white">Motivation & Goals</h3>
              <p className="text-gray-300">Why createch? What drives you?</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Why are you interested in Createch? *
                </label>
                <textarea
                  value={formData.motivation.whyCreatech}
                  onChange={(e) => handleInputChange('motivation', 'whyCreatech', e.target.value)}
                  required
                  rows={4}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:border-teal-400 focus:outline-none transition-colors resize-vertical disabled:opacity-50"
                  placeholder="What excites you about the fusion of creativity and technology?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  What do you hope to achieve through this program? *
                </label>
                <textarea
                  value={formData.motivation.goals}
                  onChange={(e) => handleInputChange('motivation', 'goals', e.target.value)}
                  required
                  rows={4}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:border-teal-400 focus:outline-none transition-colors resize-vertical disabled:opacity-50"
                  placeholder="Your learning goals and career aspirations..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  How do you plan to contribute to the createch community? *
                </label>
                <textarea
                  value={formData.motivation.contribution}
                  onChange={(e) => handleInputChange('motivation', 'contribution', e.target.value)}
                  required
                  rows={4}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:border-teal-400 focus:outline-none transition-colors resize-vertical disabled:opacity-50"
                  placeholder="What unique perspective or skills will you bring?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Availability & Commitment *
                </label>
                <select
                  value={formData.motivation.availability}
                  onChange={(e) => handleInputChange('motivation', 'availability', e.target.value)}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-teal-400 focus:outline-none transition-colors disabled:opacity-50"
                >
                  <option value="">Select your availability</option>
                  <option value="full-time">Full-time (40+ hours/week)</option>
                  <option value="part-time">Part-time (20-30 hours/week)</option>
                  <option value="flexible">Flexible (15-25 hours/week)</option>
                  <option value="weekend">Weekends only</option>
                </select>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Code className="h-12 w-12 text-teal-400 mx-auto mb-4" />
              <h3 className="text-2xl font-playfair font-bold text-white">Learning Preferences</h3>
              <p className="text-gray-300">Help us customize your experience</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Preferred Learning Style *
                </label>
                <select
                  value={formData.preferences.learningStyle}
                  onChange={(e) => handleInputChange('preferences', 'learningStyle', e.target.value)}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-teal-400 focus:outline-none transition-colors disabled:opacity-50"
                >
                  <option value="">Select your learning style</option>
                  <option value="hands-on">Hands-on/Practical</option>
                  <option value="theoretical">Theoretical/Conceptual</option>
                  <option value="visual">Visual/Demonstration</option>
                  <option value="collaborative">Collaborative/Group</option>
                  <option value="self-paced">Self-paced/Independent</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Most Interesting Project Type *
                </label>
                <select
                  value={formData.preferences.projectInterest}
                  onChange={(e) => handleInputChange('preferences', 'projectInterest', e.target.value)}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-teal-400 focus:outline-none transition-colors disabled:opacity-50"
                >
                  <option value="">Select project interest</option>
                  <option value="interactive-art">Interactive Art Installations</option>
                  <option value="smart-jewelry">Smart Jewelry & Accessories</option>
                  <option value="home-decor">Smart Home Decor</option>
                  <option value="educational-tools">Educational Tools & Kits</option>
                  <option value="wearable-tech">Wearable Technology</option>
                  <option value="iot-projects">IoT & Connected Devices</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Technology Comfort Level *
                </label>
                <select
                  value={formData.preferences.techComfort}
                  onChange={(e) => handleInputChange('preferences', 'techComfort', e.target.value)}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-teal-400 focus:outline-none transition-colors disabled:opacity-50"
                >
                  <option value="">Select comfort level</option>
                  <option value="beginner">Beginner (New to tech)</option>
                  <option value="intermediate">Intermediate (Some experience)</option>
                  <option value="advanced">Advanced (Very comfortable)</option>
                  <option value="expert">Expert (Professional level)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Art/Creative Experience Level *
                </label>
                <select
                  value={formData.preferences.artExperience}
                  onChange={(e) => handleInputChange('preferences', 'artExperience', e.target.value)}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-teal-400 focus:outline-none transition-colors disabled:opacity-50"
                >
                  <option value="">Select experience level</option>
                  <option value="beginner">Beginner (New to art/crafts)</option>
                  <option value="hobbyist">Hobbyist (Casual interest)</option>
                  <option value="intermediate">Intermediate (Regular practice)</option>
                  <option value="advanced">Advanced (Skilled artist)</option>
                  <option value="professional">Professional (Art career)</option>
                </select>
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
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ApplicationForm;