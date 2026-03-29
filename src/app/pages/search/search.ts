import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { BusinessService, Business } from '../../services/business';
import { AsyncPipe } from '@angular/common';
import { Observable, combineLatest, BehaviorSubject, of } from 'rxjs';
import { map, startWith, switchMap } from 'rxjs/operators';
import { FormsModule } from '@angular/forms';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-search',
  imports: [RouterLink, AsyncPipe, FormsModule],
  templateUrl: './search.html',
  styleUrl: './search.css'
})
export class SearchComponent implements OnInit {
  private businessService = inject(BusinessService);
  private route = inject(ActivatedRoute);
  private platformId = inject(PLATFORM_ID);

  searchQuery$ = new BehaviorSubject<string>('');
  selectedCategory$ = new BehaviorSubject<string>('');
  
  filteredBusinesses$!: Observable<Business[]>;

  categories = [
    { id: 'tech', label: 'التقنية والبرمجيات', value: 'التقنية' },
    { id: 'design', label: 'تصميم وتخطيط', value: 'تصميم وتخطيط' },
    { id: 'cafe', label: 'مقهى ومخبز', value: 'مقهى ومخبز' },
    { id: 'consulting', label: 'الخدمات الاستشارية', value: 'الاستشارات' }
  ];

  ngOnInit() {
    // Sync with URL query params
    this.route.queryParams.subscribe(params => {
      if (params['q']) {
        this.searchQuery$.next(params['q']);
      }
    });

    // Check if we can use Firestore
    if (!isPlatformBrowser(this.platformId)) {
      this.filteredBusinesses$ = of([]);
      return;
    }

    this.filteredBusinesses$ = combineLatest([
      this.businessService.getBusinesses(),
      this.searchQuery$,
      this.selectedCategory$
    ]).pipe(
      map(([businesses, query, category]) => {
        // Scroll to top when results change (only in browser)
        if (typeof window !== 'undefined') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        
        return businesses.filter(b => {
          const matchesQuery = !query || 
            b.name.toLowerCase().includes(query.toLowerCase()) || 
            b.description.toLowerCase().includes(query.toLowerCase());
          
          const matchesCategory = !category || b.category.includes(category);
          
          return matchesQuery && matchesCategory;
        });
      })
    );
  }

  onSearch(query: string) {
    this.searchQuery$.next(query);
  }

  toggleCategory(categoryValue: string) {
    const current = this.selectedCategory$.value;
    this.selectedCategory$.next(current === categoryValue ? '' : categoryValue);
  }
}
