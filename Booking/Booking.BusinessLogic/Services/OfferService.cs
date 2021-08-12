using System.Threading.Tasks;
using Booking.BusinessLogic.Interfaces;
using Booking.BusinessLogic.ContractModels;
using Booking.DataAccess.Models;
using Booking.DataAccess.Interfaces;
using Booking.Core.Enums;
using Booking.BusinessLogic.Extensions.Mappers;

namespace Booking.BusinessLogic.Services
{
    public class OfferService : IOfferService
    {
        private readonly IOfferRepository offerRepository;

        public OfferService(IOfferRepository offerRepository)
        {
            this.offerRepository = offerRepository;
        }

        public Task<int> CreateOfferAsync(OfferContract offerContract)
        {
            Offer offer = offerContract.ToDataModel();

            return offerRepository.CreateAsync(offer);
                
        }

        public Task<int> DeleteOfferAsync(int offerId)
        {
            return offerRepository.DeleteAsync(offerId);
        }

        public async Task<OfferContract> GetOfferById(int offerId)
        {
            Offer offer = await offerRepository.GetByIdAsync(offerId);

            return offer?.ToContractModel();
        }
    }
}
