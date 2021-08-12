using Booking.Core.Enums;
using System;

namespace Booking.Web.ViewModels.Offer.Responses
{
    public class ResponseOfferDefault
    {
        public int Id { set; get; }
        public string Description { set; get; }
        public OfferStatus Status { set; get; }
        public string Title { set; get; }
        public decimal SlotPrice { set; get; }
        public TimeSpan SlotTime { set; get; }
        public string Image { set; get; }
        public float Mark { set; get; }
    }
}
