const inputt = document.getElementById("inputt");
const submit = document.getElementById("submit");
const output = document.getElementById("output");
const output2 = document.getElementById("output2");

const min = 1;
const max = 100;
let attempt = 0;
let previousGuess = [];

let ran = Math.floor(Math.random()*max)+min;

console.log(ran);

submit.onclick = function(){
    const guess = Number(inputt.value);
    output.textContent = "";
    
    if (isNaN(guess)){
        output.textContent = `number only`;
        return;
    } else if (guess == ""){
        output.textContent = `pls give a number`;
    } else if (guess < min || guess > max){
        output.textContent = `pls provide ${min} to ${max} only`;
    } else{
        attempt++
        if (guess < ran){
            //check(guess,  ran);
            solution(guess, ran);
            result(guess);
        } else if (guess > ran){
            //check2(guess, ran);
            solution(guess, ran);
            result(guess);
        } else {
            output.textContent = `congrats nakuha mo rin
            attemp: ${attempt}`;
            submit.disabled = true;
        }

    }
}

inputt.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        submit.click();
    }
});

function result(guess){
    inputt.value = "";
    previousGuess.push(guess);
    //previousGuess.reverse();
    output2.textContent = `Previous guesses: ${[...previousGuess].reverse().join(" ~ ")}`;
}
/*
function check(guess, ran){
    if(guess < ran){
        let e = ran - guess;
        console.log(e);
        if (e == 1 || e == 2 || e == 3){
            output.textContent = `Hotter 🔥`
        } else if (e == 4 || e == 5 || e == 6){
            output.textContent = `Warmer 😊`
        } else if (e == 7|| e == 8 || e ==9 || e==10){
            output.textContent = `Colder 🥶`
        } else{
            output.textContent = `Way Colder 🥶`
        }
    } 
}

function check2(guess, ran){
    if(guess > ran){
        let e = guess - ran;
        console.log(e);
        if (e == 1 || e == 2 || e == 3){
            output.textContent = `Hotter 🔥`
        } else if (e == 4 || e == 5 || e == 6){
            output.textContent = `Warmer 😊`
        } else if (e == 7|| e == 8 || e ==9 || e==10){
            output.textContent = `Colder 🥶`
        } else{
            output.textContent = `Way Colder 🥶`
        }
    } 
}*/

function solution(guess, ran){
    let a = Math.abs(guess - ran)

    if(a <= 3){
        output.textContent = `Hotter 🔥`
    } else if (a <= 10){
        output.textContent = `Warmer 😊`
    } else if (a <= 20){
        output.textContent = `Colder 🥶`
    } else if (a > 20){
        output.textContent = `Way Colder 🥶`
    }
}