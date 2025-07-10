import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-community-benefits',
  templateUrl: './community-benefits.component.html',
  styleUrls: ['./community-benefits.component.scss']
})
export class CommunityBenefitsComponent implements OnInit {

  membershipTiers = [
    {
      tier: "Explorer",
      description: "Perfect for beginners and curious minds",
      color: "from-blue-400 to-cyan-400",
      benefits: [
        "Access to community forums",
        "Monthly newsletter",
        "Basic resource library",
        "Virtual meetup invitations"
      ],
      commitment: "1-2 hours/week"
    },
    {
      tier: "Creator",
      description: "For active participants and contributors",
      color: "from-teal-400 to-green-400",
      benefits: [
        "All Explorer benefits",
        "Workshop participation",
        "Project collaboration access",
        "Mentorship opportunities",
        "Skill-sharing sessions"
      ],
      commitment: "3-5 hours/week"
    },
    {
      tier: "Innovator",
      description: "For leaders and community builders",
      color: "from-purple-400 to-pink-400",
      benefits: [
        "All Creator benefits",
        "Lead community projects",
        "Mentor other members",
        "Early access to new programs",
        "Direct input on community direction"
      ],
      commitment: "6+ hours/week"
    }
  ];

  communityFeatures = [
    {
      title: "Collaborative Projects",
      description: "Work together on real createch projects that make a difference"
    },
    {
      title: "Skill Sharing",
      description: "Learn from experts and share your own knowledge with the community"
    },
    {
      title: "Recognition Program",
      description: "Get recognized for your contributions and achievements"
    },
    {
      title: "Regular Events",
      description: "Monthly workshops, quarterly meetups, and annual conferences"
    },
    {
      title: "Mentorship Network",
      description: "Connect with mentors and become a mentor yourself"
    },
    {
      title: "Innovation Challenges",
      description: "Participate in exciting challenges and competitions"
    }
  ];

  successMetrics = [
    { number: "200+", label: "Active Members" },
    { number: "50+", label: "Completed Projects" },
    { number: "25+", label: "Monthly Events" },
    { number: "15+", label: "Countries Represented" }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}