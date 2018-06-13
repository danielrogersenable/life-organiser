using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataModel;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace TaskApi.StartupExtensions
{
    public static class AddDatabaseExtension
    {
        public static void AddDatabase(this IServiceCollection services, IConfiguration configuration)
        {
            if (services == null)
            {
                throw new ArgumentNullException(nameof(services));
            }

            services
                .AddDbContext<AppDbContext>(options => options.UseSqlServer(configuration.GetConnectionString("AppDatabase")))
                .AddScoped<IAppDbContextFactory, AppDbContextFactory>();
        }
    }
}
