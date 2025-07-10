import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from '@/shared/services/toast.service';

@Component({
  selector: 'app-community-join-form',
  templateUrl: './community-join-form.component.html',
  styleUrls: ['./community-join-form.component.scss']
})
export class CommunityJoinFormComponent implements OnInit {
  communityForm: FormGroup;
  isSubmitting = false;
  currentStep = 1;
  totalSteps = 4;

  skillAreas = [
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

  interestAreas = [
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

  constructor(
    private fb: FormBuilder,
    private toastService: ToastService
  ) {
    this.communityForm = this.fb.group({
      // Personal Info
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      age: ['', [Validators.required, Validators.min(16), Validators.max(65)]],
      location: ['', Validators.required],
      profession: ['', Validators.required],
      pronouns: [''],
      
      // Background
      education: ['', Validators.required],
      currentRole: ['', Validators.required],
      experience: ['', Validators.required],
      skills: [[], Validators.required],
      interests: [[], Validators.required],
      portfolio: [''],
      
      // Motivation
      whyJoin: ['', Validators.required],
      goals: ['', Validators.required],
      contribution: ['', Validators.required],
      challenges: ['', Validators.required],
      inspiration: [''],
      
      // Community
      participationLevel: ['', Validators.required],
      timeCommitment: ['', Validators.required],
      mentorshipInterest: ['', Validators.required],
      eventPreference: ['', Validators.required],
      communicationStyle: ['', Validators.required],
      guidelines: [false, Validators.requiredTrue]
    });
  }

  ngOnInit(): void {
  }

  nextStep(): void {
    if (this.currentStep < this.totalSteps) {
      this.currentStep++;
    }
  }

  prevStep(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  toggleSkill(skill: string): void {
    const skills = this.communityForm.get('skills')?.value || [];
    const index = skills.indexOf(skill);
    
    if (index > -1) {
      skills.splice(index, 1);
    } else {
      skills.push(skill);
    }
    
    this.communityForm.patchValue({ skills });
  }

  toggleInterest(interest: string): void {
    const interests = this.communityForm.get('interests')?.value || [];
    const index = interests.indexOf(interest);
    
    if (index > -1) {
      interests.splice(index, 1);
    } else {
      interests.push(interest);
    }
    
    this.communityForm.patchValue({ interests });
  }

  isSkillSelected(skill: string): boolean {
    const skills = this.communityForm.get('skills')?.value || [];
    return skills.includes(skill);
  }

  isInterestSelected(interest: string): boolean {
    const interests = this.communityForm.get('interests')?.value || [];
    return interests.includes(interest);
  }

  async onSubmit(): Promise<void> {
    if (this.communityForm.invalid) {
      return;
    }

    this.isSubmitting = true;

    const formData = {
      apikey: '53d4e36e-83ca-402d-8ce1-4e43d6530b98',
      subject: 'New Nebulher Community Application',
      ...this.communityForm.value,
      skills: this.communityForm.value.skills.join(', '),
      interests: this.communityForm.value.interests.join(', '),
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        this.toastService.success(
          '🎉 Welcome to Nebulher! Your application has been submitted successfully.',
          "We're excited to have you join our community! You'll receive a welcome email with next steps within 24 hours."
        );
        this.communityForm.reset();
        this.currentStep = 1;
      } else {
        throw new Error(result.message || 'An unknown error occurred.');
      }
    } catch (error: any) {
      this.toastService.error(
        '❌ Failed to submit application',
        error.message || 'There was an error submitting your application. Please try again or contact us directly.'
      );
    } finally {
      this.isSubmitting = false;
    }
  }
}