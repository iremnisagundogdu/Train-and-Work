

function hesapla(){
    var sayi1=document.getElementById("sayi1").value;
    var sayi2=document.getElementById("sayi2").value;
    var oprt=document.getElementById("oprt").value;
    var sonuc=document.getElementById("sonuc");
    
    if(oprt=="+"){
        sonuc.innerText="Toplama Sonucu: "+(Number(sayi1)+Number(sayi2));
    }
    else if(oprt=="-"){
        sonuc.innerText="Çıkartma Sonucu: "+(Number(sayi1)-Number(sayi2));
    }
    else if(oprt=="/"){
        sonuc.innerText="Bölme Sonucu: "+(Number(sayi1)/Number(sayi2));
    }
    else if(oprt=="*"){
        sonuc.innerText="Çarpma Sonucu: "+(Number(sayi1)*Number(sayi2));
    }
    else if(oprt=="%"){
        sonuc.innerText="Mod Sonucu: "+(Number(sayi1)%Number(sayi2));
    }
}

function hesapla2(){
    var ekran=document.getElementById("ekran").value;
    document.getElementById("sonuc2").innerText=eval(ekran);
}
