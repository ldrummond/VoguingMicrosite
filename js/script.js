var video = document.getElementById("myVideo");
video.autoplay = true; 
video.loop = true; 
video.controls = false; 
video.ontimeupdate = function() {isDone()}

var playButton = document.getElementById("playButton");
playButton.addEventListener("click", pauseVideo, false); 

var playIcon = document.getElementById("playIcon");
var pauseIcon = document.getElementById("pauseIcon");

function isDone() {
	if (video.currentTime >= 175) {
		video.currentTime = 51; 
	}
}

function pauseVideo() {
	if (video.paused) {	
		// playButton.style.borderStyle = "solid"; 
		playIcon.style.opacity = 0;
		pauseIcon.style.opacity = 1;
		video.play();
	}
	else {
		// playButton.style.borderStyle = "dashed"; 
		playIcon.style.opacity = 1;		
		pauseIcon.style.opacity = 0;
		video.pause();
	}

}