﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataModel;
using TaskApi.Models;

namespace TaskApi.Services.Interfaces
{
    public interface ILifeTaskMappingService
    {
        LifeTask PopulateLifeTaskFromModel(TaskModel model, LifeTask dbTask);
    }
}
