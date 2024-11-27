var timer = 60; 
var score=0;
var hitrn=0
function increseScour(){
score+=10
document.querySelector("#scoreval").textContent=score
}

function getNewHit(){
  hitrn=  Math.floor(Math.random()*10)
document.querySelector("#hitval").textContent=hitrn
}

function makeBubbles() {
    var panel_btm = document.querySelector("#pbm")
    var cutter = ""
    for (var i = 1; i <= 242; i++) {
        var rm = Math.floor(Math.random() * 10)
        cutter += `<div class="bubel">${rm}</div>`
    }

    panel_btm.innerHTML = cutter
}     
         
function runtimer(){
var cleattime=setInterval(function(){
if(timer >0){
    timer --;
    document.querySelector("#timeval").textContent=timer
}
else{
    clearInterval(cleattime)
    document.querySelector("#pbm").innerHTML=` <h1> Game Over </h1> <h1> Your Score is: ${score} </h1>`  ;
     
}

},1000);
}

document.querySelector("#pbm").addEventListener("click",function(info){
var clickedNum=Number(info.target.textContent)
if(clickedNum===hitrn){
    increseScour()
    makeBubbles()
    getNewHit()
} 
else{
    document.querySelector("#pbm").innerHTML=` <h1> Wrong Hit</h1> <h1> Plece Try Agein...</h1>`
}


})

runtimer();
makeBubbles()
getNewHit()

