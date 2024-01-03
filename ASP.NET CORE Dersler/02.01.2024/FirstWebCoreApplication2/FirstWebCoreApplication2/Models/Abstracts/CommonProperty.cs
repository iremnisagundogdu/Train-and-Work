namespace FirstWebCoreApplication2.Models.Abstracts
{
    public abstract class CommonProperty
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Description { get; set; }
        public bool IsStatus { get; set; }
        public bool IsDelete { get; set; }
    }
}
