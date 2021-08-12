using Booking.DataAccess.Models;
using Booking.BusinessLogic.ContractModels;

namespace Booking.BusinessLogic.Extensions.Mappers
{
    public static class OfferMapper
    {
        public static Offer ToDataModel(this OfferContract offerContract)
        {
            return offerContract == null ?
            null :
            new Offer()
            {
                Id = offerContract.Id,
                Description = offerContract.Description,
                Title = offerContract.Title,
                SlotPrice = offerContract.SlotPrice,
                SlotTime = offerContract.SlotTime,
                Image = offerContract.Image,
                Status = offerContract.Status,
                Mark = offerContract.Mark
            };
        }

        public static OfferContract ToContractModel(this Offer offer)
        {
            return offer == null ?
            null :
            new OfferContract()
            {
                Id = offer.Id,
                Description = offer.Description,
                Title = offer.Title,
                SlotPrice = offer.SlotPrice,
                SlotTime = offer.SlotTime,
                Image = offer.Image,
                Status = offer.Status,
                Mark = offer.Mark
            };
        }
    }
}
