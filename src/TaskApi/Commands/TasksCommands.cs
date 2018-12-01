using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataModel;
using TaskApi.Commands.Interfaces;
using TaskApi.Extensions;
using TaskApi.Models;
using TaskApi.Services.Interfaces;

namespace TaskApi.Commands
{
    public class TasksCommands : ITasksCommands
    {
        private readonly IAppDbContextFactory _dbContextFactory;
        private readonly IModelMappingService _lifeTaskMappingService;

        public TasksCommands(
            IAppDbContextFactory dbContextFactory,
            IModelMappingService lifeTaskMappingService)
        {
            _dbContextFactory = dbContextFactory;
            _lifeTaskMappingService = lifeTaskMappingService;
        }

        public async Task UpdateTask(TaskModel model)
        {
            using (var db = _dbContextFactory.Create())
            {
                var dbTask = await db.LifeTasks.FindAsync(model.Id);

                dbTask = _lifeTaskMappingService.PopulateLifeTaskFromModel(model, dbTask);

                await db.SaveChangesAsync();
            }
        }

        public async Task AddTask(TaskModel model, int userId)
        {
            using (var db = _dbContextFactory.Create())
            {
                var dbTask = new LifeTask();

                dbTask = _lifeTaskMappingService.PopulateLifeTaskFromModel(model, dbTask, userId);

                db.LifeTasks.Add(dbTask);

                await db.SaveChangesAsync();
            }
        }

        public async Task DeleteTask(LifeTask dbTask)
        {
            using (var db = _dbContextFactory.Create())
            {
                db.LifeTasks.Remove(dbTask);

                await db.SaveChangesAsync();
            }
        }
    }
}
