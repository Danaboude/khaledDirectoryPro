import { Injectable, inject } from '@angular/core';
import { Auth, user } from '@angular/fire/auth';
import { GoogleAuthProvider, signInWithPopup, signOut, User } from 'firebase/auth';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth = inject(Auth);
  user$: Observable<any> = user(this.auth);
  private dashboardUnlocked$ = new BehaviorSubject<boolean>(false);
  isDashboardUnlocked$ = this.dashboardUnlocked$.asObservable();

  constructor() {
    // Check if previously unlocked in this session
    if (typeof window !== 'undefined') {
      const isUnlocked = localStorage.getItem('dashboard_unlocked') === 'true';
      if (isUnlocked) {
        this.dashboardUnlocked$.next(true);
      }
    }
  }

  async loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(this.auth, provider);
  }

  async logout() {
    this.dashboardUnlocked$.next(false);
    if (typeof window !== 'undefined') {
      localStorage.removeItem('dashboard_unlocked');
    }
    return signOut(this.auth);
  }

  verifyDashboardPassword(password: string, correctPassword?: string) {
    if (password === correctPassword) {
      this.dashboardUnlocked$.next(true);
      if (typeof window !== 'undefined') {
        localStorage.setItem('dashboard_unlocked', 'true');
      }
      return true;
    }
    return false;
  }
}
