import { Component, inject, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layouts/header/header.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  public loginIsActive: boolean = false;
  private routers: Router = inject(Router);

  ngOnInit(): void {
    this.routers.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.loginIsActive = event.url.includes('/movies');
      }
    });
  }
}
