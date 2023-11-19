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