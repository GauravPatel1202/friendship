import { Component, OnInit } from '@angular/core';
import { constConfig } from "../configuration"
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  headers: any = {};
  constructor() {
   }

  ngOnInit(): void {
    this.headers = constConfig['headers'];
  }

}
