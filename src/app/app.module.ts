import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { OfferingsComponent } from './pages/offerings/offerings.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { InternshipComponent } from './pages/internship/internship.component';
import { CollaborationsComponent } from './pages/collaborations/collaborations.component';
import { CommunityComponent } from './pages/community/community.component';
import { BulkOrdersComponent } from './pages/bulk-orders/bulk-orders.component';
import { ContactComponent } from './pages/contact/contact.component';

// Shared Components
import { ButtonComponent } from './shared/components/button/button.component';
import { ToastService } from './shared/services/toast.service';

// Contact Components
import { ContactFormComponent } from './components/contact/contact-form/contact-form.component';
import { ContactInfoComponent } from './components/contact/contact-info/contact-info.component';
import { ContactFaqComponent } from './components/contact/contact-faq/contact-faq.component';
import { ContactCtaComponent } from './components/contact/contact-cta/contact-cta.component';

// Home Components
import { VisionMissionComponent } from './components/home/vision-mission/vision-mission.component';

// Community Components
import { CommunityJoinFormComponent } from './components/community/community-join-form/community-join-form.component';
import { CommunityOnboardingComponent } from './components/community/community-onboarding/community-onboarding.component';

// Internship Components
import { ApplicationFormComponent } from './components/internship/application-form/application-form.component';
import { ApplicationProcessComponent } from './components/internship/application-process/application-process.component';

// Collaborations Components
import { CreatorCircleFormComponent } from './components/collaborations/creator-circle-form/creator-circle-form.component';
import { CommunityBenefitsComponent } from './components/collaborations/community-benefits/community-benefits.component';
import { B2bCallFormComponent } from './components/collaborations/b2b-call-form/b2b-call-form.component';
import { B2bConsultationInfoComponent } from './components/collaborations/b2b-consultation-info/b2b-consultation-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    OfferingsComponent,
    ExperienceComponent,
    InternshipComponent,
    CollaborationsComponent,
    CommunityComponent,
    BulkOrdersComponent,
    ContactComponent,
    ButtonComponent,
    ContactFormComponent,
    ContactInfoComponent,
    ContactFaqComponent,
    ContactCtaComponent,
    VisionMissionComponent,
    CommunityJoinFormComponent,
    CommunityOnboardingComponent,
    ApplicationFormComponent,
    ApplicationProcessComponent,
    CreatorCircleFormComponent,
    CommunityBenefitsComponent,
    B2bCallFormComponent,
    B2bConsultationInfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ToastService],
  bootstrap: [AppComponent]
})
export class AppModule { }