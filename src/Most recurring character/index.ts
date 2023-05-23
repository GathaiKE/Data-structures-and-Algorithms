let iterable=(strnum:any): string=> {
    let value:string = strnum.toString()
let charCount: { [char: string]: number } = {}

for (let i = 0; i < value.length; i++) {
    let char = value[i];
    charCount[char] = (charCount[char] || 0) + 1
}

let mostAppearingChar = ''
let count = 0

for (let char in charCount) {
    if (charCount[char] > count) {
    mostAppearingChar = char
    count = charCount[char]
    }
}

return mostAppearingChar
}

console.log(iterable('Steering'))