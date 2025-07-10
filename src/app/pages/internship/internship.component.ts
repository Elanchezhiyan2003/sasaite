import { Component, OnInit } from '@angular/core';
import { ToastService } from '@/shared/services/toast.service';

@Component({
  selector: 'app-internship',
  templateUrl: './internship.component.html',
  styleUrls: ['./internship.component.scss']
})
export class InternshipComponent implements OnInit {
  showApplicationForm = false;

  modules = [
    {
      week: 1,
      title: "Foundation: Resin + Embedded Systems",
      topics: [
        "Introduction to resin chemistry and properties",
        "Basic electronics and embedded systems",
        "Safety protocols and workspace setup",
        "Understanding color theory and pigments",
        "Simple circuit design principles"
      ],
      project: "Create your first LED-embedded resin piece"
    },
    {
      week: 2,
      title: "Fusion: Resin + LEDs/Motion",
      topics: [
        "Advanced LED integration techniques",
        "Motion sensors and responsive systems",
        "Programming basics for interactive art",
        "Power management and battery systems",
        "Troubleshooting common issues"
      ],
      project: "Build a motion-responsive resin sculpture"
    },
    {
      week: 3,
      title: "Innovation: Build Smart Resin Product",
      topics: [
        "IoT integration and connectivity",
        "Mobile app interaction design",
        "Data visualization in art",
        "User experience in interactive art",
        "Prototyping and iteration methods"
      ],
      project: "Develop a smart resin product prototype"
    },
    {
      week: 4,
      title: "Showcase: Presentation + MSME Certificate",
      topics: [
        "Project documentation and presentation",
        "Portfolio development",
        "Business aspects of createch",
        "Marketing your creations",
        "Building your personal brand"
      ],
      project: "Final presentation and certification ceremony"
    }
  ];

  benefits = [
    {
      title: "MSME Certificate",
      description: "Official certification from India's first women-led MSME createch studio"
    },
    {
      title: "Website Feature",
      description: "Your work showcased on our official website and social media"
    },
    {
      title: "LinkedIn Badge",
      description: "Professional credential to enhance your LinkedIn profile"
    },
    {
      title: "Project Portfolio",
      description: "Complete documentation of all your creations during the program"
    }
  ];

  constructor(private toastService: ToastService) { }

  ngOnInit(): void {
  }

  handleApplyClick(): void {
    this.showApplicationForm = true;
    setTimeout(() => {
      document.getElementById('application-form')?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }, 100);
  }

  handleDownloadBrochure(): void {
    this.toastService.info(
      "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    );
  }
}