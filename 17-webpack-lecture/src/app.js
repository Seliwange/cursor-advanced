import {getTotal} from "./utils";
import {rate} from "./test";
import "./test.css";
import Block from "./block.html";
import dog from "./puppy.jpg";

// const { getTotal } = require("./utils");

const test = 100;
const anotherTest = 100;
console.log(test + anotherTest);
console.log("test");

if(test){
    console.log("Watching?");
}

@annotation
class Example{
    name = "Test Name";
}

function annotation(target) {
    target.annotated = true;
}

const testExample = new Example();
console.log(JSON.stringify(testExample));

const products = [{
    price: 100,
    count: 2
}];

console.log(getTotal(products));
console.log(dog);

document.body.innerHTML = Block;
document.body.innerHTML += `
<p>
    <img alt="puppy" src="${dog}">
</p>
`;
