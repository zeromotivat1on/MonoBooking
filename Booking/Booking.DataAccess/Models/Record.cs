using System;
using Booking.Core.Enums;

namespace Booking.DataAccess.Models
{
    public class Record
    {
        public int Id { set; get; }
        public DateTime Date { set; get; }
        public TimeSpan Time { set; get; }
        public RecordStatus Status { set; get; }
        public bool Deleted { set; get; }
        public DateTime CreatedDate { set; get; }
        public DateTime LastModifiedDate { set; get; }
    }
}
