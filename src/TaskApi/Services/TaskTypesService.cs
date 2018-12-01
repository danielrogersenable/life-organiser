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

        public async Task<List<TaskTypeModel>> GetTaskTypes(int userId)
        {
            return await _queries.GetTaskTypes(userId);
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

        public async Task AddTaskType(TaskTypeModel model, int userId)
        {
            await _commands.AddTaskType(model, userId);
        }

        public async Task DeleteTaskType(int taskTypeId)
        {
            await _commands.DeleteTaskType(taskTypeId);
        }

        public async Task<IEnumerable<string>> GetValidationDeleteMessages(int taskTypeId)
        {
            var messages = new List<string>();

            var taskTypeExists = await _queries.TaskTypeExists(taskTypeId);

            if (!taskTypeExists)
            {
                messages.Add("This task type does not exist.");
            }

            var taskCount = await _queries.CountTasks(taskTypeId);

            if (taskCount > 0)
            {
                var taskText = taskCount == 1 ? "task" : "tasks";
                messages.Add($"This task type cannot be deleted as it is associated with {taskCount} {taskText}.");
            }

            return messages;
        }
    }
}
