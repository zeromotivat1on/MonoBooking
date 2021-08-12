using Booking.DataAccess.Models;
using Booking.BusinessLogic.ContractModels;

namespace Booking.BusinessLogic.Extensions.Mappers
{
    public static class CategoryMapper
    {
        public static CategoryContract ToContractModel(this Category category) 
        {
            return category == null ?
            null :
            new CategoryContract
            {
                Id = category.Id,
                Title = category.Title,
                Description = category.Description,
                CreatedAt = category.CreatedAt,
                IsDeleted = category.IsDeleted
            };
        }
        public static Category ToDataModel(this CategoryContract categoryContract)
        {
            return categoryContract == null ?
            null :
            new Category
            {
                Id = categoryContract.Id,
                Title = categoryContract.Title,
                Description = categoryContract.Description,
                CreatedAt = categoryContract.CreatedAt,
                IsDeleted = categoryContract.IsDeleted
            };
        }
    }
}
