using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;
using System.Collections.Generic;
using System.Threading.Tasks;
using Booking.BusinessLogic.Interfaces;
using Booking.Web.ViewModels.Company.Requests;
using Booking.Web.ViewModels.Company.Responses;
using Booking.Web.Extensions.Mappers;
using Booking.Core.Enums;

namespace Booking.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CompanyController : ControllerBase
    {
        private readonly ICompanyService service;

        public CompanyController(ICompanyService service)
        {
            this.service = service;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var companyResponseList = new List<CompanyResponse>();
            var companyList = await this.service.GetAllAsync();
            foreach (var company in companyList)
            {
                companyResponseList.Add(company.ToResponseModel());
            }

            return Ok(companyResponseList);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById([FromRoute] int id)
        {
            var contractCompany = await service.GetByIdAsync(id);

            if (contractCompany != null)
            {
                var response = contractCompany.ToResponseModel();
                return Ok(response);
            }

            return NotFound(new { NotFoundError = $"Not found Company with id: {id}" });
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] CompanyRequestCreate createCompanyRequest)
        {
            var contractCompany = CompanyMapper.ToContractModel(createCompanyRequest);
            var response = await this.service.CreateAsync(contractCompany);

            if (!Enum.IsDefined(typeof(CompanyExceptions), response))
            {
                return CreatedAtAction(nameof(GetById), new { id = response });
            }

            return this.TryCatchResponseError(response);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] CompanyRequestUpdate updateCompanyRequest)
        {
            var contractCompany = CompanyMapper.ToContractModel(updateCompanyRequest);
            var responseContract = await this.service.UpdateAsync(id, contractCompany);
            var response = responseContract.ToResponseModel();
            if(response != null)
            {
                return Ok(response);
            }

            return NotFound(new { NotFoundError = $"Not found Company with id: {id}" });
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var response = await this.service.DeleteAsync(id);

            if(response == 1) // response == true (deleted or not)
            {
                return Ok(new { Success = $"Company has been deleted with id: {id}" });
            }

            return NotFound(new { NotFoundError = $"Company does not exist with id: {id}" });
        }

        private IActionResult TryCatchResponseError(int response)
        {
            switch(response)
            {
                case (int)CompanyExceptions.DatesViolation:
                    return BadRequest(new { error = "(Last Modified Date) must be less than (Foundation Date)" });
                case (int)CompanyExceptions.DaysOnSiteViolation:
                    return BadRequest(new { error = "(Days On Site) must be less than difference between (Last Modified Date) and (Foundation Date)" });
                case (int)CompanyExceptions.RespositoryFail:
                    return UnprocessableEntity(new { errorCode = response, message = "Server has faced repository error"});
                default:
                    return UnprocessableEntity(new { errorCode = response });
            }
        }
    }
}
