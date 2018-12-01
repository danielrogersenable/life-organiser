using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataModel
{
    public class TaskType
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Color { get; set; }
        public int UserId { get; set; }
        public AppUser User { get; set; }
    }
}
