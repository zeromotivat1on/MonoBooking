using Booking.BusinessLogic.ContractModels;
using Booking.Web.ViewModels.Record.Requests;

namespace Booking.Web.Extensions.Mappers
{
    public static class RecordMapperExtension
    {
        public static RecordContract ToContractModel(this RecordRequestCreate request)
        {
            return request is null ?
            null :
            new RecordContract()
            {
                Date = request.Date,
                Status = request.Status,
                CreatedDate = request.CreatedDate,
                LastModifiedDate = request.LastModifiedDate,
                Deleted = request.Deleted
            };
        }
    }
}
