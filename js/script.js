$(document).ready(function(){


FizzBuzz(20)

});
function fizzyBuzzy (num){
    if (num % 15 === 0){
        return "FizzBuzz";
    }
    else if (num % 3 ===0){
        return "Fizz";
    }
    else if (num % 5 === 0){
        return "Buzz";
    }
    else{
        return num;f
    }
};
    function FizzBuzz(num){

        for (var i = 1; i <= num; i++) {
            console.log(fizzyBuzzy(i))
        } 

    }