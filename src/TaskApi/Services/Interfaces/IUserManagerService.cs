using System.Security.Claims;

namespace TaskApi.Services.Interfaces
{
    public interface IUserManagerService
    {
        int? TryGetUserId(ClaimsPrincipal user);
    }
}
