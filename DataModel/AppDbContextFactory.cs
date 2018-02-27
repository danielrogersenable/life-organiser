using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.Extensions.Configuration;

namespace DataModel
{
    public class AppDbContextFactory : IAppDbContextFactory
    {
        private IConfiguration _configuration;

        public AppDbContextFactory(IConfiguration configuration)
        {
            _configuration = configuration ?? throw new ArgumentNullException(nameof(configuration));
        }

        public IAppDbContext Create(IDbContextTransaction dbContextTransaction = null)
        {
            var transaction = dbContextTransaction?.GetDbTransaction();
            DbConnection connection;

            if (transaction != null)
            {
                connection = transaction.Connection;
            }
            else
            {
                var connectionString = _configuration.GetConnectionString("AppDatabase");
                connection = new SqlConnection(connectionString);
            }

            var options = new DbContextOptionsBuilder<AppDbContext>()
               .UseSqlServer(
                    connection,
                    sqlOptions =>
                    {
                        sqlOptions.EnableRetryOnFailure();
                    })
               .Options;

            var db = new AppDbContext(options);

            if (transaction != null)
            {
                db.Database.UseTransaction(transaction);
            }

            return db;
        }
    }
}
