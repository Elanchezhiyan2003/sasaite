import { Component, OnInit } from '@angular/core';
import { ToastService } from '@/shared/services/toast.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  experiences = [
    {
      title: "Interactive Gallery",
      description: "Walk through our smart resin installations that respond to your presence and touch",
      features: [
        "Motion-activated light displays",
        "Touch-responsive color changes",
        "Sound-reactive patterns",
        "Personalized visual stories"
      ],
      duration: "45 minutes",
      capacity: "Up to 8 people",
      image: "Interactive art gallery with glowing resin installations responding to visitors"
    },
    {
      title: "Hands-On Workshop",
      description: "Create your own smart resin piece with guided instruction from our experts",
      features: [
        "Learn basic resin techniques",
        "Embed LED components",
        "Program simple interactions",
        "Take home your creation"
      ],
      duration: "2 hours",
      capacity: "Up to 6 people",
      image: "Workshop participants creating LED-embedded resin art with expert guidance"
    },
    {
      title: "Tech Demo Session",
      description: "Witness the latest in createch innovation with live demonstrations",
      features: [
        "AI-responsive installations",
        "IoT-connected art pieces",
        "Augmented reality integration",
        "Future tech previews"
      ],
      duration: "30 minutes",
      capacity: "Up to 12 people",
      image: "Live demonstration of cutting-edge createch technology and AI-responsive art"
    },
    {
      title: "Immersive Experience",
      description: "Step into a fully immersive createch environment where art and technology merge",
      features: [
        "360-degree interactive space",
        "Biometric-responsive environment",
        "Emotional mapping technology",
        "Personalized art generation"
      ],
      duration: "60 minutes",
      capacity: "Up to 4 people",
      image: "Immersive room with 360-degree interactive resin art responding to biometric data"
    }
  ];

  upcomingEvents = [
    {
      title: "Fusion Friday: Open Studio",
      date: "Every Friday",
      time: "6:00 PM - 9:00 PM",
      description: "Drop-in sessions to explore our interactive installations",
      price: "₹299 per person"
    },
    {
      title: "Weekend Workshop Series",
      date: "Saturdays & Sundays",
      time: "10:00 AM - 12:00 PM",
      description: "Hands-on createch workshops for beginners",
      price: "₹1,999 per person"
    },
    {
      title: "Tech Demo Showcase",
      date: "First Sunday of every month",
      time: "3:00 PM - 4:00 PM",
      description: "Latest innovations and future tech previews",
      price: "₹199 per person"
    },
    {
      title: "Immersive Experience Sessions",
      date: "By appointment",
      time: "Flexible timing",
      description: "Private immersive createch experiences",
      price: "₹2,999 per session"
    }
  ];

  testimonials = [
    {
      name: "Priya S.",
      role: "Tech Professional",
      quote: "I never thought art could be so interactive! The way the resin pieces responded to my touch was magical.",
      experience: "Interactive Gallery"
    },
    {
      name: "Arjun M.",
      role: "Design Student",
      quote: "The workshop opened my eyes to possibilities I never imagined. Creating my own smart art piece was incredible.",
      experience: "Hands-On Workshop"
    },
    {
      name: "Kavya R.",
      role: "Artist",
      quote: "The immersive experience was transformative. It felt like stepping into the future of art.",
      experience: "Immersive Experience"
    }
  ];

  constructor(private toastService: ToastService) { }

  ngOnInit(): void {
  }

  handleBookExperience(type?: string): void {
    this.toastService.info(
      "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    );
  }

  handleJoinVirtualExperience(): void {
    const phoneNumber = "919025486901";
    const message = encodeURIComponent("Hi! I'm interested in joining your virtual createch experience. Could you please provide details about the next available session and how to participate?");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
  }

  handleTryVirtualFirst(): void {
    const phoneNumber = "919025486901";
    const message = encodeURIComponent("Hi! I'd like to try your virtual createch experience before visiting in person. When is the next virtual session available?");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
  }
}