using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TaskApi.Services.Interfaces;

namespace TaskApi.Services
{
    public class DateTimeService : IDateTimeService
    {
        public DateTimeOffset? GetCurrentTime()
        {
            return DateTimeOffset.UtcNow;
        }
    }
}
