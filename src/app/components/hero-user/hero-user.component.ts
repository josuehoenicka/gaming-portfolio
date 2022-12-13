import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-hero-user',
  templateUrl: './hero-user.component.html',
  styleUrls: ['./hero-user.component.css']
})

export class HeroUserComponent implements OnInit {
  portfolio:any;
  constructor(private check:PortfolioService) { }

  ngOnInit(): void {
    this.check.test().subscribe(data => {
      console.log(data);
      this.portfolio=data;
    });
  }

}
