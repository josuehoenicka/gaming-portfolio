import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  techs = [
    {
      name: 'HTML5',
      time: { one: 'actived', two: 'actived', three: 'disabled', four: 'disabled', five: 'disabled' },
      nomobile: ''
    },
    {
      name: 'CSS3',
      time: { one: 'actived', two: 'actived', three: 'disabled', four: 'disabled', five: 'disabled' },
      nomobile: ''
    },
    {
      name: 'SCSS',
      time: { one: 'actived', two: 'disabled', three: 'disabled', four: 'disabled', five: 'disabled' },
      nomobile: ''
    },
    {
      name: 'SASS',
      time: { one: 'actived', two: 'disabled', three: 'disabled', four: 'disabled', five: 'disabled' },
      nomobile: ''
    },
    {
      name: 'Bootstrap5',
      time: { one: 'actived', two: 'actived', three: 'disabled', four: 'disabled', five: 'disabled' },
      nomobile: ''
    },
    {
      name: 'TailwindCSS',
      time: { one: 'disabled', two: 'disabled', three: 'disabled', four: 'disabled', five: 'disabled' },
      nomobile: ''
    },
    {
      name: 'JavaScript',
      time: { one: 'actived', two: 'actived', three: 'disabled', four: 'disabled', five: 'disabled' },
      nomobile: ''
    },
    {
      name: 'TypeScript',
      time: { one: 'actived', two: 'disabled', three: 'disabled', four: 'disabled', five: 'disabled' },
      nomobile: ''
    },
    {
      name: 'Angular',
      time: { one: 'actived', two: 'disabled', three: 'disabled', four: 'disabled', five: 'disabled' },
      nomobile: ''
    },
    {
      name: 'React',
      time: { one: 'disabled', two: 'disabled', three: 'disabled', four: 'disabled', five: 'disabled' },
      nomobile: ''
    },
    {
      name: 'RxJs',
      time: { one: 'disabled', two: 'disabled', three: 'disabled', four: 'disabled', five: 'disabled' },
      nomobile: ''
    }
  ]

}
