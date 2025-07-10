import { Component, OnInit } from '@angular/core';
import { ToastService } from '@/shared/services/toast.service';

@Component({
  selector: 'app-bulk-orders',
  templateUrl: './bulk-orders.component.html',
  styleUrls: ['./bulk-orders.component.scss']
})
export class BulkOrdersComponent implements OnInit {

  educationOfferings = [
    {
      title: "Creative Learning Kits",
      description: "Resin-based educational kits designed to make learning interactive and memorable",
      features: ["Age-appropriate materials", "Curriculum integration guides", "Safety protocols", "Teacher training included"],
      suitableFor: "Schools, Colleges, Educational Institutions"
    },
    {
      title: "Fusion Workshops",
      description: "Hands-on workshops combining resin art with technology for STEAM education",
      features: ["Expert facilitators", "All materials provided", "Project-based learning", "Student certificates"],
      suitableFor: "Schools, Summer Camps, Educational Programs"
    },
    {
      title: "Art-Tech Curriculum Modules",
      description: "Complete curriculum modules integrating createch into existing programs",
      features: ["Lesson plans", "Assessment rubrics", "Digital resources", "Ongoing support"],
      suitableFor: "Educational Boards, Universities, Training Centers"
    },
    {
      title: "ATL/STEM Integration",
      description: "Specialized programs for Atal Tinkering Labs and STEM initiatives",
      features: ["ATL-compliant activities", "Innovation projects", "Mentor support", "Competition preparation"],
      suitableFor: "ATL Labs, STEM Centers, Innovation Hubs"
    }
  ];

  corporateOfferings = [
    {
      title: "Team Bonding Resin Sessions",
      description: "Interactive team-building activities that create lasting memories and stronger bonds",
      features: ["Professional facilitation", "Custom themes", "Take-home creations", "Team challenges"],
      benefits: ["Improved collaboration", "Stress relief", "Creative thinking", "Memorable experience"]
    },
    {
      title: "Smart Corporate Gifting",
      description: "Custom tech-enhanced resin items perfect for corporate gifts and awards",
      features: ["Brand integration", "NFC/QR embedding", "Custom packaging", "Bulk pricing"],
      benefits: ["Unique brand presence", "Tech-forward image", "Memorable impact", "Sustainable materials"]
    },
    {
      title: "Custom Branding Solutions",
      description: "Resin installations and products featuring your brand in innovative ways",
      features: ["Logo embedding", "Color matching", "Interactive elements", "Installation support"],
      benefits: ["Brand differentiation", "Modern aesthetics", "Interactive engagement", "Long-lasting impact"]
    }
  ];

  pricingTiers = [
    {
      quantity: "25-50 Units",
      discount: "10% Off",
      features: ["Standard packaging", "Basic customization", "Email support", "2-week delivery"],
      bestFor: "Small teams, Pilot programs"
    },
    {
      quantity: "51-100 Units",
      discount: "15% Off",
      features: ["Premium packaging", "Advanced customization", "Priority support", "1-week delivery"],
      bestFor: "Medium organizations, Events"
    },
    {
      quantity: "100+ Units",
      discount: "20% Off",
      features: ["Luxury packaging", "Full customization", "Dedicated account manager", "Express delivery"],
      bestFor: "Large corporations, Institutions"
    }
  ];

  constructor(private toastService: ToastService) { }

  ngOnInit(): void {
  }

  handleRequestBulkQuote(): void {
    const phoneNumber = "919025486901";
    const message = encodeURIComponent("Hi! I'm interested in bulk orders for my organization. Could you please provide a detailed quote and discuss our requirements? We're looking at educational/corporate solutions from Stasis Artis.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
  }

  handleScheduleConsultation(): void {
    const phoneNumber = "919025486901";
    const message = encodeURIComponent("Hi! I'd like to schedule a consultation for bulk orders. We're interested in createch solutions for our organization and would like to discuss our specific needs, timeline, and pricing options.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
  }
}