using System.Threading.Tasks;
using Booking.DataAccess.Models;
using System.Collections.Generic;

namespace Booking.DataAccess.Interfaces
{
    public interface IOfferRepository
    {
        Task<int> CreateAsync(Offer offer);
        Task<Offer> GetByIdAsync(int offerId);
        Task<int> DeleteAsync(int offerId);
    }
}
