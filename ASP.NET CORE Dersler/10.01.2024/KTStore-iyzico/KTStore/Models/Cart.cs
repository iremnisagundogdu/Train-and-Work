namespace KTStore.Models
{
    public class Cart
    {
       
        private List<CartLine> _cartLines=new List<CartLine>();

        public List<CartLine> CartLines
        {
            get { return _cartLines; }
        }

        public void AddProduct(Product product,int quantity)//Eğer quantity + değerde gelirse sepet adeti artacak - değerde gelirse sepet değeri azalacak
        {
            var line=_cartLines.FirstOrDefault(x=>x.Product.Id== product.Id);
            if(line==null) 
            { 
                _cartLines.Add(new CartLine() { Product=product,Quantity=quantity});
            }
            else
            {
                line.Quantity += quantity;
                if(line.Quantity == 0) //eğer sepet değeri azalır ve 0 a düşerse ürün sepetten silinecek
                { 
                    _cartLines.RemoveAll(x=>x.Product.Id == product.Id);
                }
            }
        }

        public void RemoveProduct(Product product)
        {
            _cartLines.RemoveAll(x=>x.Product.Id != product.Id);
        }

        public void Clear()
        {
            _cartLines.Clear();
        }

        public double TotalPrice()
        {
            double price = 0;

            price=_cartLines.Sum(x=>x.Product.Price*x.Quantity);

            return price;
        }
    }

     public class CartLine
    {
        public Product Product { get; set; }
        public int Quantity { get; set; }
    }
}
