const applePrice = 15.678;
const lemonPrice = 123.965;
const melonPrice = 90.2345;

const sumPrice = applePrice + lemonPrice + melonPrice;
const avrgPrice = (applePrice + lemonPrice + melonPrice) / 3;
const discount = Math.floor(Math.random() * 101); // Returns a random integer from 0 to 100

console.log(`Maximun price: ${Math.max(applePrice, lemonPrice, melonPrice)}

Minimun price: ${Math.min(applePrice, lemonPrice, melonPrice)}

Amount: ${sumPrice}

Rounding: ${(Math.floor(applePrice) + Math.floor(lemonPrice) + Math.floor(melonPrice))}

Rounded to hundreds: ${Math.round(sumPrice / 100) * 100}

Even number: ${(Math.floor(sumPrice) % 2 === 0)}

The amount of the rest: ${500 - sumPrice}

Everage: ${Math.round(avrgPrice * 100) / 100}

Net profit: ${Math.round(((sumPrice / 2) - ((sumPrice * discount) / 100)) * 100) / 100}`);