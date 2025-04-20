const greeter = {
    greet: function (name) {
        return `Hello "${name}"`;
    }
};

console.log(greeter.greet("Nikita"));


// =========================================================================

const numbers = [5, 12, 8, 15, 3, 20, 9, 11];

function printNumbersGreaterThanTen(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 10) {
            console.log(arr[i]);
        }
    }
}

printNumbersGreaterThanTen(numbers);



// ==================================================================

function calculate(a, b, operation) {
    switch (operation) {
        case 'plus':
        case '+':
            return a + b;
        case 'minus':
        case '-':
            return a - b;
        case 'multiply':
        case '*':
            return a * b;
        case 'divide':
        case '/':
            return a / b;
        default:
            console.error('Неизвестная операция:', operation);
            return NaN;
    }
}

const result1 = calculate(2, 3, 'minus');  
const result2 = calculate(5, 4, 'plus');   
const result3 = calculate(3, 7, '*');      
const result4 = calculate(10, 2, '/');     

console.log(result1); 
console.log(result2); 
console.log(result3); 
console.log(result4); 