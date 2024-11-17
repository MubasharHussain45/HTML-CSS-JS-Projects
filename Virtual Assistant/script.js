let btn = document.querySelector("#btn");
let content = document.querySelector("#contant")
let voice = document.querySelector("#voice")

function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1
    text_speak.pitch = 1
    text_speak.volume = 1
    text_speak.lang = "hi-GB"
    window.speechSynthesis.speak(text_speak)

}

function wishMe() {
    let day = new Date()
    let hours = day.getHours()
    if (hours >= 0 && hours < 12) {
        speak("Good Morning Sir")
    }
    else if (hours >= 12 && hours < 4) {
        speak("Good Afternoon Sir")
    }
    else {
        speak("Good Evening Sir")
    }

}


window.addEventListener('load', () => {
    wishMe()
})


let speakRecognation = window.SpeechRecognition || window.webkitSpeechRecognition

let recognation = new speakRecognation()

recognation.onresult = (event) => {
    let currentIndex = event.resultIndex
    let trancript = event.results[currentIndex][0].transcript
    content.innerText = trancript
    takecommand(trancript.toLowerCase())
}

btn.addEventListener("click", () => {
    recognation.start()
    btn.style.display = "none"
    voice.style.display = "block"
})


function takecommand(massage) {
    btn.style.display = "flex"
    voice.style.display = "none"
    if (massage.includes("hello") || massage.includes("hey") || massage.includes("hi")) {
        speak("hello sir,what can i help you?")
    }
    else if (massage.includes("who are you") || massage.includes("how are you")) {
        speak("Fine, I am Virtual Assistant Created By Mubashir sir")
    }
    else if (massage.includes("open youtube")) {
        speak("opening youtube")
        window.open("https://www.youtube.com/")

    }
    else if (massage.includes("open whatsapp")) {
        speak("opening whatsapp")
        window.open("https://web.whatsapp.com/")

    }
    else if (massage.includes("open calculator")) {
        speak("opening calculator")
        window.open("calculator://")

    }
   else if(massage.includes("time")){
    let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
    speak(time)
   }
   else if(massage.includes("date")){
    let date=new Date().toLocaleString(undefined,{year:"numeric",month:"numeric",day:"numeric"})
    speak(date)
   }

    else{
        speak(`This is What i found on internet regarding ${massage.replace("alexa","")}`)
        window.open(`https://www.google.com/search?q=${massage.replace("alexa","")}`)
    }

}

