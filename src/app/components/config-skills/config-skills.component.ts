import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-config-skills',
  templateUrl: './config-skills.component.html',
  styleUrls: ['./config-skills.component.css']
})

export class ConfigSkillsComponent implements OnInit {
  name:any;
  tech:any;
  constructor(private check:PortfolioService) { }

  ngOnInit(): void {
    this.check.test().subscribe(data => {
      this.name=data;
      this.tech=data.techs;
    });
  }

}
