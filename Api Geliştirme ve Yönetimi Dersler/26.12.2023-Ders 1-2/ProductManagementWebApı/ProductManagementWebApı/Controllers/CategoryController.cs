using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProductManagementWebApı.Models;

namespace ProductManagementWebApı.Controllers
{
    [Route("api/[controller]")] // Burada yazan controller direkt bulunduğu controller'ı temsil ediyor.Burası Category'yi temsil ediyor.
    [ApiController] //Attribute olarak geliyor.
    public class CategoryController : ControllerBase // Bu kalıtım, kullanacağımız yapıyı dışarı json olarak verebilmemizi sağlıyor. Bir class yapısı geliyorsa bunu olduğu gibi nesne olarak döndürmez bir json nesnesine convert edip döndürür.
    {
        private static List<Category> _categories = new List<Category>() // static kullanıyoruz çünkü her yerden erişebilmek için.En son halinde kalmasını istiyorum. Static yapı bunu sağlıyor. Static kullanmasam newlemem gerekecek bu sefer ilk hali gelecek. Bunu istemiyorum.
        {
            new Category(){Id=1, Name="Bilgisayar", IsStatus=true},
            new Category(){Id=2, Name="Telefon", IsStatus=true},
            new Category(){Id=3, Name="Tablet", IsStatus=true},
            new Category(){Id=4, Name="Beyaz Eşya", IsStatus=false},
        };
        [HttpGet]
        //..api/Category
        public IEnumerable<Category> GetAll() //İlk sayfa karşılayan metot Get. Get olarak göndermiş olduğun bir tane metot olması gerekiyor.
        {
            //IEnumarable ön belleği şişirmez daha verimli kullanır.
            return _categories.Where(x => x.IsStatus).ToList();
        }

        [HttpGet("{id}")] // Burada Id parametresi aldığımı söylemem lazım.

        public Category GetById(int id)
        {
            var category = _categories.FirstOrDefault(x=>x.Id==id);
            return category;
        }
        //İki tane get metodu kullandım.Üsttekinde parametre almıyorum.Alttakinde parametre alıyorum!

        [HttpDelete("{Id}")] // Bu yapıyı url de kullanamıyoruz bu nedenle postman gibi bir şey kullanmalıyız. Url sadece get yapısıyla çalışır. Post,put delete yapısıyla url kullanılamaz. Bunları kullanabilmek için Postman, Advancer Rest Client benzeri yapı kullanmamız gerekir.
        public IActionResult Delete(int id)
        {
            var category = _categories.FirstOrDefault(x=>x.Id==id);
            if (category != null)
            {
                _categories.Remove(category);
                return StatusCode(200);//Başarılı
            }
            else
            {
                return StatusCode(404);//Bulunamadı
            }
           
        }

        [HttpPost]
        public IActionResult Post(Category category)
        {
            if (!String.IsNullOrEmpty(category.Name))
            {
                _categories.Add(category);
                return Ok("Ekleme Başarılı");
            }
            else
            {
                return Ok("Category Name boş olamaz");
            }
        }

        [HttpPut]//Put işlemini iki türlü kullanıyoruz.Biri Id'yi nesnenin içine alıp o şekilde gönderme. Diğeri parametre vererek.

        public IActionResult Put(Category category)
        {
            var findCategory=_categories.FirstOrDefault(x=>x.Id == category.Id);
            if (findCategory != null)
            {
                findCategory.Name = category.Name;
                findCategory.IsStatus = category.IsStatus;

                return Ok(category.Name + "Kategorisi başarılı bir şekilde eklendi.");
            }
            else
            {
                return Ok("Kategori bulunamadı.");
            }
        }

        [HttpPut("{Id}")]
        public IActionResult Put2(int id,Category category)
        {
            var findCategory=_categories.FirstOrDefault( x=>x.Id==id);
            if(findCategory != null)
            {
                findCategory.Name = category.Name;
                findCategory.IsStatus= category.IsStatus;
                return Ok(category.Name + "Ktegorisi başarılı bir şekilde eklendi.");
            }
            else
            {
                return Ok("Kategori bulunamadı.");
            }
        }
    }
}
