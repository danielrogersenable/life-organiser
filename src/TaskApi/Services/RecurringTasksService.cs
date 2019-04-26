using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TaskApi.Models;
using TaskApi.Queries.Interfaces;
using TaskApi.Services.Interfaces;

namespace TaskApi.Services
{
    public class RecurringTasksService : IRecurringTasksService
    {
        private readonly IRecurringTasksQueries _queries;
        
        public RecurringTasksService(IRecurringTasksQueries queries)
        {
            _queries = queries;
        }

        public async Task<RecurringTaskModel> GetProjectedRecurringTask(int id)
        {
            return await _queries.GetProjectedRecurringTask(id);
        }

        public async Task<List<RecurringTaskModel>> GetProjectedRecurringTasks(int userId)
        {
            return await _queries.GetProjectedRecurringTasks(userId);
        }
    }
}
