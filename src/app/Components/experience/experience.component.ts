import { Component, OnInit } from '@angular/core';
import { JobService } from '../../Services/job.service';
import { jobs } from '../../Models/work-interface';
import { log } from 'util';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  allJobs: jobs[];
  shakeIt: boolean = true;
  i: number = 0;
  txt: string = "Over the past couple of years, I have had the opportunity of working as an I.T Assistant and as a Web Developer. Both workplaces have taught me various technical skills that relate to my field of study, along with many communication and soft skills. I am currently looking for a Co op position for Winter 2021, preferably as a Full Stack Web Developer."
  allText: string = '';
  add: boolean = true;


  constructor(private jobService: JobService) {
  }

  ngOnInit() {
    this.allJobs = this.jobService.jobz;
    console.log(this.allJobs);

    setInterval(() => {
      this.shakeIt = !this.shakeIt;
    }, 7000)

    this.show();

  }

  show() {


    setInterval(() => {
      if (this.i < this.txt.length && this.add) {

        this.allText += this.txt.charAt(this.i);

        this.i++;
      }
    }, 40);

  }

  showModal() {
    const modal = <HTMLElement>document.querySelector('.modal-back');
    const main = <HTMLElement>document.querySelector('.modal-info');

    const ev = (<HTMLInputElement>event.target).className;
    console.log(ev);


    if (ev == 'mgcs') {

      modal.style.display = 'block';
      main.innerHTML =
        `
      <h1 style="color: red; font-family: 'Raleway'; margin-top: 1em">More about MGCS</h1>
      
    <div style="width: 85%; margin: 0 auto">
     <li>
        Performed daily scrums and weekly sprints while working in an Agile environment
     </li>

      <br>

     <li>
        Worked with the Git VCS to commit and push changes made to a deployed project
     </li>

     <br>

     <li>
      Implemented Angular Unit Testing for HTTP Requests performed and verified the data that was received through the API
     </li>

      <br>

     <li>
      Improved the content management of the organization's website by integrating a headless CMS called "Strapi" allowing users to view the latest and most popular blog
     </li>

     <br>

     </div>
      `
    }
    else if (ev == 'ism') {
      modal.style.display = 'block';
      main.innerHTML =
        `
      <h1 style="color: red; font-family: 'Raleway';">More about ISM</h1>
      

      <div style="width: 85%; margin: 0 auto">
     <li>
        Managed all mail and posting duties to make sure all email was delivered and received on time
     </li>

      <br>

     <li>
        Communicated with buyers to order products for the organization
     </li>

     <br>

     <li>
      Operated scanners, photocopiers and fax machines
     </li>

     <br>
     </div>

      `
    }


  }

  removeModal() {
    const modal = <HTMLElement>document.querySelector('.modal-back');

    modal.style.display = 'none';
  }


}

