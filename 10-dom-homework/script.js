const generateBlocks = () => {
    let section = document.createElement("section");
    section.className = "blocks";
    let p = document.querySelector("p:last-of-type");
    p.insertAdjacentElement("afterend", section);
    for(let i = 0; i < 25; i++){
        let div = document.createElement("div");
        div.classList.add("square");
        div.style.width = "50px";
        div.style.height = "50px";
        section.appendChild(div);
    }
    generateRandomColors();
};

const generateRandomColors = () => {
    let square = document.querySelectorAll(".square");
    for(let i = 0; i < square.length; i++){
        let color = "#" + Math.random().toString(16).substring(2, 8);
        square[i].style.backgroundColor = color;
    }
};

const generateBlocksInterval = () => {
    setInterval(() => {
        generateRandomColors();
    }, 1000);
};