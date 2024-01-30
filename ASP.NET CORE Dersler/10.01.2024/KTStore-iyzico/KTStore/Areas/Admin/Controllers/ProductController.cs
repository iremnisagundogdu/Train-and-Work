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
        

    }
}
