using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataModel;
using TaskApi.Commands.Interfaces;

namespace TaskApi.Commands
{
    public class TasksCommands : ITasksCommands
    {
        private readonly IAppDbContextFactory _dbContextFactory;

        public TasksCommands(IAppDbContextFactory dbContextFactory)
        {
            _dbContextFactory = dbContextFactory;
        }

        public async Task UpdateTask(LifeTask task)
        {
            using (var db = _dbContextFactory.Create())
            {
                var dbTask = await db.LifeTasks.FindAsync(task.Id);

                dbTask = task;

                await db.SaveChangesAsync();
            }
        }
    }
}
