using System;
using System.Threading.Tasks;
using Booking.DataAccess.Interfaces;
using Booking.DataAccess.Models;
using Dapper;
using System.Data;
using Microsoft.Extensions.Options;
using Booking.DataAccess.Configuration;
using Booking.DataAccess.Resources.Offer;

namespace Booking.DataAccess.Repositories
{
    public class OfferRepository : BaseRepository, IOfferRepository
    {
        public OfferRepository(IOptions<DbConfiguration> configuration) : base(configuration)
        {

        }

        public async Task<int> CreateAsync(Offer offer)
        {
            try
            {
                using (var connection = CreateConnection())
                {
                    DynamicParameters parameters = new DynamicParameters();
                    parameters.Add("Description", offer.Description, DbType.String);
                    parameters.Add("Status", offer.Status, DbType.Int32);
                    parameters.Add("Title", offer.Title, DbType.String);
                    parameters.Add("SlotPrice", offer.SlotPrice, DbType.Decimal);
                    parameters.Add("SlotTime", offer.SlotTime, DbType.Time);
                    parameters.Add("Image", offer.Image, DbType.String);
                    parameters.Add("Mark", (decimal)offer.Mark, DbType.Decimal);

                    return await connection.QuerySingleAsync<int>(Queries.CreateOfferQuery, parameters);
                }
            }
            catch (Exception)
            {
                return -1;
            }
        }

        public async Task<int> DeleteAsync(int offerId)
        {
            try
            {
                using (var connection = CreateConnection())
                {
                    var parameters = new DynamicParameters();
                    parameters.Add("Id", offerId, DbType.Int32);
                    return await connection.QuerySingleAsync<int>(Queries.DeleteOfferQuery, parameters);
                }
            }
            catch (Exception)
            {
                return 0;
            }
        }

        public async Task<Offer> GetByIdAsync(int offerId)
        {
            try
            {
                using (var connection = CreateConnection())
                {
                    DynamicParameters parameters = new DynamicParameters();
                    parameters.Add("Id", offerId, DbType.Int32);

                    return await connection.QuerySingleAsync<Offer>(Queries.GetOfferByIdQuery, parameters);
                }
            }
            catch (Exception)
            {
                return null;
            }
        }
    }
}
