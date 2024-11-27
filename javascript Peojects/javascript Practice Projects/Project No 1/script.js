var box = document.querySelector(".box");

box.addEventListener("mousemove", function (details) {
    var location = box.getBoundingClientRect();
    var insideVal = details.clientX - location.left
    if (insideVal < location.width / 2) {
        var redColor = gsap.utils.mapRange(0, location.width / 2, 255, 0, insideVal)
        gsap.to(box, {
            backgroundColor: `rgb(${redColor},0,0)`,
            ease: Power4
        })
    }
    else {
        var blueColor = gsap.utils.mapRange(location.width / 2, location.width, 0, 255, insideVal)
        gsap.to(box, {
            backgroundColor: `rgb(0,0,${blueColor})`,
            ease: Power4
        })
    }

})


box.addEventListener("mouseleave",function(){
    gsap.to(box,{
backgroundColor:"white"
    })
})