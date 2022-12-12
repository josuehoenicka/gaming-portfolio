import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-about-user',
  templateUrl: './about-user.component.html',
  styleUrls: ['./about-user.component.css']
})

export class AboutUserComponent implements OnInit {
  name:any;
  experience:any;
  certification:any;
  constructor(private check:PortfolioService) { }

  ngOnInit(): void {
    this.check.test().subscribe(data => {
      this.name=data;
      this.experience=data.experience;
      this.certification=data.education;
    });
  }
}
