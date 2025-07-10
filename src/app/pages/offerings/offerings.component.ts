import { Component, OnInit } from '@angular/core';
import { ToastService } from '@/shared/services/toast.service';

@Component({
  selector: 'app-offerings',
  templateUrl: './offerings.component.html',
  styleUrls: ['./offerings.component.scss']
})
export class OfferingsComponent implements OnInit {

  offerings = [
    {
      title: "Coming Soon",
      description: "Handcrafted resin creations that capture memories and emotions",
      services: [
        "Personalized resin creations",
        "MIY Kits (Make-It-Yourself)",
        "Memory Capsules & StoryFrames",
        "Custom color palettes",
        "Preservation techniques"
      ],
      image: "Artisan hands working with colorful resin, creating beautiful translucent art pieces"
    },
    {
      title: "Coming Soon",
      description: "Where technology meets artistry in perfect harmony",
      services: [
        "LED + Motion Interactive Art",
        "Smart Keepsakes",
        "AI-Personalized Resin Decor (Coming Soon)",
        "Sensor-responsive installations",
        "NFC-enabled art pieces"
      ],
      image: "Glowing resin art with embedded LED lights and electronic components creating mesmerizing patterns"
    },
    {
      title: "Coming Soon",
      description: "Collaborative creations for unique spaces and special moments",
      services: [
        "Artist Collaborations",
        "Interior Installations",
        "Storytelling Design Gifting",
        "Event-specific creations",
        "Brand partnership pieces"
      ],
      image: "Large-scale resin installation in a modern interior space with ambient lighting"
    }
  ];

  kitTypes = [
    {
      type: "🎨 Art-Only Kits",
      description: "Resin pigments, molds, tools, guides",
      contents: ["Premium resin materials", "Color pigments", "Silicone molds", "Mixing tools", "Step-by-step guides"],
      price: "Starting from ₹1,999"
    },
    {
      type: "🔌 Tech-Only Kits",
      description: "Sensors, LEDs, NFC chips, solar panels",
      contents: ["LED strips & modules", "Motion sensors", "NFC chips", "Solar panels", "Programming guides"],
      price: "Starting from ₹2,499"
    },
    {
      type: "🌀 Fusion Kits",
      description: "Resin + Tech combined for smart resin builds",
      contents: ["Complete resin set", "Tech components", "Integration guides", "Project templates", "Support access"],
      price: "Starting from ₹3,999"
    }
  ];

  features = [
    {
      title: "Emotion-Encoded",
      description: "Every piece carries the story and emotion you want to preserve forever."
    },
    {
      title: "Smart Integration",
      description: "Seamlessly blend traditional artistry with cutting-edge technology."
    },
    {
      title: "Complete Kits",
      description: "Everything you need to create your own masterpiece, with expert guidance."
    },
    {
      title: "Personal Touch",
      description: "Each creation is uniquely yours, crafted with attention to your vision."
    },
    {
      title: "Interactive Elements",
      description: "Art that responds, changes, and evolves with its environment."
    },
    {
      title: "Endless Possibilities",
      description: "From simple keepsakes to complex installations, we bring ideas to life."
    }
  ];

  constructor(private toastService: ToastService) { }

  ngOnInit(): void {
  }

  handleOrderClick(): void {
    this.toastService.info(
      "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    );
  }
}