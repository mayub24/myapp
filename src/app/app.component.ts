import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  showMenu: boolean = false;

  showBar() {

    if (!this.showMenu) {
      const menuInfo = document.querySelector('.main-info');
      const mainPic = document.querySelector('.menu-pic');
      const menuLink = document.querySelector('.menu-link');
      const barIcon = document.querySelector('.bar-icon');
      const allItems = document.querySelector('.all-items');
      const img = document.querySelector('#img');


      menuInfo.classList.add('show');
      mainPic.classList.add('show');
      menuLink.classList.add('show');
      barIcon.classList.add('show');
      img.classList.add('show');


      allItems.querySelectorAll('.item').forEach((itm) => {
        itm.classList.add('show');
      })

      this.showMenu = !this.showMenu;

    }
    else {
      const menuInfo = document.querySelector('.main-info');
      const mainPic = document.querySelector('.menu-pic');
      const menuLink = document.querySelector('.menu-link');
      const barIcon = document.querySelector('.bar-icon');
      const allItems = document.querySelector('.all-items');
      const img = document.querySelector('#img');


      menuInfo.classList.remove('show');
      mainPic.classList.remove('show');
      menuLink.classList.remove('show');
      barIcon.classList.remove('show');
      img.classList.remove('show');


      allItems.querySelectorAll('.item').forEach((itm) => {
        itm.classList.remove('show');
      })

      this.showMenu = !this.showMenu;
    }

  }

}
