import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})



export class AuthGuard  {

  constructor(private router: Router) { }

  canActivate(): boolean {
    // Check if user is logged in
    const isAuthenticated = !!sessionStorage.getItem('role');

    if (isAuthenticated) {
      return true;
    } else {
      // If not authenticated, redirect to the login page
      this.router.navigate(['/login']);
      return false;
    }
  }
}