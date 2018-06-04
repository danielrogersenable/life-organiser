using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataModel;
using TaskApi.Commands.Interfaces;
using TaskApi.Models;
using TaskApi.Queries.Interfaces;
using TaskApi.Services.Interfaces;

namespace TaskApi.Services
{
    public class TasksService : ITasksService
    {
        private readonly ITasksCommands _commands;
        private readonly ITasksQueries _queries;
        private readonly ITaskUpdaterService _taskUpdaterService;

        public TasksService(
            ITasksCommands commands,
            ITasksQueries queries,
            ITaskUpdaterService taskUpdaterService)
        {
            _commands = commands;
            _queries = queries;
            _taskUpdaterService = taskUpdaterService;
        }

        public async Task UpdateTask(TaskModel model)
        {
            var task = await _queries.GetTask(model.Id);

            if (task == null)
            {
                // TODO - determine what the service should do here
                return;
            }

            task = _taskUpdaterService.UpdateTask(task, model);

            await _commands.UpdateTask(task);
        }
    }
}
