using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;

namespace EFBasicExample
{
    internal class DataContext:DbContext
    {
        public DataContext():base("DatabaseConnection") { }

        public DbSet<Category> Category { get; set; }
        public DbSet<Product> Product { get; set; }

    }
}
