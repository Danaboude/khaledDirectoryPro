import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BusinessService, Business } from '../../services/business';
import { AsyncPipe } from '@angular/common';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-business-detail',
  imports: [AsyncPipe],
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
}
