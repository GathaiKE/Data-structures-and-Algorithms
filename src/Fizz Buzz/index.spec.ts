import {fizzBuzz} from './index'


describe('fizzBuzz', () => {
    let consoleLogSpy= jest.spyOn(console, 'log');;

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