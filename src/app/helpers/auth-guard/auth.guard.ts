import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot,
UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(public authService: AuthService, public router: Router) {

  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(state.url == '/login') {
      if (this.authService.isLoggedIn == true) {
        this.router.navigate(['setup'])
      }
    } else {
      if (this.authService.isLoggedIn !== true) {
        window.alert("U bent niet ingelogd!");
        this.router.navigate(['login'])
      }
    }


    return true;
  }
}