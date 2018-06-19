using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataModel;
using Microsoft.EntityFrameworkCore;
using TaskApi.Extensions;
using TaskApi.Models;
using TaskApi.Queries.Interfaces;

namespace TaskApi.Queries
{
    public class TaskTypesQueries : ITaskTypesQueries
    {
        private readonly IAppDbContextFactory _dbContextFactory;

        public TaskTypesQueries(IAppDbContextFactory dbContextFactory)
        {
            _dbContextFactory = dbContextFactory;
        }

        public async Task<List<TaskTypeModel>> GetTaskTypes()
        {
            using (var dbContext = _dbContextFactory.Create())
            {
                return await dbContext.TaskTypes
                    .ProjectToTaskTypeModel()
                    .OrderBy(c => c.Name)
                    .ToListAsync();
            }
        }
    }
}
