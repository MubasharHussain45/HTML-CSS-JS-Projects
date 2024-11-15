let boxes = document.querySelectorAll(".boxes");
let turn1=document.querySelector(".turn1");
let turn2=document.querySelector(".turn2");
let msg=document.querySelector(".msg");
let span=document.querySelector("#result");
let reset=document.querySelector("#reset");
let game=document.querySelector("#game");
let turnX = true;
let clickSound=new Audio("click.wav");
let winnersound=new Audio("winner.wav");
let WinnerCondation = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
reset.addEventListener('click',()=>{
boxes.forEach(box=>{
box.innerText=null;
box.disabled=false;
box.classList.add("hover");
msg.classList.add("hide");
box.classList.remove("b-s");
})
})

game.addEventListener('click',()=>{
    boxes.forEach(box=>{
        box.innerText=null;
        box.disabled=false;
        box.classList.add("hover");
        msg.classList.add("hide");
        })  
})


boxes.forEach(box => {
    box.addEventListener('click', () => {
        clickSound.play();
        if (turnX) {
            box.innerText = "X";
            box.style.color = "rgb(174,51,96)"
            turn2.classList.add("b-s");
            turn1.classList.remove("b-s");
            turnX = false
        }
        else {
            box.innerText = "O";
            box.style.color = "rgb(17,52,182)"
            turn1.classList.add("b-s");
            turn2.classList.remove("b-s");
            turnX = true;
        }
        chackWinner();
    })
})
function chackWinner() {
    for (let conation of WinnerCondation) {
        let box1 = boxes[conation[0]].innerText;
        let box2 = boxes[conation[1]].innerText;
        let box3 = boxes[conation[2]].innerText;
        if (box1 != "" && box2 != "" && box3 != "") {
            if (box1 === box2 && box2 === box3) {
                showResult(box1);
                winnersound.play();
                boxes.forEach(box=>{
                    box.classList.add("b-s");
                    })  
boxes[conation[0]].classList.remove("b-s");
boxes[conation[1]].classList.remove("b-s");
boxes[conation[2]].classList.remove("b-s");
            }
        }

    }
}

function showResult(result){
    boxes.forEach(box=>{
        box.disabled=true;
        box.classList.remove("hover");
    })

msg.classList.remove("hide")
span.innerText=result;
if(result==='X'){
    span.style.color = "rgb(174,51,96)"
}
else{
    span.style.color ="rgb(17,52,182)"
}

}