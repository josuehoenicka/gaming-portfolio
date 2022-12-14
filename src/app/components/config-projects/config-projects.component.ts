import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-config-projects',
  templateUrl: './config-projects.component.html',
  styleUrls: ['./config-projects.component.css']
})

export class ConfigProjectsComponent implements OnInit {
  name:any;
  project:any;
  constructor(private check:PortfolioService) { }

  ngOnInit(): void {
    this.check.test().subscribe(data => {
      this.name=data;
      this.project=data.projects;
    });
  }

}
