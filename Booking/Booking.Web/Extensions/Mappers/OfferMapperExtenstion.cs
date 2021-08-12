using Booking.BusinessLogic.ContractModels;
using Booking.Web.ViewModels.Offer.Requests;
using Booking.Web.ViewModels.Offer.Responses;

namespace Booking.Web.Extensions.Mappers
{
    public static class OfferMapperExtension
    {
        public static OfferContract ToContractModel(this OfferRequestCreate request)
        {
            return request == null ?
            null :
            new OfferContract()
            {
                Description = request.Description,
                Status = request.Status,
                Title = request.Title,
                SlotPrice = request.SlotPrice,
                SlotTime = request.SlotTime,
                Image = request.Image,
                Mark = request.Mark
            };
        }

        public static ResponseOfferDefault ToDefaultViewModel(this OfferContract offer)
        {
            return offer == null ?
            null :
            new ResponseOfferDefault()
            {
                Id = offer.Id,
                Description = offer.Description,
                Status = offer.Status,
                Title = offer.Title,
                SlotPrice = offer.SlotPrice,
                SlotTime = offer.SlotTime,
                Image = offer.Image,
                Mark = offer.Mark
            };
        }
    }
}
