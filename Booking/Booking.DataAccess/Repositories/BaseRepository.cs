using System.Data;
using Npgsql;
using Booking.DataAccess.Configuration;
using Microsoft.Extensions.Options;

namespace Booking.DataAccess.Repositories
{
    public abstract class BaseRepository
    {
        private readonly DbConfiguration configuration;

        public BaseRepository(IOptions<DbConfiguration> configuration)
        {
            this.configuration = configuration.Value;
        }

        protected IDbConnection CreateConnection()
        {
            return new NpgsqlConnection(configuration.ConnectionString);
        }
    }
}
