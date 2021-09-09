using Models;
using System.Collections.Generic;
namespace Repository
{
    public interface IContactList
    {
        int createContact(Contact objContact);
        List<Contact> DisplayList();
        void deleteContact(int index);
         void updateContact(int index);
         Contact Search(int index);
    }
}