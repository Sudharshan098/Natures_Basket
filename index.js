


 document.getElementById("tellme").addEventListener("click",myfunction)

function myfunction(){

  window.location.href="/Natures_Basket/navbarpage/organic.html"
   }

const slideShow=document.querySelectorAll(".slide_img")
const imageDelay=3000;
let counter=0;


slideShow[counter].style.display="block"
setInterval(nextImage,imageDelay)
function nextImage(){
   slideShow[counter].style.display="none"
   counter=(counter+1)%slideShow.length
   slideShow[counter].style.display="block"
}