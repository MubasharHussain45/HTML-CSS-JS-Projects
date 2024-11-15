//hr-hand
//12h=360deg
//1h=30deg
//nh=30*n
//1hr=30deg
//60min=30deg
//1min=1/2*n
//30*n+n/2---1

//for min--hand

//60min=360deg
//1min=6deg
//n*min=6n---2

//for sec--hend
//1min=360deg
//60sec=360deg
//n*sec=6*n---3


let hr_hand = document.querySelector(".hr-hand");
let min_hand=document.querySelector(".min-hand");
let sec_hand=document.querySelector(".sec-hand");
let dg_hr=document.querySelector(".dg-hr");
let dg_min=document.querySelector(".dg-min");
let dg_sec=document.querySelector(".dg-sec");
setInterval(() => {
    let time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();
    let hrotation = 30*h+h/2;
    let mrotation = 6*m;
    let srotation = 6*s;
    hr_hand.style.transform = `rotate(${hrotation}deg)`
    min_hand.style.transform = `rotate(${mrotation}deg)`
    sec_hand.style.transform = `rotate(${srotation}deg)`
dg_hr.innerHTML=(h<10?'0'+h:h)>12?h-=12:h;
dg_min.innerHTML=m<10?'0'+m:m;
dg_sec.innerHTML=s<10?'0'+s:s;

});