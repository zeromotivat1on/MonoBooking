using Booking.Core.Enums;
using System;

namespace Booking.Web.ViewModels.Offer.Requests
{
    public class OfferRequestCreate
    {
        public string Description { set; get; }
        public OfferStatus Status { set; get; }
        public string Title { set; get; }
        public decimal SlotPrice { set; get; }
        public TimeSpan SlotTime { set; get; }
        public string Image { set; get; }
        public float Mark { set; get; }
    }
}
