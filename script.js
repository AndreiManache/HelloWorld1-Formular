
var alert = document.querySelector(".alert");
var names = document.querySelectorAll(".validate").value;
var button = document.querySelector(".button");

button.addEventListener('click',function showMessage(){

    if(names === ""){
       names.classList.add('redBorder'); 
    }
   
    
    
})
