using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TaskApi.Models;

namespace TaskApi.Services.Interfaces
{
    public interface ITaskTypesService
    {
        Task<List<TaskTypeModel>> GetTaskTypes();
    }
}
