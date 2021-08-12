using Booking.BusinessLogic.ContractModels;
using System.Threading.Tasks;

namespace Booking.BusinessLogic.Interfaces
{
    public interface IRecordService
    {
        Task<int> CreateRecordAsync(RecordContract record);
    }
}
