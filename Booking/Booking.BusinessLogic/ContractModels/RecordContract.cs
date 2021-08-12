using System;
using Booking.Core.Enums;

namespace Booking.BusinessLogic.ContractModels
{
    public class RecordContract
    {
        public int Id { set; get; }
        public DateTime Date { set; get; }
        public RecordStatus Status { set; get; }
        public bool Deleted { set; get; }
        public DateTime CreatedDate { set; get; }
        public DateTime LastModifiedDate { set; get; }
    }
}
