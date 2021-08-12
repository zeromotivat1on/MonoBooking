using Booking.BusinessLogic.ContractModels;
using Booking.Web.ViewModels.Category.Requests;
using Booking.Web.ViewModels.Category.Response;

namespace Booking.Web.Extensions.Mappers
{
    public static class CategoryMapperExtension
    {
        public static CategoryContract ToContractModel(this CategoryRequestCreate request)
        {
            return request == null ?
            null :
            new CategoryContract()
            {
                Description = request.Description,
                Title = request.Title,
                CreatedAt = request.CreatedAt,
                IsDeleted = request.IsDeleted
            };
        }

        public static ResponseCategoryDefault ToDefaultViewModel (this CategoryContract categoryContract)
        {
            return categoryContract == null ?
            null :
            new ResponseCategoryDefault
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