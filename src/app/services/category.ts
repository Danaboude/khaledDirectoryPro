import { Injectable, inject, EnvironmentInjector, runInInjectionContext } from '@angular/core';
import { Firestore, collectionData, docData } from '@angular/fire/firestore';
import {
  collection,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
} from 'firebase/firestore';
import { Observable } from 'rxjs';

export interface Category {
  id?: string;
  name: string;
  slug: string;
}

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private firestore = inject(Firestore);
  private injector = inject(EnvironmentInjector);

  getCategories(): Observable<Category[]> {
    return runInInjectionContext(this.injector, () => {
      const categoriesRef = collection(this.firestore, 'categories');
      return collectionData(categoriesRef, { idField: 'id' }) as Observable<Category[]>;
    });
  }

  addCategory(category: Category) {
    const categoriesRef = collection(this.firestore, 'categories');
    return addDoc(categoriesRef, category);
  }

  updateCategory(id: string, category: Partial<Category>) {
    const categoryDoc = doc(this.firestore, 'categories', id);
    return updateDoc(categoryDoc, category);
  }

  deleteCategory(id: string) {
    const categoryDoc = doc(this.firestore, 'categories', id);
    return deleteDoc(categoryDoc);
  }
}
