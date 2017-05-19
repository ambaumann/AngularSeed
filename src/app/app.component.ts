import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'app works!';
  tabLinks = [
    {label: 'Home', link: ''},
    {label: 'Weather', link: ''},
    {label: 'Example', link: ''},
    {label: 'About', link: ''},
  ];
  activeLinkIndex = 0;

  constructor(private router: Router) {

    // Initialize the index by checking if a tab link is contained in the url.
    // This is not an ideal check and can be removed if routerLink exposes if it is active.
    // https://github.com/angular/angular/pull/12525
    this.activeLinkIndex =
        this.tabLinks.indexOf(this.tabLinks.find(tab => router.url.indexOf(tab.link) !== -1));
  }

  ngOnInit(): void {
  }
}
