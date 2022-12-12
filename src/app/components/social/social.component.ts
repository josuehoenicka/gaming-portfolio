import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})

export class SocialComponent implements OnInit {
  name:any;
  social:any;
  constructor(private check:PortfolioService) { }

  ngOnInit(): void {
    this.check.test().subscribe(data => {
      this.name=data;
      this.social=data.projects;
    });
  }

}
