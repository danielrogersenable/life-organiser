using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using DataModel;
using Microsoft.AspNetCore.Identity;
using TaskApi.Services.Interfaces;

namespace TaskApi.Services
{
    public class UserManagerService : IUserManagerService
    {
        private readonly UserManager<AppUser> _userManager;

        public UserManagerService(UserManager<AppUser> userManager)
        {
            _userManager = userManager;
        }

        public int? TryGetUserId(ClaimsPrincipal user)
        {
            var userIdString = _userManager.GetUserId(user);

            if (string.IsNullOrEmpty(userIdString))
            {
                return null;
            }

            var success = int.TryParse(userIdString, out int userIdInt);

            return success ? (int?)userIdInt : null;
        }
    }
}
