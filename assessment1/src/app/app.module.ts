import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegisterComponent } from './MyComponents/register/register.component';
import { LoginComponent } from './MyComponents/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailsComponent } from './MyComponents/details/details.component';


const MyRoutes:Routes=[
  {path:'Register',component:RegisterComponent},
  {path:'Login',component:LoginComponent},
  {path:"Details",component:DetailsComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(MyRoutes),ReactiveFormsModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
