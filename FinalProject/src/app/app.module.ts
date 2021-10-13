import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


//Creating Route table for component
const MyRoute:Routes=[
  {path:'Register',component:RegisterComponent},
  {path:'Login',component:LoginComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(MyRoute),ReactiveFormsModule,FormsModule  //This Module (RouteModules) has a class Routes
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
