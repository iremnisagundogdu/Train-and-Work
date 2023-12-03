using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EFBasicExample.Entity.Interfaces
{
    internal interface ICrud<T>
    {
        List<T> GetList(); //Bütün listeyi çektik.

        T Get(int id); // id gönderip tekil veri çekiyoruz.

        bool Add(T entity);

        bool Update(T entity, int id);

        bool Delete(int id);
    }
}
