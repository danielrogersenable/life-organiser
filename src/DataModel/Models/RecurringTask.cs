using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataModel.Enums;

namespace DataModel
{
    public class RecurringTask
    {
        public int Id { get; set; }
        [MaxLength(100)]
        public string Name { get; set; }
        [MaxLength(5000)]
        public string Description { get; set; }
        public int RecurrenceInterval { get; set; }
        public TaskRecurrenceType TaskRecurrenceType { get; set; }
        public virtual List<LifeTask> Tasks { get; set; }
        public int? TaskTypeId { get; set; }
        public virtual TaskType TaskType { get; set; }
        public int UserId { get; set; }
        public virtual AppUser User { get; set; }
    }
}
