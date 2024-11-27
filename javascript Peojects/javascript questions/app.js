// question 1

// var arr=["hi","Mubashar","ali","apple","ahmad"];

// var ans =arr.map(function(val){
//     if(val.length===5){
//         return `<p> ${val} </p>`
//     }
//     else{
//          return `<span> ${val} </span>`
//     }
// })

// console.log(ans)


// question 2

// var arr=[
// {name:"mubashar",
// age:18
// },
// {name:"ali",
//     age:12
//     },
//     {name:"Ahmad",
//         age:10
//         }
// ]

// var ans=arr.map(function(val){
// return val.name

// })

// console.log(ans)


// filter Questions:


// var arr=[1,2,3,4,5]

// var ans=arr.filter(function(val){
//     return true
// })

// console.log(ans)


// question 1


// var arr=[1,2,3,4,5,6,8,10]

// var ans=arr.filter(function(val){
//     if(val%2==0){
// return this
//     }
// })

// console.log(ans);

// question 2

// var arr=["Mubashar","ali","ahmad"]

// var ans=arr.filter(function(val){
//     return !val.includes("a")
// })
// console.log(ans)




// Promises

var ans=new Promise((res,rej)=>{

var num=Math.floor(Math.random()*10)
console.log(num)

if(num<5){
    return res()

}else{
    return rej()
   
}

})


ans
.then(function(){
    console.log("hi")
})
.catch(function(){
    console.log("hello")
})
    












