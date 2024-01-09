using System.ComponentModel.DataAnnotations.Schema;

namespace KTStore.Models
{
    public class OrderHeader
    {
        public int Id { get; set; }
        public string? ApplicationUserId { get; set; }
        [ForeignKey(nameof(ApplicationUserId))]
        public ApplicationUser? ApplicationUser { get; set; }
        public DateTime OrderDate { get; set; }
        public double OrderTotal { get; set; }
        public string? OrderStatus { get; set; }
        public string? Name { get; set; }
        public string? Surname { get; set; }
        public string? Address { get; set; }
        public string? PostCode { get; set; }
        public string? Sehir { get; set; }
        public string? Ulke { get; set; }
    }
}
