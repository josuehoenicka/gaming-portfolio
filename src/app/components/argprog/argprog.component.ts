import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-argprog',
  templateUrl: './argprog.component.html',
  styleUrls: ['./argprog.component.css']
})
export class ArgprogComponent implements OnInit {

  constructor(private _location: Location)
  {}

  backClicked() {
    this._location.back();
  }
  ngOnInit(): void {
  }

}
