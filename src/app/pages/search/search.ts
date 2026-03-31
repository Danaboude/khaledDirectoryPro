import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { BusinessService, Business } from '../../services/business';
import { CategoryService, Category } from '../../services/category';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Observable, combineLatest, BehaviorSubject, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { FormsModule } from '@angular/forms';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [RouterLink, AsyncPipe, CommonModule, FormsModule],
  templateUrl: './search.html',
  styleUrl: './search.css'
})
export class SearchComponent implements OnInit {
  private businessService = inject(BusinessService);
  private categoryService = inject(CategoryService);
  private route = inject(ActivatedRoute);
  private platformId = inject(PLATFORM_ID);

  searchQuery$ = new BehaviorSubject<string>('');
  selectedCategory$ = new BehaviorSubject<string>('');
  selectedProvince$ = new BehaviorSubject<string>('');
  
  filteredBusinesses$!: Observable<Business[]>;
  categories$!: Observable<Category[]>;

  provinces = [
    'دمشق', 'ريف دمشق', 'حلب', 'حمص', 'حماة', 'اللاذقية', 'طرطوس', 
    'السويداء', 'درعا', 'القنيطرة', 'دير الزور', 'الرقة', 'الحسكة', 'إدلب'
  ];

  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) {
      this.filteredBusinesses$ = of([]);
      this.categories$ = of([]);
      return;
    }

    this.categories$ = this.categoryService.getCategories();

    // Sync with URL query params
    this.route.queryParams.subscribe(params => {
      if (params['q']) {
        this.searchQuery$.next(params['q']);
      }
      if (params['cat']) {
        this.selectedCategory$.next(params['cat']);
      }
    });

    this.filteredBusinesses$ = combineLatest([
      this.businessService.getBusinesses(),
      this.searchQuery$,
      this.selectedCategory$,
      this.selectedProvince$
    ]).pipe(
      map(([businesses, query, category, province]) => {
        if (typeof window !== 'undefined') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        
        return businesses.filter(b => {
          const matchesQuery = !query || 
            b.name.toLowerCase().includes(query.toLowerCase()) || 
            b.description.toLowerCase().includes(query.toLowerCase());
          
          const matchesCategory = !category || (b.category && b.category.includes(category));
          const matchesProvince = !province || b.province === province;
          
          return matchesQuery && matchesCategory && matchesProvince;
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

  onProvinceChange(province: string) {
    this.selectedProvince$.next(province);
  }
}
