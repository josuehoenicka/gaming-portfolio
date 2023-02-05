import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  profile = {
    name: 'Josue Hoenicka',
    description: 'Front End Developer',
  }
  general = [
    {
      description: 'Age:',
      answer: '21'
    },
    {
      description: 'Born:',
      answer: 'Venezuela'
    },
    {
      description: 'Live:',
      answer: 'Argentina'
    }
  ]
  languages = [
    {
      description: 'Spanish:',
      answer: 'Fluent'
    },
    {
      description: 'Portuguese:',
      answer: 'Fluent'
    },
    {
      description: 'Live:',
      answer: 'Advanced'
    }
  ]
}
