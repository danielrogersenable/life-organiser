using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataModel;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using TaskApi.Models;

namespace TaskApi.Controllers
{
    [Route("api/[controller]")]
    public class AuthController : Controller
    {
        private readonly SignInManager<AppUser> _signInManager;
        private readonly UserManager<AppUser> _userManager;

        public AuthController(
            SignInManager<AppUser> signInManager,
            UserManager<AppUser> userManager)
        {
            _signInManager = signInManager;
            _userManager = userManager;
        }

        [HttpPost("sign-in")]
        public async Task<IActionResult> SignIn([FromBody] SignInModel model)
        {
            var user = await _userManager.FindByNameAsync(model.UserName);

            if (user != null)
            {
                var signInResult = await _signInManager.CheckPasswordSignInAsync(user, model.Password, lockoutOnFailure: false);

                if (signInResult.Succeeded)
                {
                    var principal = await _signInManager.CreateUserPrincipalAsync(user);

                    // TODO - get the right principal
                    //var result = GetAuthResult(principal);

                    return Ok(principal);
                }
            }

            return BadRequest("The email and password combination you supplied was incorrect. Please try again.");
        }
    }
}
