using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaskApi.Extensions
{
    public static class CustomFormatExtensions
    {
        public static DateTimeOffset DateFormatter(string date)
        {
            return DateTimeOffset.Parse(date, null, System.Globalization.DateTimeStyles.RoundtripKind);
        }

        public static TimeSpan TimeFormatter(string time)
        {
            return TimeSpan.Parse(time);
        }
    }
}
