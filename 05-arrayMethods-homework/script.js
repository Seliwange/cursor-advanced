// 1 
const getRandomArray = (length, min, max) => {
    const arr = [...Array(length)].map((item) => Math.floor(Math.random() * (max - min + 1)) + min);
    return arr;
};

// 2 
const getModa = (...numbers) => {
    let maxIndex = 0;
    let moda = [];
    let count = [];

    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];
        count[number] = (count[number] || 0) + 1;
        if (count[number] > maxIndex) {
            maxIndex = count[number];
        }
    }
    for (i in count)
        if (count.hasOwnProperty(i)) {
            if (count[i] === maxIndex) {
                moda.push(Number(i));
            }
        }
    return moda;
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
    let politeWord = string;
    const badWords = ['fuck', 'shit'];
    badWords.forEach(item => {
      politeWord = politeWord.split(item).join('***');
    })
    return politeWord;
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

// 10 
const generateCombinations = (word) => {
    if(!word || typeof word !== "string"){
        return "Please enter a word";
    } else if(word.length < 2 || word.length > 10){
        return word;
    }

    const result = [];
    for(let i = 0; i < word.length; i++){
        let letter = word[i];
        if(word.indexOf(letter) != i){
          continue;
        }
        let remaningLetters = word.slice(0, i) + word.slice(i + 1, word.length);
        for(let generate of generateCombinations(remaningLetters)){
          result.push(letter + generate);
        }
    }
    return result;
};

console.log("Random array (15, 1, 100):");
console.log(getRandomArray(15, 1, 100));
console.log("Moda from set of number:");
console.log(getModa(6, 2, 55, 0.5, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
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
console.log(replaceBadWords("Are you fucking fucking shiting kidding?"));
console.log("Divide word by three letters:");
console.log(divideByThree("Commander"));
console.log(divideByThree("live"));
console.log("Generate all combination from word:");
console.log(generateCombinations("man"));