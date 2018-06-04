using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using TaskApi.Queries;
using TaskApi.Queries.Interfaces;
using TaskApi.Services;
using TaskApi.Services.Interfaces;

namespace TaskApi.StartupExtensions
{
    public static class AddQueriesExtension
    {
        public static void AddQueries(this IServiceCollection services)
        {
            if (services == null)
            {
                throw new ArgumentNullException(nameof(services));
            }

            services.AddScoped<ITasksQueries, TasksQueries>();
        }
    }
}
