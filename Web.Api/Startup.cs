using DataModel;
using Exceptionless;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Rewrite;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Web.Api.Authorization;
using Web.Api.StartupExtensions;

namespace Web.Api
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddRouting(options => options.LowercaseUrls = true);
            services.AddCustomisedMvc(Configuration);
            services.AddCustomisedAuthentication(Configuration);

      services
          //.AddDbContext<AppDbContext>(options => options.UseSqlServer(Configuration.GetConnectionString("AppDatabase")))
          .AddScoped<IAppDbContextFactory, AppDbContextFactory>()
          .AddScoped<ApiKeyAuthorizationAttribute>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            app.UseExceptionless(Configuration);

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            if (env.IsProduction())
            {
                app.UseRewriter(new RewriteOptions().AddIISUrlRewrite(env.ContentRootFileProvider, "IISUrlRewrite.xml"));
            }

            app.UseAuthentication();
            app.UseMvc();
        }
    }
}
