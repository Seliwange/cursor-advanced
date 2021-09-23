const applePrice = 15.678;
const lemonPrice = 123.965;
const melonPrice = 90.2345;

const maxPrice = Math.max(applePrice, lemonPrice, melonPrice);
const minPrice = Math.min(applePrice, lemonPrice, melonPrice);
const sumPrice = applePrice + lemonPrice + melonPrice;
const sumOfRounding = (Math.floor(applePrice) + Math.floor(lemonPrice) + Math.floor(melonPrice));
const roundedToHundreds = Math.round(sumPrice / 100) * 100;
const checkIfEven = (Math.floor(sumPrice) % 2 === 0);

const totalAmountOfMoney = 500;
const sumOfTheRest = totalAmountOfMoney - sumPrice;

const avrgPrice = (applePrice + lemonPrice + melonPrice) / 3;
const roundingEverage = Math.round(avrgPrice * 100) / 100;

const discount = Math.floor(Math.random() * 101); // Returns a random integer from 0 to 100
const sumOfDiscount = Math.round(((sumPrice * discount) / 100) * 100) / 100;
const cost = Math.round((sumPrice / 2) * 100) / 100;
const netProfit = +(cost - sumOfDiscount).toFixed(2);

console.log(`Maximun price: ${maxPrice}

Minimun price: ${minPrice}

Total amount: ${sumPrice}

Rounding: ${sumOfRounding}

Rounded to hundreds: ${roundedToHundreds}

Total amount of prices is even: ${checkIfEven}

The amount of the rest: ${sumOfTheRest}

Everage: ${roundingEverage}

Discount: ${discount}

Total amount with discount: ${sumOfDiscount}

Cost: ${cost}

Net profit: ${netProfit}`);