import { Component } from '@angular/core';
import { AnalyticsService } from '../services/analytics.service';

@Component({
  selector: 'app-portafolio',
  standalone: true,
  imports: [],
  templateUrl: './portafolio.component.html',
  styleUrl: './portafolio.component.css',
})
export class PortafolioComponent {
  constructor(private readonly analytics: AnalyticsService) {}

  async openProject(url: string): Promise<void> {
    await this.analytics.track('portfolioViews');

    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
