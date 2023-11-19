//for Dögüsü

// for(let i=0;i<5;i++){
//     alert("Hello World")
// }
// for(let i=0;i<5;i++){
//     alert(i+" Hello World")
// }
// for(let i=0;i<=5;i++){
//     alert(i+" Hello World")
// }
// for(let i=1;i<=5;i++){
//     alert(i+" Hello World")
// }
// for(let i=1;i<6;i++){
//     alert(i+" Hello World")
// }
// for(let i=0;i<5;i++){
//     alert((i+1)+" Hello World")
// }

// i değerinin başlangıç değeri verilir
//i değerinin 5 ten küçük olma durumu kontrol edilir
//i değeri 5ten küçük ise scope içerisindeki kodlar çalışır
// kodlar bittikten sonra i değer 1 artar(i++)
// i değeri 5ten küçük mü diye kontrol eder küçükse kod tekrar çalışr 
// i değeri artar 5ten küçük değilse döngü biter (break)

let yazi=document.getElementById("yazi");
for (let i = 0; i < 10; i++) {
   yazi.innerHTML+=(i+1)+" Javascript <br>";
}

let alertText="";

for(let i=0;i<5;i++){
   alertText+="Javascritp \n";
}
alert(alertText);

for(let i=10; i>0; i--){
   yazi.innerHTML+=i+"Merhaba JavaScript <br>";
}

//Çift sayıları yazdır.
for(let i=10; i>0; i--){
if(i%2==0)
{
  yazi.innerHTML+=i+"<br>";
}
}

//Tek sayıları yazdır.
for(let i=10; i>0; i--){
   if(i%2!=0)
   {
     yazi.innerHTML+=i+"<br>";
   }
   }

   // for dögüsü bitsin istemiyorum, işlemin bir basamak atlamasını istiyorum 
   for(let i=0; i<20; i++){
      debugger;

      if(i==5){
         continue; // şart sağlandığında eğer devamında kod varsa bunları es geçer
                  // for döngüsü bu adımı atlayarak i'yi arttırır ve kaldığı yerden devam eder. 
      }
   }

   // break yapısı: şart sağlandığında işlemi bitiriyor. Döngü devam etmiyor.
   for(let i=0; i<20 ; i++){
      if(i==11){
         break;
      }
      yazi.innerHTML+=i+"<br>";
   }

   // break yapısına örnek uygulama

   let sayi;
   let sonuc=0;
   for(let i=0; i<100; i++){
      sayi=prompt(`Sayı Giriniz (Son Durum= ${sonuc})\n Çıkış için 'exit' yazınız.`);
      if (sayi=="Exit"){
         break;
      }
      sonuc+=Number(sayi);
   }