var box=document.querySelector(".box");
window.addEventListener("mousemove",function(details){
    var valueX=gsap.utils.mapRange(0,window.innerWidth,100+box.getBoundingClientRect().width/2,window.innerWidth-(100+box.getBoundingClientRect().width/2),details.clientX)
    gsap.to('.box',{
left:valueX,
ease:Power3
    }) 


})

