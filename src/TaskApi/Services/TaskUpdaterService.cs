using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataModel;
using TaskApi.Extensions;
using TaskApi.Models;
using TaskApi.Services.Interfaces;

namespace TaskApi.Services
{
    public class TaskUpdaterService : ITaskUpdaterService
    {
        public LifeTask UpdateTask(LifeTask dbTask, TaskModel model)
        {
            dbTask.Name = model.Name;
            dbTask.DateDue = CustomFormatExtensions.DateFormatter(model.DateDue);
            dbTask.Completed = model.Completed;

            return dbTask;
        }
    }
}
