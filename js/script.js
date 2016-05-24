$(document).ready(function() {
    FizzBuzz(100);

});

function fizzyBuzzy(num) {
    if (num % 5 === 0 && num % 3 === 0) {
        return "FizzBuzz";
    } else if (num % 3 === 0) {
        return "Fizz";
    } else if (num % 5 === 0) {
        return "Buzz";
    } else {
        return num;
    }
};

function FizzBuzz(num) {
    for (var i = 1; i <= num; i++) {
        console.log(fizzyBuzzy(i))
    }
}