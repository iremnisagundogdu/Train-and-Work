
using Microsoft.AspNetCore.Mvc;
using KTStore.Models;
using Newtonsoft.Json;
using KTStore.Areas.Admin.Services.Interfaces;

namespace KTStore.Areas.Admin.Controllers
{
    [Area("Admin")]
    public class CartController : Controller
    {
        private readonly IProductService productService;
        public CartController(IProductService productService)
        {
            this.productService = productService;
        }
        public IActionResult Index()
        {
            return View(GetCart());
        }

        public Cart GetCart()
        {

            var carJson = HttpContext.Session.GetString("Cart");
            if (carJson != null)
            {
                Cart cart = JsonConvert.DeserializeObject<Cart>(carJson);
                return cart;
            }

            return new Cart();
        }

        public async Task<IActionResult> AddToCart(int id, int quantity)
        {
            var product = await productService.GetProductByIdAsync(id);
            if (product != null)
            {
                GetCart().AddProduct(product, quantity);
            }

            return Redirect(Request.Headers["Referrer"].ToString());//Get isteğinde aynı sayfayı döndürür
        }
        public async Task<IActionResult> RemoveFromCart(int id)
        {
            var product = await productService.GetProductByIdAsync(id);
            if (product != null)
            {
                GetCart().RemoveProduct(product);
            }
            return Redirect(Request.Headers["Referrer"].ToString());
        }

        public ActionResult ClearCart()
        {
            if (GetCart().CartLines.Count > 0)
            {
                GetCart().Clear();
            }
            return Redirect(Request.Headers["Referrer"].ToString());
        }

        public IActionResult CheckOut()
        {
            return View(GetCart());
        }

        public IActionResult Success()
        {
            return View();
        }
    }
}
