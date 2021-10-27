function playAudio(e){
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
}

function playAudioSmall(e){
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
    const keySmall = document.querySelector(`.key__small[data-key = "${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    keySmall.classList.add("playing__small");
    e.stopPropagation();
}

function removeTransition(e){
    if(e.propertyName !== "transform") return;
    this.classList.remove("playing"); 
}

function removeTransitionSmall(e){
    if(e.propertyName !== "transform") return;
    this.classList.remove("playing__small"); 
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));

const keysSmall = document.querySelectorAll(".key__small");
keysSmall.forEach(key => key.addEventListener("transitionend", removeTransitionSmall));

window.addEventListener('keydown', playAudio);
window.addEventListener('keydown', playAudioSmall);