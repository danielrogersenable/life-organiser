using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TaskApi.Commands.Interfaces;
using TaskApi.Models;
using TaskApi.Queries.Interfaces;
using TaskApi.Services.Interfaces;

namespace TaskApi.Services
{
    public class RecurringTasksService : IRecurringTasksService
    {
        private readonly IRecurringTasksQueries _queries;
        private readonly IRecurringTasksCommands _commands;
        private readonly IRecurringTaskValueService _recurringTaskValueService;
        
        public RecurringTasksService(
            IRecurringTasksQueries queries, 
            IRecurringTasksCommands commands,
            IRecurringTaskValueService recurringTaskValueService)
        {
            _queries = queries;
            _commands = commands;
            _recurringTaskValueService = recurringTaskValueService;
        }

        public async Task AddRecurringTask(RecurringTaskModel model, int userId)
        {
            var firstTask = _recurringTaskValueService.CreateTaskFromRecurringTaskModel(model);
            model.Tasks = new List<TaskModel>() { firstTask };

            await _commands.AddRecurringTask(model, userId);
        }

        public Task DeleteRecurringTask(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<RecurringTaskModel> GetProjectedRecurringTask(int id)
        {
            return await _queries.GetProjectedRecurringTask(id);
        }

        public async Task<List<RecurringTaskModel>> GetProjectedRecurringTasks(int userId)
        {
            return await _queries.GetProjectedRecurringTasks(userId);
        }

        public Task UpdateRecurringTask(RecurringTaskModel model)
        {
            throw new NotImplementedException();
        }
    }
}
