import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  values = [
    {
      title: "Emotion First",
      description: "Every creation starts with a feeling, a memory, a story that deserves to be preserved and shared."
    },
    {
      title: "Tech with Purpose",
      description: "Technology should enhance human connection, not replace it. We use code to amplify emotion."
    },
    {
      title: "Handcrafted Excellence",
      description: "In an age of mass production, we believe in the irreplaceable value of human touch and artistry."
    },
    {
      title: "Community Driven",
      description: "We're building an ecosystem where creators, coders, and dreamers can collaborate and grow together."
    },
    {
      title: "Women Leadership",
      description: "Proudly India's first women-led MSME-registered createch studio, paving the way for others."
    },
    {
      title: "Educational Impact",
      description: "Teaching the next generation that creativity and logic are not opposites, but perfect partners."
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}