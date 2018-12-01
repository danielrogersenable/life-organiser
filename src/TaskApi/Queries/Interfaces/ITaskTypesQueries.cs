using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataModel;
using TaskApi.Models;

namespace TaskApi.Queries.Interfaces
{
    public interface ITaskTypesQueries
    {
        Task<List<TaskTypeModel>> GetTaskTypes(int userId);
        Task<TaskType> GetTaskType(int id);
        Task<bool> TaskTypeExists(int id);
        Task<int> CountTasks(int taskTypeId);
    }
}
