var addbtn=document.querySelector("#add")
var h5=document.querySelector("h5")

var chack=0;

addbtn.addEventListener("click",function(){
    if(chack==0){
        h5.innerHTML="Friends"
        h5.style.color="green"
        chack=1
        addbtn.innerHTML="Removed Friend"
        
    }else{
        h5.innerHTML="Stranger"
        h5.style.color="red"
         addbtn.innerHTML="Add Friend"
    chack=0    
    
    }

})

