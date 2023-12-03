using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EFBasicExample
{
    internal class Category:CommonProperty
    {
        public List<Product> Products { get; set; }
    }
}
