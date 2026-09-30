import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';

import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ContactoComponent } from './contacto/contacto.component';
import { ExtraComponent } from './extra/extra.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { ResumenComponent } from './resumen/resumen.component';

import { RouterOutlet } from '@angular/router';
import { AnalyticsService } from './services/analytics.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ResumenComponent,
    ContactoComponent,
    PortafolioComponent,
    ExtraComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angelRosales';

  readonly stats$ = this.analytics.getStats();

  constructor(
    private readonly analytics: AnalyticsService,
    @Inject(PLATFORM_ID)
    private readonly platformId: object,
  ) {}

  async ngOnInit(): Promise<void> {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    await this.registerVisit();
  }

  private async registerVisit(): Promise<void> {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const today = new Date().toDateString();

    const lastVisit = localStorage.getItem('lastVisit');

    if (lastVisit === today) {
      return;
    }

    localStorage.setItem('lastVisit', today);

    await this.analytics.track('visits');
  }

  async downloadCV(): Promise<void> {
    await this.analytics.track('cvDownloads');
  }

  async openGithub(): Promise<void> {
    await this.analytics.track('githubClicks');
  }

  async openLinkedin(): Promise<void> {
    await this.analytics.track('linkedinClicks');
  }

  async openWhatsapp(): Promise<void> {
    await this.analytics.track('whatsappClicks');
  }

  async openFacebook(): Promise<void> {
    await this.analytics.track('facebookClicks');
  }

  async openPortfolio(): Promise<void> {
    await this.analytics.track('portfolioViews');
  }

  async sendContact(): Promise<void> {
    await this.analytics.track('contactsSent');
  }
}
