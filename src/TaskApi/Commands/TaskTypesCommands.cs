using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataModel;
using TaskApi.Commands.Interfaces;
using TaskApi.Models;
using TaskApi.Services.Interfaces;

namespace TaskApi.Commands
{
    public class TaskTypesCommands : ITaskTypesCommands
    {
        private readonly IAppDbContextFactory _dbContextFactory;
        private readonly IModelMappingService _lifeTaskMappingService;

        public TaskTypesCommands(
            IAppDbContextFactory dbContextFactory,
            IModelMappingService lifeTaskMappingService)
        {
            _dbContextFactory = dbContextFactory;
            _lifeTaskMappingService = lifeTaskMappingService;
        }

        public async Task UpdateTaskType(TaskTypeModel model)
        {
            using (var db = _dbContextFactory.Create())
            {
                var taskType = await db.TaskTypes.FindAsync(model.Id);

                taskType = _lifeTaskMappingService.PopulateTaskTypeFromModel(model, taskType);

                await db.SaveChangesAsync();
            }
        }

        public async Task AddTaskType(TaskTypeModel model)
        {
            using (var db = _dbContextFactory.Create())
            {
                var taskType = new TaskType();

                taskType = _lifeTaskMappingService.PopulateTaskTypeFromModel(model, taskType);

                db.TaskTypes.Add(taskType);
                await db.SaveChangesAsync();
            }
        }

        public async Task DeleteTaskType(int taskTypeId)
        {
            using (var db = _dbContextFactory.Create())
            {
                var taskType = await db.TaskTypes.FindAsync(taskTypeId);
                db.TaskTypes.Remove(taskType);

                await db.SaveChangesAsync();
            }
        }
    }
}
