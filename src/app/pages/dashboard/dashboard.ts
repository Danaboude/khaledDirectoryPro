import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth';
import { BusinessService, Business } from '../../services/business';
import { AsyncPipe } from '@angular/common';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [AsyncPipe],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent implements OnInit {
  authService = inject(AuthService);
  private businessService = inject(BusinessService);
  private platformId = inject(PLATFORM_ID);
  userBusinesses$!: Observable<Business[]>;

  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) {
      this.userBusinesses$ = of([]);
      return;
    }

    this.userBusinesses$ = this.authService.user$.pipe(
      switchMap(user => {
        if (user) {
          return this.businessService.getBusinesses(); 
        }
        return of([]);
      })
    );
  }

  async logout() {
    await this.authService.logout();
  }

  async deleteBusiness(id: string | undefined) {
    if (!id) return;
    if (confirm('هل أنت متأكد من حذف هذا النشاط؟')) {
      await this.businessService.deleteBusiness(id);
      alert('تم حذف النشاط بنجاح');
    }
  }

  editBusiness(business: Business) {
    // In a real app, this would open a modal or navigate to an edit page
    const newName = prompt('تعديل اسم النشاط:', business.name);
    if (newName && business.id) {
      this.businessService.updateBusiness(business.id, { name: newName });
    }
  }

  async seedData() {
    const sampleBusinesses: Business[] = [
      {
        name: 'مختبر القهوة المختصة',
        category: 'مقهى ومخبز',
        description: 'استمتع بأجود أنواع حبوب البن العضوية المحمصة يومياً في قلب المدينة. نفخر بمصادرنا المستدامة وتقنيات التحضير الحرفية.',
        phone: '+966 50 123 4567',
        website: 'www.artisanalcoffee.com',
        address: 'حي الملقا، شارع الأمير محمد بن سلمان',
        city: 'الرياض',
        rating: 4.9,
        reviewCount: 128,
        verified: true,
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2YT9bi5M5r-1ecjYVm2SYuSDeB7tn8l3zLDy38GLKfkgCvXfqwmt0Ee2n7MHU09_o28fxpUkRe0e067YpSBPS-hg86uJgf9Cfbwd2mo8S_MZ7pkwKYtH7ESX7LC0XOeb-JQ1PS_hUOg_I2nfmwx4kREX2oYJJrkylIf8dgvp87TMIkjB-5iq-d5WqtxdmegkwB9G8qFBS9rSqykfQfvVBGBOqBoSrwQP7D3xh3sR8vbVHl8MsMdGCnAgrxDSBIdeM8SCDHy858g',
        gallery: [
          'https://lh3.googleusercontent.com/aida-public/AB6AXuBiJ4FKRNNYwpRgaaYQ4A1lFrpbVbjqseHTA8fzg6yPK3f8hCeleuLcuuLAZMxx-gHrzMJqAZGt58xl1X-oa3i4NSSPJEU3-dmCim3lTVQJPb15NQ5T-HPitiRIRqB7PQpSMrwP4Oj4eHhjMtOElXr4F11tNF_ER96VmPltD4npraEggsjUCWTCpWCktPsSN0kZ8da-ITf6pYsMD3W3nGd90Q7GWQL6vbwxI1yJ3MgKdicc6XjpRkOuu5VasNxogeRAJ6WJuDHTZg',
          'https://lh3.googleusercontent.com/aida-public/AB6AXuAs1OzKsZc1l6Bny7gSvckuYSQrRCTMmvfH8BsYgvhzBFBWpjqFLrLuAzHGB5Y_FzjFAPjMs2ETP-sI_mchbif7ZVAFin66zY-rC_PplyQjMDVUgIeUpbYoWPH3JQOwBKb5VjCftf0Lnyy9Fc5wwvqlJUNqesdhMFrW2pqjh3pfRMkJBHpYoPXDf1LjIxnICXoY6U2r_dCOgMAjxW1yCZ9Zfz_WxIvYf8NyFd8gNn4yq3_MqkSirvwVh8BYh58lauz0rMezFP9bxg'
        ],
        ownerId: 'system'
      },
      {
        name: 'استوديو لومينا للهندسة المعمارية',
        category: 'تصميم وتخطيط',
        description: 'استوديو لومينا هو تجمع تصميمي رائد متخصص في المعيشة الحضرية المستدامة والمشاريع السكنية الراقية. ندمج التكنولوجيا الحديثة مع الجمال الكلاسيكي.',
        phone: '+971 4 555 1234',
        website: 'www.lumina-studio.com',
        address: 'خليج الأعمال، برج الارتفاع العالي، الطابق 22',
        city: 'دبي',
        rating: 4.8,
        reviewCount: 128,
        verified: true,
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDMBjR51NsNuVW7KgRMZBD2d45now3gXPYcugtUtx8VJPEARoOrSnlco0lV_90VUPls2GjWWIsA1kBWnvHHiEOlb6f3WAdFpj5pQVMaIwXHfpg_N8o07FzXMnf4TMq_qkg50K0Vrn7suS_gArPuj8z-UZfK2uXWVhoosDN9Vi8ZMy2WAXs8b_lgYkCT7ENbssn-5S1lgvm_RSkciPCXiovaNxSfRt-HM1uQ4-sa8DT_KskhGZLGJ6NGpQMn-BtCvz9rnciQ9JHocw',
        gallery: [
          'https://lh3.googleusercontent.com/aida-public/AB6AXuAOXORqm7Goxt-k3SNoK1Tfy0gqsr36hIqpsAJGCUN6NmkylWC0UaYzhexG7i-dZ_pKmAQtufBB1i6gio1PtKnMUWc3HDvyMWxuD_c4po995miDTL2yqyq6ChP61xM5szVwgA5HAngxKrsgKCf90XhB7CWbAZHlX3_Us920dXsr3M5A-OCu_R9P0Ng3rgrwIjdf2kiPjFhZJbqeCBmZzAqySETQWQ02MuXpVo5uG2kr1ZPsj5LGyOYpAme8jDa5m7oZZXnTgoSfjg'
        ],
        ownerId: 'system'
      }
    ];

    for (const b of sampleBusinesses) {
      await this.businessService.addBusiness(b);
    }
    alert('تمت إضافة الأنشطة التجريبية!');
  }
}
