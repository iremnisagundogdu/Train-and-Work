using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EFBasicExample
{
    internal class Product:CommonProperty
    {
        public int CategoryId { get; set; }
        public Category Category { get; set; }
        public int Stock { get; set; }
        public double Price { get; set; }
    }
}
