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

  constructor(private jobService: JobService) { }

  ngOnInit() {
    this.allJobs = this.jobService.jobz;
    console.log(this.allJobs);

    setInterval(() => {
      this.shakeIt = !this.shakeIt;
    }, 7000)

  }


}
