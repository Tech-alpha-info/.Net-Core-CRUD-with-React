using System.Collections.Generic;
using System.Linq;
using CustomerServer.Context;
using CustomerServer.Model;
using Microsoft.AspNetCore.Mvc;

namespace CustomerServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        readonly CustomerContext CusDetails;
        public CustomerController(CustomerContext customerContext)
        {
            CusDetails = customerContext;
        }

        [HttpGet]
        public IEnumerable<Customer> Get()
        {
            var data = CusDetails.Customer.ToList();
            return data;
        }

        [HttpGet]
        [Route("GetCustomer/{id}")]
        public Customer GetCustomer(int id)
        {
            var data = CusDetails.Customer.FirstOrDefault(o => o.CusId == id);
            return data;
        }

        [HttpPost]
        [Route("PutCustomer")]
        public Response PutCustomer(Customer obj)
        {
            try
            {
                var data = CusDetails.Customer.Update(obj);
                CusDetails.SaveChanges();
                return new Response
                {
                    Status = "Saved",
                    Message = "Saved Successfully"
                };
            }
            catch (System.Exception ex)
            {
                return new Response
                {
                    Status = "Error",
                    Message = "Data not Saved " + ex.Message
                };
            }
        }



        [Route("Delete")]
        public Response Delete(int id)
        {
            var data = CusDetails.Customer.Where(a => a.CusId == id).FirstOrDefault();
            CusDetails.Customer.Remove(data);
            CusDetails.SaveChanges();
            return new Response
            {
                Status = "Delete",
                Message = "Delete Successfuly"
            };
        }

        [HttpPost]
        [Route("Post")]
        public Response Post(Customer obj)
        {
            try
            {
                var data = CusDetails.Customer.Add(obj);
                CusDetails.SaveChanges();
                return new Response
                {
                    Status = "Added",
                    Message = "Added Successfully"
                };
            }
            catch (System.Exception ex)
            {
                return new Response
                {
                    Status = "Error",
                    Message = "Data not Added " + ex.Message
                };
            }
           
        }
    }
}
