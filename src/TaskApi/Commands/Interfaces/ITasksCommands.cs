using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataModel;

namespace TaskApi.Commands.Interfaces
{
    public interface ITasksCommands
    {
        Task UpdateTask(LifeTask task);
    }
}
