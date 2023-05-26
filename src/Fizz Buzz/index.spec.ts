import {fizzBuzz} from './index'

// describe('fizzBuzz',()=>{
//     it('Should return 1',()=>{
//         expect(fizzBuzz(1)).toBe(1)
//     })

//     it('should return Fizz',()=>{
//         expect(fizzBuzz(3)).toBe('Fizz')
//     })

//     it('should return Buzz',()=>{
//         expect(fizzBuzz(5)).toBe('Buzz')
//     })

//     it('should return FizzBuzz',()=>{
//         expect(fizzBuzz(15)).toContain('FizzBuzz')
//     })
// })

describe('fizzBuzz', () => {
    let consoleLogSpy= jest.spyOn(console, 'log');;

// beforeEach(() => {
//     consoleLogSpy 
// });

// afterEach(() => {
//     consoleLogSpy.mockRestore();
// });

it('returns "FizzBuzz" for numbers divisible by both 3 and 5', () => {
    fizzBuzz(15);
    expect(consoleLogSpy).toHaveBeenCalledWith('FizzBuzz');
});

it('returns "Fizz" for numbers divisible by 3', () => {
    fizzBuzz(3);
    expect(consoleLogSpy).toHaveBeenCalledWith('Fizz');
});

it('returns "Buzz" for numbers divisible by 5', () => {
    fizzBuzz(5);
    expect(consoleLogSpy).toHaveBeenCalledWith('Buzz');
});

it('returns the input number for numbers not divisible by 3 or 5', () => {
    fizzBuzz(1);
    expect(consoleLogSpy).toHaveBeenCalledWith(1);
});
});