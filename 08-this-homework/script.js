const ukraine = { 
    tax: 0.195, 
    middleSalary: 1789, 
    vacancies: 11476 
};
const latvia = { 
    tax: 0.25, 
    middleSalary: 1586, 
    vacancies: 3921 
};
const litva = { 
    tax: 0.15, 
    middleSalary: 1509, 
    vacancies: 1114 
};


// 1 
const getMyTaxes = function (salary = this.middleSalary){
    return +(this.tax * salary).toFixed(2);
};

// 2
const getMiddleTaxes = function (){
    return +(this.tax * this.middleSalary).toFixed(2);
};

// 3
const getTotalTaxes = function (){
    return +(this.tax * this.middleSalary * this.vacancies).toFixed(2);
};

// 4 
const getMySalary = function (){
    let minSalary = 1500;
    let maxSalary = 2000;
    let mySalary = +(Math.random() * (maxSalary - minSalary + 1) + minSalary).toFixed(2);
    let profit = +(mySalary - this.tax).toFixed(2);
    return {salary: mySalary, taxes: this.tax, profit: profit};
};

setInterval(function(){
    console.log("Salary in Ukraine:");
    console.log(getMySalary.call(ukraine));
    console.log("Salary in Latvia:");
    console.log(getMySalary.call(latvia));
    console.log("Salary in Litva:");
    console.log(getMySalary.call(litva));
}, 10000);

console.log("Taxes in Ukraine:");
console.log(getMyTaxes.call(ukraine, 1000));
console.log("Taxes in Latvia:");
console.log(getMyTaxes.call(latvia, 1000));
console.log("Taxes in Litva:");
console.log(getMyTaxes.call(litva, 1000));
console.log("How many taxes on average in Ukraine:");
console.log(getMiddleTaxes.apply(ukraine));
console.log("How many taxes on average in Latvia:");
console.log(getMiddleTaxes.apply(latvia));
console.log("How many taxes on average in Litva:");
console.log(getMiddleTaxes.apply(litva));
console.log("Total taxes in Ukraine:");
const ukraineTaxes = getTotalTaxes.bind(ukraine);
console.log(ukraineTaxes());
console.log("Total taxes in Latvia:");
const latviaTaxes = getTotalTaxes.bind(latvia);
console.log(latviaTaxes());
console.log("Total taxes in Litva:");
const litvaTaxes = getTotalTaxes.bind(litva);
console.log(litvaTaxes());
console.log("Salary in Ukraine:");
console.log(getMySalary.call(ukraine));
console.log("Salary in Latvia:");
console.log(getMySalary.call(latvia));
console.log("Salary in Litva:");
console.log(getMySalary.call(litva));