using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaskApi.Services.Interfaces
{
    public interface IDateTimeService
    {
        DateTimeOffset? GetCurrentTime();
    }
}
