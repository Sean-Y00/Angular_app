/*********************************************************************************
 * WEB422 – Assignment 06
 * I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of this
 * assignment has been copied manually or electronically from any other source (including web sites) or
 * distributed to other students.
 *
 * Name: _byeongsuk yoo__ Student ID: _062411079_ Date: _20210813__
 *
 * Online Link to Music App: https://web422final-h320i0snf-sean-y00.vercel.app/login
 *
 * Online Link to User Api: https://web422user.herokuapp.com/
 *
 ********************************************************************************/

import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { User } from 'src/app/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Seneca Music';
  searchString!: string;
  token: User;

  constructor(private router: Router, private auth: AuthService) {}

  handleSearch(): void {
    this.router.navigate(['/search'], {
      queryParams: { q: this.searchString },
    });
  }

  ngOnInit(): void {
    this.searchString = '';
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.token = this.auth.readToken();
      }
    });
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
