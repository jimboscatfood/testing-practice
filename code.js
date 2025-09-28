export { capitalize, reverseString, calculator, caesarCipher, analyzeArray }

//A capitalize function that takes a string and returns it with the first character capitalized.
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

function reverseString(string) {
    let reversed = ''
    for (let i = string.length - 1; i >= 0; i--) {
        reversed += string.charAt(i)
    }
    return reversed
}

function calculator(num1, num2) {
    function add(num1, num2) {
        return num1 + num2
    }
    function subtract(num1, num2) {
        return num1 - num2
    }
    function divide(num1, num2) {
        return num1 / num2
    }
    function multiply(num1, num2) {
        return num1 * num2
    }

    return {
        add,
        subtract,
        divide,
        multiply,
    }
}

function caesarCipher(string, shiftFactor) {
    let cipherStr = ''
    for (let i = 0; i < string.length; i++) {
        const subStrCode = string.charCodeAt(i)
        let newStrCode = subStrCode + shiftFactor
        //for lower case
        if (subStrCode >= 97 && subStrCode <= 122) {
            if (newStrCode > 122) {
                newStrCode = 97 + ((newStrCode - 97) % 26)
                cipherStr += String.fromCharCode(newStrCode)
            } else {
                cipherStr += String.fromCharCode(newStrCode)
            }
        }
        //for upper case
        else if (subStrCode >= 65 && subStrCode <= 90) {
            if (newStrCode > 90) {
                newStrCode = 65 + ((newStrCode - 65) % 26)
                cipherStr += String.fromCharCode(newStrCode)
            } else {
                cipherStr += String.fromCharCode(newStrCode)
            }
            //for anything not alphabet characters
        } else {
            cipherStr += string[i]
        }
    }
    return cipherStr
}

function analyzeArray(array) {
    return {
        average: array.reduce((sum, cur) => sum + cur, 0) / array.length,
        min: Math.min(...array),
        max: Math.max(...array),
        length: array.length,
    }
}
