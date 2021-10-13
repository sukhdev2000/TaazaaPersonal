import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { Person } from './Models/Person';
import { PersonService } from './Services/Person.Services';

@Component({
  selector: 'app-person',
  templateUrl: './Person.component.html'
})

export class PersonComponent {
    personObject!:Person;
    personList:Person[]=[];  //holds multiple data
    PersonDetails():void 
    {
        this.personObject=new Person(21,"Das Sukhdev");
    }
    PersonDetailsList():void 
    {
        console.log("I Am Called")
        var personService=new PersonService();
        this.personList=personService.getPersonDetails();
    }

}