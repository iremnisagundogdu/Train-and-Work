using KTStore.Areas.Admin.Services.Interfaces;
using KTStore.Data;
using KTStore.Models;
using Microsoft.EntityFrameworkCore;

namespace KTStore.Areas.Admin.Services.Models
{
    public class ProductService : IProductService
    {
        private readonly ApplicationDbContext db;
        public ProductService(ApplicationDbContext db)
        {
            this.db = db;
        }
        public Task<bool> AddProductAsync(Product product)
        {
            throw new NotImplementedException();
        }

        public Task<bool> DeleteProductAsync(int id)
        {
            throw new NotImplementedException();
        }

        public Task<List<Product>> GetAllProductAsync()
        {
            var productList=db.Product.ToList();
            return Task.FromResult(productList);
        }

        public Task<Product> GetProductByIdAsync(int id)
        {
                var product = db.Product.FirstOrDefaultAsync(x => x.Id == id && !x.IsDelete);
                return product;
        }

        public Task<bool> UpdateProductAsync(Product product)
        {
            throw new NotImplementedException();
        }
    }
}
