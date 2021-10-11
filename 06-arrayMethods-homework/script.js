// 1 
const getRandomArray = (length, min, max) => {
    const arr = [...Array(length)].map((item) => Math.floor(Math.random() * (max - min + 1)) + min);
    return arr;
};

// 3 
const getAverage = (...numbers) => {
    const integerNumbers = numbers.filter(number => Number.isInteger(number));
    return Math.floor(integerNumbers.reduce((sum, current) => sum + current) / integerNumbers.length);
};

// 4 
const getMedian = (...numbers) => {
    const integerNumbers = numbers.filter(number => Number.isInteger(number));
    const sortedNumbers = integerNumbers.sort((a, b) => a - b);
    return (sortedNumbers.length % 2 === 0) ? (sortedNumbers[sortedNumbers.length / 2 - 1] + sortedNumbers[sortedNumbers.length / 2]) / 2 : sortedNumbers[(sortedNumbers.length - 1) / 2];
};

// 5 
const filterEvenNumbers = (...numbers) => numbers.filter((number) => (number % 2));

// 6 
const countPositiveNumbers = (...numbers) => {
    return numbers.reduce((acum, current) => (current > 0) ? acum + 1 : acum, 0);
};

// 7 
const getDividedByFive = (...numbers) => numbers.filter((number) => !(number % 5));

// 8 
const replaceBadWords = (string) => {
    /* 
        return string.split(" ").map((word) => {
            return word.replace(/shit|fuck/gi, "****");
        }).join(' ');
    */
    let politeWord = string.toLowerCase();
    const badWords = ['fuck', 'shit'];
    badWords.forEach(item => {
      politeWord = politeWord.split(item).join('***');
    });
    return politeWord[0].toUpperCase() + politeWord.slice(1);
}

// 9 
const divideByThree = (word) => {
    word = word.toLowerCase().split('');
    const newArray = [];
    let i = 0; 
    while (i < word.length) {
      newArray.push(word.slice(i, i += 3).join(''));
    }
    return newArray;
};

console.log("Random array (15, 1, 100):");
console.log(getRandomArray(15, 1, 100));
console.log("Average value:");
console.log(getAverage(6, 0.5, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
console.log("Count mediana:");
console.log(getMedian(1, 2, 0.5, 3, 4));
console.log(getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
console.log(getMedian(1, 2, 3, 4, 5));
console.log("Filter odd numbers:");
console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6));
console.log("Count amount of positive numbers:");
console.log(countPositiveNumbers(1, -2, 3, -4, -5, 6));
console.log("Filter numbers that divide by five:");
console.log(getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
console.log("Replace bad words:");
console.log(replaceBadWords("Are you Fucking fucking shiting kidding?"));
console.log("Divide word by three letters:");
console.log(divideByThree("Commander"));
console.log(divideByThree("live"));