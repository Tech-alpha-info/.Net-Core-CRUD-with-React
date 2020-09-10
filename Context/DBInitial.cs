



using CustomerServer.Context;
using CustomerServer.Model;
    using System;
    using System.Linq;

    namespace CustomerServer.Data
{
    public static class DBInitial
    {
        public static void Initialize(CustomerContext context)
        {
            context.Database.EnsureCreated();

            if (context.Customer.Any())
            {
                return;   // DB has already been seeded
            }

            var customers = new Customer[]
            {
                new Customer {  CusName = "John Testy",    CusContact = "Mr Salesman",
                     CusAddress = "25 Test st, London", CusEmail = "test@test.com", CusDOB = new DateTime(1980,5,1)},
                new Customer {  CusName = "Sarah Testy",    CusContact = "Mr Salesman",
                     CusAddress = "30 Test st, Exeter", CusEmail = "test2@test.com", CusDOB = new DateTime(1985,7,1)},
            };

            foreach (Customer s in customers)
            {
                context.Customer.Add(s);
            }
            context.SaveChanges();

         
        }
    }
}

