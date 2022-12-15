import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-noprojects',
  templateUrl: './noprojects.component.html',
  styleUrls: ['./noprojects.component.css']
})
export class NoprojectsComponent implements OnInit {

  constructor(private _location: Location)
  {}

  backClicked() {
    this._location.back();
  }
  ngOnInit(): void {
  }

}
