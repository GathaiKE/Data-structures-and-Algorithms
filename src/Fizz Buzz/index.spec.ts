import { fizzBuzz } from './index';

let consoleSpy: jest.SpyInstance

beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation()
})

afterEach(() => {
    consoleSpy.mockRestore()
})

it('Returns the input if it is not divisible by either 3 or 5', () => {
    let input = 1
    fizzBuzz(input)
    expect(consoleSpy).toHaveBeenCalledWith(input)
})

it('Returns "Fizz" input divisible by 3', () => {
    fizzBuzz(6)
    expect(consoleSpy).toHaveBeenCalledWith('Fizz')
})

it('Returns "Buzz" input divisible by 5', () => {
    fizzBuzz(10)
    expect(consoleSpy).toHaveBeenCalledWith('Buzz')
})

it('Returns "FizzBuzz" if the input number is divisible by both 3 and 5', () => {
    fizzBuzz(15)
    expect(consoleSpy).toHaveBeenCalledWith('FizzBuzz')
})

it('Handles negative input', () => {
    fizzBuzz(-3)
    expect(consoleSpy).toHaveBeenCalledWith('Fizz')
})

it('Handles zero as an input', () => {
    fizzBuzz(0)
    expect(consoleSpy).toHaveBeenCalledWith('FizzBuzz')
})

it('should handle decimal numbers as inputs', () => {
    fizzBuzz(2.5)
    expect(consoleSpy).toHaveBeenCalledWith(2.5)
})

it('should handle large input numbers', () => {
    fizzBuzz(1000)
    expect(consoleSpy).toHaveBeenCalledWith('Buzz')
})

it('should handle non-integer input numbers', () => {
    fizzBuzz(7.8)
    expect(consoleSpy).toHaveBeenCalledWith(7.8)
})

it('should handle NaN as an input', () => {
    fizzBuzz(NaN)
    expect(consoleSpy).toHaveBeenCalledWith(NaN)
})

// it('should return the input number if it is not divisible by 3 or 5', () => {
//     let input = 1
//     expect(fizzBuzz(input)).toBe(input)
//     // expect(fizzBuzz(2)).toBe(2)
//     // expect(fizzBuzz(7)).toBe(7)
// })

// it('should return "Fizz" if the input number is divisible by 3', () => {
// expect(fizzBuzz(3)).toBe('Fizz')
// expect(fizzBuzz(6)).toBe('Fizz')
// expect(fizzBuzz(9)).toBe('Fizz')
// })

// it('should return "Buzz" if the input number is divisible by 5', () => {
// expect(fizzBuzz(5)).toBe('Buzz')
// expect(fizzBuzz(10)).toBe('Buzz')
// expect(fizzBuzz(20)).toBe('Buzz')
// })

// it('should return "FizzBuzz" if the input number is divisible by both 3 and 5', () => {
// expect(fizzBuzz(15)).toBe('FizzBuzz')
// expect(fizzBuzz(30)).toBe('FizzBuzz')
// expect(fizzBuzz(45)).toBe('FizzBuzz')
// })

// it('should handle negative input numbers', () => {
// expect(fizzBuzz(-3)).toBe('Fizz')
// expect(fizzBuzz(-5)).toBe('Buzz')
// expect(fizzBuzz(-15)).toBe('FizzBuzz')
// })

// it('should handle zero as an input', () => {
// expect(fizzBuzz(0)).toBe('FizzBuzz')
// })

// it('should handle decimal numbers as inputs', () => {
// expect(fizzBuzz(2.5)).toBe(2.5)
// expect(fizzBuzz(7.8)).toBe(7.8)
// })

// it('should handle large input numbers', () => {
// expect(fizzBuzz(1000)).toBe('Buzz')
// expect(fizzBuzz(1500)).toBe('FizzBuzz')
// })

// it('should handle NaN as an input', () => {
// expect(fizzBuzz(NaN)).toBe(NaN)
// })