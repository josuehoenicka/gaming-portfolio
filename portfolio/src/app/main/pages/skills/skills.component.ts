import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  techs = [
    {
      name: 'HTML',
      time: { one: 'actived', two: 'actived', three: 'disabled', four: 'disabled', five: 'disabled' }
    },
    {
      name: 'CSS/SCSS',
      time: { one: 'actived', two: 'actived', three: 'disabled', four: 'disabled', five: 'disabled' }
    },
    {
      name: 'TypeScript',
      time: { one: 'actived', two: 'disabled', three: 'disabled', four: 'disabled', five: 'disabled' }
    },
    {
      name: 'JavaScript',
      time: { one: 'actived', two: 'actived', three: 'disabled', four: 'disabled', five: 'disabled' }
    },
    {
      name: 'Java',
      time: { one: 'disabled', two: 'disabled', three: 'disabled', four: 'disabled', five: 'disabled' }
    },
    {
      name: 'Angular',
      time: { one: 'actived', two: 'disabled', three: 'disabled', four: 'disabled', five: 'disabled' }
    },
    {
      name: 'Node.js',
      time: { one: 'disabled', two: 'disabled', three: 'disabled', four: 'disabled', five: 'disabled' }
    },
    {
      name: 'SpringBoot',
      time: { one: 'disabled', two: 'disabled', three: 'disabled', four: 'disabled', five: 'disabled' }
    },
    {
      name: 'MongoDB',
      time: { one: 'disabled', two: 'disabled', three: 'disabled', four: 'disabled', five: 'disabled' }
    },
    {
      name: 'MySQL',
      time: { one: 'actived', two: 'disabled', three: 'disabled', four: 'disabled', five: 'disabled' }
    },
    {
      name: 'Git',
      time: { one: 'actived', two: 'actived', three: 'disabled', four: 'disabled', five: 'disabled' }
    }
  ]

}
