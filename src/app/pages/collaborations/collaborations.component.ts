import { Component, OnInit } from '@angular/core';
import { ToastService } from '@/shared/services/toast.service';

@Component({
  selector: 'app-collaborations',
  templateUrl: './collaborations.component.html',
  styleUrls: ['./collaborations.component.scss']
})
export class CollaborationsComponent implements OnInit {
  showCreatorForm = false;
  showB2BForm = false;

  b2bPartners = [
    {
      title: "Interior Designers",
      description: "Custom resin installations that transform spaces with embedded technology",
      services: ["Smart wall art", "Interactive installations", "Ambient lighting solutions", "Custom color schemes"]
    },
    {
      title: "Photographers",
      description: "Tech-enhanced backdrops and props that respond to camera flashes and movement",
      services: ["Interactive photo props", "LED-responsive backdrops", "Smart photo frames", "Event installations"]
    },
    {
      title: "Architects",
      description: "Structural resin elements with integrated smart features for modern buildings",
      services: ["Smart building elements", "Interactive facades", "Responsive installations", "Architectural accents"]
    },
    {
      title: "Wedding Planners",
      description: "Memorable resin keepsakes and installations that capture the magic of special moments",
      services: ["Wedding centerpieces", "Memory preservation", "Interactive guest books", "Custom ceremonies"]
    }
  ];

  creatorTypes = [
    {
      title: "Educators",
      description: "Teachers and professors looking to integrate createch into their curriculum",
      benefits: ["Educational resources", "Workshop materials", "Student project ideas", "Curriculum support"]
    },
    {
      title: "Coders",
      description: "Developers interested in exploring the intersection of code and physical art",
      benefits: ["Hardware integration", "IoT projects", "App development", "Tech mentorship"]
    },
    {
      title: "Resin Artists",
      description: "Traditional resin artists ready to explore the tech-enhanced possibilities",
      benefits: ["Tech integration training", "New market opportunities", "Skill expansion", "Collaboration projects"]
    },
    {
      title: "Hobbyists",
      description: "Creative individuals passionate about blending technology with hands-on crafting",
      benefits: ["Community access", "Project sharing", "Skill development", "Creative challenges"]
    }
  ];

  constructor(private toastService: ToastService) { }

  ngOnInit(): void {
  }

  handleContactClick(type: string): void {
    this.toastService.info(
      "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    );
  }

  handleJoinCreatorCircle(): void {
    this.showCreatorForm = true;
    setTimeout(() => {
      document.getElementById('creator-circle-form')?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }, 100);
  }

  handleBookB2BCall(): void {
    this.showB2BForm = true;
    setTimeout(() => {
      document.getElementById('b2b-call-form')?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }, 100);
  }
}