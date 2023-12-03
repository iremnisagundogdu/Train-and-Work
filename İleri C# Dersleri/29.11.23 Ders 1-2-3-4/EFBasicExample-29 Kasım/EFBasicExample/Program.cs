using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using EFBasicExample.Entity;
using EFBasicExample.Entity.Controllers;

namespace EFBasicExample
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //CategoryCrud categoryCrud = new CategoryCrud();

            //Category Ekleme
            //Category category = new Category()
            //{
            //    Name = "Tablet",
            //    Description = "Tablet Kategorisi"
            //};

            //Console.WriteLine(categoryCrud.Add(category) ? "Kategori Ekleme Başarılı" : "Ekleme Başarısız");


            //Category Silme
            //if (categoryCrud.Delete(2))
            //{
            //    Console.WriteLine("Silme İşlemi Başarılı");
            //}
            //else
            //{
            //    Console.WriteLine("Silme İşlemi Başarısız");
            //}

            //Category Getirme

            //var category = categoryCrud.Get(2);
            //if (category != null)
            //{
            //    Console.WriteLine($"Name: {category.Name}");
            //}
            //else
            //{
            //    Console.WriteLine("Not Found Category");
            //}

            //Category Listesi Getirme

            //if (categoryCrud.GetList().Count > 0)
            //{
            //    foreach (var item in categoryCrud.GetList())
            //    {
            //        Console.WriteLine($"Name: {item.Name} \t Status: {item.IsStatus}");
            //    }
            //}
            //else
            //{
            //    Console.WriteLine("Kategory Listesi Boş");
            //}


            //Kategori Güncelleme

            //var category = new Category()
            //{
            //    Name = "Televizyon",
            //    Description = "Televizyon Kategori"
            //};

            //if (categoryCrud.Update(category, 5))
            //{
            //    Console.WriteLine("Düzenleme Başarılı");
            //}
            //else
            //{
            //    Console.WriteLine("Düzenleme Başarısız");
            //}

            //Console.ReadLine();


            CategoryController categoryController =new CategoryController();
            ProductController productController=new ProductController();
            bool status = true;
            while (status)
            {
                Console.WriteLine("--------- Product Magament ---------");
                Console.WriteLine("------------------------------------");
                Console.WriteLine("Select Proccess: ");
                Console.WriteLine("Category Proccess (1): ");
                Console.WriteLine("Product Proccess  (2): ");
                Console.WriteLine("Exit Program      (0): ");
                Console.Write("Select: ");
                int selectProccess = Convert.ToInt32(Console.ReadLine());
                Console.Clear();
                switch (selectProccess)
                {
                    case 1:
                        categoryController.CategoryProccess();
                        break;
                    case 2:
                        productController.ProductProccess();
                        break;
                    case 0:
                        status = false;
                        Console.WriteLine("Program Kapatılıyor....");
                        Console.ReadLine();
                        continue;
                        break;
                    default:
                        Console.WriteLine("Tanımlanmaya proccess. Tekrar Deneyiniz.");
                        break;
                }
                Console.Clear();
            }
        }

    }
}
