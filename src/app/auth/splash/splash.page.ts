import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {
  tiempoReal = 3;

  constructor(private router: Router) {}

  ngOnInit() {
    this.time();
  }

  time() {
    let intervalId = setInterval(() => {
      this.tiempoReal = this.tiempoReal - 1;
      console.log(this.tiempoReal);
      if (this.tiempoReal === 0) {
        clearInterval(intervalId);
        this.router.navigate(['/login']);
      }
    }, 1000);
  }
}
