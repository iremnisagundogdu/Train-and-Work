function f1(){
    document.getElementById("fonksiyon1").innerText="Fonksiyon 1";
}
f1();

let f2=()=>document.getElementById("fonksiyon2").innerText="Fonksiyon 2";
f2();

let redColor=()=>"Red";
let blueColor=()=>"Blue";
let greenColor=()=>"Green";
let red="Red";
function blue(){
    return "Blue";
}
let addColor=(color)=>{
    document.getElementById("fonksiyon1").style.backgroundColor=color;
    document.getElementById("btn").style.backgroundColor=color;
};

let colors={
    Red:()=>"Red",
    Blue:()=>"Blue",
    Green:()=>"Green",
    Black:()=>"Black",
    Orange:()=>"Orange",
    Purple:()=>"Purple"
}

let selectColor=()=>{
    let select=document.getElementById("colorSelect");
    let selectedColor=select.options[select.selectedIndex].textContent;
    let color=colors[selectedColor];
   
    let box=document.getElementById("box");
    box.style.backgroundColor=color();
}

let selectColor2=()=>{
    let box=document.getElementById("box");
    let select=document.getElementById("colorSelect").value;
    box.style.backgroundColor=select;
}



