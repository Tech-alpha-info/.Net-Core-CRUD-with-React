using System;
using System.ComponentModel.DataAnnotations;

namespace CustomerServer.Model
{
    public class Customer
    {
        [Key]
        public int? CusId { get; set; }
        public string CusName { get; set; }
        public string CusContact { get; set; }
        public string CusEmail { get; set; }
        public DateTime CusDOB { get; set; }
        public string CusAddress { get; set; }
    }
}