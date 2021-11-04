function getRandomChinese(length) {
    let i = 0;
    let str = "";
    while (i < length) {
        new Promise((resolve, reject) => {
            str += String.fromCharCode(Date.now()).slice(-length);
            i++;
            setTimeout(() => resolve(str), 50);
        });
    }
    console.log(str);
}

getRandomChinese(4);