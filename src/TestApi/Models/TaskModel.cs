using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestApi.Models
{
    public class TaskModel
    {
    public int Id { get; set; }
    public string Name { get; set; }
    public string DateDue { get; set; }
    public bool Completed { get; set; }
    public string CompletedDate { get; set; }
  }
}