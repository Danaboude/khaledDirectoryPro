import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BusinessService, Business } from '../../services/business';
import { AsyncPipe } from '@angular/common';
import { Observable, map, of } from 'rxjs';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [RouterLink, AsyncPipe],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent implements OnInit {
  private businessService = inject(BusinessService);
  private platformId = inject(PLATFORM_ID);
  
  public featuredBusinesses$!: Observable<Business[]>;

  ngOnInit() {
    this.featuredBusinesses$ = isPlatformBrowser(this.platformId)
      ? this.businessService.getBusinesses().pipe(
          map(businesses => businesses.slice(0, 3)) // Get first 3 for featured
        )
      : of([]);
  }
}
