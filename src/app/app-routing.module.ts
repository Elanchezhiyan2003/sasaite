import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { OfferingsComponent } from './pages/offerings/offerings.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { InternshipComponent } from './pages/internship/internship.component';
import { CollaborationsComponent } from './pages/collaborations/collaborations.component';
import { CommunityComponent } from './pages/community/community.component';
import { BulkOrdersComponent } from './pages/bulk-orders/bulk-orders.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'offerings', component: OfferingsComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'internship', component: InternshipComponent },
  { path: 'collaborations', component: CollaborationsComponent },
  { path: 'community', component: CommunityComponent },
  { path: 'bulk-orders', component: BulkOrdersComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }