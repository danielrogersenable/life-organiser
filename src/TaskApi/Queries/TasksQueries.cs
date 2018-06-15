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

        public async Task<TaskModel> GetProjectedTask(int id)
        {
            using (var db = _dbContextFactory.Create())
            {
                var dbTask = await db.LifeTasks
                    .Where(lt => lt.Id == id)
                    .ProjectToTaskModel()
                    .FirstOrDefaultAsync();

                return dbTask;
            }
        }

        public async Task<List<LifeTask>> GetTasks()
        {
            using (var db = _dbContextFactory.Create())
            {
                var taskList = await db.LifeTasks.ToListAsync();

                return taskList;
            }
        }

        public async Task<List<TaskModel>> GetProjectedTasks()
        {
            using (var dbContext = _dbContextFactory.Create())
            {
                return await dbContext.LifeTasks
                  .ProjectToTaskModel()
                  .OrderBy(c => c.DateDue)
                  .ToListAsync();
            }
        }
    }
}
