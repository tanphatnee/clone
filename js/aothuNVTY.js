const colourButton1 = document.querySelector(".colour1")
const colourButton2 = document.querySelector(".colour2")
const colourButton3 = document.querySelector(".colour3")
if(colourButton1){
    colourButton1.addEventListener("click",function(){
        document.querySelector(".img2").style.display = "none" 
        document.querySelector(".img3").style.display = "none" 
        document.querySelector(".img1").style.display = "flex"
        document.querySelector(".colour1").style.border = "1px solid #000";
        document.querySelector(".colour2").style.border = "none";
        document.querySelector(".colour3").style.border = "none";
        document.querySelector(".colour1").style.borderRadius = "50%";

    })
}
if(colourButton2){
    colourButton2.addEventListener("click",function(){
        document.querySelector(".img2").style.display = "flex" 
        document.querySelector(".img3").style.display = "none" 
        document.querySelector(".img1").style.display = "none"
        document.querySelector(".colour2").style.border = "1px solid #000";
        document.querySelector(".colour3").style.border = "none";
        document.querySelector(".colour1").style.border = "none";
        document.querySelector(".colour2").style.borderRadius = "50%";


    })
}
if(colourButton3){
    colourButton3.addEventListener("click",function(){
        document.querySelector(".img2").style.display = "none" 
        document.querySelector(".img3").style.display = "flex" 
        document.querySelector(".img1").style.display = "none"
        document.querySelector(".colour3").style.border = "1px solid #000";
        document.querySelector(".colour1").style.border = "none";
        document.querySelector(".colour2").style.border = "none";
        document.querySelector(".colour3").style.borderRadius = "50%";


    })
}