using System.ComponentModel.DataAnnotations;

namespace KTStore.Models.Abstracts
{
    public abstract class LongCommonProperty
    {
        public int Id { get; set; }
        [Required]
        public string? Name { get; set; }
        public string? Description { get; set; }
        public string? Image { get; set; } = "empty.jpg";
        public bool IsStatus { get; set; }
        public bool IsDelete { get; set; }

    }
}
