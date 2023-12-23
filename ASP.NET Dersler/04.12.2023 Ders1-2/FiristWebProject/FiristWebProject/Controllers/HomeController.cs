using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

// NOTLAR:
//MVC: Model-View-Controller
//View: Bütün HTML sayfalarımızın bulunduğu kısım.Ekranda çıkacak olan her şey.
//Model: Önemli olan classları ekliyorum.
//Controller: Web sitemin ilk açıldığı anda uğradığı yer. Bir web sitesinde istek gönderildiğinde isteği ilk karşılayan kısım.
// Controller'dan sonra içerde Model varsa Model'e gider.Sonra tekrar Controller.Sonra View.
namespace FiristWebProject.Controllers
{
    public class HomeController : Controller
        //Controller oluştururken class adı+Controller(Örn:HomeController)
    {
        public ActionResult Index() // ActionResult:Sayfa Yapısı
            // Default olarak açılacak sayfa index olarak karşımıza çıkar. Buradaki index,
            // View>Home>index.cshtml dosyasını temsil ediyor.
        {
            string value = "Anasayfa"; // Bu anasayfa yazısını index.cshtml'e göndermem gerekiyor. (Veri Taşıma Yöntemi /Viewbag)
            ViewBag.Erhan = value + " İsmail"; // Erhan adında bir veri çantasıyla sayfama veri göndereceğim. index.cshtml'e gidip orada bu yapıyı çekmem gerekiyor.
            // Birden fazla viewbag kullanabilirim.

            string[] isimler = { "Merve","Ahmet", "Adem","Yasin" };
            ViewBag.Isimler = isimler;

            //İlk başvurmam gereken veri taşıma yöntemi değeri model olarak göndermek.Bunun için return View içerisine değişken ismimi yazıyorum. Aşağıda örnek verelim:

            string[] selam = { "Merhaba" } ;

            return View(selam); //Artık index.cshtml'im string türünden bir model almak zorunda.
        }
        // Bir controller oluşturduğumuzda Views klasörü altında controllera bağlı olarak bir view klasörü oluşturacak.

        // Yapmış olduğumuz her yapının bir MasterPage' i olması gerek. (Layout Yapısı / Sabit bir çerçeve yapısı / Navbar, Footer..)
        // Views>Shared>_layout.cshtml

        // Her eklediğimiz sayfa bir controllera ait olmak zorunda...


        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult Galeri() // Galeri sağ click > Add View. Oluşan view View klasörü altındaki Home Klasörü altına "Galeri.cshtml" olarak gitti.
        {
            return View();
        }

        // VERİ TAŞIMA YÖNTEMLERİ: 1) Viewbag 2)Model olarak göndermek. (ilk başvuracağım nokta da bu.) 

        // Viewden Controller'a iki yöntemle veri gönderebilirsin. Biri "post" diğeri "get" .

    }
}