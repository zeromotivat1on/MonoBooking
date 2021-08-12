using System.Threading.Tasks;
using Booking.BusinessLogic.ContractModels;

namespace Booking.BusinessLogic.Interfaces
{
    public interface ICategoryService
    {
        Task<int> CreateCategoryAsync(CategoryContract category);

        Task<CategoryContract> GetCategoryById(int id);
    }
}