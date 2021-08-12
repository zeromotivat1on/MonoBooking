using System;
using System.Data;
using System.Threading.Tasks;
using Booking.DataAccess.Configuration;
using Booking.DataAccess.Interfaces;
using Booking.DataAccess.Models;
using Dapper;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Booking.DataAccess.Resources.Property;

namespace Booking.DataAccess.Repositories
{
    public class PropertyRepository : BaseRepository, IPropertyRepository
    {
        private const string errorCreation = "Creating of property was failed.";
        private const string logParameters = "Creating of property with such parameters: {0}.";
        private readonly ILogger logger;

        public PropertyRepository(IOptions<DbConfiguration> configuration, ILogger<PropertyRepository> logger) : base(configuration)
        {
            this.logger = logger;
        }

        public async Task<int> CreateAsync(Property property)
        {
            try
            {
                using (var connection = CreateConnection())
                {
                    DynamicParameters parameters = new DynamicParameters();
                    parameters.Add("Name", property.Name, DbType.String);
                    parameters.Add("ValueType", property.ValueType, DbType.Int32);
                    parameters.Add("Value", property.Value, DbType.String);
                    parameters.Add("Status", property.Status, DbType.Int32);
                    parameters.Add("IsDeleted", property.IsDeleted, DbType.Boolean);
                    parameters.Add("CreationDate", property.CreationDate, DbType.DateTime);
                    parameters.Add("LastModifiedDate", property.LastModifiedDate, DbType.DateTime);
                    logger.LogInformation(logParameters, parameters);
                    return await connection.QuerySingleAsync<int>(Queries.CreatePropertyQuery, property);
                }
            }
            catch(Exception)
            {
                logger.LogError(errorCreation);
                return -1;
            }
        }
    }
}
