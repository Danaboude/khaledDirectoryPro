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
  
  public paginatedBusinesses: Business[] = [];
  public categories$!: Observable<Category[]>;
  public currentPage = 1;
  public pageSize = 3;
  public totalPages = 0;
  private allBusinesses: Business[] = [];

  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) {
      this.categories$ = of([]);
      return;
    }

    this.categories$ = this.categoryService.getCategories();

    this.businessService.getBusinesses().subscribe(businesses => {
      this.allBusinesses = businesses;
      this.totalPages = Math.ceil(this.allBusinesses.length / this.pageSize);
      this.updatePaginated();
    });
  }

  updatePaginated() {
    const start = (this.currentPage - 1) * this.pageSize;
    this.paginatedBusinesses = this.allBusinesses.slice(start, start + this.pageSize);
  }

  setPage(page: number) {
    this.currentPage = page;
    this.updatePaginated();
    // Scroll to section for better UX
    const section = document.getElementById('businesses-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  getPages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  performSearch(query: string, category: string) {
    this.router.navigate(['/search'], { queryParams: { q: query, cat: category } });
  }
}

