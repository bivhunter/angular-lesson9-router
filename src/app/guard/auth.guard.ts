import { Injectable } from '@angular/core';
import { CanActivate, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService
  ) {

  }
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Promise((resolve, reject) => {
      this.authService.checkAuth().subscribe(auth => {
          resolve(auth);
      });
    })
      .then((auth) => {
        if (!auth) {
          this.router.navigate(['/login']);
          return false;
        } else {
          return true;
        }
      })
      /*.catch(() => {
        console.log("login");
        return false;
      });*/


    /*return .map(auth => {
      console.log(auth);
      if(!auth) {
        this.router.navigate(['/login']);
        return false;
      } else {
        return true;
      }
    });*/
  }

}
