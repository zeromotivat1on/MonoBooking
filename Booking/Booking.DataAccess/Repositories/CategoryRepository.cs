using System;
using System.Threading.Tasks;
using Booking.DataAccess.Models;
using Booking.DataAccess.Interfaces;
using Dapper;
using System.Data;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Booking.DataAccess.Configuration;
using Booking.DataAccess.Resources.Category;

namespace Booking.DataAccess.Repositories
{
    public class CategoryRepository : BaseRepository, ICategoryRepository
    {
        private readonly ILogger logger;

        public CategoryRepository(ILogger<CategoryRepository> logger, IOptions<DbConfiguration> configuration) : base(configuration)
        {
            this.logger = logger;
        }

        public async Task<int> CreateAsync(Category category) 
        {
            try
            {
                using (var connection = CreateConnection())
                {
                    DynamicParameters parameters = new DynamicParameters();
                    parameters.Add("Title", category.Title, DbType.String);
                    parameters.Add("Description", category.Description, DbType.String);
                    parameters.Add("CreatedAt", category.CreatedAt, DbType.DateTime);
                    parameters.Add("IsDeleted", category.IsDeleted, DbType.Boolean);
                    logger.LogInformation($"Creating of category with such parameters: " +
                        $"\nTitle:      \t{category.Title}" +
                        $"\nDescription:\t{category.Description}" +
                        $"\nCreatedAt:  \t{category.CreatedAt}" +
                        $"\nIsDeleted:  \t{category.IsDeleted}.");
                    return await connection.QuerySingleAsync<int>(Queries.CreateCategoryQuery, parameters);

                }
            }
            catch(Exception error) 
            {
                logger.LogError("Creating of category was failed. Error: {}", error.Message);
                return -1;
            }
        }
        public async Task<Category> GetCategoryByIdAsync(int id)
        {
            try
            {
                using (var connection = CreateConnection())
                {
                    DynamicParameters parameters = new DynamicParameters();
                    parameters.Add("Id", id, DbType.Int32);
                    logger.LogInformation("Trying to get category with id {}", id);
                    return await connection.QuerySingleAsync<Category>(Queries.GetCategoryByIdQuery, parameters);
                }
            }
            catch
            {
                logger.LogError("There isn't category with id {}.", id);
                return null;
            }
        }
    }
}