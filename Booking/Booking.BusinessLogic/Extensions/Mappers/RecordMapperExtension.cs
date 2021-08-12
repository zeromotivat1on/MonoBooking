using System;
using Booking.BusinessLogic.ContractModels;
using Booking.DataAccess.Models;

namespace Booking.BusinessLogic.Extensions.Mappers
{
    public static class RecordMapperExtension
    {
        public static Record ToDataModel(this RecordContract recordContract)
        {
            return recordContract is null ?
            null :
            new Record()
            {
                Id = recordContract.Id,
                Date = recordContract.Date,
                Status = recordContract.Status,
                Deleted = recordContract.Deleted,
                CreatedDate = recordContract.CreatedDate,
                LastModifiedDate = recordContract.LastModifiedDate
            };
        }
    }
}
