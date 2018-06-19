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
            dbTask.ScheduledDate = CustomFormatExtensions.DateFormatter(model.ScheduledDate);
            dbTask.DurationInMinutes = model.DurationInMinutes;

            if (dbTask.Completed && !model.Completed)
            {
                dbTask.CompletedDate = null;
            }
            else if (!dbTask.Completed && model.Completed)
            {
                dbTask.CompletedDate = _dateTimeService.GetCurrentTime();
            }

            dbTask.Completed = model.Completed;
            dbTask.TaskTypeId = model.TaskTypeId;

            return dbTask;
        }
    }
}
