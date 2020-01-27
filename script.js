



function validare(e){
    e.preventDefault();

    var nume1 = document.querySelector(".nameBox1").value;
    var nume = document.querySelector(".nameBox").value;
    var mesaj = document.querySelector(".message");
    
    if(nume1.length<3){
            document.querySelector(".nameBox1").classList.add("invalid");
          }else if(nume1.length>=3){
            document.querySelector(".nameBox1").classList.remove("invalid");
          }

    if(nume.length<3){
            document.querySelector(".nameBox").classList.add("invalid");
          }else if(nume.length>=3){
            document.querySelector(".nameBox").classList.remove("invalid");
          }

          if(nume.length >= 3 && nume1.length >= 3){

            mesaj.innerText = 'Thank you for contacting us,'+" "+nume1+" "+ nume+"!";
            mesaj.classList.remove("hideMessage");
        
    }

}

    