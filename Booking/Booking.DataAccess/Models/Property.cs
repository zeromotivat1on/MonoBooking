using System;
using Booking.Core.Enums;

namespace Booking.DataAccess.Models
{
    public class Property
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public PropertyType ValueType { get; set; }
        public string Value { get; set; }
        public PropertyStatus Status { get; set; }
        public bool IsDeleted { get; set; }
        public DateTime CreationDate { get; set; }
        public DateTime LastModifiedDate { get; set; }
    }
}
