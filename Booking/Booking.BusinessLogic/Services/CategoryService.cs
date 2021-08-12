using System.Threading.Tasks;
using Booking.BusinessLogic.Interfaces;
using Booking.BusinessLogic.ContractModels;
using Booking.BusinessLogic.Extensions.Mappers;
using Booking.DataAccess.Models;
using Booking.DataAccess.Interfaces;

namespace Booking.BusinessLogic.Services
{
    public class CategoryService : ICategoryService
    {
        private readonly ICategoryRepository categoryRepository;

        public CategoryService(ICategoryRepository categoryRepository) 
        {
            this.categoryRepository = categoryRepository;
        }

        public Task<int> CreateCategoryAsync(CategoryContract categoryContract) 
        {
            Category category = categoryContract.ToDataModel();
            return categoryRepository.CreateAsync(category);
        }

        public async Task<CategoryContract> GetCategoryById(int id)
        {
            Category category = await categoryRepository.GetCategoryByIdAsync(id);
            return category?.ToContractModel();
        }
    }
}