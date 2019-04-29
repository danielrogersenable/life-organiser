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

        public static DateTimeOffset? TryDateFormatter(string date)
        {
            DateTimeOffset result;
            var success = DateTimeOffset.TryParse(date, null, System.Globalization.DateTimeStyles.RoundtripKind, out result);
            if (success)
            {
                return result;
            }
            else
            {
                return null;
            }
        }

        public static string FormatDateString(this DateTimeOffset date)
        {
            return date.ToString("yyyy-MM-ddTHH\\:mm\\:ss.fffffffzzz");
        }

        public static TimeSpan TimeFormatter(string time)
        {
            return TimeSpan.Parse(time);
        }
    }
}
