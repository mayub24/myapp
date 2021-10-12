import { Injectable } from '@angular/core';
import { jobs } from '../Models/work-interface';


@Injectable({
  providedIn: 'root'
})
export class JobService {

  jobz: jobs[];

  constructor() {

    this.jobz = [
      {
        company: 'Toronto District School Board',
        position: 'Web Developer/QA Analyst',
        points: ['Used various content management systems and frameworks (DNN / ASP.NET) to manage tdsb’s public website', 'Worked within time deadlines and handled multiple projects in ASP, COM, .NET, and C# languages', 'Programmed in Javascript, Jquery, Angular and Bootstrap 4'],
        pic: 'assets/imgs/tdsbz3.png',
        class: 'tdsb'
      },
      {
        company: 'Ontario Ministry of Government and Consumer Services',
        position: 'Web Developer',
        points: ['Used various web development methodologies and frameworks (Angular/Bootstrap 4) to develop new and modify existing web content', 'Created an API that performed CRUD operations using the Azure Cosmos DB Database along with Node.js and Express.js', 'Worked with Microsoft\'s Cosmos DB database service to store information after performing an API call'],
        pic: 'assets/imgs/mgcs.png',
        class: 'mgcs'
      },
      {
        company: 'Islamic Society of Markham',
        position: 'I.T Assistant',
        points: ['Worked with Microsoft Office 365 products such as Word, Excel and PowerPoint', 'Used Adobe products (Adobe XD/Photoshop) to create designs for events and programs that took place at ISM', 'Worked with QuickBooks to manage sales, expenses and kept track of transactions on a regular basis'],
        pic: 'assets/imgs/ismFinal.jpg',
        class: 'ism'
      }

    ]

  }


}
