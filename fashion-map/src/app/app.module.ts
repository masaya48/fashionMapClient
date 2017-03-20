import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';

// import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { AppComponent, ROUTES } from './app.component';
import { InputComponent } from './top/input/input.component';
import { ButtonComponent } from './top/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    // MainComponent,
    TopComponent,
    InputComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
