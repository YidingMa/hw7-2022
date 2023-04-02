const video= document.getElementById("player1")

window.addEventListener("load", function() {
	console.log("Good job opening the window")
    video.loop=false;
    video.autoplay=false;
});
//Play Video
 document.querySelector("#play").addEventListener("click", function() {
 	console.log("Play Video");
    video.play();
    var volumeText = document.getElementById("volume");
    volumeText.textContent = video.volume*100;
});
//Pause Video
document.querySelector("#pause").addEventListener("click", function() {
    console.log("Pause Video");
    video.pause();
});
//Slower
document.querySelector("#slower").addEventListener("click", function() {
    video.playbackRate -= 0.1;
    console.log("Slower the speeed 10%", video.playbackRate);

});
//Faster
document.querySelector("#faster").addEventListener("click", function() {
    video.playbackRate += 0.1;
    console.log("faster the speeed 10%", video.playbackRate);
});
//Skip
document.querySelector("#skip").addEventListener("click", function() {
    if (video.ended){
        video.currentTime = 0;
        console.log("Skip to", video.currentTime);
    }
    else {
        video.currentTime += 10;
        console.log("Skip to", video.currentTime);
    }
});
//Mute
document.querySelector("#mute").addEventListener("click", function() {
    if (video.muted){
        video.muted=false;
        console.log("it is Unmuted");
    }
    else {
        video.muted=true;
        console.log("it is Muted");
    }
});
//Volume Slider
document.querySelector("#slider").addEventListener("click", function() {
    console.log(document.getElementById("slider").value);
    video.volume= document.getElementById("slider").value* 0.01;
    var volumeText = document.getElementById("volume");
    volumeText.textContent = video.volume*100;
});
//Styled
document.querySelector("#vintage").addEventListener("click", function() {
    console.log("Video is old school");
    document.querySelector("video").classList.add("oldSchool");
});

document.querySelector("#vintage").addEventListener("click", function() {
    console.log("Video is old school");
    video.classList.remove("oldSchool");
});
//Original
