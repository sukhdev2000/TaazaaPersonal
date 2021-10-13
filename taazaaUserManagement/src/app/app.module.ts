import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonComponent } from './Person.component';
import { SukhdevComponent } from './Sukhdev.component';

@NgModule({
  declarations: [
    AppComponent,SukhdevComponent,PersonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [SukhdevComponent]
})
export class AppModule { }
