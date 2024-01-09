using System.ComponentModel.DataAnnotations.Schema;

namespace KTStore.Models
{
    public class ShoppingCart
    {
        public ShoppingCart() 
        {
            Quantity = 1;
        }
        public int Id { get; set; }
        public string? ApplicationUserId { get; set; }
        [ForeignKey("ApplicationUserId")]
        public ApplicationUser? ApplicationUser { get; set; }
        public int ProductId { get; set; }
        [ForeignKey("ProductId")]
        public Product? Product { get; set; }
        public int Quantity { get; set; }
        [NotMapped]
        public double Price { get; set; }
    }
}
