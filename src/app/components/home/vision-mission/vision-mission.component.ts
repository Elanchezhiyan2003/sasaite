import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vision-mission',
  templateUrl: './vision-mission.component.html',
  styleUrls: ['./vision-mission.component.scss']
})
export class VisionMissionComponent implements OnInit {

  visionPoints = [
    {
      title: "Redefining Art",
      description: "To make art interactive, responsive, and emotionally intelligent"
    },
    {
      title: "Technology with Soul",
      description: "Creating technology that enhances human connection rather than replacing it"
    },
    {
      title: "Global Movement",
      description: "Building a worldwide community of createch innovators and artists"
    }
  ];

  missionPoints = [
    {
      title: "Bridge the Gap",
      description: "Connecting the worlds of traditional artistry and modern technology"
    },
    {
      title: "Empower Women",
      description: "Leading as India's first women-led MSME createch studio"
    },
    {
      title: "Educate & Inspire",
      description: "Teaching the next generation that creativity and code are perfect partners"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}