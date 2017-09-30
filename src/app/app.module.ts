import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from 'app/modules/routing-module/app-routing.module';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { WeatherComponent } from 'app/containers/weather/weather.component';
import { VisitsComponent } from 'app/containers//visits/visits.component';
import { WeatherService } from 'app/services/remote-communication-services/weather.service';
import { MateriaDesignModule } from 'app/modules/material-design/material-design.module';
import { GalleryComponent } from 'app/containers//gallery/gallery.component';
import { FlexLayoutModule } from '@angular/flex-layout';



import { FooterComponent } from 'app/shared-components/footer/footer.component';
import { MainPageComponent } from 'app/containers//main-page/main-page.component';
import { ChatAppComponent } from './containers/chat-app/chat-app.component';


@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    VisitsComponent,
    GalleryComponent,
    FooterComponent,
    MainPageComponent,
    ChatAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    BrowserAnimationsModule,
    MateriaDesignModule,
    FlexLayoutModule
  ],
  providers: [
    WeatherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
