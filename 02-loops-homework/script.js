let getNumberN;
let getNumberM;

do{
    getNumberN = +prompt("Put integer number N", "");
}while(!Number.isInteger(getNumberN));

do{
    getNumberM = +prompt("Put integer number M, gteater than N", "");
}while(!Number.isInteger(getNumberM) || (getNumberM < getNumberN));


const getEvenNumber = confirm("Do you want to skip even numbers?");

let sum = 0;
for(let i = getNumberN; i <= getNumberM; i++){
    if(getEvenNumber){ // the same as if(getEvenNumber === true)
        if(i % 2 !== 0){
            sum += i;
        }
    } else {
        sum += i;
    }

    /* better
    if(!getEvenNumber || i % 2){
        sum += i;
    }
    or
    if(getEvenNumber && (i % 2 === 0)){
        continue;
    } else {
        sum += i;
    }
    */
}
document.writeln(`Total sum: ${sum}`);