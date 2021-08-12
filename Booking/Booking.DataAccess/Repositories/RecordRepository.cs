using System;
using System.Threading.Tasks;
using Booking.DataAccess.Interfaces;
using Booking.DataAccess.Models;
using Dapper;
using Microsoft.Extensions.Options;
using Booking.DataAccess.Configuration;
using Microsoft.Extensions.Logging;
using Booking.DataAccess.Resources.Record;

namespace Booking.DataAccess.Repositories
{
    public class RecordRepository : BaseRepository, IRecordRepository
    {
        private const string errorCreation = "Creating of record was failed.";
        private const string logParameters = "Creating of property with such parameters: {0}.";
        private const int isNotSuccessful = -1;
        private readonly ILogger logger;

        public RecordRepository(IOptions<DbConfiguration> configuration, ILogger<RecordRepository> logger) : base(configuration)
        {
            this.logger = logger;
        }

        public RecordRepository(IOptions<DbConfiguration> configuration) : base(configuration)
        {

        }

        public async Task<int> CreateAsync(Record record)
        {
            try
            {
                using(var connection = CreateConnection())
                {
                    DynamicParameters parameters = new DynamicParameters();
                    parameters.Add("Date", record.Date, System.Data.DbType.DateTime);
                    parameters.Add("Status", record.Status, System.Data.DbType.Int32);
                    parameters.Add("Deleted", record.Deleted, System.Data.DbType.Boolean);
                    parameters.Add("CreatedDate", record.CreatedDate, System.Data.DbType.DateTime);
                    parameters.Add("LastModifiedDate", record.LastModifiedDate, System.Data.DbType.DateTime);
                    logger.LogInformation(logParameters, parameters);

                    return await connection.QuerySingleAsync<int>(Queries.CreateRecordQuery, parameters);
                }
            }
            catch(Exception)
            {
                logger.LogError(errorCreation);
                return isNotSuccessful;
            }
        }
    }
}
