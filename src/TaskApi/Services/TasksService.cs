using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataModel;
using TaskApi.Commands.Interfaces;
using TaskApi.Extensions;
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

        public async Task<TaskModel> GetProjectedTask(int id)
        {
            return await _queries.GetProjectedTask(id);
        }

        public async Task<List<TaskListingModel>> GetProjectedTasks(int userId)
        {
            return await _queries.GetProjectedTasks(userId);
        }

        public async Task<TaskModel> GetRandomTask(int userId)
        {
            var totalTasks = await _queries.GetTotalTasksForUser(userId);

            if (totalTasks == 0)
            {
                return new TaskModel();
            }

            var random = new Random();

            var randomIndex = random.Next(totalTasks - 1);

            var randomTask = await _queries.GetProjectedTaskFromIndex(userId, randomIndex);

            return randomTask;
        }

        public async Task<List<TaskModel>> GetCompleteProjectedTasks(int userId)
        {
            return await _queries.GetCompleteProjectedTasks(userId);
        }

        public async Task AddTask(TaskModel model, int userId)
        {
            await _commands.AddTask(model, userId);
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

        public async Task<List<ScheduledTaskModel>> GetScheduledTasks(ScheduledTasksQueryModel model, int userId)
        {
            var fromDate = CustomFormatExtensions.TryDateFormatter(model.FromDate);
            var toDate = CustomFormatExtensions.TryDateFormatter(model.ToDate);

            var results = await _queries.GetScheduledTasks(fromDate, toDate, userId);

            return results;
        }
    }
}
