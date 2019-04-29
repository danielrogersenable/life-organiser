using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataModel;
using TaskApi.Models;

namespace TaskApi.Services.Interfaces
{
    public interface IModelMappingService
    {
        LifeTask PopulateLifeTaskFromModel(TaskModel model, LifeTask dbTask, int? userId = null);
        TaskType PopulateTaskTypeFromModel(TaskTypeModel model, TaskType taskType, int? userId = null);
        RecurringTask PopulateRecurringTaskFromModel(RecurringTaskModel model, RecurringTask dbRecurringTask, int? userId = null);
    }
}
