import { Component } from '@angular/core';
import { FormBuilder,FormGroup,FormControl,Validator } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formGroup:FormGroup;
  constructor(private formBuilder:FormBuilder)  //FormBuilder class is provided by google so we dont't neeed to pass into providers section
  {
    //creating a structure or model for defining the sign up component
    this.formGroup=this.formBuilder.group({
      "UserName":"Sukhdev",
      'Password' : '',
      'Age':''
    });

  }
  Login(user:any)
  {
    console.log(user);
  }

}
