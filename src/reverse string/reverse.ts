
const reverseString= (string:string): void=> {
    let reversedString:string = ''
    for (let i = string.length - 1; i >= 0; i--) {
        reversedString += string[i]
    }
    if(reversedString==string){
        console.log("Same")
    }else{
        console.log("Different")
    }
    }

reverseString('Racecar')
// ---------------------------------------------------------------------------
let reversingString=(str:string): string=>{
    let reverse:string=''
    for(let char of str){
        reverse=char+reverse
    }
    return reverse
}

console.log(reversingString('Gathai'));
// -------------------------------------------------------------------
let stringReverse=(string:string):string=>{
    return string.split('').reduce((prev,cur)=>cur+prev,'')
}

console.log(stringReverse('Brian'));
