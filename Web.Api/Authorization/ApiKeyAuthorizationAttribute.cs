using System;
using System.Net.Http.Headers;
using System.Security.Claims;
using System.Threading.Tasks;
using DataModel;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.EntityFrameworkCore;

namespace Web.Api.Authorization
{
    public class ApiKeyAuthorizationAttribute : Attribute, IAsyncAuthorizationFilter
    {
        public const string AuthenticationType = "CustomApiKeyAuth";
        private const string AuthorizationScheme = "bearer";
        private readonly IAppDbContextFactory _dbContextFactory;

        public ApiKeyAuthorizationAttribute(IAppDbContextFactory dbContextFactory)
        {
            _dbContextFactory = dbContextFactory ?? throw new ArgumentNullException(nameof(dbContextFactory));
        }

        public async Task OnAuthorizationAsync(AuthorizationFilterContext context)
        {
            if (AuthenticationHeaderValue.TryParse(
                context.HttpContext.Request.Headers["authorization"],
                out AuthenticationHeaderValue authorization))
            {
                if (string.Equals(authorization.Scheme, AuthorizationScheme, StringComparison.OrdinalIgnoreCase))
                {
                    if (!string.IsNullOrWhiteSpace(authorization.Parameter))
                    {
                            return;
                    }
                }
            }

            context.Result = new UnauthorizedResult();
        }
    }
}
