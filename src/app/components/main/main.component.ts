import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  name:any;
  main:any;
  lang:any;
  tech:any;
  constructor(private check:PortfolioService) { }

  ngOnInit(): void {
    this.check.test().subscribe(data => {
      this.name=data;
      this.main=data.education;
      this.lang=data.languages;
      this.tech=data.techs;
    });
  }

}
