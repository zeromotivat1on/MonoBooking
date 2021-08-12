using System;
using System.Linq;
using System.Collections.Generic;
using System.Threading.Tasks;
using Booking.BusinessLogic.ContractModels;
using Booking.BusinessLogic.Interfaces;
using Booking.DataAccess.Interfaces;
using Booking.BusinessLogic.Extensions.Mappers;
using Booking.Core.Enums;

namespace Booking.BusinessLogic.Services
{
    public class CompanyService : ICompanyService
    {
        private readonly ICompanyRepository repository;

        public CompanyService(ICompanyRepository repository)
        {
            this.repository = repository;
        }

        public async Task<IEnumerable<CompanyContract>> GetAllAsync()
        {
            var companyContractList = new List<CompanyContract>();
            var responseList = await repository.GetAllAsync();
            foreach(var company in responseList)
            {
                companyContractList.Add(company.ToContractModel());
            }

            return companyContractList.ToList();
        }

        public async Task<CompanyContract> GetByIdAsync(int id)
        {
            var company = await repository.GetByIdAsync(id);
            return company.ToContractModel();
        }

        public async Task<int> CreateAsync(CompanyContract companyContract)
        {
            this.ValidateCreateContractFields(companyContract); // replaces default data type values
            if (companyContract.LastModifiedDate < companyContract.FoundationDate)
            {
                return (int)CompanyExceptions.DatesViolation;
            }

            // @int, Difference in days between (Last Modified Date) and (Foundation Date)
            var dateDiff = (companyContract.LastModifiedDate.Date - companyContract.FoundationDate.Date).Days;
            if (companyContract.DaysOnSite > dateDiff && companyContract.DaysOnSite != 1)
            {
                return (int)CompanyExceptions.DaysOnSiteViolation;
            }

            var company = companyContract.ToDataModel();
            return await this.repository.CreateAsync(company);
        }

        public async Task<CompanyContract> UpdateAsync(int id, CompanyContract companyContract)
        {
            this.ValidateUpdateContractFields(companyContract);

            var tryGetCompany = await this.GetByIdAsync(id);
            if (tryGetCompany == null)
            {
                return null;
            }

            var company = companyContract.ToDataModel();
            var response = await repository.UpdateAsync(id, company);
            return response.ToContractModel();
        }

        public async Task<int> DeleteAsync(int id)
        {
            return await this.repository.DeleteAsync(id);
        }

        private void ValidateCreateContractFields(CompanyContract companyContract)
        {
            var currentDate = DateTime.Now;

            if (companyContract.FoundationDate == default)
            {
                companyContract.FoundationDate = currentDate;
            }

            if (companyContract.LastModifiedDate == default)
            {
                companyContract.LastModifiedDate = currentDate;
            }

            if (companyContract.DaysOnSite == default)
            {
                companyContract.DaysOnSite = 1;
            }
        }
        private void ValidateUpdateContractFields(CompanyContract companyContract)
        {
            var currentDate = DateTime.Now;

            if (companyContract.LastModifiedDate == default)
            {
                companyContract.LastModifiedDate = currentDate;
            }
        }
    }
}
