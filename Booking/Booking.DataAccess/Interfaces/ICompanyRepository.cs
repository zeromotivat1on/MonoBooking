using System.Collections.Generic;
using System.Threading.Tasks;
using Booking.DataAccess.Models;

namespace Booking.DataAccess.Interfaces
{
    public interface ICompanyRepository
    {
        Task<IEnumerable<Company>> GetAllAsync();
        Task<Company> GetByIdAsync(int id);
        Task<int> CreateAsync(Company company);
        Task<Company> UpdateAsync(int id, Company company);
        Task<int> DeleteAsync(int id);
    }
}
