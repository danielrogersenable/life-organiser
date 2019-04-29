using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TaskApi.Models;

namespace TaskApi.Commands.Interfaces
{
    public interface IRecurringTasksCommands
    {
        Task AddRecurringTask(RecurringTaskModel model, int userId);
    }
}
