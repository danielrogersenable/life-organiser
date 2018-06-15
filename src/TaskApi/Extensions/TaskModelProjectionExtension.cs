using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataModel;
using TaskApi.Models;

namespace TaskApi.Extensions
{
    public static class TaskModelProjectionExtension
    {
        public static IQueryable<TaskModel> ProjectToTaskModel(this IQueryable<LifeTask> query)
        {
            return query
                .Select(t => new TaskModel
                {
                    Id = t.Id,
                    Name = t.Name,
                    DateDue = t.DateDue.ToString("yyyy-MM-ddTHH\\:mm\\:ss.fffffffzzz"),
                    Completed = t.Completed,
                    CompletedDate = t.CompletedDate.HasValue ? t.CompletedDate.Value.ToString("yyyy-MM-ddTHH\\:mm\\:ss.fffffffzzz") : null,
                    ScheduledDate = t.ScheduledDate.HasValue ? t.ScheduledDate.Value.ToString("yyyy-MM-ddTHH\\:mm\\:ss.fffffffzzz") : null,
                    DurationInMinutes = t.DurationInMinutes
                });
        }
    }
}
