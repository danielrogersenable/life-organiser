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
        Task<LifeTask> GetTask(int id);
        Task<List<TaskModel>> GetProjectedTasks();
        Task UpdateTask(TaskModel model);
        Task AddTask(TaskModel model);
        Task DeleteTask(int id);
    }
}
