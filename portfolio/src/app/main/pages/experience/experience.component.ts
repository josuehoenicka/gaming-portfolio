import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  projects = [
    {
      name: 'Bandicootfolio',
      description: 'This project',
      deploy: '', github: '',
      link_deploy: '', link_repo: '',
      img: '../../../../assets/items/building.png'
    },
    {
      name: 'Wanderlist',
      description: 'CRUD Countries List',
      deploy: 'fa-lock', github: 'fa-lock',
      link_deploy: '', link_repo: '',
      img: '../../../../assets/items/building.png'
    },
    {
      name: 'Springular',
      description: 'CRUD/JWT Portfolio',
      deploy: 'fa-lock', github: 'fa-lock',
      link_deploy: '', link_repo: '',
      img: '../../../../assets/items/building.png'
    },
    {
      name: 'Hoenixstore',
      description: 'Ecommerce Store',
      deploy: 'fa-lock', github: 'fa-lock',
      link_deploy: '', link_repo: '',
      img: '../../../../assets/items/building.png'
    },
    {
      name: 'Jonikingames',
      description: 'Video Game Website',
      deploy: 'fa-lock', github: 'fa-lock',
      link_deploy: '', link_repo: '',
      img: '../../../../assets/items/building.png'
    },
    {
      name: 'Codebash',
      description: 'Ecommerce Store',
      deploy: 'fa-lock', github: 'fa-lock',
      link_deploy: '', link_repo: '',
      img: '../../../../assets/items/building.png'
    }
  ]
}
