using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TaskApi.Models;

namespace TaskApi.Queries.Interfaces
{
    public interface IRecurringTasksQueries
    {
        Task<List<RecurringTaskModel>> GetProjectedRecurringTasks(int userId);

        Task<RecurringTaskModel> GetProjectedRecurringTask(int id);
    }
}
