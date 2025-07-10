import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-b2b-consultation-info',
  templateUrl: './b2b-consultation-info.component.html',
  styleUrls: ['./b2b-consultation-info.component.scss']
})
export class B2bConsultationInfoComponent implements OnInit {

  consultationTypes = [
    {
      type: "Discovery Call",
      duration: "30 minutes",
      description: "Initial consultation to understand your needs and explore possibilities",
      includes: [
        "Project requirement analysis",
        "Createch solution overview",
        "Feasibility assessment",
        "Next steps planning"
      ],
      bestFor: "First-time collaborators, Quick assessments"
    },
    {
      type: "Strategy Session",
      duration: "45-60 minutes",
      description: "Comprehensive planning session for detailed project development",
      includes: [
        "In-depth project planning",
        "Technical specifications",
        "Timeline & milestone planning",
        "Budget estimation",
        "Team introduction"
      ],
      bestFor: "Serious projects, Detailed planning needed"
    },
    {
      type: "Partnership Planning",
      duration: "60-90 minutes",
      description: "Strategic partnership discussion for long-term collaborations",
      includes: [
        "Partnership structure planning",
        "Revenue sharing models",
        "Joint venture opportunities",
        "Market expansion strategies",
        "Legal framework discussion"
      ],
      bestFor: "Long-term partnerships, Strategic alliances"
    }
  ];

  meetingOptions = [
    {
      type: "Video Conference",
      description: "Google Meet, Zoom, or Microsoft Teams",
      benefits: ["Screen sharing capabilities", "Recording available", "Multiple participants", "Document sharing"]
    },
    {
      type: "Phone Call",
      description: "Traditional phone consultation",
      benefits: ["Simple and reliable", "No technical setup", "Clear audio quality", "Easy scheduling"]
    },
    {
      type: "In-Person Meeting",
      description: "Visit our studio in Coimbatore",
      benefits: ["Hands-on demonstrations", "See our workspace", "Meet the team", "Experience our creations"]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}