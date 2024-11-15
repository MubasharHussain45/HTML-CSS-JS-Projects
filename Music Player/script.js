let songName=document.querySelector("#song-name");
let singerName=document.querySelector("#singer-name");
let songimg=document.querySelector(".song-img");
let playPauseImg=document.querySelector("#play-pause");
let volum_range=document.querySelector("#volum-range");
let volum_svg=document.querySelector("#volum-svg");
let song_rang=document.querySelector("#song-rang")
let gifmusic=document.querySelector("#gif")
let playlist_img=document.querySelector("#playlist-img")
let playlist=document.querySelector(".playlist")
let playlistSong=document.querySelectorAll(".playlist-song")

let index=0;
let playingsong=false;
let track=document.createElement("audio");
let song=[
{
    name:"Decent Look",
    path:"1.mp3",
    image:"images/0.jpg",
    singer:"Davy & Simar kaur"
},
{
    name:"90-90 Nabbe Nabbe",
    path:"2.mp3",
    image:"images/1.jpg",
    singer:" Gippy Grewal"
},
{
    name:"koka",
    path:"3.mp3",
    image:"images/2.jpg",
    singer:" Simar Kaur"
},
{
    name:"Parindey - B Praak",
    path:"4.mp3",
    image:"images/3.jpg",
    singer:"B Praak"
}

]
function loadtrack(index){
    track.src=song[index].path;
    songName.innerHTML=song[index].name;
    singerName.innerHTML=song[index].singer;
songimg.style = `background-image:url("${song[index].image}");`
volum();
songRang()
setInterval(()=>{
song_rang.max=track.duration
song_rang.value=track.currentTime

},1000)
track.load()
track.loop=true

}
loadtrack(index);

function playpause(){
    if(playingsong==false){
        playSong();
        
    }
    else{
        pauseSong();
         
    }
}

function playSong(){
    track.play();
    playingsong=true;
    playPauseImg.src="paus.svg";
    gifmusic.style.display="block"

}

function pauseSong(){
    track.pause();
    playingsong=false;
    playPauseImg.src="play.svg";
    gifmusic.style.display="none"
}
function next(){
    if(index<song.length-1){
        index++;
        loadtrack(index);
        playSong();
       
    }
    else{
        index=0;
        loadtrack(index);
        pauseSong();
    }
}

function previous(){
    if(index>0){
        index--;
        loadtrack(index);
        playSong();
    }
    else{
        index=song.length-1;
        loadtrack(index);
        pauseSong();
    }
}

function volum(){
track.volume=volum_range.value/100;
if(volum_range.value==0){
    volum_svg.src="mute.svg";
}
else{
    volum_svg.src="volum.svg";
}

}

function songRang(){
track.currentTime=song_rang.value

}

playlist_img.addEventListener("click",()=>{
playlist.classList.toggle("playlist-active")
if(playlist.classList.contains("playlist-active")){
    playlist_img.src="cross.svg"
   
}
else{
 playlist_img.src="playlist.svg"   
}
})

playlistSong.forEach((song,index)=>{
    song.addEventListener('click',()=>{
loadtrack(index)
playSong()
playlist.classList.remove("playlist-active")
playlist_img.src="playlist.svg" 
    })
})

