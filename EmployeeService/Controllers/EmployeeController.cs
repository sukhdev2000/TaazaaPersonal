using Models;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
namespace Controllers
{
    [Route("[controller]")]//route is class in which we are passing
    public class EmployeeController:ControllerBase
    {    
     [HttpGet]
       public string itemName()
       {
           return "Pizza";
       } 
       [HttpGet("haldiram")]
       public string Water()
       {
           return "Bisleri";
       }  
         [HttpGet("info1")]
        public Employee Detail()
       {
           Employee employee=new Employee();
           employee.Id=101;
           employee.name="Sukhdev";
           return employee;
       }
    [HttpGet("info")]
    public List<Employee> Details()
    {
        EmployeeData employeeData=new EmployeeData();
        List<Employee> obj=employeeData.EmployeesDetails();
        return obj;
    } 
    }
}