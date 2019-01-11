using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataModel;
using TaskApi.Models;

namespace TaskApi.Services.Interfaces
{
    public interface ITasksService
    {
        Task<TaskModel> GetProjectedTask(int id);
        Task<List<TaskListingModel>> GetProjectedTasks(int userId);
        Task<TaskModel> GetRandomTask(int userId);
        Task<List<TaskModel>> GetCompleteProjectedTasks(int userId);
        Task<List<ScheduledTaskModel>> GetScheduledTasks(ScheduledTasksQueryModel model, int userId);
        Task UpdateTask(TaskModel model);
        Task AddTask(TaskModel model, int userId);
        Task DeleteTask(int id);
    }
}
