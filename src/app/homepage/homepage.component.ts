import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  str: string= 'dashboard';
  constructor() { }

  ngOnInit() {
  }

  onSelect(str) {
    this.str = str;
    console.log(this.str);
  }
}
