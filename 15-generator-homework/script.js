// 1
function* createIdGenerator(){
    let num = 0;
    while(true){
        num++;
        yield num;
    }
}
  
const idGenerator = createIdGenerator();

console.log("#1 Identifier generator:");
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);

// 2
function* newFontGenerator(){
    let font = 14;
    
    while(true){
        const increment = yield font;
        if(increment === "up"){
            font += 2;
        } else if(increment === "down"){
            font -= 2;
        }

        const text = document.querySelector('body');
        text.style.fontSize = `${font}px`;
    } 
}
  
const fontGenerator = newFontGenerator(14);

console.log("#2 Fonts generator:");
console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next().value);
console.log(fontGenerator.next("down").value);
console.log(fontGenerator.next("down").value);
console.log(fontGenerator.next("down").value);
console.log(fontGenerator.next().value);