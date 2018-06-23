using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using DataModel;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using TaskApi.Models;
using TaskApi.Options;

namespace TaskApi.Controllers
{
    [Route("api/[controller]")]
    public class AuthController : Controller
    {
        private readonly SignInManager<AppUser> _signInManager;
        private readonly UserManager<AppUser> _userManager;
        private readonly AuthenticationOptions _authenticationOptions;

        public AuthController(
            SignInManager<AppUser> signInManager,
            UserManager<AppUser> userManager,
            IOptions<AuthenticationOptions> authenticationOptionsAccessor)
        {
            _signInManager = signInManager;
            _userManager = userManager;
            _authenticationOptions = authenticationOptionsAccessor.Value;
        }

        [AllowAnonymous]
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

                    var result = GetAuthResult(principal);

                    return Ok(result);
                }
            }

            return BadRequest("The email and password combination you supplied was incorrect. Please try again.");
        }

        [HttpPost("refresh-token")]
        public async Task<IActionResult> RefreshToken()
        {
            var userId = _userManager.GetUserId(User);
            var user = await _userManager.FindByIdAsync(userId);

            if (user == null)
            {
                return Unauthorized();
            }

            var principal = await _signInManager.CreateUserPrincipalAsync(user);
            var result = GetAuthResult(principal);
            return Ok(result);
        }

        private AuthResult GetAuthResult(ClaimsPrincipal principal)
        {
            var tokenExpiryInSeconds = _authenticationOptions.TokenExpiryInSeconds;
            var tokenSigningSecret = _authenticationOptions.TokenSigningSecret;
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(tokenSigningSecret));

            var expiry = DateTimeOffset.Now.AddSeconds(tokenExpiryInSeconds);

            var signingCredentials = new SigningCredentials(
                securityKey,
                SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                claims: principal.Claims,
                expires: expiry.UtcDateTime,
                signingCredentials: signingCredentials);

            return new AuthResult
            {
                Name = principal.Identity.Name,
                SecurityToken = new JwtSecurityTokenHandler().WriteToken(token),
                TokenType = JwtBearerDefaults.AuthenticationScheme
            };
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
