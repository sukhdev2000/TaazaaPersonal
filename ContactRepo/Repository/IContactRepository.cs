using Models;
using System;
using System.Collections.Generic;
namespace Repository
{
    public interface IContactRepository
    {
        void Add(Contacts contacts);
        List<Contacts> GetAll();//list is not recommended  //during traverse we cannot add,update,delete any record;
        Contacts Find(int id);  //searching a record by id and returning a contact 
        void Update(Contacts contacts); //we can update record by id, name, email from all the attributes
        int Remove(int id);  //we are removing the record by id only and returning as a void it depends on the requirement
    }
}