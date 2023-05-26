export  const fizzBuzz=(num:number): string | number=>{
        let string:string=''
        if(num % 3 === 0 && num % 5 === 0){
            return string+='FizzBuzz'
        } else if(num % 3 === 0){
            return string += 'Fizz'
        }else if(num % 5 === 0){
            return string += 'Buzz'
        } else{
            return num
    }
    }
    console.log(fizzBuzz(85));
    