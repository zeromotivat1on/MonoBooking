using System.Threading.Tasks;
using Booking.DataAccess.Models;

namespace Booking.DataAccess.Interfaces
{
    public interface IRecordRepository
    {
        Task<int> CreateAsync(Record record);
    }
}
