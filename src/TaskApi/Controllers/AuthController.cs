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

                    return Ok();
                }
            }

            return BadRequest("The email and password combination you supplied was incorrect. Please try again.");
        }

        // This method should only be uncommented for the purposes of setting passwords locally and should not be deployed.

        ////[HttpPost("set-password")]
        ////public async Task<IActionResult> SetPassword([FromBody] SignInModel model)
        ////{
        ////    var user = await _userManager.FindByNameAsync(model.UserName);

        ////    if (user != null)
        ////    {
        ////        var code = await _userManager.GeneratePasswordResetTokenAsync(user);

        ////        var resetPasswordResult = await _userManager.ResetPasswordAsync(user, code, model.Password);

        ////        if (resetPasswordResult.Succeeded)
        ////        {
        ////            return Ok();
        ////        }
        ////    }

        ////    return BadRequest("Something failed. Sad times");
        ////}
    }
}
