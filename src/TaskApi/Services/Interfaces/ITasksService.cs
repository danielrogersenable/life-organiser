﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TaskApi.Models;

namespace TaskApi.Services.Interfaces
{
    public interface ITasksService
    {
        Task UpdateTask(TaskModel model);
    }
}
