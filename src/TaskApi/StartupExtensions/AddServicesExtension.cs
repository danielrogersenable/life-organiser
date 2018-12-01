using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using TaskApi.Services;
using TaskApi.Services.Interfaces;

namespace TaskApi.StartupExtensions
{
    public static class AddServicesExtension
    {
        public static void AddServices(this IServiceCollection services)
        {
            if (services == null)
            {
                throw new ArgumentNullException(nameof(services));
            }

            services.AddScoped<ITasksService, TasksService>();
            services.AddScoped<IDateTimeService, DateTimeService>();
            services.AddScoped<IModelMappingService, ModelMappingService>();
            services.AddScoped<ITaskTypesService, TaskTypesService>();
            services.AddScoped<IUserManagerService, UserManagerService>();
        }
    }
}
