using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaskApi.Models
{
    public class ScheduledTasksQueryModel
    {
        public string FromDate { get; set; }
        public string ToDate { get; set; }
    }
}
