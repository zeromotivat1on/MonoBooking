using Booking.Core.Enums;
using System;

namespace Booking.DataAccess.Models
{
    public class Offer
    {
        public int Id { get; set; }
        public OfferStatus Status { get; set; } 
        public string Title { get; set; }
        public string Description { get; set; }
        public decimal SlotPrice { get; set; }
        public TimeSpan SlotTime { get; set; }
        public string Image { get; set; }
        public float Mark { get; set; }
    }
}
