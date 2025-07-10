import { Component, OnInit } from '@angular/core';
import { ToastService } from '@/shared/services/toast.service';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss']
})
export class CommunityComponent implements OnInit {
  showJoinForm = false;

  offerings = [
    {
      title: "Monthly Glow Circles",
      description: "Intimate gatherings where we share stories, celebrate achievements, and support each other's creative journeys.",
      frequency: "Every first Saturday",
      format: "Hybrid (Online + Offline)"
    },
    {
      title: "Tech & Story Labs",
      description: "Hands-on workshops where we explore the intersection of technology and storytelling through resin art.",
      frequency: "Bi-weekly",
      format: "Interactive Workshops"
    },
    {
      title: "Resin + Robotics Workshops",
      description: "Learn to integrate sensors, LEDs, and smart components into your resin creations.",
      frequency: "Monthly",
      format: "Technical Deep-dives"
    },
    {
      title: "Mentorship Pods",
      description: "Small group mentoring sessions with industry experts and successful community members.",
      frequency: "Weekly",
      format: "Small Groups (4-6 members)"
    }
  ];

  communityValues = [
    {
      title: "Inclusive Innovation",
      description: "We believe the best ideas come from diverse perspectives and experiences."
    },
    {
      title: "Supportive Growth",
      description: "Every member's success is celebrated as a community achievement."
    },
    {
      title: "Creative Courage",
      description: "We encourage bold experiments and learn from every attempt."
    },
    {
      title: "Tech with Heart",
      description: "Technology should amplify human connection, not replace it."
    }
  ];

  memberSpotlights = [
    {
      name: "Priya K.",
      title: "Software Engineer & Resin Artist",
      story: "Started as a weekend hobbyist, now runs her own createch studio in Bangalore.",
      achievement: "Featured in TechCrunch for her IoT-enabled resin installations"
    },
    {
      name: "Ananya M.",
      title: "Homemaker & Tech Enthusiast",
      story: "Discovered her passion for electronics through our workshops, now teaches kids coding through art.",
      achievement: "Launched 'Code & Craft' program in her local community"
    },
    {
      name: "Divya R.",
      title: "Product Designer",
      story: "Combined her design skills with resin art to create award-winning smart home accessories.",
      achievement: "Won 'Innovation in Design' at National Maker Fest"
    }
  ];

  constructor(private toastService: ToastService) { }

  ngOnInit(): void {
  }

  handleJoinClick(): void {
    this.showJoinForm = true;
    setTimeout(() => {
      document.getElementById('community-join-form')?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }, 100);
  }
}