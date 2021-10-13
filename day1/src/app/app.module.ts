import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductComponent } from './Product.component';
import { ProductDetailsComponent } from './ProductDetails.component';

const MyRoute:Routes=[
  {path:'Product/:id',component:ProductDetailsComponent}
  //{path:'Product/:name',component:ProductComponent}
]
@NgModule({
  declarations: [
    AppComponent,ProductComponent,ProductDetailsComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(MyRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
