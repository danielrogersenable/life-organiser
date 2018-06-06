using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataModel;
using TaskApi.Commands.Interfaces;
using TaskApi.Extensions;
using TaskApi.Models;

namespace TaskApi.Commands
{
    public class TasksCommands : ITasksCommands
    {
        private readonly IAppDbContextFactory _dbContextFactory;

        public TasksCommands(IAppDbContextFactory dbContextFactory)
        {
            _dbContextFactory = dbContextFactory;
        }

        public async Task UpdateTask(TaskModel model)
        {
            using (var db = _dbContextFactory.Create())
            {
                var dbTask = await db.LifeTasks.FindAsync(model.Id);

                dbTask.Name = model.Name;
                dbTask.DateDue = CustomFormatExtensions.DateFormatter(model.DateDue);
                dbTask.Completed = model.Completed;

                await db.SaveChangesAsync();
            }
        }
    }
}
