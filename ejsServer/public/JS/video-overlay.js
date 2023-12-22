const video = document.querySelector(".min-video");



function playVideo(){
    


    setTimeout(function() {
        video.style.opacity = "1"
        video.play();
        
        
        setTimeout(playVideo, 13000);
        
    }, 10000);
    video.style.opacity = "0";
}

playVideo();


video.addEventListener("ended", function(){
    playVideo();
})