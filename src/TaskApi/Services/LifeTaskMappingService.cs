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
    public class LifeTaskMappingService : ILifeTaskMappingService
    {
        private readonly IDateTimeService _dateTimeService;

        public LifeTaskMappingService(IDateTimeService dateTimeService)
        {
            _dateTimeService = dateTimeService;
        }

        public LifeTask PopulateLifeTaskFromModel(TaskModel model, LifeTask dbTask)
        {
            dbTask.Name = model.Name;
            dbTask.DateDue = CustomFormatExtensions.DateFormatter(model.DateDue);
            dbTask.Completed = model.Completed;

            if (dbTask.Completed && !model.Completed)
            {
                dbTask.CompletedDate = null;
            }
            else if (!dbTask.Completed && model.Completed)
            {
                dbTask.CompletedDate = _dateTimeService.GetCurrentTime();
            }

            return dbTask;
        }
    }
}
