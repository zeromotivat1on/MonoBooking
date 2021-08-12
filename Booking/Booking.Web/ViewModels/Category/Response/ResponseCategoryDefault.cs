using System;

namespace Booking.Web.ViewModels.Category.Response
{
    public class ResponseCategoryDefault
    {
        public int Id { set; get; }
        public string Title { set; get; }
        public string Description { set; get; }
        public DateTime CreatedAt { set; get; }
        public bool IsDeleted { set; get; }
    }
}
