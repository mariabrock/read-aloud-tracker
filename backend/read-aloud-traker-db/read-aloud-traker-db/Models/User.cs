using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace read_aloud_traker_db.Models
{
    public class User
    {
        public int userId { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string email { get; set; }
        public string avatarUrl { get; set; }
        public string username { get; set; }
    }
}
