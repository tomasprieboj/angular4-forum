import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

import { LinkItem } from './link-item';
import { ObservableMedia } from '@angular/flex-layout';

import * as ROUTING_CONSTS from 'app/modules/routing-module/routing-consts';

const LINK_ITEMS: LinkItem[] = [
  {
    linkName: 'Top visits',
    className: 'list-item',
    routerLink: `/${ROUTING_CONSTS.PATH_VISITS}`
  },
  {
    linkName: 'Weather',
    className: 'list-item',
    routerLink: `/${ROUTING_CONSTS.PATH_WEATHER}`
  },
  {
    linkName: 'Photo Gallery',
    className: 'list-item',
    routerLink: `/${ROUTING_CONSTS.PATH_GALLERY}`
  },
  {
    linkName: 'Chat Aplication',
    className: 'list-item',
    routerLink: `/${ROUTING_CONSTS.PATH_CHAT}`
  }
]

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class MainPageComponent implements OnInit {
  title = 'My forum';
  @ViewChild('sidenav') sidenav;

  linkItems: LinkItem[] = LINK_ITEMS;
  selectedLinkItem: LinkItem;

  constructor(public media: ObservableMedia) {
  }

  ngOnInit() {
  }

}
