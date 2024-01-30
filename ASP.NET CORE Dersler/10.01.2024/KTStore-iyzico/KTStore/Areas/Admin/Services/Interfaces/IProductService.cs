using KTStore.Models;

namespace KTStore.Areas.Admin.Services.Interfaces
{
    public interface IProductService
    {
        public Task<bool> AddProductAsync(Product product);
        public Task<List<Product>> GetAllProductAsync();
        public Task<Product> GetProductByIdAsync(int id);
        public Task<bool> UpdateProductAsync(Product product);
        public Task<bool> DeleteProductAsync(int id);
    }
}
