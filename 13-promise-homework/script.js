function getRandomChinese(length) {
    return new Promise((resolve, reject) => {
        let str = '';
        let i = 0
        while (i < length) {
            setTimeout(() => {
                str += String.fromCharCode(Date.now()).slice(-length);
                if (str.length === length) {
                    resolve(str);
                }
            }, i * 50);
            i++;
        }
    });
}

getRandomChinese(4).then(result => console.log(result));