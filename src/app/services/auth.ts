import { Injectable, inject } from '@angular/core';
import { Auth, user } from '@angular/fire/auth';
import { GoogleAuthProvider, signInWithPopup, signOut, User } from 'firebase/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth = inject(Auth);
  user$: Observable<any> = user(this.auth);

  async loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(this.auth, provider);
  }

  async logout() {
    return signOut(this.auth);
  }
}
