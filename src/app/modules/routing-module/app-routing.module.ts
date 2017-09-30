import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WeatherComponent } from 'app/containers/weather/weather.component';
import { VisitsComponent } from 'app/containers/visits/visits.component';
import { GalleryComponent } from 'app/containers/gallery/gallery.component';

import * as ROUTING_CONSTS from 'app/modules/routing-module/routing-consts';
import { ChatAppComponent } from 'app/containers/chat-app/chat-app.component';


export const routes: Routes = [
  { path: '', redirectTo: ROUTING_CONSTS.PATH_WEATHER, pathMatch: 'full' },
  { path: ROUTING_CONSTS.PATH_VISITS  , component: VisitsComponent},
  { path: ROUTING_CONSTS.PATH_WEATHER , component: WeatherComponent },
  { path: ROUTING_CONSTS.PATH_GALLERY , component: GalleryComponent},
  { path: ROUTING_CONSTS.PATH_CHAT    , component: ChatAppComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

