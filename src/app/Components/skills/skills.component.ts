import { Component, OnInit } from '@angular/core';

import { skills } from '../../Models/skill-interface';

import { SkillService } from '../../Services/skill.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skillz: skills[];

  constructor() { }

  ngOnInit() {

    this.skillz =
      [
        {
          type: 'Programming Languages',
          languages: 'JavaScript,TypeScript, C, C++'
        },
        {
          type: 'Backend Development',
          languages: 'Node.js, Express.js, MongoDB, Mongoose'
        },
        {
          type: 'Front-end Development',
          languages: 'Angular, React, jQuery, HTML5, CSS3, Sass, Bootstrap 4, Bulma'
        },
        {
          type: 'Other',
          languages: 'OOP Concepts, JSON, AJAX, REST API\'s, ES6, Emmet, Git/Github, Photoshop, Illustrator'
        }
      ]


  }

}
