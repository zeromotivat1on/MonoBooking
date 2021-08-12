using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Booking.BusinessLogic.ContractModels;
using Booking.BusinessLogic.Interfaces;
using Booking.Web.ViewModels.Offer.Requests;
using Booking.Web.ViewModels.Offer.Responses;
using Booking.Web.Extensions.Mappers;

namespace Booking.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OffersController : ControllerBase
    {
        private readonly IOfferService offerService;

        public OffersController(IOfferService offerService)
        {
            this.offerService = offerService;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById([FromRoute] int id)
        {
            OfferContract offerContract = await offerService.GetOfferById(id);
            
            if(offerContract is null)
            {
                return NotFound(id);
            }

            ResponseOfferDefault response = offerContract.ToDefaultViewModel();

            return Ok(response);
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] OfferRequestCreate request)
        {
            OfferContract offerContract = request.ToContractModel();
            int result = await this.offerService.CreateOfferAsync(offerContract);

            if(result < 0)
            {
                return BadRequest("The server was unable to process content instructions");
            }

            return CreatedAtAction(nameof(GetById), new { id = result }, null);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var response = await this.offerService.DeleteOfferAsync(id);

            if (response > 0)
            {
                return Ok(new { Success = $"Offer has been deleted with id: {id}" });
            }

            return NotFound(new { NotFoundError = $"Offer does not exist with id: {id}" });
        }


    }
}