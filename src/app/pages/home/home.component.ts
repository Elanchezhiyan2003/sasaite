import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  features = [
    {
      title: "Code",
      description: "We embed feelings into circuits, creating tech that responds to human emotion and connection."
    },
    {
      title: "Craft",
      description: "Handcrafted resin creations that capture memories, stories, and moments in crystalline beauty."
    },
    {
      title: "Code n Craft",
      description: "LEDs, sensors, and interactive elements that bring static art to dynamic life."
    },
    {
      title: "Programs",
      description: "Building a ecosystem of creators, coders, and dreamers who refuse to pick just one title."
    },
    {
      title: "Bulk Orders",
      description: "India's first women-led MSME-registered createch studio, pioneering the fusion movement."
    },
    {
      title: "Createch Internship",
      description: "Teaching the next generation that creativity and technology are not opposites, but partners."
    }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToExperience() {
    this.router.navigate(['/experience']);
  }

  navigateToContact() {
    this.router.navigate(['/contact']);
  }

  navigateToOfferings() {
    this.router.navigate(['/offerings']);
  }
}