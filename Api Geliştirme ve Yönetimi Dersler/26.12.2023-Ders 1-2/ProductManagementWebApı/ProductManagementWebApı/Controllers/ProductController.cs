using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProductManagementWebApı.Models;

namespace ProductManagementWebApı.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private static List<Product> _products = new List<Product>()
        {
            new Product(){Id=1, Name="Asus Bilgisayar", Price=15428, Stock=55, CategoryId=1, IsStatus=true},
            new Product(){Id=2, Name="Samsung S20", Price=28459, Stock=84, CategoryId=2, IsStatus=true},
            new Product(){Id=3, Name="Ipad 10 ", Price=15428, Stock=12, CategoryId=3, IsStatus=true},
            new Product(){Id=4, Name="Arçelik Buzdolabı", Price=44856, Stock=12, CategoryId=4, IsStatus=true},
        };

        public IEnumerable<Product> GetAll() 
        {
           
            return _products.Where(x => x.IsStatus).ToList();
        }

        [HttpGet("{id}")] 

        public Product GetById(int id)
        {
            var product = _products.FirstOrDefault(x => x.Id == id);
            return product;
        }
      

        [HttpDelete("{Id}")] 
        public IActionResult Delete(int id)
        {
            var product = _products.FirstOrDefault(x => x.Id == id);
            if (product != null)
            {
                _products.Remove(product);
                return StatusCode(200);
            }
            else
            {
                return StatusCode(404);
            }

        }

        [HttpPost]
        public IActionResult Post(Product product)
        {
            if (!String.IsNullOrEmpty(product.Name))
            {
                _products.Add(product);
                return Ok("Ekleme Başarılı");
            }
            else
            {
                return Ok("Category Name boş olamaz");
            }
        }

        [HttpPut]

        public IActionResult Put(Product product)
        {
            var findCategory = _products.FirstOrDefault(x => x.Id == product.Id);
            if (findCategory != null)
            {
                findCategory.Name = product.Name;
                findCategory.IsStatus = product.IsStatus;

                return Ok(product.Name + "Kategorisi başarılı bir şekilde eklendi.");
            }
            else
            {
                return Ok("Kategori bulunamadı.");
            }
        }

    }
}
