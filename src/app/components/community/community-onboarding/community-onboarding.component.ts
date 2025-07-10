import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-community-onboarding',
  templateUrl: './community-onboarding.component.html',
  styleUrls: ['./community-onboarding.component.scss']
})
export class CommunityOnboardingComponent implements OnInit {

  onboardingSteps = [
    {
      step: 1,
      title: "Application Review",
      description: "Our team reviews your application and ensures you're a great fit for our community values.",
      timeline: "24-48 hours",
      details: [
        "Application assessment",
        "Background verification",
        "Community fit evaluation",
        "Welcome email sent"
      ]
    },
    {
      step: 2,
      title: "Welcome Orientation",
      description: "Join our virtual welcome session to meet the team and other new members.",
      timeline: "Within 1 week",
      details: [
        "Community introduction",
        "Platform walkthrough",
        "Meet your buddy",
        "Q&A session"
      ]
    },
    {
      step: 3,
      title: "Skill Assessment",
      description: "Optional skill assessment to help us match you with relevant projects and mentors.",
      timeline: "First 2 weeks",
      details: [
        "Skills evaluation",
        "Interest mapping",
        "Project matching",
        "Mentor assignment"
      ]
    },
    {
      step: 4,
      title: "Full Integration",
      description: "Start participating in projects, events, and become an active community member.",
      timeline: "Ongoing",
      details: [
        "Project participation",
        "Event attendance",
        "Mentorship activities",
        "Community contributions"
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}