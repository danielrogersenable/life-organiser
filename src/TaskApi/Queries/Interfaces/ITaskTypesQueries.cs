﻿using System;
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
        Task<List<TaskTypeModel>> GetTaskTypes();
        Task<TaskType> GetTaskType(int id);
    }
}
