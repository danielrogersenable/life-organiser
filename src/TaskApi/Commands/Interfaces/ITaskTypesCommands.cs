using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TaskApi.Models;

namespace TaskApi.Commands.Interfaces
{
    public interface ITaskTypesCommands
    {
        Task UpdateTaskType(TaskTypeModel model);
        Task AddTaskType(TaskTypeModel model, int userId);
        Task DeleteTaskType(int taskTypeId);
    }
}
