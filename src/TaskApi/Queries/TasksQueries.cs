using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataModel;
using TaskApi.Queries.Interfaces;

namespace TaskApi.Queries
{
    public class TasksQueries : ITasksQueries
    {
        private readonly IAppDbContextFactory _dbContextFactory;

        public TasksQueries(IAppDbContextFactory dbContextFactory)
        {
            _dbContextFactory = dbContextFactory;
        }

        public async Task<LifeTask> GetTask(int id)
        {
            using(var db = _dbContextFactory.Create())
            {
                var dbTask = await db.LifeTasks.FindAsync(id);

                return dbTask;
            }
        }
    }
}
