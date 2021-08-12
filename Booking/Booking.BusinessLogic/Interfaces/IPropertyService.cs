using System.Threading.Tasks;
using Booking.BusinessLogic.ContractModels;

namespace Booking.BusinessLogic.Interfaces
{
    public interface IPropertyService
    {
        Task<int> CreateAsync(PropertyContract property);
    }
}
