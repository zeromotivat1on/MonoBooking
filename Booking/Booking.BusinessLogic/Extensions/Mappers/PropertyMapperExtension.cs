using Booking.DataAccess.Models;
using Booking.BusinessLogic.ContractModels;

namespace Booking.BusinessLogic.Extensions.Mappers
{
    public static class PropertyMapperExtension
    {
        public static Property ToDataModel(this PropertyContract propertyContract)
        {
            return propertyContract == null ?
            null :
            new Property()
            {
                Id = propertyContract.Id,
                Name = propertyContract.Name,
                ValueType = propertyContract.ValueType,
                Value = propertyContract.Value,
                Status = propertyContract.Status,
                IsDeleted = propertyContract.IsDeleted,
                CreationDate = propertyContract.CreationDate,
                LastModifiedDate = propertyContract.LastModifiedDate
            };
        }
    }
}
