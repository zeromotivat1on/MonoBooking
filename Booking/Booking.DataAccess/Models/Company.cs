using System;
using Booking.Core.Enums;

namespace Booking.DataAccess.Models
{
    public class Company
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int DaysOnSite { get; set; }
        public string Owner { get; set; }
        public CompanyStatus Status { get; set; }
        public DateTime FoundationDate { get; set; }
        public bool Deleted { get; set; }
        public DateTime LastModifiedDate { get; set; }
    }
}
