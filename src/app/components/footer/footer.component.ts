import { Component } from '@angular/core';

interface FooterLink {
  name: string;
  path: string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  quickLinks: FooterLink[] = [
    { name: 'About Us', path: '/about' },
    { name: 'Our Offerings', path: '/offerings' },
    { name: 'Createch Internship', path: '/internship' },
    { name: 'Community', path: '/community' },
  ];

  services: string[] = [
    'Resin Art Creations',
    'Tech-Infused Artistry',
    'MIY Kits',
    'B2B Collaborations',
    'Bulk Orders',
  ];
}