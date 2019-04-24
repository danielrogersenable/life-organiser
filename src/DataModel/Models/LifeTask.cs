using System;
using System.ComponentModel.DataAnnotations;

namespace DataModel
{
    public class LifeTask
    {
        public int Id { get; set; }
        [MaxLength(100)]
        public string Name { get; set; }
        [MaxLength(5000)]
        public string Description { get; set; }
        public DateTimeOffset DateDue { get; set; }
        public bool Completed { get; set; }
        public DateTimeOffset? CompletedDate { get; set; }
        public DateTimeOffset? ScheduledDate { get; set; }
        public int DurationInMinutes { get; set; }
        public int? TaskTypeId { get; set; }
        public virtual TaskType TaskType { get; set; }
        public int? RecurringTaskId { get; set; }
        public virtual RecurringTask RecurringTask { get; set; }
        public int UserId { get; set; }
        public virtual AppUser User { get; set; }
    }
}
