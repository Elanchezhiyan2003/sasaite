import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from '@/shared/services/toast.service';

@Component({
  selector: 'app-b2b-call-form',
  templateUrl: './b2b-call-form.component.html',
  styleUrls: ['./b2b-call-form.component.scss']
})
export class B2bCallFormComponent implements OnInit {
  b2bForm: FormGroup;
  isSubmitting = false;
  currentStep = 1;
  totalSteps = 4;

  industries = [
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

  partnershipTypes = [
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

  timeSlots = [
    '9:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '2:00 PM - 3:00 PM',
    '3:00 PM - 4:00 PM',
    '4:00 PM - 5:00 PM',
    '5:00 PM - 6:00 PM'
  ];

  timezones = [
    'IST (Indian Standard Time)',
    'EST (Eastern Standard Time)',
    'PST (Pacific Standard Time)',
    'GMT (Greenwich Mean Time)',
    'CET (Central European Time)',
    'JST (Japan Standard Time)',
    'AEST (Australian Eastern Standard Time)'
  ];

  constructor(
    private fb: FormBuilder,
    private toastService: ToastService
  ) {
    this.b2bForm = this.fb.group({
      // Company Info
      companyName: ['', Validators.required],
      industry: ['', Validators.required],
      companySize: ['', Validators.required],
      website: [''],
      location: ['', Validators.required],
      
      // Contact Info
      fullName: ['', Validators.required],
      position: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      preferredContact: ['', Validators.required],
      
      // Project Details
      partnershipType: ['', Validators.required],
      projectScope: ['', Validators.required],
      budget: ['', Validators.required],
      timeline: ['', Validators.required],
      requirements: [''],
      
      // Scheduling
      preferredDate: ['', Validators.required],
      preferredTime: ['', Validators.required],
      timezone: ['', Validators.required],
      duration: ['', Validators.required],
      meetingType: ['', Validators.required]
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

  async onSubmit(): Promise<void> {
    if (this.b2bForm.invalid) {
      return;
    }

    this.isSubmitting = true;

    const formData = {
      apikey: '53d4e36e-83ca-402d-8ce1-4e43d6530b98',
      subject: 'New B2B Collaboration Request',
      ...this.b2bForm.value,
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
          '✅ Consultation Booked!',
          "We've received your request and will be in touch shortly."
        );
        this.b2bForm.reset();
        this.currentStep = 1;
      } else {
        throw new Error(result.message || 'An unknown error occurred.');
      }
    } catch (error: any) {
      this.toastService.error(
        '❌ Failed to schedule consultation',
        error.message || 'There was an error scheduling your consultation. Please try again or contact us directly.'
      );
    } finally {
      this.isSubmitting = false;
    }
  }

  getTodayDate(): string {
    return new Date().toISOString().split('T')[0];
  }
}