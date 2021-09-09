using System.Collections.Generic;
using Models;
using System.Linq;

namespace Repository
{
    public class ContactsRepository : IContactRepository
    {
        int a=1;
        List<Contacts> listcontact = new List<Contacts>(); //listcontacts is an object to perform the manipulation
        public void Add(Contacts contacts)
        {
            listcontact.Add(contacts);
        }

        public Contacts Find(int id)
        {
            var contacts = listcontact.Where(temp => temp.EmpId == id).SingleOrDefault();
            return contacts;
        }

        public List<Contacts> GetAll()
        {
            //dummy record
        if(a==1)
        {
           listcontact.Add(new Contacts
            {
                EmpId = 101,
                EmpName = "Sukhdev",
                EmpMail = "dsukhdev2900@gamil.com"
            });
            listcontact.Add(new Contacts
            {
                EmpId = 102,
                EmpName = "karan",
                EmpMail = "karan2900@gamil.com"
            });
        }a=2; 
            return listcontact;
        }

        public int Remove(int id)
        {
            int a;
            var contactToRemove = listcontact.Where(temp => temp.EmpId == id).SingleOrDefault();
            if (contactToRemove != null)
            {
                listcontact.Remove(contactToRemove);
                a=1;
            }
            else 
            {
                a=0;
            }
            return a;
        }

        public void Update(Contacts contacts)
        {
            var contactToUpdate = listcontact.Where(temp => temp.EmpId == contacts.EmpId).SingleOrDefault();
            if (contactToUpdate != null)
            {
                contactToUpdate.EmpName = contacts.EmpName;
                contactToUpdate.EmpId = contacts.EmpId;
                contactToUpdate.EmpMail = contacts.EmpMail;
            }
            
        }
    }
}