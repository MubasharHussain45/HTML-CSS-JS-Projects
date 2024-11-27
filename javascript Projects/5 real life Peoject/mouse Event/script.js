var element=document.querySelectorAll(".element")

// var element1img=document.querySelector("#element1 img")


// element1.addEventListener("mousemove",function(info){
// element1img.style.left=info.x+"px"
// element1img.style.top=info.y+"px"
// })

// element1.addEventListener("mouseenter",function(info){
//     element1img.style.opacity=1
//     })

//     element1.addEventListener("mouseleave",function(info){
//         element1img.style.opacity=0
//         })

element.forEach(function (val) {

    val.addEventListener("mouseenter", function () {
        val.childNodes[3].style.opacity = 1

    })
    val.addEventListener("mouseleave", function () {
        val.childNodes[3].style.opacity = 0

    })

    val.addEventListener("mousemove", function (info) {
        val.childNodes[3].style.left=info.x+"px"
  val.childNodes[3].style.top=info.y+"px"
    })
})