using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TaskApi.Models;

namespace TaskApi.Services.Interfaces
{
    public interface IRecurringTasksService
    {
        Task<List<RecurringTaskModel>> GetProjectedRecurringTasks(int userId);
        Task<RecurringTaskModel> GetProjectedRecurringTask(int id);
        Task UpdateRecurringTask(RecurringTaskModel model);
        Task AddRecurringTask(RecurringTaskModel model, int userId);
        Task DeleteRecurringTask(int id);
    }
}
