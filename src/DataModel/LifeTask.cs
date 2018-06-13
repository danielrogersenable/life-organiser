using System;

namespace DataModel
{
    public class LifeTask
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTimeOffset DateDue { get; set; }
        public bool Completed { get; set; }
        public DateTimeOffset? CompletedDate { get; set; }
        public DateTimeOffset? ScheduledDate { get; set; }
        public int DurationInMinutes { get; set; }
    }
}
