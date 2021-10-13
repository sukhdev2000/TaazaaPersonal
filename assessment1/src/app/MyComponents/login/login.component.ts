import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formGroup:FormGroup;
  constructor (private formBuilder:FormBuilder,private router:Router)
  {
    this.formGroup=this.formBuilder.group({
      "UserName":[null,Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(20)])],
      'Password' :[null,Validators.required]
    });

  }
  LoginData(user:any):void{
    console.log(user);
    this.router.navigate(['/Details']);
    
  }

}
