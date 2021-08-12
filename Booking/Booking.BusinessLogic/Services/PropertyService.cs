using System.Threading.Tasks;
using Booking.BusinessLogic.Interfaces;
using Booking.BusinessLogic.ContractModels;
using Booking.DataAccess.Models;
using Booking.DataAccess.Interfaces;
using Booking.BusinessLogic.Extensions.Mappers;

namespace Booking.BusinessLogic.Services
{
    public class PropertyService : IPropertyService
    {
        private readonly IPropertyRepository propertyRepository;

        public PropertyService(IPropertyRepository propertyRepository)
        {
            this.propertyRepository = propertyRepository;
        }

        public Task<int> CreateAsync(PropertyContract propertyContract)
        {
            Property property = propertyContract.ToDataModel();

            return propertyRepository.CreateAsync(property);

        }
    }
}
