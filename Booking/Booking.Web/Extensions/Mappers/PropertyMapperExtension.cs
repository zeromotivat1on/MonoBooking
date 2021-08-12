using Booking.BusinessLogic.ContractModels;
using Booking.Web.ViewModels.Property.Request;

namespace Booking.Web.Extensions.Mappers
{
    public static class PropertyMapperExtension
    {
        public static PropertyContract ToContractModel(this RequestPropertyCreate request)
        {
            return request == null ?
            null :
            new PropertyContract()
            {
                Name = request.Name,
                ValueType = request.ValueType,
                Value = request.Value,
                Status = request.Status,
                IsDeleted = request.IsDeleted,
                CreationDate = request.CreationDate,
                LastModifiedDate = request.LastModifiedDate
            };
        }
    }
}
