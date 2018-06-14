﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataModel;
using IdentityModel;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;

namespace TaskApi.StartupExtensions
{
    public static class AddUserAuthenticationExtension
    {
        public static void AddUserAuthentication(this IServiceCollection services)
        {
            if (services == null)
            {
                throw new ArgumentNullException(nameof(services));
            }

            services.AddIdentity<AppUser, AppRole>(options =>
            {
                // TODO - these rules are set low for development. Consider using password rules in appsettings.
                options.Password.RequireDigit = false;
                options.Password.RequiredLength = 5;
                options.Password.RequireLowercase = false;
                options.Password.RequireNonAlphanumeric = false;
                options.Password.RequireUppercase = false;
            })
                .AddEntityFrameworkStores<AppDbContext>()
                .AddDefaultTokenProviders();

            services
                .AddAuthentication(options =>
                {
                    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                })
                .AddJwtBearer(options =>
                {
                    options.TokenValidationParameters.AuthenticationType = JwtBearerDefaults.AuthenticationScheme;
                    options.TokenValidationParameters.ValidateAudience = false;
                    options.TokenValidationParameters.ValidateIssuer = false;
                    options.TokenValidationParameters.NameClaimType = JwtClaimTypes.Email;
                    options.TokenValidationParameters.RoleClaimType = JwtClaimTypes.Role;

                    // TODO - match this key to the auth controller key
                    var signingKey = Encoding.UTF8.GetBytes("life-organiser-secret-tbc");
                    options.TokenValidationParameters.IssuerSigningKey = new SymmetricSecurityKey(signingKey);
                });
        }
    }
}
