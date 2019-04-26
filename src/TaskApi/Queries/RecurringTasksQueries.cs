using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataModel;
using Microsoft.EntityFrameworkCore;
using TaskApi.Extensions;
using TaskApi.Models;
using TaskApi.Queries.Interfaces;

namespace TaskApi.Queries
{
    public class RecurringTasksQueries : IRecurringTasksQueries
    {
        private readonly IAppDbContextFactory _dbContextFactory;

        public RecurringTasksQueries(IAppDbContextFactory dbContextFactory)
        {
            _dbContextFactory = dbContextFactory;
        }

        public async Task<RecurringTaskModel> GetProjectedRecurringTask(int id)
        {
            using (var db = _dbContextFactory.Create())
            {
                var dbTask = await db.RecurringTasks
                    .Where(lt => lt.Id == id)
                    .ProjectToRecurringTaskModel()
                    .FirstOrDefaultAsync();

                return dbTask;
            }
        }

        public async Task<List<RecurringTaskModel>> GetProjectedRecurringTasks(int userId)
        {
            using (var db = _dbContextFactory.Create())
            {
                var dbTask = await db.RecurringTasks
                    .Where(lt => lt.UserId == userId)
                    .ProjectToRecurringTaskModel()
                    .ToListAsync();

                return dbTask;
            }
        }
    }
}
