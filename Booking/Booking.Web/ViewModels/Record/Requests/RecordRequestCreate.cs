using System;
using Booking.Core.Enums;

namespace Booking.Web.ViewModels.Record.Requests
{
    public class RecordRequestCreate
    {
        public DateTime Date { set; get; }
        public RecordStatus Status { set; get; }
        public bool Deleted { set; get; }
        public DateTime CreatedDate { set; get; }
        public DateTime LastModifiedDate { set; get; }
    }
}

