using Microsoft.AspNetCore.Mvc;
using Models;
using Repository;
using System.Collections.Generic;
using System;
namespace Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ContactController
    {
        IContactList contactList;
        //List<Contact> objlist;
        Contact contact;
        public ContactController(IContactList Clist)
        {
            contactList = Clist;
        }
        [HttpPost("Add")]
        public string createContact(Contact obj)
        {
            int i = contactList.createContact(obj);
            if (i == 1)
            {
                return "Success Added All Details";
            }
            else
            {
                return "SomeThing went wrong";
            }
        }

        [HttpGet("Display")]
        public void Display()
        {
            contactList.DisplayList();
        }
        /* [HttpGet("Search")]
        public void SearchData(string name)
        {
            name="Sukhdev";
            contactList.Search(name);
        } */
    }
}