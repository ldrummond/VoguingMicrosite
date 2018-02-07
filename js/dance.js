var video = document.getElementById("myVideo");
video.autoplay = false; 
video.controls = false; 
video.style.filter = "brightness(20%)";

var playButton = document.getElementById("playButton");
playButton.addEventListener("click", pauseVideo, false); 

var vidText = document.getElementById("videoText")

function pauseVideo() {
	if (video.paused) {	
		video.style.filter = "brightness(100%)";
		vidText.style.opacity = "0";
		video.play();
	}
	else {
		video.style.filter = "brightness(20%)";
		vidText.style.opacity = "1";
		video.pause();
	}

}