using Booking.BusinessLogic.ContractModels;
using Booking.Web.ViewModels.Company.Requests;
using Booking.Web.ViewModels.Company.Responses;

namespace Booking.Web.Extensions.Mappers
{
    public static class CompanyMapper
    {
        public static CompanyContract ToContractModel(this CompanyRequestCreate request)
        {
            return request == null ?
                null :
                new CompanyContract()
                {
                    Name = request.Name,
                    Description = request.Description,
                    DaysOnSite = request.DaysOnSite,
                    Owner = request.Owner,
                    Status = request.Status,
                    FoundationDate = request.FoundationDate,
                    Deleted = request.Deleted,
                    LastModifiedDate = request.LastModifiedDate
                };
        }

        public static CompanyContract ToContractModel(this CompanyRequestUpdate request)
        {
            return request == null ?
                null :
                new CompanyContract()
                {
                    Name = request.Name,
                    Description = request.Description,
                    DaysOnSite = request.DaysOnSite,
                    Owner = request.Owner,
                    Status = request.Status,
                    FoundationDate = request.FoundationDate,
                    Deleted = request.Deleted,
                    LastModifiedDate = request.LastModifiedDate
                };
        }

        public static CompanyResponse ToResponseModel(this CompanyContract contract)
        {
            return contract == null ?
                null :
                new CompanyResponse()
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
    }
}
