import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-application-process',
  templateUrl: './application-process.component.html',
  styleUrls: ['./application-process.component.scss']
})
export class ApplicationProcessComponent implements OnInit {

  processSteps = [
    {
      step: 1,
      title: "Submit Application",
      description: "Complete our comprehensive application form with your background, motivation, and goals.",
      timeline: "5-10 minutes",
      details: [
        "Personal information",
        "Educational background",
        "Skills assessment",
        "Portfolio submission (optional)"
      ]
    },
    {
      step: 2,
      title: "Initial Screening",
      description: "Our team reviews applications and shortlists candidates based on fit and potential.",
      timeline: "3-5 business days",
      details: [
        "Application review",
        "Background verification",
        "Skills evaluation",
        "Motivation assessment"
      ]
    },
    {
      step: 3,
      title: "Virtual Interview",
      description: "One-on-one conversation with our createch experts to understand your passion and goals.",
      timeline: "30-45 minutes",
      details: [
        "Personal introduction",
        "Technical discussion",
        "Project interests",
        "Q&A session"
      ]
    },
    {
      step: 4,
      title: "Final Selection",
      description: "Selected candidates receive confirmation and program details to begin their createch journey.",
      timeline: "2-3 business days",
      details: [
        "Selection notification",
        "Program orientation",
        "Material kit dispatch",
        "Batch assignment"
      ]
    }
  ];

  requirements = [
    {
      category: "Age & Education",
      items: [
        "Age: 16-35 years",
        "Minimum: 12th grade completed",
        "Any field of study welcome",
        "No prior experience required"
      ]
    },
    {
      category: "Technical Requirements",
      items: [
        "Basic computer literacy",
        "Stable internet connection",
        "Willingness to learn new tools",
        "Access to workspace at home"
      ]
    },
    {
      category: "Personal Qualities",
      items: [
        "Curiosity about art + technology",
        "Commitment to 4-week program",
        "Open to experimentation",
        "Collaborative mindset"
      ]
    }
  ];

  batchInfo = [
    {
      batch: "Batch 1",
      startDate: "March 15, 2024",
      applicationDeadline: "March 1, 2024",
      status: "Open",
      seats: "8/12 filled"
    },
    {
      batch: "Batch 2",
      startDate: "April 15, 2024",
      applicationDeadline: "April 1, 2024",
      status: "Open",
      seats: "3/12 filled"
    },
    {
      batch: "Batch 3",
      startDate: "May 15, 2024",
      applicationDeadline: "May 1, 2024",
      status: "Coming Soon",
      seats: "0/12 filled"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  getSeatsProgress(seats: string): number {
    const [filled, total] = seats.split('/').map(Number);
    return (filled / total) * 100;
  }
}