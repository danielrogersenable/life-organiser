using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataModel;
using DataModel.Enums;

namespace TaskApi.Models
{
    public class RecurringTaskModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int RecurrenceInterval { get; set; }
        public TaskRecurrenceType TaskRecurrenceType { get; set; }
        public virtual List<TaskModel> Tasks { get; set; }
        public virtual TaskType TaskType { get; set; }
    }
}
