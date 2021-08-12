using System.Threading.Tasks;
using Booking.DataAccess.Models;

namespace Booking.DataAccess.Interfaces
{
    public interface ICategoryRepository
    {
        Task<int> CreateAsync(Category category);

        Task<Category> GetCategoryByIdAsync(int id);
    }
}