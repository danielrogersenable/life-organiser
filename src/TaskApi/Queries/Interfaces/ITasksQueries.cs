using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataModel;

namespace TaskApi.Queries.Interfaces
{
    public interface ITasksQueries
    {
        Task<LifeTask> GetTask(int id);
        Task<List<LifeTask>> GetTasks();
    }
}
