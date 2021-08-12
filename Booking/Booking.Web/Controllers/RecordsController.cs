using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Web;
using Booking.BusinessLogic.Interfaces;
using Booking.BusinessLogic.ContractModels;
using Booking.Web.ViewModels.Record.Requests;
using Booking.Web.Extensions.Mappers;
using Booking.Web.Extensions.Validators;

namespace Booking.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecordsController : ControllerBase
    {
        private readonly IRecordService recordService;

        public RecordsController(IRecordService recordService)
        {
            this.recordService = recordService;
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            return Ok(id);
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] RecordRequestCreate request)
        {
            RecordContract recordContract = request.ToContractModel();
            var result = await this.recordService.CreateRecordAsync(recordContract);

            if (result < 0)
            {
                return BadRequest("The server was unable to process content instructions");
            }

            return CreatedAtAction(nameof(Get), new { id = result }, null);
        }
    }
}
