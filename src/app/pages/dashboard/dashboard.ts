import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth';
import { BusinessService, Business } from '../../services/business';
import { CategoryService, Category } from '../../services/category';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { environment } from '../../../environments/environment';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [AsyncPipe, CommonModule, FormsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent implements OnInit {
  authService = inject(AuthService);
  private businessService = inject(BusinessService);
  private categoryService = inject(CategoryService);
  private platformId = inject(PLATFORM_ID);
  
  userBusinesses$!: Observable<Business[]>;
  categories$!: Observable<Category[]>;
  
  showAddBusinessModal = false;
  showCategoryModal = false;
  showMobileSidebar = false;
  
  passwordInput = '';
  passwordError = false;

  newGalleryLink = '';

  newBusiness: Partial<Business> = {
    name: '',
    category: '',
    description: '',
    phone: '',
    website: '',
    address: '',
    city: 'حمص',
    province: 'حمص',
    imageUrl: '',
    gallery: [],
    verified: false,
    rating: 5,
    reviewCount: 0
  };

  newCategoryName = '';
  editingCategory: Category | null = null;

  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.categories$ = this.categoryService.getCategories();
    
    this.userBusinesses$ = this.authService.user$.pipe(
      switchMap(user => {
        if (user) {
          return this.businessService.getBusinesses(); 
        }
        return of([]);
      })
    );
  }

  submitPassword() {
    this.passwordError = false;
    if (this.authService.verifyDashboardPassword(this.passwordInput, environment.password)) {
      this.passwordInput = '';
    } else {
      this.passwordError = true;
    }
  }

  // Gallery Helpers
  addGalleryLink() {
    if (this.newGalleryLink.trim()) {
      if (!this.newBusiness.gallery) this.newBusiness.gallery = [];
      this.newBusiness.gallery.push(this.newGalleryLink.trim());
      this.newGalleryLink = '';
    }
  }

  removeGalleryLink(index: number) {
    this.newBusiness.gallery?.splice(index, 1);
  }

  async logout() {
    await this.authService.logout();
  }

  // Business Methods
  async saveBusiness() {
    const user = await new Promise<any>(resolve => this.authService.user$.subscribe(resolve));
    if (!user) return;

    this.newBusiness.ownerId = user.uid;
    
    try {
      if (this.newBusiness.id) {
        await this.businessService.updateBusiness(this.newBusiness.id, this.newBusiness);
        alert('تم تحديث النشاط بنجاح');
      } else {
        await this.businessService.addBusiness(this.newBusiness as Business);
        alert('تم إضافة النشاط بنجاح');
      }
      this.closeBusinessModal();
    } catch (error) {
      console.error(error);
      alert('حدث خطأ أثناء الحفظ');
    }
  }

  editBusiness(business: Business) {
    this.newBusiness = { ...business };
    this.showAddBusinessModal = true;
  }

  async deleteBusiness(id: string | undefined) {
    if (!id) return;
    if (confirm('هل أنت متأكد من حذف هذا النشاط؟')) {
      await this.businessService.deleteBusiness(id);
    }
  }

  openAddBusinessModal() {
    this.newBusiness = {
      name: '',
      category: '',
      description: '',
      phone: '',
      website: '',
      address: '',
      city: 'حمص',
      province: 'حمص',
      imageUrl: '',
      gallery: [],
      verified: false,
      rating: 5,
      reviewCount: 0
    };
    this.showAddBusinessModal = true;
  }

  closeBusinessModal() {
    this.showAddBusinessModal = false;
  }

  // Category Methods
  async saveCategory() {
    if (!this.newCategoryName.trim()) return;
    
    const slug = this.newCategoryName.trim().toLowerCase().replace(/\s+/g, '-');
    
    try {
      if (this.editingCategory?.id) {
        await this.categoryService.updateCategory(this.editingCategory.id, { 
          name: this.newCategoryName,
          slug: slug
        });
      } else {
        await this.categoryService.addCategory({ name: this.newCategoryName, slug });
      }
      this.newCategoryName = '';
      this.editingCategory = null;
    } catch (error) {
      console.error(error);
    }
  }

  editCategory(cat: Category) {
    this.editingCategory = cat;
    this.newCategoryName = cat.name;
  }

  async deleteCategory(id: string | undefined) {
    if (!id) return;
    if (confirm('حذف هذا التصنيف قد يؤثر على الشركات المرتبطة به. هل أنت متأكد؟')) {
      await this.categoryService.deleteCategory(id);
    }
  }

  async seedData() {
    alert('Seed function triggered');
  }
}
