import { Person } from "../Models/Person";

export class PersonService
{
    getPersonDetails():Person[]
    {
        let person:Person[];
        person=[
            new Person(1,"Sukhdev"),
            new Person(2,"Sukhii")
        ]
        return person;
    }
}