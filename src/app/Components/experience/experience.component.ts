import { Component, OnInit } from '@angular/core';
import { JobService } from '../../Services/job.service';
import { jobs } from '../../Models/work-interface';


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

        console.log(this.txt.length);
        console.log(this.i);

        this.allText += this.txt.charAt(this.i);

        this.i++;
      }
    }, 40);

  }


}

