const generateBlocks = () => {
    const blockContainer = document.createElement("section");
    blockContainer.className = "blocks";
    const lastParagraph = document.querySelector("p:last-of-type");
    lastParagraph.insertAdjacentElement("afterend", blockContainer);
    for(let i = 0; i < 25; i++){
        let div = document.createElement("div");
        div.classList.add("square");
        blockContainer.appendChild(div);
    }
    generateRandomColors();
};

const generateRandomColors = () => {
    const square = document.querySelectorAll(".square");
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