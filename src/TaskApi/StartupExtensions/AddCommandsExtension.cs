using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using TaskApi.Commands;
using TaskApi.Commands.Interfaces;

namespace TaskApi.StartupExtensions
{
    public static class AddCommandsExtension
    {
        public static void AddCommands(this IServiceCollection services)
        {
            if (services == null)
            {
                throw new ArgumentNullException(nameof(services));
            }

            services.AddScoped<ITasksCommands, TasksCommands>();
        }
    }
}
