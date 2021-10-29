const audio = document.querySelectorAll(".audio");
const keys = document.querySelectorAll(".keys div");

keys.forEach((key, index) => {
    key.addEventListener("click", function(e){
        audio[index].currentTime = 0;
        audio[index].play();
        if(e.target.classList.contains("key")){
            e.target.classList.add("playing");
            setTimeout(() => {
                key.classList.remove("playing");
            }, 1000);
        }
    });
});

function playAudio(e){
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
    const keys = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    if(keys){
        keys.classList.add("playing");
        setTimeout(() => {
            keys.classList.remove("playing");
        }, 1000);
    }
}

window.addEventListener("keydown", playAudio);