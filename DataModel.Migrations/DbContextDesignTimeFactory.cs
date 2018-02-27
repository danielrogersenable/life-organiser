using DataModel;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace DataModel.Migrations
{
    public class DbContextDesignTimeFactory : IDesignTimeDbContextFactory<AppDbContext>
    {
        public DbContextDesignTimeFactory()
        {
            Configuration = new ConfigurationBuilder()
                .AddJsonFile("appsettings.json")
                .Build();
        }

        private IConfiguration Configuration { get; }

        AppDbContext IDesignTimeDbContextFactory<AppDbContext>.CreateDbContext(string[] args)
        {
            var connectionString = Configuration["ConnectionStrings:AppDatabase"];

            var assemblyName = GetType().Assembly.FullName;

            var options = new DbContextOptionsBuilder<AppDbContext>()
                .UseSqlServer(connectionString, b => b.MigrationsAssembly(assemblyName))
                .Options;

            return new AppDbContext(options);
        }
    }
}
