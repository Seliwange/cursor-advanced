let getNumberN;
let getNumberM;

do{
    getNumberN = +prompt("Put number N", "");
}while(!Number.isInteger(getNumberN));

do{
    getNumberM = +prompt("Put number M", "");
}while(!Number.isInteger(getNumberM));


const getEvenNumber = confirm("Do you want to skip even numbers?");

let sum = 0;
for(let i = getNumberN; i <= getNumberM; i++){
    if(getEvenNumber === true){
        if(i % 2 !== 0){
            sum += i;
        }
    } else {
        sum += i;
    }
}
console.log(`Total sum: ${sum}`);