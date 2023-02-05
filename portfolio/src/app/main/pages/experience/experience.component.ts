import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  projects = [
    {
      name: 'Bandicootfolio',
      description: 'Portfolio',
      deploy: 'fa-cloud', github: 'fa-github',
      link_deploy: 'https://bandicootfolio.web.app/', link_repo: 'https://github.com/josuehoenicka/bandicootfolio',
      img: '../../../../assets/items/building.png'
    },
    {
      name: 'Hoenixstore',
      description: 'Ecommerce Plataform',
      deploy: 'fa-cloud', github: 'fa-github',
      link_deploy: 'https://hoenixstore.web.app/', link_repo: 'https://github.com/josuehoenicka/hoenixstore',
      img: '../../../../assets/items/building.png'
    },
    {
      name: 'Wanderlist',
      description: 'Travel Application',
      deploy: 'fa-ban', github: 'fa-github',
      link_deploy: '', link_repo: 'https://github.com/josuehoenicka/wanderlist',
      img: '../../../../assets/items/building.png'
    },
    {
      name: 'Springular',
      description: 'Portfolio',
      deploy: 'fa-ban', github: 'fa-github',
      link_deploy: '', link_repo: 'https://github.com/josuehoenicka/springular',
      img: '../../../../assets/items/building.png'
    },
    {
      name: 'Jonikingames',
      description: 'Video Game Website',
      deploy: 'fa-ban', github: 'fa-github',
      link_deploy: '', link_repo: 'https://github.com/josuehoenicka/jonikingames',
      img: '../../../../assets/items/building.png'
    },
    {
      name: 'Codebash',
      description: 'Ecommerce Plataform',
      deploy: 'fa-ban', github: 'fa-lock',
      link_deploy: '', link_repo: '',
      img: '../../../../assets/items/building.png'
    }
  ]
}
