import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-cta',
  templateUrl: './contact-cta.component.html',
  styleUrls: ['./contact-cta.component.scss']
})
export class ContactCtaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  handleWhatsAppClick(): void {
    const phoneNumber = "919025486901";
    const message = encodeURIComponent("Hi! I'm interested in learning more about Stasis Artis and your createch solutions. Could we discuss how you can help with my project?");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
  }

  handleScheduleCall(): void {
    const phoneNumber = "919025486901";
    const message = encodeURIComponent("Hi! I'd like to schedule a call to discuss my createch project requirements. When would be a good time for a consultation?");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
  }
}