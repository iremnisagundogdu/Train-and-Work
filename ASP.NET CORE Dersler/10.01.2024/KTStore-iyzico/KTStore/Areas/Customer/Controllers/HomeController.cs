using KTStore.Areas.Admin.Services.Interfaces;
using KTStore.Data;
using KTStore.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using System.Security.Claims;

namespace KTStore.Areas.Customer.Controllers
{
    [Area("Customer")]
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly IProductService productService;
        private readonly ApplicationDbContext db;
        public HomeController(ILogger<HomeController> logger,IProductService productService, ApplicationDbContext db)
        {
            _logger = logger;
            this.productService = productService;
            this.db = db;
        }

        public async Task<IActionResult> Index()
        {
            var list=await productService.GetAllProductAsync();
            return View(list);
        }

        public async Task<IActionResult> Detail(int id)
        {
            var product = await productService.GetProductByIdAsync(id);
            if(product == null) return RedirectToAction("Error");

            var cart = new ShoppingCart()
            {
                Product = product,
                ProductId = id
            };
            return View(cart);
        }
        [HttpPost]
        [Authorize]
        public async Task<IActionResult> Detail(ShoppingCart cart){
            cart.Id = 0;
            var product=await productService.GetProductByIdAsync(cart.ProductId);

            
                var claimsIdentity=(ClaimsIdentity)User.Identity;
                var claims = claimsIdentity.FindFirst(ClaimTypes.NameIdentifier);
                cart.ApplicationUserId = claims.Value;

                var newCart= db.ShoppingCart.FirstOrDefault(x=>x.ApplicationUserId == claims.Value && x.ProductId==cart.ProductId);

                if(cart.Quantity >=1 && product.Stock>=cart.Quantity)
                {
                    if (newCart != null)
                    {
                        newCart.Quantity += cart.Quantity;
                    }
                    else
                    {
                        db.ShoppingCart.Add(cart);
                    }
                    db.SaveChanges();

                    var quantity = db.ShoppingCart.Where(x => x.ApplicationUserId == cart.ApplicationUserId).ToList().Count;
                    HttpContext.Session.SetInt32(Other.Session_Shoping_Cart, quantity);
                }
            
            cart.Product=product;

            return View(cart);
        }
        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}