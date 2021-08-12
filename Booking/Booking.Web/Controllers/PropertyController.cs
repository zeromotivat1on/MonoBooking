using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Booking.BusinessLogic.ContractModels;
using Booking.BusinessLogic.Interfaces;
using Booking.Web.ViewModels.Property.Request;
using Booking.Web.Extensions.Mappers;
using Booking.Web.Extensions.Validators;
using Microsoft.Extensions.Logging;

namespace Booking.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PropertyController : ControllerBase
    {
        private const string errorValidation = "Validation is failed: {0}";
        private const string errorCreateAsync = "The server was unable to process content instructions.\nResult: {0}";
        private readonly IPropertyService service;
        private readonly ILogger logger;

        public PropertyController(IPropertyService service, ILogger<PropertyController> logger)
        {
            this.service = service;
            this.logger = logger;
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] RequestPropertyCreate request)
        {
            PropertyContract propertyContract = request.ToContractModel();
            int result = await this.service.CreateAsync(propertyContract);

            if (result < 0)
            {
                logger.LogInformation(errorCreateAsync, result);
                return BadRequest(result);
            }

            return CreatedAtAction(nameof(Post), new { id = result }, null);
        }
    }
}
