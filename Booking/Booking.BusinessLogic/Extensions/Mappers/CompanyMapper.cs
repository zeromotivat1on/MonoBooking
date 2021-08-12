using Booking.DataAccess.Models;
using Booking.BusinessLogic.ContractModels;

namespace Booking.BusinessLogic.Extensions.Mappers
{
    public static class CompanyMapper
    {
        public static Company ToDataModel(this CompanyContract contract)
        {
            return contract == null ?
                null :
                new Company()
                {
                    Id = contract.Id,
                    Name = contract.Name,
                    Description = contract.Description,
                    DaysOnSite = contract.DaysOnSite,
                    Owner = contract.Owner,
                    Status = contract.Status,
                    FoundationDate = contract.FoundationDate,
                    Deleted = contract.Deleted,
                    LastModifiedDate = contract.LastModifiedDate
                };
        }

        public static CompanyContract ToContractModel(this Company company)
        {
            return company == null ?
                null :
                new CompanyContract()
                {
                    Id = company.Id,
                    Name = company.Name,
                    Description = company.Description,
                    DaysOnSite = company.DaysOnSite,
                    Owner = company.Owner,
                    Status = company.Status,
                    FoundationDate = company.FoundationDate,
                    Deleted = company.Deleted,
                    LastModifiedDate = company.LastModifiedDate
                };
        }
    }
}