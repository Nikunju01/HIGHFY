console.log("Welcome to Highfy");

let songIndex = 0;
let audioElement = new Audio('1.mp3');
let MasterPlay = document.getElementById('MasterPlay');
let MyProgressBar = document.getElementById('MyProgressBar');
let gif = document.getElementById('gif');
let MasterSongName = document.getElementById('MasterSongName');
let SongItems = Array.from(document.getElementsByClassName('SongItem'));


let songs = [
    {SongName: "Warriyo Mortals[NCS Release]", filepath: "songs\1.mp3", coverPath: "1.jpg"},
    {SongName: "Cielo-Huma-Huma", filepath: "songs\2.mp3", coverPath: "2.jpg"},
    {SongName: "DEAF KEV - Invinsible[NCS release]", filepath: "songs\3.mp3", coverPath: "3.jpg"},
    {SongName: "Different Heaven & EHIDE - My Heart", filepath: "songs\4.mp3", coverPath: "4.jpg"},
    {SongName: "Janji-Heroes-Tonight[NCS release]", filepath: "songs\5.mp3", coverPath: "5.jpg"},
    {SongName: "Raabta", filepath: "songs\6.mp3", coverPath: "6.jpg"},
    {SongName: "Bhula Dena", filepath: "songs\7.mp3", coverPath: "7.jpg"},
    {SongName: "Tumhari Kasam", filepath: "songs\8.mp3", coverPath: "8.jpg"},
    {SongName: "Na Jaane", filepath: "songs\9.mp3", coverPath: "9.jpg"},
    {SongName: "Akhiyaan", filepath: "songs\10.mp3", coverPath: "10.jpg"},
]

SongItems.forEach((Element, i)=>{
    Element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    Element.getElementsByClassName("SongName")[0].innerText = songs[i].SongName;
})


MasterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        MasterPlay.classList.remove('fa-play-circle');
        MasterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        MasterPlay.classList.remove('fa-pause-circle');
        MasterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})


audioElement.addEventListener('timeupdate', ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    MyProgressBar.value = progress;
})

MyProgressBar.addEventListener('change' , ()=>{
    audioElement.currentTime = MyProgressBar.value * audioElement.duration/100;
})

const MakeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('SongItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    })
}

Array.from(document.getElementsByClassName('SongItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        MakeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        MasterSongName.innerText = songs[songIndex].SongName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        MasterPlay.classList.remove('fa-play-circle');
        MasterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('Previous').addEventListener('click', ()=>{
    if(songIndex<=0)(
        songIndex = 0
    )
    else(
        songIndex -= 1
    )
    audioElement.src = `songs/${songIndex}.mp3`;
    MasterSongName.innerText = songs[songIndex].SongName;
        audioElement.currentTime = 0;
        audioElement.play();
        MasterPlay.classList.remove('fa-play-circle');
        MasterPlay.classList.add('fa-pause-circle');
})

document.getElementById('Next').addEventListener('click', ()=>{
    if(songIndex>=9)(
        songIndex = 0
    )
    else(
        songIndex += 1
    )
    audioElement.src = `songs/${songIndex}.mp3`;
    MasterSongName.innerText = songs[songIndex].SongName;
        audioElement.currentTime = 0;
        audioElement.play();
        MasterPlay.classList.remove('fa-play-circle');
        MasterPlay.classList.add('fa-pause-circle');
})


