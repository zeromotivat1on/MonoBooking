using System;

namespace Booking.BusinessLogic.ContractModels
{
    public class CategoryContract
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime CreatedAt { get; set; }
        public bool IsDeleted { get; set; }
    }
}