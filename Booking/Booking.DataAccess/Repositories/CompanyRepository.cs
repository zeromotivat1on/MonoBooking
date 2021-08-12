using System;
using System.Data;
using System.Text;
using System.Linq;
using System.Collections.Generic;
using System.Threading.Tasks;
using Dapper;
using Booking.DataAccess.Interfaces;
using Booking.DataAccess.Models;
using Booking.DataAccess.Configuration;
using Microsoft.Extensions.Options;
using Microsoft.Extensions.Logging;
using Booking.DataAccess.Resources.Company;
using Booking.Core.Enums;

namespace Booking.DataAccess.Repositories
{
    public class CompanyRepository : BaseRepository, ICompanyRepository
    {
        private readonly ILogger logger;

        public CompanyRepository(IOptions<DbConfiguration> configuration, ILogger<CompanyRepository> logger) : base(configuration) 
        {
            this.logger = logger;
        }

        public async Task<IEnumerable<Company>> GetAllAsync()
        {
            try
            {
                this.logInfo(null, "Getting list of companies");

                using (var connection = CreateConnection())
                {
                    var response = await connection.QueryAsync<Company>(Queries.GetCompanyAllQuery);
                    return response.ToList();
                }
            }
            catch (Exception ex)
            {
                this.logger.LogError("Getting list of companies was failed.\n\t\tError: {0}", ex);
                return null;
            }
        }

        public async Task<Company> GetByIdAsync(int id)
        {
            try
            {
                var parameters = new DynamicParameters();
                parameters.Add(Constants.Parameters.id, id, DbType.Int32);

                this.logInfo(parameters, "Getting company by ID with parameters:");

                using (var connection = CreateConnection())
                {
                    return await connection.QuerySingleAsync<Company>(Queries.GetCompanyByIdQuery, parameters);
                }
            }
            catch (Exception ex)
            {
                this.logger.LogError("Getting company by ID:{0} was failed.\n\t\tError: {1}", id, ex);
                return null;
            }
        }

        public async Task<int> CreateAsync(Company company)
        {
            try
            {
                var parameters = new DynamicParameters();
                parameters.Add(Constants.Parameters.name, company.Name, DbType.String);
                parameters.Add(Constants.Parameters.description, company.Description, DbType.String);
                parameters.Add(Constants.Parameters.daysOnSite, company.DaysOnSite, DbType.Int32);
                parameters.Add(Constants.Parameters.owner, company.Owner, DbType.String);
                parameters.Add(Constants.Parameters.status, company.Status, DbType.Int32);
                parameters.Add(Constants.Parameters.foundationDate, company.FoundationDate, DbType.DateTime);
                parameters.Add(Constants.Parameters.deleted, company.Deleted, DbType.Boolean);
                parameters.Add(Constants.Parameters.lastModifiedDate, company.LastModifiedDate, DbType.DateTime);

              
                this.logInfo(parameters, "Creating company with parameters:");

                using (var connection = CreateConnection())
                {
                    return await connection.QuerySingleAsync<int>(Queries.CreateCompanyQuery, parameters);
                }
            }
            catch(Exception ex)
            {
                this.logger.LogError("Creating company was failed.\n\t\tError: {0}", ex);
                return (int)CompanyExceptions.RespositoryFail;
            }
        }

        public async Task<Company> UpdateAsync(int id, Company company)
        {
            try
            {
                var parameters = new DynamicParameters();

                parameters.Add(Constants.Parameters.id, id, DbType.Int32);
                parameters.Add(Constants.Parameters.name, company.Name, DbType.String);
                parameters.Add(Constants.Parameters.description, company.Description, DbType.String);
                parameters.Add(Constants.Parameters.daysOnSite, company.DaysOnSite, DbType.Int32);
                parameters.Add(Constants.Parameters.owner, company.Owner, DbType.String);
                parameters.Add(Constants.Parameters.status, company.Status, DbType.Int32);
                parameters.Add(Constants.Parameters.foundationDate, company.FoundationDate, DbType.DateTime);
                parameters.Add(Constants.Parameters.deleted, company.Deleted, DbType.Boolean);
                parameters.Add(Constants.Parameters.lastModifiedDate, company.LastModifiedDate, DbType.DateTime);

                this.logInfo(parameters, $"Updating company with parameters:");

                using (var connection = CreateConnection())
                {
                    var res = await connection.QuerySingleAsync<Company>(Queries.UpdateCompanyQuery, parameters);
                    return res;
                }
            }
            catch (Exception ex)
            {
                this.logger.LogError("Updating company by ID:{0} was failed.\n\t\tError: {1}", id, ex);
                return null;
            }
        }

        public async Task<int> DeleteAsync(int id)
        {
            try
            {
                var parameters = new DynamicParameters();
                parameters.Add(Constants.Parameters.id, id, DbType.Int32);

                this.logInfo(parameters, "Deleting company by ID with parameters:");

                using (var connection = CreateConnection())
                {
                    return await connection.QuerySingleAsync<int>(Queries.DeleteCompanyQuery, parameters);
                }
            }
            catch (Exception ex)
            {
                this.logger.LogError("Deleting company by ID:{0} was failed.\n\t\tError: {1}", id, ex);
                return (int)CompanyExceptions.RespositoryFail;
            }
        }

        private void logInfo(DynamicParameters parameters = null, string initialLine = "Initial line wasn't specified")
        {
            var sbLog = new StringBuilder();
            sbLog.Append(initialLine);

            if (parameters != null)
            {
                var parameterNames = parameters.ParameterNames;
                foreach (var param in parameterNames)
                {
                    sbLog.Append($"\n\t\t{param}: {parameters.Get<dynamic>(param)}");
                }
            }

            this.logger.LogInformation(sbLog.ToString());
        }

        private class Constants
        {
            public class Parameters
            {
                public const string id = "Id";
                public const string name = "Name";
                public const string description = "Description";
                public const string daysOnSite = "DaysOnSite";
                public const string owner = "Owner";
                public const string status = "Status";
                public const string foundationDate = "FoundationDate";
                public const string deleted = "Deleted";
                public const string lastModifiedDate = "LastModifiedDate";
            }
        }
    }
}
