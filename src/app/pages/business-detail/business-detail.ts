import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BusinessService, Business } from '../../services/business';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-business-detail',
  imports: [AsyncPipe, CommonModule],
  templateUrl: './business-detail.html',
  styleUrl: './business-detail.css'
})
export class BusinessDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private businessService = inject(BusinessService);
  private platformId = inject(PLATFORM_ID);
  business$!: Observable<Business | null>;

  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) {
      this.business$ = of(null);
      return;
    }

    this.business$ = this.route.paramMap.pipe(
      switchMap(params => {
        const id = params.get('id');
        return this.businessService.getBusinessById(id!);
      })
    );
  }

  async share(businessName: string) {
    if (isPlatformBrowser(this.platformId)) {
      const shareData = {
        title: businessName,
        text: `Check out ${businessName} on Khaled Pages`,
        url: window.location.href,
      };

      try {
        if (navigator.share) {
          await navigator.share(shareData);
        } else {
          await navigator.clipboard.writeText(window.location.href);
          alert('Link copied to clipboard!');
        }
      } catch (err) {
        console.error('Error sharing', err);
      }
    }
  }

  formatUrl(url?: string): string {
    if (!url) return '#';
    if (url.startsWith('http://') || url.startsWith('https://')) {
      return url;
    }
    // Handle WhatsApp numbers
    if (/^\+?[0-9\s\-]+$/.test(url)) {
      const cleaned = url.replace(/\D/g, '');
      return `https://wa.me/${cleaned}`;
    }
    return `https://${url}`;
  }
}
