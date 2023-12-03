using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EFBasicExample.Entity.Controllers
{
    internal class CategoryController
    {
        CategoryCrud categoryCrud = new CategoryCrud();
        public void CategoryProccess() //Bütün proses burada işelenecek.Burası çağrıldığında kategori ile ilgili işlemleri isteyeceğiz.
        {
            
            bool status = true;
            while (status)
            {

                Console.WriteLine("------------------------------------");
                Console.WriteLine("--------- Category Proccess --------");
                Console.WriteLine("------------------------------------");
                Console.WriteLine("Select Proccess: ");
                Console.WriteLine("Category List   (1): ");
                Console.WriteLine("Get Category    (2): ");
                Console.WriteLine("Add Category    (3): ");
                Console.WriteLine("Update Category (4): ");
                Console.WriteLine("Delete Category (5): ");
                Console.WriteLine("Back Proccess   (0): ");
                Console.Write("Select: ");
                int selected = Convert.ToInt32(Console.ReadLine());
                Console.Clear();
                switch (selected)
                {
                    case 1:
                        CategoryList();
                        break;
                    case 2:
                        GetCategory();
                        break;
                    case 3:
                        AddCategory();
                        break;
                    case 4:
                        UpdateCategdory();
                        break;
                    case 5:
                        DeleteCategory();
                        break;
                    case 0:
                        status = false;
                        continue;
                        break;
                    default:
                        break;
                }
                Console.ReadLine();
                Console.Clear();
               
            }
        }

        public void CategoryList()
        {
            Console.WriteLine("------------------------------------");
            Console.WriteLine("----------- Category List ----------");
            Console.WriteLine("------------------------------------");
            if (categoryCrud.GetList().Count > 0)
            {
                foreach (var item in categoryCrud.GetList())
                {
                    Console.WriteLine($"Id: {item.Id} \t Name: {item.Name}");
                }
            }
            else
            {
                Console.WriteLine("Kategory Listesi Boş");
            }
        }
        
        public int GetCategory()
        {
            Console.WriteLine("------------------------------------");
            Console.WriteLine("---------- Category Detail ---------");
            Console.WriteLine("------------------------------------");
            Console.Write("Enter Category Id: ");
            int id = Convert.ToInt32(Console.ReadLine());
           
            var category=categoryCrud.Get(id); // aldığım id'yi döndürecek yapım Get()
            if (category != null)
            {
                Console.WriteLine("Id        : " + category.Id);
                Console.WriteLine("Name      : " + category.Name);
                Console.WriteLine("Descriptin: " + category.Description);
                Console.WriteLine("Status    : " + (category.IsStatus?"Active":"Passive"));
                return id; // Update metodu içerisine id parametresini verebilmek için id döndürsün istiyorum.
            }
            else
            {
                Console.WriteLine("Not Found Category...");
                return 0; // Update metodu içerisine id parametresini verebilmek için id döndürsün istiyorum.
            }
        }

        public void AddCategory()
        {
            Console.WriteLine("------------------------------------");
            Console.WriteLine("----------- Add Category -----------");
            Console.WriteLine("------------------------------------");
           
            Category category=new Category();

            Console.Write("Name         : ");
            category.Name=Console.ReadLine();

            Console.Write("Description  : ");
            category.Description=Console.ReadLine();

            Console.Write("Status (A/P) : ");
            string status=Console.ReadLine();
            status=status.Trim().Substring(0,1).ToLower(); // İlk karakteri aldım.
           
            category.IsStatus= status == "a" ?true :false;

            Console.WriteLine(categoryCrud.Add(category)?"Kategori Ekleme Başarılı":"Kategori Ekleme Başarısız");

        }
        public void UpdateCategdory()
        {
            Console.WriteLine("------------------------------------");
            Console.WriteLine("----------- Update Category -----------");
             //İlk önce hangi ürünü düzenleyeceksem o ürünü bulmam gerekiyor.Bunun için GetCategory kullanacağım.
             //GetCategory() id isteyip o kategorinin değerlerini ekrana yazdırıyordu.  
           
            CategoryList(); // Kategorileri görmek için listeledik
            int id=GetCategory();// GetCategory'nin id göndermesini istiyorum ki Update metodu içerisinde bu id'yi parametre olarak kullanabileyim.
            // Bunun için yukarıda GetCategory de return id ve return 0 yapılarını ekledik.
            if(id > 0)
            {
                Console.WriteLine("------------------------------------");
                Category category = new Category();

                Console.Write("Name         : ");
                category.Name = Console.ReadLine();

                Console.Write("Description  : ");
                category.Description = Console.ReadLine();

                Console.Write("Status (A/P) : ");
                string status = Console.ReadLine();
                status = status.Trim().Substring(0, 1).ToLower();

                category.IsStatus = status == "a" ? true : false;

                Console.WriteLine(categoryCrud.Update(category, id) ? "Kategori Düzenleme Başarılı" : "Kategori Düzenleme Başarısız");
            }
           
        }
        public void DeleteCategory()
        {
            Console.WriteLine("------------------------------------");
            Console.WriteLine("---------- Delete Category ---------");

            CategoryList();
            int id = GetCategory();
            Console.WriteLine("------------------------------------");
            Console.Write("Are You Sure? (Y-N): ");
            string yn=Console.ReadLine();

            if (yn.ToLower() == "y")
            {
                Console.WriteLine(categoryCrud.Delete(id) ? "Kategori Silme Başarılı" : "Kategori Silme Başarısız");

            }
            else
            {
                Console.WriteLine("Silmekten Vazgeçtiniz.");
            }
        }
    }
}
