import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent
{
  constructor(private router:Router)
  {

  }
  Nationality=['Indian','Chinese','American'];
  RegisterData(user:any)
  {
    console.log(user); //at this point we have to call register endpoint in webAPI to submit data in backend ,if service retuns 0 means membership not created otherwise...
    this.router.navigate(['/Login']);
  }
}