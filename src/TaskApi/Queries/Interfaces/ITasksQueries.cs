﻿using System;
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
        Task<int> GetTotalTasksForUser(int userId);
        Task<ScheduledTaskModel> GetScheduledTaskFromIndex(int userId, int index);
        Task<List<TaskModel>> GetCompleteProjectedTasks(int userId);
        Task<List<TaskListingModel>> GetProjectedTasks(int userId);
        Task<List<ScheduledTaskModel>> GetScheduledTasks(DateTimeOffset? fromDate, DateTimeOffset? toDate, int userId);
    }
}
