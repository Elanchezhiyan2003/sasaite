import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from '@/shared/services/toast.service';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.scss']
})
export class ApplicationFormComponent implements OnInit {
  applicationForm: FormGroup;
  isSubmitting = false;
  currentStep = 1;
  totalSteps = 4;

  skillOptions = [
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

  constructor(
    private fb: FormBuilder,
    private toastService: ToastService
  ) {
    this.applicationForm = this.fb.group({
      // Personal Info
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(16), Validators.max(35)]],
      city: ['', Validators.required],
      state: ['', Validators.required],
      
      // Background
      education: ['', Validators.required],
      field: ['', Validators.required],
      experience: [''],
      skills: [[]],
      portfolio: [''],
      
      // Motivation
      whyCreatech: ['', Validators.required],
      goals: ['', Validators.required],
      contribution: ['', Validators.required],
      availability: ['', Validators.required],
      
      // Preferences
      learningStyle: ['', Validators.required],
      projectInterest: ['', Validators.required],
      techComfort: ['', Validators.required],
      artExperience: ['', Validators.required]
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
    const skills = this.applicationForm.get('skills')?.value || [];
    const index = skills.indexOf(skill);
    
    if (index > -1) {
      skills.splice(index, 1);
    } else {
      skills.push(skill);
    }
    
    this.applicationForm.patchValue({ skills });
  }

  isSkillSelected(skill: string): boolean {
    const skills = this.applicationForm.get('skills')?.value || [];
    return skills.includes(skill);
  }

  async onSubmit(): Promise<void> {
    if (this.applicationForm.invalid) {
      return;
    }

    this.isSubmitting = true;

    const formData = {
      apikey: '53d4e36e-83ca-402d-8ce1-4e43d6530b98',
      subject: 'New Internship Application',
      ...this.applicationForm.value,
      skills: this.applicationForm.value.skills.join(', '),
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
          '🎉 Application submitted successfully!',
          "Thank you for applying to the Createch Capsule program. We'll review your application and get back to you within 3-5 business days."
        );
        this.applicationForm.reset();
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