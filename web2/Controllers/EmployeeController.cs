using Microsoft.AspNetCore.Mvc;
using Web2.Models;
namespace Controllers
{
    [Route("[controller]")]
    public class EmployeeController:ControllerBase
    {
        [HttpPost("create")]
        public Employee details([FromBody]Employee employee)
        {
            /* employee.EmployeeCode=102;
            employee.EmployeeName="Sukhii";
            employee.Age=21; */
            return employee;
        }
    }
}