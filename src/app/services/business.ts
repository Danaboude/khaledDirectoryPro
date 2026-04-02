import { Injectable, inject, EnvironmentInjector, runInInjectionContext } from '@angular/core';
import { Firestore, collectionData, docData } from '@angular/fire/firestore';
import {
  collection,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
} from 'firebase/firestore';
import { Observable } from 'rxjs';

export interface Business {
  id?: string;
  name: string;
  category: string;
  description: string;
  phone: string;
  website: string;
  address: string;
  city: string;
  province?: string;
  rating: number;
  reviewCount: number;
  verified: boolean;
  imageUrl: string;
  gallery: string[];
  ownerId: string;
  facebook?: string;
  instagram?: string;
  linkedin?: string;
  twitter?: string;
  tiktok?: string;
  whatsapp?: string;
  founderName?: string;
}

@Injectable({
  providedIn: 'root',
})
export class BusinessService {
  private firestore = inject(Firestore);
  private injector = inject(EnvironmentInjector);

  getBusinesses(): Observable<Business[]> {
    return runInInjectionContext(this.injector, () => {
      const businessesRef = collection(this.firestore, 'businesses');
      return collectionData(businessesRef, { idField: 'id' }) as Observable<Business[]>;
    });
  }

  getBusinessById(id: string): Observable<Business> {
    return runInInjectionContext(this.injector, () => {
      const businessDoc = doc(this.firestore, 'businesses', id);
      return docData(businessDoc, { idField: 'id' }) as Observable<Business>;
    });
  }

  addBusiness(business: Business) {
    const businessesRef = collection(this.firestore, 'businesses');
    return addDoc(businessesRef, business);
  }

  updateBusiness(id: string, business: Partial<Business>) {
    const businessDoc = doc(this.firestore, 'businesses', id);
    return updateDoc(businessDoc, business);
  }

  deleteBusiness(id: string) {
    const businessDoc = doc(this.firestore, 'businesses', id);
    return deleteDoc(businessDoc);
  }

  getBusinessesByCategory(category: string): Observable<Business[]> {
    return runInInjectionContext(this.injector, () => {
      const businessesRef = collection(this.firestore, 'businesses');
      const q = query(businessesRef, where('category', '==', category));
      return collectionData(q, { idField: 'id' }) as Observable<Business[]>;
    });
  }
}
