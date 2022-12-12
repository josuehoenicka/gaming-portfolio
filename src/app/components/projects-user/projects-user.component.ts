import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-projects-user',
  templateUrl: './projects-user.component.html',
  styleUrls: ['./projects-user.component.css']
})

export class ProjectsUserComponent implements OnInit {
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
