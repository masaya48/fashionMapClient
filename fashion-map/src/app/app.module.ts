import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { AppComponent, ROUTES } from './app.component';
import { TopComponent } from './top/top.component';
import { InputComponent } from './top/input/input.component';
import { ButtonComponent } from './top/button/button.component';

import { ResultMapComponent } from './resultMap/resultMap.component';
import { MapComponent } from './resultMap/map/map.component';
import { CardComponent } from './resultMap/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    InputComponent,
    ButtonComponent,
    ResultMapComponent,
    MapComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    RouterModule.forRoot(ROUTES),
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_KEY'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
