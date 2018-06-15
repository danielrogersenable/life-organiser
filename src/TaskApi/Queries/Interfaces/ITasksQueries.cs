using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataModel;
using TaskApi.Models;

namespace TaskApi.Queries.Interfaces
{
    public interface ITasksQueries
    {
        Task<LifeTask> GetTask(int id);
        Task<TaskModel> GetProjectedTask(int id);
        Task<List<TaskModel>> GetCompleteProjectedTasks();
        Task<List<TaskModel>> GetProjectedTasks();
    }
}
