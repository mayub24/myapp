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
        company: 'Ontario Ministry of Government and Consumer Services',
        position: 'Web Developer',
        points: ['Used various web development methodologies and frameworks (Angular/Bootstrap 4) to develop new and modify existing web content', 'Created an API that performed CRUD operations using the Azure Cosmos DB Database along with Node.js and Express.js', 'Worked with Microsoft\'s Cosmos DB database service to store information after performing an API call'],
        pic: 'assets/imgs/mgcs.png'
      },
      {
        company: 'Islamic Society of Markham',
        position: 'I.T Assisstant',
        points: ['Worked with Microsoft Office 365 products such as Word, Excel and PowerPoint', 'Used Adobe products (Adobe XD/Photoshop) to create designs for events and programs that took place at ISM', 'Worked with QuickBooks to manage sales, expenses and kept track of transactions on a regular basis', 'Managed all mail and posting duties to make sure all email was delivered and received on time'],
        pic: 'assets/imgs/ismFinal.jpg'
      },
      {
        company: 'Shoppers Drug Mart',
        position: 'Shelf Stocker',
        points: ['Worked at Shoppers Drug Mart as a Cashier and assisted customers around the store', 'Stocked items that were sold during the day and made sure everything was placed where it is supposed to belong'],
        pic: 'assets/imgs/shop.png'
      }

    ]

  }


}
