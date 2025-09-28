import {
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray,
} from './code'

test('Test for capitalize function', () => {
    expect(capitalize('hello')).toEqual('Hello')
    expect(capitalize('world')).toEqual('World')
})

test('Test for reverseString function', () => {
    expect(reverseString('hello')).toEqual('olleh')
    expect(reverseString('world')).toEqual('dlrow')
})

test('Test for calculator function', () => {
    const calc = calculator()
    expect(calc.add(1, 2)).toEqual(3)
    expect(calc.subtract(1, 2)).toEqual(-1)
    expect(calc.divide(1, 2)).toEqual(0.5)
    expect(calc.multiply(1, 2)).toEqual(2)
})

test('Test for caesarCipher function', () => {
    expect(caesarCipher('abc', 3)).toEqual('def')
    expect(caesarCipher('xyz', 3)).toEqual('abc')
    expect(caesarCipher('HeLLo', 3)).toEqual('KhOOr')
    expect(caesarCipher('Hello, World!', 3)).toEqual('Khoor, Zruog!')
})

test('Test for analyzeArray function', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6,
    })

    expect(analyzeArray([1, 2, 3, 4, 5, 6, 7, 8])).toEqual({
        average: 4.5,
        min: 1,
        max: 8,
        length: 8,
    })
})
