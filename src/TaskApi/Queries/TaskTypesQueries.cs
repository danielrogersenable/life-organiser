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
    public class TaskTypesQueries : ITaskTypesQueries
    {
        private readonly IAppDbContextFactory _dbContextFactory;

        public TaskTypesQueries(IAppDbContextFactory dbContextFactory)
        {
            _dbContextFactory = dbContextFactory;
        }

        public async Task<List<TaskTypeModel>> GetTaskTypes()
        {
            using (var dbContext = _dbContextFactory.Create())
            {
                return await dbContext.TaskTypes
                    .ProjectToTaskTypeModel()
                    .OrderBy(c => c.Name)
                    .ToListAsync();
            }
        }

        public async Task<TaskType> GetTaskType(int id)
        {
            using (var dbContext = _dbContextFactory.Create())
            {
                return await dbContext.TaskTypes.FindAsync(id);
            }
        }

        public async Task<bool> TaskTypeExists(int id)
        {
            using (var dbContext = _dbContextFactory.Create())
            {
                return await dbContext.TaskTypes
                    .Where(tt => tt.Id == id)
                    .AnyAsync();
            }
        }

        public async Task<int> CountTasks(int taskTypeId)
        {
            using (var dbContext = _dbContextFactory.Create())
            {
                return await dbContext.LifeTasks
                    .Where(lt => lt.TaskTypeId == taskTypeId)
                    .CountAsync();
            }
        }
    }
}
