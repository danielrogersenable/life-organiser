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
    public class ModelMappingService : IModelMappingService
    {
        private readonly IDateTimeService _dateTimeService;

        public ModelMappingService(IDateTimeService dateTimeService)
        {
            _dateTimeService = dateTimeService;
        }

        public LifeTask PopulateLifeTaskFromModel(TaskModel model, LifeTask dbTask, int? userId = null)
        {
            dbTask.Name = model.Name;
            dbTask.DateDue = CustomFormatExtensions.DateFormatter(model.DateDue);
            dbTask.ScheduledDate = CustomFormatExtensions.DateFormatter(model.ScheduledDate);
            dbTask.DurationInMinutes = model.DurationInMinutes;

            // TODO - potentially need better checks on whether a user already exists
            if (dbTask.UserId == 0)
            {
                if (userId.HasValue)
                {
                    dbTask.UserId = userId.Value;
                }
                else
                {
                    throw new InvalidOperationException("This task has not been created in the context of a user");
                }
            }

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
            dbTask.Description = model.Description;

            return dbTask;
        }

        public TaskType PopulateTaskTypeFromModel(TaskTypeModel model, TaskType dbTaskType, int? userId = null)
        {
            // TODO - potentially need better checks on whether a user already exists
            if (dbTaskType.UserId == 0)
            {
                if (userId.HasValue)
                {
                    dbTaskType.UserId = userId.Value;
                }
                else
                {
                    throw new InvalidOperationException("This task has not been created in the context of a user");
                }
            }

            dbTaskType.Name = model.Name;
            dbTaskType.Color = model.Color;

            return dbTaskType;
        }

        public RecurringTask PopulateRecurringTaskFromModel(RecurringTaskModel model, RecurringTask dbRecurringTask, int? userId = null)
        {
            if (dbRecurringTask.UserId == 0)
            {
                if (userId.HasValue)
                {
                    dbRecurringTask.UserId = userId.Value;
                }
                else
                {
                    throw new InvalidOperationException("This task has not been created in the context of a user");
                }
            }

            dbRecurringTask.Name = model.Name;
            dbRecurringTask.Description = model.Description;
            dbRecurringTask.RecurrenceInterval = model.RecurrenceInterval;
            dbRecurringTask.TaskRecurrenceType = model.TaskRecurrenceType;


            foreach (var taskModel in model.Tasks)
            {
                var dbTask = new LifeTask();
                dbTask = PopulateLifeTaskFromModel(taskModel, dbTask, userId);
                dbRecurringTask.Tasks.Add(dbTask);
            }

            return dbRecurringTask;
        }
    }
}
