import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from '@/shared/services/toast.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  contactForm: FormGroup;
  isSubmitting = false;

  inquiryTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'bulk', label: 'Bulk Orders' },
    { value: 'collaboration', label: 'Collaboration' },
    { value: 'internship', label: 'Internship Program' },
    { value: 'community', label: 'Nebulher Community' },
    { value: 'custom', label: 'Custom Project' }
  ];

  constructor(
    private fb: FormBuilder,
    private toastService: ToastService
  ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      organization: [''],
      subject: ['', Validators.required],
      message: ['', Validators.required],
      inquiryType: ['general']
    });
  }

  ngOnInit(): void {
  }

  async onSubmit(): Promise<void> {
    if (this.contactForm.invalid) {
      return;
    }

    this.isSubmitting = true;

    const formData = {
      apikey: '53d4e36e-83ca-402d-8ce1-4e43d6530b98',
      subject: `New Contact Form Submission: ${this.contactForm.value.subject}`,
      ...this.contactForm.value
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
          '✅ Message sent successfully!',
          "Thank you for contacting us. We'll get back to you within 24 hours."
        );
        this.contactForm.reset();
        this.contactForm.patchValue({ inquiryType: 'general' });
      } else {
        throw new Error(result.message || 'An unknown error occurred.');
      }
    } catch (error: any) {
      this.toastService.error(
        '❌ Failed to send message',
        error.message || 'There was an error sending your message. Please try again or contact us directly.'
      );
    } finally {
      this.isSubmitting = false;
    }
  }
}