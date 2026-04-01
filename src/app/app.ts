import { Component, signal } from '@angular/core';
import { Router, RouterOutlet, Event, NavigationEnd } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar';
import { FooterComponent } from './components/footer/footer';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('khaled-pages');
  showWhatsAppFAB = signal(true);

  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.showWhatsAppFAB.set(!event.urlAfterRedirects.includes('/dashboard'));
      }
    });
  }
}

