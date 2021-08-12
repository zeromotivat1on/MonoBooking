using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Booking.BusinessLogic.ContractModels;
using Booking.BusinessLogic.Interfaces;
using Booking.Web.Extensions.Mappers;
using Booking.Web.ViewModels.Category.Requests;
using Booking.Web.ViewModels.Category.Response;
using Microsoft.Extensions.Logging;

namespace Booking.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {
        private readonly ICategoryService categoryService;
        private readonly ILogger logger;

        public CategoriesController(ICategoryService categoryService, ILogger<CategoriesController> logger)
        {
            this.categoryService = categoryService;
            this.logger = logger;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get([FromRoute]int id)
        {
            CategoryContract categoryContract = await categoryService.GetCategoryById(id);

            if (categoryContract == null) 
            {
                logger.LogError("Category with id {0} wasn't found!", id);
                return NotFound();
            }
            ResponseCategoryDefault response = categoryContract.ToDefaultViewModel();
            logger.LogInformation("Everything is ok with {0}! ;)", id);
            return Ok(response);
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] CategoryRequestCreate request)
        {
            CategoryContract categoryContract = request.ToContractModel();
            int result = await this.categoryService.CreateCategoryAsync(categoryContract);

            if(result < 0)
            {
                logger.LogInformation("The server was unable to process content instructions.\nResult: {0}", result);
                return BadRequest("The server was unable to process content instructions");
            }
            logger.LogInformation("Creating of category was successful!");
            return CreatedAtAction(nameof(Get), new { id = result }, null);
        }
    }
}