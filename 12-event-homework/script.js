function playAudio(e){
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
    const keyBig = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
    const keySmall = document.querySelector(`.key__small[data-key = "${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    if(keyBig){
        keyBig.classList.add("playing");
    } else {
        e.stopPropagation();
        keySmall.classList.add("playing__small");
    }
}

function removeTransitionBigKeys(e){
    if(e.propertyName !== "transform") return;
    this.classList.remove("playing"); 
}

function removeTransitionSmallKeys(e){
    e.stopPropagation();
    if(e.propertyName !== "transform") return;
    this.classList.remove("playing__small");
}

const keysBig = document.querySelectorAll(".key");
keysBig.forEach(key => key.addEventListener("transitionend", removeTransitionBigKeys));

const keysSmall = document.querySelectorAll(".key__small");
keysSmall.forEach(key => key.addEventListener("transitionend", removeTransitionSmallKeys));

window.addEventListener('keydown', playAudio);