import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  shakeAnimation: boolean = false;
  checkAnimation: boolean = false;

  constructor() { }

  ngOnInit() {

    setInterval(() => {
      this.shakeAnimation = !this.shakeAnimation;
    }, 8000)

    setInterval(() => {
      setInterval(() => {
        this.checkAnimation = !this.checkAnimation;
      }, 100)
    }, 3000)

  }

}
