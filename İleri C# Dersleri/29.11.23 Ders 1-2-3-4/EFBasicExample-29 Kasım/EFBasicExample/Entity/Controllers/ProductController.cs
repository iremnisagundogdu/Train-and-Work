using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EFBasicExample.Entity.Controllers
{
    internal class ProductController
    {
        ProductCrud productCrud = new ProductCrud();
        public void ProductProccess()
        {

            bool status = true;
            while (status)
            {

                Console.WriteLine("------------------------------------");
                Console.WriteLine("--------- Product Proccess --------");
                Console.WriteLine("------------------------------------");
                Console.WriteLine("Select Proccess: ");
                Console.WriteLine("Product List   (1): ");
                Console.WriteLine("Get Product    (2): ");
                Console.WriteLine("Add Product    (3): ");
                Console.WriteLine("Update Product (4): ");
                Console.WriteLine("Delete Product (5): ");
                Console.WriteLine("Back Proccess   (0): ");
                Console.Write("Select: ");
                int selected = Convert.ToInt32(Console.ReadLine());
                Console.Clear();
                switch (selected)
                {
                    case 1:
                        ProductList();
                        break;
                    case 2:
                        GetProduct();
                        break;
                    case 3:
                        AddProduct();
                        break;
                    case 4:
                        UpdateCategdory();
                        break;
                    case 5:
                        DeleteProduct();
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

        public void ProductList()
        {
            Console.WriteLine("------------------------------------");
            Console.WriteLine("----------- Product List ----------");
            Console.WriteLine("------------------------------------");
            if (productCrud.GetList().Count > 0)
            {
                foreach (var item in productCrud.GetList())
                {
                    Console.WriteLine($"Id: {item.Id} \t Name: {item.Name} \t Price: {item.Price.ToString("c")} \t Stock: {item.Stock} Adet \t Category: {item.Category.Name}");
                                                                                                 // "c" lokal para birimi                                // FK CategoryId değil Category.Name yaptık
                }
            }
            else
            {
                Console.WriteLine("Ürün Listesi Boş");
            }
        }

        public int GetProduct()
        {
            Console.WriteLine("------------------------------------");
            Console.WriteLine("---------- Product Detail ---------");
            Console.WriteLine("------------------------------------");
            Console.Write("Enter Product Id: ");
            int id = Convert.ToInt32(Console.ReadLine());

            var product = productCrud.Get(id);
            if (product != null)
            {
                Console.WriteLine("Id        : " + product.Id);
                Console.WriteLine("Name      : " + product.Name);
                Console.WriteLine("Descriptin: " + product.Description);
                Console.WriteLine("Price     : " + product.Price.ToString("c"));
                Console.WriteLine("Stock     : " + product.Stock+" Adet");
                Console.WriteLine("Category  : " + product.Category.Name);
                Console.WriteLine("Status    : " + (product.IsStatus ? "Active" : "Passive"));
                return id;
            }
            else
            {
                Console.WriteLine("Not Found Product...");
                return 0;
            }
        }
        public void AddProduct()
        {
            Console.WriteLine("------------------------------------");
            Console.WriteLine("----------- Add Product -----------");
            Console.WriteLine("------------------------------------");
            Product product = new Product();

            Console.Write("Name         : ");
            product.Name = Console.ReadLine();

            Console.Write("Description  : ");
            product.Description = Console.ReadLine();

            Console.Write("Status (A/P) : ");
            string status = Console.ReadLine();
            status = status.Trim().Substring(0, 1).ToLower();

            product.IsStatus = status == "a" ? true : false;

            Console.WriteLine(productCrud.Add(product) ? "Kategori Ekleme Başarılı" : "Kategori Ekleme Başarısız");

        }
        public void UpdateCategdory()
        {
            Console.WriteLine("------------------------------------");
            Console.WriteLine("----------- Update Product -----------");

            ProductList();
            int id = GetProduct();
            if (id > 0)
            {
                Console.WriteLine("------------------------------------");
                Product product = new Product();

                Console.Write("Name         : ");
                product.Name = Console.ReadLine();

                Console.Write("Description  : ");
                product.Description = Console.ReadLine();

                Console.Write("Status (A/P) : ");
                string status = Console.ReadLine();
                status = status.Trim().Substring(0, 1).ToLower();

                product.IsStatus = status == "a" ? true : false;

                Console.WriteLine(productCrud.Update(product, id) ? "Kategori Düzenleme Başarılı" : "Kategori Düzenleme Başarısız");
            }

        }
        public void DeleteProduct()
        {
            Console.WriteLine("------------------------------------");
            Console.WriteLine("---------- Delete Product ---------");

            ProductList();
            int id = GetProduct();
            Console.WriteLine("------------------------------------");
            Console.Write("Are You Sure? (Y-N): ");
            string yn = Console.ReadLine();

            if (yn.ToLower() == "y")
            {
                Console.WriteLine(productCrud.Delete(id) ? "Kategori Silme Başarılı" : "Kategori Silme Başarısız");

            }
            else
            {
                Console.WriteLine("Silmekten Vazgeçtiniz.");
            }
        }
    }
}
