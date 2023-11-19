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
let linkEkle=()=>{
    const linkYazisi=document.getElementById("linkYazisi").value;
    const linkYolu=document.getElementById("linkYolu").value;
    const linkClass=document.getElementById("linkClass").value;

    let link='<a class="'+linkClass+'" href="'+linkYolu+'" target="_blank">'+linkYazisi+'</a>';
    content.innerHTML+=link;
    alert("Link Ekleme Başarılı")  
          
}
let inputEkle=()=>{
    const inputYazisi=document.getElementById("inputYazisi").value;
    const inputType=document.getElementById("inputType").value;
    const inputClass=document.getElementById("inputClass").value;
    let input="";
    switch(inputType){
        case "textarea":
            input='<textarea class="'+inputClass+'">'+inputYazisi+'</textarea>'
            break;
        case "password":
        case "number":
        case "text":
            input='<input type="'+inputType+'" class="'+inputClass+'" placeholder="'+inputYazisi+'">';
            break;
        case "color":
            input='<label>'+inputYazisi+'</label> <input type="'+inputType+'" class="'+inputClass+'">';
            break;
        case "submit":
        case "button":
            input='<input type="'+inputType+'" class="'+inputClass+'" value="'+inputYazisi+'">';
            break;
        case "radio":
            let inputName=document.getElementById("inputName").value;
            input='<label>'+inputYazisi+'</label><input type="'+inputType+'" class="'+inputClass+'" name="'+inputName+'"><br>';
            break

      
    }
    input==""? alert("Tanımsız Input Türü") : alert("input ekleme başarılı");

    content.innerHTML+=input;
    
          
}

const nameInput=document.getElementById("inputName");
nameInput.style.display="none";

let nameInputControl=(selected)=>{

    let inputText=selected.options[selected.selectedIndex].textContent;
    // if(inputText=="Radio"){
    //     nameInput.style.display="block";
    // }
    // else{
    //     nameInput.style.display="none";
    // }

    nameInput.style.display= inputText=="Radio"? "block" : "none";
}