import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  projects = [
    {
      name: 'Rottwames',
      description: 'Video Game Website',
      deploy: 'fa-ban', github: 'fa-github',
      link_deploy: '', link_repo: 'https://github.com/josuehoenicka/rottwames',
      img: '../../../../assets/items/building.png'
    },
    {
      name: 'Springular',
      description: 'Full Stack Portfolio',
      deploy: 'fa-google', github: 'fa-github',
      link_deploy: 'https://springular.web.app', link_repo: 'https://github.com/josuehoenicka/springular',
      img: '../../../../assets/items/building.png'
    },
    {
      name: 'Bandicootfolio',
      description: 'Front End Portfolio',
      deploy: 'fa-google', github: 'fa-github',
      link_deploy: 'https://bandicootfolio.web.app/', link_repo: 'https://github.com/josuehoenicka/bandicootfolio',
      img: '../../../../assets/items/building.png'
    },
    {
      name: 'Hoenixstore',
      description: 'Ecommerce Plataform',
      deploy: 'fa-ban', github: 'fa-github',
      link_deploy: 'https://hoenixstore.web.app/', link_repo: 'https://github.com/josuehoenicka/hoenixstore',
      img: '../../../../assets/items/building.png'
    },
    {
      name: 'Wanderlist',
      description: 'Travel Application',
      deploy: 'fa-ban', github: 'fa-github',
      link_deploy: '', link_repo: 'https://github.com/josuehoenicka/wanderlist',
      img: '../../../../assets/items/building.png'
    }
  ]
}
