import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  techs = [
    {
      name: '.JS',
      time: { one: 'actived', two: 'actived', three: 'disabled', four: 'disabled', five: 'disabled' },
      nomobile: ''
    },
    {
      name: '.TS',
      time: { one: 'actived', two: 'actived', three: 'disabled', four: 'disabled', five: 'disabled' },
      nomobile: ''
    },
    {
      name: '.RB',
      time: { one: 'actived', two: 'disabled', three: 'disabled', four: 'disabled', five: 'disabled' },
      nomobile: ''
    }
  ]

}
