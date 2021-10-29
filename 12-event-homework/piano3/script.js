const audio = document.querySelectorAll(".audio");
const keys = document.querySelectorAll(".keys div");
const anime = document.querySelector(".anime");

const note = [
    "#812121",
    "#119136",
    "#559137",
    "#269138",
    "#983721",
    "#145257"
]
const img = document.querySelector("img");

keys.forEach((key, index) => {
    key.addEventListener("click", function(e){
        audio[index].currentTime = 0;
        audio[index].play();

        createNote(index);
    });
});

const createNote = (index) => {
    const noteAnime = document.createElement("div");
    anime.appendChild(noteAnime);
    noteAnime.style.backgroundColor = note[index];
    noteAnime.style.animation = "fly 3s ease";
    noteAnime.addEventListener("animationend", function(){
        anime.removeChild(this);
    });
};