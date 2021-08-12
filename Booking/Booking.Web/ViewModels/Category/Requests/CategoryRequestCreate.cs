using System;

namespace Booking.Web.ViewModels.Category.Requests
{
    public class CategoryRequestCreate
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime CreatedAt { get; set; }
        public bool IsDeleted { get; set; }
    }
}