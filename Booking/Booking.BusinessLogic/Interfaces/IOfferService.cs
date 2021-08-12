using System.Threading.Tasks;
using Booking.BusinessLogic.ContractModels;

namespace Booking.BusinessLogic.Interfaces
{
    public interface IOfferService
    {
        Task<int> CreateOfferAsync(OfferContract offer);
        Task<OfferContract> GetOfferById(int offerId);
        Task<int> DeleteOfferAsync(int offerId);
    }
}
