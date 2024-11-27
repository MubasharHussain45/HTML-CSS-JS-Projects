var arr=[
    {dp:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story:"https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvbXB1dGVyfGVufDB8fDB8fHww"
    },
    {dp:"https://plus.unsplash.com/premium_photo-1719943510748-4b4354fbcf56?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
        story:"https://images.unsplash.com/photo-1530908295418-a12e326966ba?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {dp:"https://images.unsplash.com/photo-1723464340947-247673835ff5?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story:"https://images.unsplash.com/photo-1721579492801-4ab53be51ffd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
    },
    {dp:"https://images.unsplash.com/photo-1597561926547-2d082288874b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
        story:"https://images.unsplash.com/photo-1575394824933-aee40b932934?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
    }
]

var storys=document.querySelector("#storys")
var full_screen=document.querySelector("#full-screen")

var clutter=""
arr.forEach(function(elem,idx){
clutter+=`<div class="story">
<img id="${idx}" src="${elem.dp}" alt="">
</div>`
})

storys.innerHTML=clutter

storys.addEventListener("click",function(info){
full_screen.style.display="block"
full_screen.style.backgroundImage=`url(${arr[info.target.id].story})`

setTimeout(function(){
    full_screen.style.display="none"
},3000)

})
