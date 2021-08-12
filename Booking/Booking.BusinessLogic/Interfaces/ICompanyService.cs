using System.Collections.Generic;
using System.Threading.Tasks;
using Booking.BusinessLogic.ContractModels;

namespace Booking.BusinessLogic.Interfaces
{
    public interface ICompanyService
    {
        Task<IEnumerable<CompanyContract>> GetAllAsync();
        Task<CompanyContract> GetByIdAsync(int id);
        Task<int> CreateAsync(CompanyContract companyContract);
        Task<CompanyContract> UpdateAsync(int id, CompanyContract companyContract);
        Task<int> DeleteAsync(int id);
    }
}
