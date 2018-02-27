using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Web.Api.StartupExtensions
{
    public static class AddCustomisedAuthenticationExtension
    {
        public static AuthenticationBuilder AddCustomisedAuthentication(this IServiceCollection services, IConfiguration configuration)
        {
            return services
                .AddAuthentication(options =>
                {
                    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                })
                .AddJwtBearer(options =>
                {
                    options.Audience = configuration["Authentication:ApiName"];
                    options.Authority = configuration["Authentication:AuthorityUri"];
                    options.RequireHttpsMetadata = configuration.GetValue<bool>("Authentication:RequireHttpsMetadata");
                });
        }
    }
}
