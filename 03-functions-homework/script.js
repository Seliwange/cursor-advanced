// 1 
const getMaxDigit = (number) => {
    if(number === 0){
        number = 0;
    } else {
        number = Math.trunc(Math.max(number % 10, getMaxDigit(number / 10)));
    }
    return number;
};

// 2 
const numberDegree = (number, degree) => {
    let sum = 1;
    if(degree === 0) return 1;
    for(let i = 0; i < degree; i++){
        sum *= number;
    }
    return sum;
};

// 3
const getFirstLetterBig = (name) => {
    return name[0].toUpperCase() + name.substring(1).toLowerCase();
};

// 4
const changeAfterTaxes = (salary) => {
    const taxesPersentage = 19.5;
    const taxesSum = salary * taxesPersentage / 100;
    const netProfit = salary - taxesSum;
    return netProfit;
};

// 5
const getRandomNumber = (n, m) => {
    return Math.floor(Math.random() * (m - n + 1)) + n;
};

// 6
const countLetter = (letter, word) => {
    let str = '';
    for(let i = 0; i < word.length; i++){
        word = word.toLowerCase();
        if(letter.includes(word[i])){
            str += letter;
        }
    }
    return str.length;
};

// 7
const convertCurrency = (money) => {
    const dollarPrice = 25;
    let str = '';
    if(money.endsWith("$")){
        str = parseInt(money) * dollarPrice + "UAH";
    } else if((money.endsWith("UAH")) || (money.endsWith("uah"))){
        str = parseInt(money) / dollarPrice + "$";
    } else {
        str = "You can convert only dollar or hryvnia";
    }
    return str;
};

// 8
const getRandomPassword = (number = 8) => {
    let num = 0;
    switch(number){
        case 1: 
            num = Math.floor(Math.random() * 10);
            break;
        case 2:
            num = Math.floor(Math.random() * (99 - 10) + 10);
            break;
        case 3:
            num = Math.floor(Math.random() * (999 - 100) + 100);
            break;
        case 4: 
            num = Math.floor(Math.random() * (9999 - 1000) + 1000);
            break;
        case 5: 
            num = Math.floor(Math.random() * (99999 - 10000) + 10000);
            break;
        case 6: 
            num = Math.floor(Math.random() * (999999 - 100000) + 100000);
            break;
        case 7: 
            num = Math.floor(Math.random() * (9999999 - 1000000) + 1000000);
            break;
        case 8: 
            num = Math.floor(Math.random() * (99999999 - 10000000) + 10000000);
            break;
        default: 
            num = Math.floor(Math.random() * (99999999 - 10000000) + 10000000);
    }
    return num;
};

// 9
const deleteLetters = (letter, word) => {
    let str = '';
    for(let i = 0; i < word.length; i++){
        if(letter !== word[i]){
            str += word[i];
        }
    }
    return str;
};

// 10
const isPalyndrom = (word) => {
    const reversed = word.split('').reverse().join('');
    return reversed === word;
};

// 11
const deleteDuplicateLetter = (sentence) => {
    let str = sentence.toLowerCase().split("");
    str = str.filter(letter => str.indexOf(letter) === str.lastIndexOf(letter));
    return str.join("");
};

document.writeln(`Function #1: ${getMaxDigit(6256)}`); 
document.writeln('<br \/>');
document.writeln(`Function #2: ${numberDegree(2, 4)}`);
document.writeln('<br \/>');
document.writeln(`Function #3: ${getFirstLetterBig('vlAd')}`);
document.writeln('<br \/>');
document.writeln(`Function #4: ${changeAfterTaxes(1000)}`);
document.writeln('<br \/>');
document.writeln(`Function #5: ${getRandomNumber(1, 10)}`);
document.writeln('<br \/>');
document.writeln(`Function #6: ${countLetter("а", "Асталавіста")}`);
document.writeln('<br \/>');
document.writeln(`Function #7: ${convertCurrency("100$")}`);
document.writeln('<br \/>');
document.writeln(`Function #8: ${getRandomPassword()}`);
document.writeln('<br \/>');
document.writeln(`Function #9: ${deleteLetters("a", "blablabla")}`);
document.writeln('<br \/>');
document.writeln(`Function #10: ${isPalyndrom("blablabla")}`);
document.writeln('<br \/>');
document.writeln(`Function #11: ${deleteDuplicateLetter("Бісквіт був дуже ніжним")}`);