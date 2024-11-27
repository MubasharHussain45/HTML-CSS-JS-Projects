var box = document.querySelector(".box")


const throttleFunction = (func, delay) => {
    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();
        if (now - prev > delay) {
            prev = now;
            return func(...args);
        }
    }
}
document.querySelector(".box").addEventListener("mousemove",
    throttleFunction((detail) => {
       var div=document.createElement("div")
       div.classList.add('imgdiv')
div.style.left=detail.clientX+"px";
div.style.top=detail.clientY+"px";

var img=document.createElement("img")

img.setAttribute("src","https://media.istockphoto.com/id/1406674466/photo/big-data-connection-technology-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=gNUrIlN_b92EoFfOxvH2OGfj45P2gUeEU1C8Af-5NkU=")

div.appendChild(img)
       document.body.appendChild(div)
gsap.to(img,{
y:"0",
ease:Power1,
duration:.6
})

gsap.to(img,{
    y:"100%",
    delay:.6,
    ease:Power2,
 
    })
setTimeout(function(){
div.remove()
},2000)

    }, 500));
