import { Component, OnInit } from '@angular/core';

import { AppComponent } from '../../app.component';
import { log } from 'util';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  shakeAnimation: boolean = false;
  // checkAnimation: boolean = false;
  quoteArr: any = [' \"Black Lives Matter\"  ', ' \"Destined For Greatness\"  ', '  \"Hard Work Pays Off\" ', ' "Always Positive" '];
  quotez: any = ['yo', 'bro', 'so']
  valz: any = "\"Always Positive\"";
  i: any = 0;
  bruz: boolean = true;
  pos: number = 0;
  allText: any = '';

  constructor(private appz: AppComponent) { }

  ngOnInit() {

    const leadz = <HTMLElement>document.querySelector('.lead');

    setInterval(() => {
      this.shakeAnimation = !this.shakeAnimation;
    }, 4000)

    setTimeout(() => {

      setInterval(() => {

        this.addText();

        this.resetText();

      }, 150);
    }, 3500)

  }


  clickButton() {
    this.appz.showBarz();
  }


  resetText() {

    if (this.i == this.quoteArr.length) {
      this.i = 0;
    }

    if (this.pos >= this.quoteArr[this.i].length) {

      this.allText = this.allText.slice(0, -1);

      if (this.allText == "") {
        this.pos = 0;
        this.i++;
        this.addText();
      }

    }

  }

  addText() {

    if (this.i == this.quoteArr.length) {
      this.i = 0;
    }

    if (this.pos < this.quoteArr[this.i].length) {

      console.log(this.i);

      this.allText += this.quoteArr[this.i].charAt(this.pos);

      console.log(this.pos);

      this.pos++;

    }
  }

}