using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataModel;
using TaskApi.Models;

namespace TaskApi.Commands.Interfaces
{
    public interface ITasksCommands
    {
        Task UpdateTask(TaskModel model);
    }
}
