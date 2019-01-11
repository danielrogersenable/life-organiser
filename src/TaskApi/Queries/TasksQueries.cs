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
            using (var db = _dbContextFactory.Create())
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

        public async Task<int> GetTotalTasksForUser(int userId)
        {
            using (var db = _dbContextFactory.Create())
            {
                var dbTask = await db.LifeTasks
                    .Where(lt => lt.UserId == userId)
                    .CountAsync();

                return dbTask;
            }
        }

        public async Task<ScheduledTaskModel> GetScheduledTaskFromIndex(int userId, int index)
        {
            using (var db = _dbContextFactory.Create())
            {
                var dbTask = await db.LifeTasks
                    .Where(lt => lt.UserId == userId)
                    .OrderBy(lt => lt.Id)
                    .Skip(index)
                    .ProjectToScheduledTaskModel()
                    .FirstOrDefaultAsync();

                return dbTask;
            }
        }

        public async Task<List<TaskModel>> GetCompleteProjectedTasks(int userId)
        {
            using (var dbContext = _dbContextFactory.Create())
            {
                return await dbContext.LifeTasks
                    .Where(lt => lt.Completed)
                    .Where(lt => lt.UserId == userId)
                    .ProjectToTaskModel()
                    .OrderBy(c => c.DateDue)
                    .ToListAsync();
            }
        }

        public async Task<List<TaskListingModel>> GetProjectedTasks(int userId)
        {
            using (var dbContext = _dbContextFactory.Create())
            {
                return await dbContext.LifeTasks
                    .Where(lt => lt.UserId == userId)
                    .ProjectToTaskListingModel()
                    .OrderBy(c => c.DateDue)
                    .ToListAsync();
            }
        }

        public async Task<List<ScheduledTaskModel>> GetScheduledTasks(
            DateTimeOffset? fromDate,
            DateTimeOffset? toDate,
            int userId)
        {
            using (var dbContext = _dbContextFactory.Create())
            {
                return await dbContext.LifeTasks
                    .Where(t => t.UserId == userId)
                    .Where(t => fromDate.HasValue ? t.ScheduledDate >= fromDate : true)
                    .Where(t => toDate.HasValue ? t.ScheduledDate <= toDate : true)
                    .ProjectToScheduledTaskModel()
                    .OrderBy(c => c.ScheduledDate)
                    .ToListAsync();
            }
        }
    }
}
