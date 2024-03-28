import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hidonix-project';
  isMenuVisible = false;

  constructor(private route: Router) { }

  ngDoCheck(): void {
    let currentroute = this.route.url;
    if (currentroute == '/login' || currentroute == '/register') {
      this.isMenuVisible = false
    } else {
      this.isMenuVisible = true
    }
  }

  
}
