using System.Collections.Generic;
namespace Models
{
    public class EmployeeData
    {
        public List<Employee> EmployeesDetails()
        {
            List<Employee> obj=new List<Employee>();
            obj.Add(new Employee
            {
                Id=101,
                name="Sukhdev"
            });
            obj.Add(new Employee
            {
                Id=102,
                name="Rahul"
            });
            return obj;
        }
    }
}