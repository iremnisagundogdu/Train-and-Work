using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EFBasicExample
{
    internal class Program
    {
        static void Main(string[] args)
        {
            DataContext db = new DataContext();

            //Category category = new Category()
            //{
            //    Name="Bilgisayar",
            //    Description="Bilgisayar Kategorisi",
            //    IsStatus=true,
            //};

            //db.Category.Add(category);
            //db.SaveChanges();

            //Category category1 = new Category()
            //{
            //    Name = "Telefon",
            //    Description = "Telefon Kategorisi",
            //    IsStatus = true,
            //};
            //Category category2 = new Category()
            //{
            //    Name = "Tablet",
            //    Description = "Tablet Kategorisi",
            //    IsStatus = true,
            //};

            //db.Category.Add(category1);
            //db.Category.Add(category2);

            //db.SaveChanges();

            foreach(var item in db.Category.ToList())
            {
                Console.WriteLine($"Name:{item.Name}\t Status: {(item.IsStatus?"Active":"Passive")}");
            }
            Console.WriteLine("-------------------------------------------------------------------------");

            var category = db.Category.Find(2);
            //var category= db.Category.FirstOrDefault(x=>x.Name=="Tablet");
            if( category != null )
            {
                Console.WriteLine($"Name:{category.Name}\t Status: {(category.IsStatus ? "Active" : "Passive")}");
            }
            else
            {
                Console.WriteLine("Kategori Bulunamadı.");
            }
            Console.WriteLine("-------------------------------------------------------------------------");


            //var updateCategory=db.Category.Find(3); //Tableti Televizyon yaptık
            //if( updateCategory != null )
            //{
            //    updateCategory.Name = "Televizyon";
            //    updateCategory.Description = "Televizyon Kategorisi";

            //    db.SaveChanges();
            //}


            var deleteCategory= db.Category.Find(3);
            db.Category.Remove(deleteCategory);
            db.SaveChanges();

            Console.WriteLine("Çıkmak için bir tuşa basınız...");
            Console.ReadLine();
        }
    }
}
