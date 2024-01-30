using KTStore.Data;
using KTStore.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;
using Iyzipay;
using Iyzipay.Model;
using Iyzipay.Request;
using Iyzipay.Model.V2.Subscription;

namespace KTStore.Areas.Customer.Controllers
{
    [Area("Customer")]
    public class CartController : Controller
    {
        private readonly ApplicationDbContext db;
        public ShoppingCardVM ShoppingCardVM { get; set; }
        public static OrderHeader orderHeader;
        public CartController(ApplicationDbContext db)
        {
            this.db = db;
        }
        public IActionResult Index()
        {
            return View(ShoppingCardVMFunction());
        }
        public IActionResult CompleteShopping()
        {
            return View(ShoppingCardVMFunction());
        }
        [HttpPost]
        public IActionResult CompleteShopping(OrderHeader header)
        {
            var claimsIdentity = (ClaimsIdentity)User.Identity;
            var claim = claimsIdentity.FindFirst(ClaimTypes.NameIdentifier);

            orderHeader.ApplicationUserId = claim.Value;
            orderHeader.Sehir = header.Sehir;
            orderHeader.Ulke= header.Ulke;
            orderHeader.Address = header.Address;
            orderHeader.Name = header.Name;
            orderHeader.Surname= header.Surname;
            orderHeader.OrderDate = DateTime.Now;
            orderHeader.PostCode = header.PostCode;

            return RedirectToAction("Order");
        }

        public IActionResult Order()
        {
            Options options = new Options();
            options.ApiKey = "sandbox-lUbo9K7LsFv1tJ6758sMzXFtqyhphoNM";
            options.SecretKey = "sandbox-ThUcalODIo68ZWIT66bwJKCJ84T9EyEN";
            options.BaseUrl = "Https://sandbox-api.iyzipay.com";

            //double savePrice = 0;
            //double delivaryShippingPrice = 38;
            //foreach (var item in GetCart().CartLines)
            //{
            //    savePrice += ((item.Quantity * item.Advert.Price) / 100) * campaignRepository.Detail(item.Advert.CampaignId).Rate;
            //}
            //double Price = GetCart().TotalPrice() - savePrice + delivaryShippingPrice;
            //string TotalPrice = Math.Round(Price, 2).ToString().Replace(',', '.');

            //var user = userRepository.UserAccount(User.Identity.Name);
            //var userShippingAddress = addressRepository.List().FirstOrDefault(x => x.UserId == user.Id && x.IsSelected == true);
            //var userProvince = provinceRepository.Detail(userShippingAddress.ProvinceId);


            CreateCheckoutFormInitializeRequest request = new CreateCheckoutFormInitializeRequest();
            request.Locale = Locale.TR.ToString();
            request.ConversationId = "123456789";
            request.Price = "1";
            request.PaidPrice = "1";
            request.Currency = Currency.TRY.ToString();
            request.BasketId = "B67832";
            request.PaymentGroup = PaymentGroup.PRODUCT.ToString();
            request.CallbackUrl = "https://localhost:7178/Customer/Cart/Success";

            //List<int> enabledInstallments = new List<int>();
            //enabledInstallments.Add(2);
            //enabledInstallments.Add(3);
            //enabledInstallments.Add(6);
            //enabledInstallments.Add(9);
            //request.EnabledInstallments = enabledInstallments;

            Buyer buyer = new Buyer();
            buyer.Id = "asdadsada";
            buyer.Name = "Erhan";
            buyer.Surname = "Kaya";
            buyer.GsmNumber = "+905554443322" ;
            buyer.Email = "email@email.com";
            buyer.IdentityNumber = "74300864791";
            buyer.LastLoginDate = "2015-10-05 12:43:35";
            buyer.RegistrationDate = "2000-12-12 12:00:00";
            buyer.RegistrationAddress = "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1";
            buyer.Ip = "85.34.78.112";
            buyer.City = "Istanbul";
            buyer.Country = "Turkey";
            buyer.ZipCode = "34732";
            request.Buyer = buyer;

            Address shippingAddress = new Address();
            shippingAddress.ContactName = "Erhan Kaya";
            shippingAddress.City = "Istanbul";
            shippingAddress.Country = "Turkey";
            shippingAddress.Description = "Bereket döner karşısı";
            shippingAddress.ZipCode = "34742";
            request.ShippingAddress = shippingAddress;

            Address billingAddress = new Address();
            billingAddress.ContactName = "Erhan Kaya";
            billingAddress.City = "Istanbul";
            billingAddress.Country = "Turkey";
            billingAddress.Description = "Bereket Döner";
            billingAddress.ZipCode = "34742";
            request.BillingAddress = billingAddress;

            List<BasketItem> basketItems = new List<BasketItem>();
            BasketItem basketProduct;
            basketProduct = new BasketItem();
            basketProduct.Id = "1";
            basketProduct.Name = "Asus Bilgisayar";
            basketProduct.Category1 = "Bilgisayar";
            basketProduct.Category2 = "";
            basketProduct.ItemType = BasketItemType.PHYSICAL.ToString();

            double price = 1;
            double endPrice = 1;
            basketProduct.Price = endPrice.ToString().Replace(",", "");
            basketItems.Add(basketProduct);

            request.BasketItems = basketItems;

            CheckoutFormInitialize checkoutFormInitialize = CheckoutFormInitialize.Create(request, options);
            ViewBag.pay = checkoutFormInitialize.CheckoutFormContent;
            return View();
        }
       
        public ShoppingCardVM ShoppingCardVMFunction()
        {
            var claimsIdentity = (ClaimsIdentity)User.Identity;
            var claim = claimsIdentity.FindFirst(ClaimTypes.NameIdentifier);
            ShoppingCardVM = new ShoppingCardVM()
            {
                ListCart = db.ShoppingCart.Where(x => x.ApplicationUserId == claim.Value).Include(i => i.Product),
                OrderHeader = new OrderHeader()
            };
            ShoppingCardVM.OrderHeader.OrderTotal = 0;
            ShoppingCardVM.OrderHeader.ApplicationUser = db.ApplicationUser.FirstOrDefault(x => x.Id == claim.Value);
            foreach (var item in ShoppingCardVM.ListCart)
            {
                ShoppingCardVM.OrderHeader.OrderTotal += (item.Quantity * item.Product.Price);
            }
            return ShoppingCardVM;
        }
        public IActionResult Success()
        {
            return View();
        }
    }
}
