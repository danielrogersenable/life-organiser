using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaskApi.Models
{
    public class AuthResult
    {
        public string Name { get; set; }
        public string SecurityToken { get; set; }
        public string TokenType { get; set; }
    }
}
