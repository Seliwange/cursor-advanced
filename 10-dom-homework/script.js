const generateBlocks = () => {
    let blocks = document.querySelector("section.blocks");
    blocks.classList.add("active");
    let square = document.querySelectorAll(".square");
    for(let i = 0; i < square.length; i++){
        let color = "#" + Math.random().toString(16).substring(2, 8);
        square[i].style.backgroundColor = color;
    }
};

//random colors
const generateBlocksInterval = () => {
    let square = document.querySelectorAll(".square");
    setInterval(() => {
        for(let i = 0; i < square.length; i++){
            let color = "#" + Math.random().toString(16).substring(2, 8);
            square[i].style.backgroundColor = color;
        }
    }, 1000);
};