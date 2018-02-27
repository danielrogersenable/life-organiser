using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Authorization;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Web.Api.StartupExtensions
{
    public static class AddCustomisedMvcExtension
    {
        public static IMvcBuilder AddCustomisedMvc(this IServiceCollection services, IConfiguration configuration)
        {
            return services.AddMvc(options =>
            {
                ConfigureCacheFilter(options.Filters);
                ConfigureGloablAuthFilter(options.Filters, configuration);
            });
        }

        private static void ConfigureCacheFilter(FilterCollection filters)
        {
            var cacheFilter = new ResponseCacheAttribute
            {
                Duration = 0,
                Location = ResponseCacheLocation.None
            };

            filters.Add(cacheFilter);
        }

        private static void ConfigureGloablAuthFilter(FilterCollection filters, IConfiguration configuration)
        {
            var policy = new AuthorizationPolicyBuilder()
                .RequireClaim("scope", configuration["Authentication:AccessScope"])
                .Build();

            var filter = new AuthorizeFilter(policy);

            filters.Add(filter);
        }
    }
}
