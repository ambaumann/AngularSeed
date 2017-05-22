import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  // TODO make links imported string constants from modules they link to.

  title = 'app works!';
  tabLinks = [
    {label: 'Weather', link: 'weather'},
    {label: 'Example', link: 'example'},
    {label: 'About', link: 'about'},
  ];

  constructor() {
  }

  ngOnInit(): void {
  }
}
