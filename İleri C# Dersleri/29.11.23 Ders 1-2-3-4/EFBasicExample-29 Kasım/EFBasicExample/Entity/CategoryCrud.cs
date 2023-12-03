using EFBasicExample.Entity.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EFBasicExample.Entity
{
    internal class CategoryCrud : ICrud<Category>
    {
        DataContext db = new DataContext(); //Program.cs de olan bu yapıyı burada kullanıp, Program.cs'den sileceğiz. Çünkü main yapısında kullanmak istemiyoruz, bu yüzden CRUD yapısı oluşturduk zaten.
        //Veri tabanı güvenliği için de önemli. Clean Code yapısı bunu gerektiriyor.
        public bool Add(Category entity)
        {
            if (entity != null)
            {
                entity.IsStatus = true;

                db.Category.Add(entity);
                db.SaveChanges();
                return true;
            }
            return false;
        }

        public bool Delete(int id)
        {
            var category=db.Category.Find(id);
            if (category != null)
            {
                //db.Category.Remove(category);//Veritabanından silme
                category.IsDelete = true;//Veritabanında sadece IsDelete durumunu değiştirir
                db.SaveChanges();
                return true;
            }
            return false;
        }

        public Category Get(int id)
        {
            var category = db.Category.Find(id);
            if(category != null && !category.IsDelete)
            {
                return category;
            }
            return null;
        }

        public List<Category> GetList()
        {
           return db.Category.Where(x=>x.IsDelete==false).ToList();
        }

        public bool Update(Category entity, int id)
        {
            var category= db.Category.Find(id);
            if (category != null && !category.IsDelete)
            {
                category.Name= entity.Name;
                category.Description= entity.Description;
                db.SaveChanges();
                return true;
            }
            return false;
        }
    }
}
