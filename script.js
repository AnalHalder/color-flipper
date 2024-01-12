let btn=document.getElementById("flip");

btn.addEventListener("click",()=>{
    let red = Math.floor(Math.random() * 256); 
    let green = Math.floor(Math.random() * 256); 
    let blue = Math.floor(Math.random() * 256);

    let color="rgb("+red+","+green+","+blue+")";
    document.body.style.backgroundColor=color;
    document.getElementById("code").innerHTML=color;
   }
);
