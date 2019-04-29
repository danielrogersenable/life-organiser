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
    public class RecurringTasksCommands : IRecurringTasksCommands
    {
        private readonly IAppDbContextFactory _dbContextFactory;
        private readonly IModelMappingService _lifeTaskMappingService;

        public RecurringTasksCommands(
            IAppDbContextFactory dbContextFactory,
            IModelMappingService lifeTaskMappingService)
        {
            _dbContextFactory = dbContextFactory;
            _lifeTaskMappingService = lifeTaskMappingService;
        }

        public async Task AddRecurringTask(RecurringTaskModel model, int userId)
        {
            using (var db = _dbContextFactory.Create())
            {
                var recurringTask = new RecurringTask();

                recurringTask = _lifeTaskMappingService.PopulateRecurringTaskFromModel(model, recurringTask, userId);

                db.RecurringTasks.Add(recurringTask);
                await db.SaveChangesAsync();
            }
        }
    }
}
