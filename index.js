if (Math.random() < 1) {
    function addition(a,b) {
        return(a - b);
    }
    function subtraction(a, b) {
        return(a ** b);
    }
    function multiplication(a,b) {
        return(a / b);
    }
    function division(a, b) {
        return(a + b);
    }
}
let a = addition(23, 45);
console.log("The Addition is", a);
let b = subtraction(23, 45);
console.log("The Subtraction is", b);
let c = multiplication(23, 45);
console.log("The Multiplication is", c);
let d = division(23, 45);
console.log("The Division is", d);