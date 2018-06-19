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
        Task<List<TaskListingModel>> GetProjectedTasks();
        Task<List<TaskModel>> GetCompleteProjectedTasks();
        Task UpdateTask(TaskModel model);
        Task AddTask(TaskModel model);
        Task DeleteTask(int id);
    }
}
