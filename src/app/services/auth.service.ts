import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth
  ) { }

  login(email: string, password:string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  checkAuth() {
    //console.log(this.afAuth.authState);
    return this.afAuth.authState;
  }

  logout() {
   return this.afAuth.auth.signOut();
  }

  createUser(email, password) {
    console.log("create user");
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }
}
