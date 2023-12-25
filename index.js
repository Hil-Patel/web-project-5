var audio=new Audio("./audio/7 Years - Lukas Graham 192(PagalWorld).mp3");
const time=[16,33,49,65,81,97,113,128,145,160,177,193,209,225];      // this are the time frame for changing image
var playing=false;    //  use to identify that song is paused or not
// below function resume the song 
function play(){
    audio.play();
    document.getElementById("playpause").classList.add("fa-pause");
    document.getElementById("playpause").classList.remove("fa-play");
    playing =true;
}

// below function pause the song  
function pause() {
    audio.pause();
    playing=false;
    document.getElementById("playpause").classList.remove("fa-pause");
    document.getElementById("playpause").classList.add("fa-play");
}

//below function identify that whether we have to pause the song or resume it and call the above function accordingly.
function playpause() {
    if(playing)
    {
        pause();
    }
    else{
        play();
    }
    setTimeLine();
}

var timeline=document.getElementById("TimeLine");

// set the max value of timeline..
function setTimeLine() {
    timeline.value=audio.currentTime;
    timeline.max=audio.duration;
}

// this if is use to change the slider thumb position when the track is playing and also to change the image 
if(audio.play()) {
    setInterval(function(){
        timeline.value=audio.currentTime;
        for(let i=0;i<time.length;i++)
        {
            if(time[i]<=audio.currentTime)
            {
                document.getElementsByClassName(""+time[i])[0].classList.add("white");
            }
            else
            document.getElementsByClassName(""+time[i])[0].classList.remove("white");
        }
        if(audio.currentTime>=147 && audio.currentTime<153)
        {   document.getElementById("img").setAttribute("src","./img/narutoFamily.jpg");}
        else if(audio.currentTime>=152 && audio.currentTime<155)
        {   document.getElementById("img").setAttribute("src","https://upload.wikimedia.org/wikipedia/en/4/44/Major_Konoha.jpg");}
        else if(audio.currentTime>=155 && audio.currentTime<158)
        {   document.getElementById("img").setAttribute("src","./img/sasuke.webp");}
        else if(audio.currentTime>=158 && audio.currentTime<161)
        {   document.getElementById("img").setAttribute("src","./img/neji.jpg");}
        else if(audio.currentTime>=161 && audio.currentTime<163)
        {   document.getElementById("img").setAttribute("src","./img/naruto2.jpg");}
        else if(audio.currentTime>=163 && audio.currentTime<166)
        {   document.getElementById("img").setAttribute("src","https://i.pinimg.com/736x/69/97/b2/6997b2a52c226a1a87c9cd355d2e589d.jpg");}
        else if(audio.currentTime>=166 && audio.currentTime<169)
        {   document.getElementById("img").setAttribute("src","./img/naruto3.jpg");}
        else if(audio.currentTime>=169 && audio.currentTime<174)
        {   document.getElementById("img").setAttribute("src","./img/jiraya.jpg");}
        else if(audio.currentTime>=174 && audio.currentTime<177)
        {   document.getElementById("img").setAttribute("src","./img/boruto and himawari.jpg");}
        else 
        {   document.getElementById("img").setAttribute("src","./img/naruto.jpg");}
    },500);
    
}

// to change the time of track when slider is clicked.
function timeLineClicked() {
    audio.currentTime=timeline.value;
    play();
}

// skip 10 sec
function controllerClicked(name){
    if(name==="fa-backward")
        audio.currentTime=audio.currentTime-10;
    else    
        audio.currentTime=audio.currentTime+10;
}

