using KTStore.Areas.Admin.Services.Interfaces;
using KTStore.Models;
using Microsoft.AspNetCore.Mvc;

namespace KTStore.Areas.Admin.Controllers
{
    [Area("Admin")]
    public class ProductController : Controller
    {
        private readonly IProductService productService;
        public ProductController(IProductService productService)
        {
            this.productService = productService;
        }

        public async Task<IActionResult> Index()
        {
            var list=await productService.GetAllProductAsync();
            return View(list);
        }
          public async Task<IActionResult> Detail()
        {
            var product =await productService.GetProductByIdAsync(2);
            ShoppingCart cart = new ShoppingCart()
            {
                Product=product,
                ProductId=product.Id
            };
            return View(cart);
        }

    }
}
