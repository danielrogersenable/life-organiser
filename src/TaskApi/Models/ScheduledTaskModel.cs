using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaskApi.Models
{
    public class ScheduledTaskModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string DateDue { get; set; }
        public string ScheduledDate { get; set; }
        public int DurationInMinutes { get; set; }
        public string TaskType { get; set; }
        public string Color { get; set; }
    }
}
