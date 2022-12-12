import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-social-user',
  templateUrl: './social-user.component.html',
  styleUrls: ['./social-user.component.css']
})

export class SocialUserComponent implements OnInit {
  name:any;
  constructor(private check:PortfolioService) { }

  ngOnInit(): void {
    this.check.test().subscribe(data => {
      this.name=data;
    });
  }

}
