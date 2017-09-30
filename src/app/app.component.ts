import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'My forum';

  constructor() {
  }

  ngOnInit(): void {
    // this.selectedLinkItem = this.linkItems[0];
  }
}

// pridam si typ Linky a array a budem generova5 linkz cez ngFor
