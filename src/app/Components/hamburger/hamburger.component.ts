import { Component, OnInit } from '@angular/core';

import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.scss']
})
export class HamburgerComponent implements OnInit {

  constructor(private comp: AppComponent) { }

  ngOnInit() {
  }

  clickBar() {
    this.comp.showBar();
  }

}
