var hesapMakinesi=document.getElementById("hesapMakinesi");

hesapMakinesi.addEventListener("keypress",function(event){
    if(event.key=="Enter"){
        event.preventDefault();
        hesapMakinesi.value=eval(hesapMakinesi.value);
    }
})

    //kilo/boy*boy
    //her yaş aralığı için 10ar yaş arttığın bke *1.01 
    //eğer kişi kadınsa *0.9
    //eğer kişi erkek *1.1

//bke<18.5 zayıf
//18.5<bke<24.9 normal
//25<bke<29.9 kilolu
//bke>29.9 obez


function bke(){
    var boy=document.getElementById("boy").value;
    var kilo=document.getElementById("kilo").value;
    var yas=document.getElementById("yas").value;
    var cinsiyet=document.getElementById("cinsiyet").value;

    var bkeSonuc=document.getElementById("bkeSonuc");

    var bkehesap=(kilo/(boy*boy))*10000;
    if(cinsiyet=="kadin"){
        bkehesap*=0.9;
    }
    else{
        bkehesap*=1.1;
    }
    
    yas=((yas-(yas%10))/1000)+1;// 22 > mod10>2 >> 22-2=20> 20/1000=0.02 >> 0.02+1=1.02
    bkehesap*=yas;

    if(bkehesap<18.5){
        bkeSonuc.innerText="Endeks= "+bkehesap+" Sonuç: Zayıf";
    }
    else if(bkehesap<24.9){
        bkeSonuc.innerText="Endeks= "+bkehesap+" Sonuç: Normal";
    }
    else if(bkehesap<29.9){
        bkeSonuc.innerText="Endeks= "+bkehesap+" Sonuç: Kilolu";
    }
    else if(bkehesap>30){
        bkeSonuc.innerText="Endeks= "+bkehesap+" Sonuç: Obez";
    }
}