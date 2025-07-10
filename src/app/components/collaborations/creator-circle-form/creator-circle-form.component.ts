import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from '@/shared/services/toast.service';

@Component({
  selector: 'app-creator-circle-form',
  templateUrl: './creator-circle-form.component.html',
  styleUrls: ['./creator-circle-form.component.scss']
})
export class CreatorCircleFormComponent implements OnInit {
  creatorForm: FormGroup;
  isSubmitting = false;
  currentStep = 1;
  totalSteps = 4;

  creatorRoles = [
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

  skillAreas = [
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

  projectTypes = [
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

  constructor(
    private fb: FormBuilder,
    private toastService: ToastService
  ) {
    this.creatorForm = this.fb.group({
      // Personal Info
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      location: ['', Validators.required],
      profession: ['', Validators.required],
      experience: ['', Validators.required],
      
      // Interests
      primaryRole: ['', Validators.required],
      skillAreas: [[], Validators.required],
      projectTypes: [[], Validators.required],
      collaborationInterest: ['', Validators.required],
      
      // Motivation
      whyJoin: ['', Validators.required],
      contribution: ['', Validators.required],
      goals: ['', Validators.required],
      timeCommitment: ['', Validators.required],
      
      // Background
      portfolio: [''],
      socialMedia: [''],
      previousCollabs: [''],
      specialSkills: ['']
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

  toggleSkillArea(skill: string): void {
    const skills = this.creatorForm.get('skillAreas')?.value || [];
    const index = skills.indexOf(skill);
    
    if (index > -1) {
      skills.splice(index, 1);
    } else {
      skills.push(skill);
    }
    
    this.creatorForm.patchValue({ skillAreas: skills });
  }

  toggleProjectType(project: string): void {
    const projects = this.creatorForm.get('projectTypes')?.value || [];
    const index = projects.indexOf(project);
    
    if (index > -1) {
      projects.splice(index, 1);
    } else {
      projects.push(project);
    }
    
    this.creatorForm.patchValue({ projectTypes: projects });
  }

  isSkillSelected(skill: string): boolean {
    const skills = this.creatorForm.get('skillAreas')?.value || [];
    return skills.includes(skill);
  }

  isProjectSelected(project: string): boolean {
    const projects = this.creatorForm.get('projectTypes')?.value || [];
    return projects.includes(project);
  }

  async onSubmit(): Promise<void> {
    if (this.creatorForm.invalid) {
      return;
    }

    this.isSubmitting = true;

    const formData = {
      apikey: '53d4e36e-83ca-402d-8ce1-4e43d6530b98',
      subject: 'New Creator Circle Application',
      ...this.creatorForm.value,
      skillAreas: this.creatorForm.value.skillAreas.join(', '),
      projectTypes: this.creatorForm.value.projectTypes.join(', '),
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
          '🎉 Welcome to the Creator Circle! Your application has been submitted successfully.',
          "We'll review your application and get back to you within 48 hours with next steps."
        );
        this.creatorForm.reset();
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