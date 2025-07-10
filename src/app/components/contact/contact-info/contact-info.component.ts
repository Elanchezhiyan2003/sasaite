import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss']
})
export class ContactInfoComponent implements OnInit {

  contactInfo = [
    {
      title: "Location",
      details: ["Coimbatore, Tamil Nadu", "India"]
    },
    {
      title: "Email",
      details: ["hello@stasisartis.com", "support@stasisartis.com"]
    },
    {
      title: "Phone",
      details: ["+91 XXXXX XXXXX", "WhatsApp Available"]
    },
    {
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}