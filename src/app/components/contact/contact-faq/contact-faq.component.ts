import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-faq',
  templateUrl: './contact-faq.component.html',
  styleUrls: ['./contact-faq.component.scss']
})
export class ContactFaqComponent implements OnInit {

  faqs = [
    {
      question: "What is createch?",
      answer: "Createch is our term for the fusion of creativity and technology - specifically combining traditional resin art with embedded electronics, sensors, and smart features."
    },
    {
      question: "Do you ship nationwide?",
      answer: "Yes, we ship across India. For bulk orders, we provide special logistics support and can arrange on-site workshops and training."
    },
    {
      question: "Can I customize products for my organization?",
      answer: "Absolutely! We specialize in custom solutions for educational institutions and corporates, including branding, specific features, and tailored experiences."
    },
    {
      question: "What's the typical project timeline?",
      answer: "Project timelines vary based on complexity. Simple custom pieces take 1-2 weeks, while large installations or bulk orders may take 4-6 weeks."
    },
    {
      question: "Do you provide training and support?",
      answer: "Yes, we offer comprehensive training for our products, especially for educational institutions. We also provide ongoing support and troubleshooting."
    },
    {
      question: "How can I join the Nebulher community?",
      answer: "The Nebulher community is open to all women interested in createch. You can join through our website or contact us directly for more information."
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}