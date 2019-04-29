using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TaskApi.Extensions;
using TaskApi.Models;
using TaskApi.Services.Interfaces;

namespace TaskApi.Services
{
    public class RecurringTaskValueService : IRecurringTaskValueService
    {
        public TaskModel CreateTaskFromRecurringTaskModel(RecurringTaskModel recurringTaskModel)
        {
            var taskModel = new TaskModel
            {
                Name = recurringTaskModel.Name,
                Description = recurringTaskModel.Description,
                DateDue = GetDateDueFromRecurringTaskModel(recurringTaskModel),
                DurationInMinutes = 0, // TODO - add duration to recurring task
                TaskTypeId = recurringTaskModel.TaskType.Id
            };

            return taskModel;
        }

        public string GetDateDueFromRecurringTaskModel(RecurringTaskModel recurringTaskModel)
        {
            var currentDate = DateTimeOffset.Now;

            DateTimeOffset dueDate = currentDate;

            switch (recurringTaskModel.TaskRecurrenceType)
            {
                case DataModel.Enums.TaskRecurrenceType.Day:
                    dueDate = currentDate.AddDays(recurringTaskModel.RecurrenceInterval);
                    break;
                case DataModel.Enums.TaskRecurrenceType.Week:
                    dueDate = currentDate.AddDays(recurringTaskModel.RecurrenceInterval * 7);
                    break;
                case DataModel.Enums.TaskRecurrenceType.Month:
                    dueDate = currentDate.AddMonths(recurringTaskModel.RecurrenceInterval);
                    break;
                case DataModel.Enums.TaskRecurrenceType.Year:
                    dueDate = currentDate.AddYears(recurringTaskModel.RecurrenceInterval);
                    break;
                default:
                    break;
            }

            return dueDate.FormatDateString();
        }
    }
}
