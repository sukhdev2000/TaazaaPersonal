using System;
using System.Collections.Generic;
using Models;
using Repository;
namespace Repository
{
    public class ContactList:IContactList
    {
        List<Contact> objlist=new List<Contact>();
        public int createContact(Contact objContact)
        {
            int i=0;
            objlist.Add(objContact);
            if(objlist!=null)
            {
                i=1;
            }
            else
            {
                i=0;
            }
            return i;
        }
        public List<Contact> DisplayList()
        {
            return objlist;
        }
        public void deleteContact(int index)
        {
            objlist.RemoveAt(index);
        }
        public void updateContact(int index)
        {
            Console.WriteLine("Enter the name you want to update!!");
            string name=Console.ReadLine();
            objlist[index].name=name;
        }
        public Contact Search(int index)
        {
            return objlist.Find(e=>e.id==index);
        }
    }
}