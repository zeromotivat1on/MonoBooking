using System.Threading.Tasks;
using Booking.DataAccess.Models;

namespace Booking.DataAccess.Interfaces
{
    public interface IPropertyRepository
    {
        Task<int> CreateAsync(Property property);
    }
}