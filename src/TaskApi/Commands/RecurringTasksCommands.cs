using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TaskApi.Commands.Interfaces;
using TaskApi.Models;

namespace TaskApi.Commands
{
    public class RecurringTasksCommands : IRecurringTasksCommands
    {
        public Task AddRecurringTask(RecurringTaskModel model, int userId)
        {
            throw new NotImplementedException();
        }
    }
}
