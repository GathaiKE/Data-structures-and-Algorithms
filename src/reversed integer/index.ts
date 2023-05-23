let reverseInteger=(num: number): number=> {
    const numStr = Math.abs(num).toString();
    const reversedStr = numStr.split('').reverse().join('');
    const reversedNum = +reversedStr;
    return num<0 ? -reversedNum : reversedNum;
}

let num = -835

let reverseNum=reverseInteger(num)

console.log(reverseNum);

