using Microsoft.AspNetCore.Mvc;
using web3.Model;
using web3.Repository;
using Repository;
namespace Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EmployeeController:ControllerBase
    {
        //this is right way!!
        IEmployeeList list;
        public EmployeeController(IEmployeeList ilist)
        {
            list=ilist;
        }
        [HttpPost]
        public Employee CreateEmployeeData(Employee obj)
        {
            var t=list.CreateEmployee(obj);
            if(t==1)
            {
                return obj;
            }
            return obj;
            //this is the wrong way because we don't want to show the functionality of employeelist class
            /* EmployeeList employeeList=new EmployeeList();
            var i=employeeList.CreateEmployee(obj);
            if(i==1)
            {
                return "Success!!";
            }
            else
            {
                return "SomeThing went wrong";
            } */
        }
    }
}