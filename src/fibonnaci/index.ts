let isFibonacci = (num:number):boolean=>{
    let a=0
    let b=1

    for(a=0, b=1;b<num;b++,a++){
        if(b+a===num){
            return true
        }
    }
    return false
}

console.log(isFibonacci(377));
