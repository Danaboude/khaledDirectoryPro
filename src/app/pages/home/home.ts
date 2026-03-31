import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { BusinessService, Business } from '../../services/business';
import { CategoryService, Category } from '../../services/category';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Observable, map, of } from 'rxjs';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, AsyncPipe, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent implements OnInit {
  private businessService = inject(BusinessService);
  private categoryService = inject(CategoryService);
  private platformId = inject(PLATFORM_ID);
  private router = inject(Router);
  
  public featuredBusinesses$!: Observable<Business[]>;
  public categories$!: Observable<Category[]>;

  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) {
      this.featuredBusinesses$ = of([]);
      this.categories$ = of([]);
      return;
    }

    this.categories$ = this.categoryService.getCategories();

    this.featuredBusinesses$ = this.businessService.getBusinesses().pipe(
      map(businesses => businesses.slice(0, 3))
    );
  }

  performSearch(query: string, category: string) {
    this.router.navigate(['/search'], { queryParams: { q: query, cat: category } });
  }
}
