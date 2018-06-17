using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataModel;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace DataModel
{
    public class AppDbContext : IdentityDbContext<AppUser,AppRole, int>, IAppDbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {
        }

        public DbSet<AppUser> AppUsers { get; set; }
        public DbSet<AppUser> AppRoles { get; set; }
        public DbSet<LifeTask> LifeTasks { get; set; }
        public DbSet<TaskType> TaskTypes { get; set; }
    }
}
