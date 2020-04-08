import { Component, OnInit } from '@angular/core';

import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  shakeAnimation: boolean = false;
  // checkAnimation: boolean = false;

  constructor(private appz: AppComponent) { }

  ngOnInit() {

    setInterval(() => {
      this.shakeAnimation = !this.shakeAnimation;
    }, 4000)

  }


  clickButton() {
    this.appz.showBarz();
  }

}