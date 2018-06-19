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
    public class TaskTypesService : ITaskTypesService
    {
        private readonly ITaskTypesCommands _commands;
        private readonly ITaskTypesQueries _queries;

        public TaskTypesService(
            ITaskTypesCommands commands,
            ITaskTypesQueries queries)
        {
            _commands = commands;
            _queries = queries;
        }

        public async Task<List<TaskTypeModel>> GetTaskTypes()
        {
            return await _queries.GetTaskTypes();
        }

        public async Task UpdateTaskType(TaskTypeModel model)
        {
            var task = await _queries.GetTaskType(model.Id);

            if (task == null)
            {
                // TODO - determine what the service should do here
                return;
            }

            await _commands.UpdateTaskType(model);
        }
    }
}
