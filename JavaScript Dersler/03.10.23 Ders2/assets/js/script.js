let content=document.getElementById("content");
let baslikEkle=()=>{
    const baslikYazisi=document.getElementById("baslikYazisi").value;
    const baslikBoyutu=document.getElementById("baslikBoyutu").value;
    const baslikClass=document.getElementById("baslikClass").value;

    let baslik='<'+baslikBoyutu+' class="'+baslikClass+'">'+
                baslikYazisi+'</'+baslikBoyutu+'>';
    try{
        content.innerHTML+=baslik;
        alert("Başlık Ekleme Başarılı")  
    }
    catch(hata){
        alert("Beklenmedik Bir Hata Oluştu.\n"+hata.name+": "+hata.Message)
    }
              
}
let paragrafEkle=()=>{
    const paragrafYazisi=document.getElementById("paragrafYazisi").value;
    const paragrafFontu=document.getElementById("paragrafFontu").value;
    const paragrafClass=document.getElementById("paragrafClass").value;

    let paragraf='<p class="'+paragrafClass+'" style="font-size:'+paragrafFontu+'px">'+paragrafYazisi+'</p>';
 
    content.innerHTML+=paragraf;
    alert("Paragraf Ekleme Başarılı")  
          
}
