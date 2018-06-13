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

        public TasksService(
            ITasksCommands commands,
            ITasksQueries queries)
        {
            _commands = commands;
            _queries = queries;
        }

        public async Task<LifeTask> GetTask(int id)
        {
            return await _queries.GetTask(id);
        }

        public async Task AddTask(TaskModel model)
        {
            await _commands.AddTask(model);
        }

        public async Task UpdateTask(TaskModel model)
        {
            var task = await _queries.GetTask(model.Id);

            if (task == null)
            {
                // TODO - determine what the service should do here
                return;
            }

            await _commands.UpdateTask(model);
        }

        public async Task DeleteTask(int id)
        {
            var task = await _queries.GetTask(id);
            if (task == null)
            {
                // TODO - determine what the service should do here
                return;
            }

            await _commands.DeleteTask(task);
        }
    }
}
