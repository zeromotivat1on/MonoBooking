using Booking.Core.Enums;
using System;

namespace Booking.Web.ViewModels.Property.Request
{
    public class RequestPropertyCreate
    {
        public string Name { set; get; }
        public PropertyType ValueType { set; get; }
        public string Value { set; get; }
        public PropertyStatus Status { set; get; }
        public bool IsDeleted { set; get; }
        public DateTime CreationDate { set; get; }
        public DateTime LastModifiedDate { set; get; }
    }
}
