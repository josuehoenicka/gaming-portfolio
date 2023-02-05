import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  techs = [
    {
      name: 'HTML',
      time: { one: 'actived', two: 'actived', three: 'disabled', four: 'disabled', five: 'disabled' },
      nomobile: ''
    },
    {
      name: 'CSS/SCSS',
      time: { one: 'actived', two: 'actived', three: 'disabled', four: 'disabled', five: 'disabled' },
      nomobile: ''
    },
    {
      name: 'TypeScript',
      time: { one: 'actived', two: 'disabled', three: 'disabled', four: 'disabled', five: 'disabled' },
      nomobile: ''
    },
    {
      name: 'JavaScript',
      time: { one: 'actived', two: 'actived', three: 'disabled', four: 'disabled', five: 'disabled' },
      nomobile: ''
    },
    {
      name: 'Java',
      time: { one: 'disabled', two: 'disabled', three: 'disabled', four: 'disabled', five: 'disabled' },
      nomobile: ''
    },
    {
      name: 'Angular',
      time: { one: 'actived', two: 'disabled', three: 'disabled', four: 'disabled', five: 'disabled' },
      nomobile: ''
    },
    {
      name: 'Node.js',
      time: { one: 'disabled', two: 'disabled', three: 'disabled', four: 'disabled', five: 'disabled' },
      nomobile: ''
    },
    {
      name: 'SpringBoot',
      time: { one: 'disabled', two: 'disabled', three: 'disabled', four: 'disabled', five: 'disabled' },
      nomobile: ''
    },
    {
      name: 'MongoDB',
      time: { one: 'disabled', two: 'disabled', three: 'disabled', four: 'disabled', five: 'disabled' },
      nomobile: ''
    },
    {
      name: 'MySQL',
      time: { one: 'actived', two: 'disabled', three: 'disabled', four: 'disabled', five: 'disabled' },
      nomobile: ''
    },
    {
      name: 'Git',
      time: { one: 'actived', two: 'actived', three: 'disabled', four: 'disabled', five: 'disabled' },
      nomobile: ''
    }
  ]

}
