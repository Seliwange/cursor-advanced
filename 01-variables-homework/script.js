const applePrice = 15.678;
const lemonPrice = 123.965;
const melonPrice = 90.2345;

console.log("Maximun price: " + Math.max(applePrice, lemonPrice, melonPrice));
console.log("Minimun price: " + Math.min(applePrice, lemonPrice, melonPrice));

const sumPrice = applePrice + lemonPrice + melonPrice;
console.log(`Amount: ${sumPrice}`);

console.log("Rounding: " + Math.floor(applePrice) + Math.floor(lemonPrice) + Math.floor(melonPrice));

console.log("Rounded to hundreds: " + Math.round(sumPrice / 100) * 100);

console.log("Even number: " + (Math.floor(sumPrice) % 2 === 0));

console.log(`The amount of the rest: ${500 - sumPrice}`);

const avrgPrice = (applePrice + lemonPrice + melonPrice) / 3;
console.log("Everage: " + Math.round(avrgPrice * 10) / 10);

const discount = Math.floor(Math.random() * 101); // Returns a random integer from 0 to 100
console.log("Net profit: " + Math.round(((sumPrice / 2) - ((sumPrice * discount) / 100)) * 100) / 100);