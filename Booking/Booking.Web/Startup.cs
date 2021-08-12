using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Booking.BusinessLogic.Interfaces;
using Booking.BusinessLogic.Services;
using Booking.DataAccess.Interfaces;
using Booking.DataAccess.Repositories;
using Booking.Core.Utils;
using Booking.DataAccess.Configuration;
using FluentValidation.AspNetCore;
using FluentValidation;
using Booking.Web.Extensions.Validators;
using Booking.Web.ViewModels.Offer.Requests;
using Booking.Web.ViewModels.Company.Requests;
using Booking.Web.ViewModels.Property.Request;
using Booking.Web.ViewModels.Category.Requests;
using Booking.Web.ViewModels.Record.Requests;
using Microsoft.Extensions.Logging;

namespace Booking.Web
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public void AddRecord(IServiceCollection services)
        {
            services.AddScoped<IRecordRepository, RecordRepository>();
            services.AddScoped<IRecordService, RecordService>();
            services.AddTransient<IValidator<RecordRequestCreate>, RecordValidatorCreate>();
        }

        public void AddCompany(IServiceCollection services)
        {
            services.AddScoped<ICompanyRepository, CompanyRepository>();
            services.AddScoped<ICompanyService, CompanyService>();
            services.AddTransient<IValidator<CompanyRequestCreate>, CompanyValidatorCreate>();
            services.AddTransient<IValidator<CompanyRequestUpdate>, CompanyValidatorUpdate>();
        }

        public void AddOffer(IServiceCollection services)
        {
            services.AddScoped<IOfferRepository, OfferRepository>();
            services.AddScoped<IOfferService, OfferService>();
            services.AddTransient<IValidator<OfferRequestCreate>, OfferValidatorCreate>();
        }

        public void AddCategory(IServiceCollection services)
        {
            services.AddScoped<ICategoryRepository, CategoryRepository>();
            services.AddScoped<ICategoryService, CategoryService>();
            services.AddTransient<IValidator<CategoryRequestCreate>, CategoryValidatorCreate>();
        }

        public void AddProperty(IServiceCollection services)
        {
            services.AddScoped<IPropertyRepository, PropertyRepository>();
            services.AddScoped<IPropertyService, PropertyService>();
            services.AddTransient<IValidator<RequestPropertyCreate>, PropertyValidatorCreate>();
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            //Configurations
            services.AddControllers()
                .AddFluentValidation()
                .AddJsonOptions(options =>
                {
                    options.JsonSerializerOptions.Converters.Add(new TimeSpanConverter());
                });

            services.Configure<DbConfiguration>(Configuration.GetSection(nameof(DbConfiguration)));
            
            //Services
            AddOffer(services);
            AddCompany(services);
            AddRecord(services);
            AddCategory(services);
            AddProperty(services);

            // In production, the React files will be served from this directory
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/build";
            });
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");

                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseSpaStaticFiles();

            app.UseRouting();
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller}/{action=Index}/{id?}");
            });

            app.UseSpa(spa =>
            {
                spa.Options.SourcePath = "ClientApp";

                if (env.IsDevelopment())
                {
                    spa.UseReactDevelopmentServer(npmScript: "start");
                }
            });
        }
    }
}
