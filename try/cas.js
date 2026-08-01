let valueOne = document.getElementById("val1");
let valueTwo = document.getElementById("val2");
let valueThree = document.getElementById("val3");
let userCoint = document.getElementById("userCoint");
let spinBtn = document.getElementById("btn");
let win = document.getElementById("win");
let coins = 10;
let wins;
let prize;

let value1;
let value2;
let value3;

spinBtn.onclick = function(){
    wins= "";
    coins--;
    userCoint.textContent = coins;
    win.textContent = wins;
    spinBtn.disabled = true;
    
    let spinAnimation = setInterval(() => {

        valueOne.textContent = Math.floor(Math.random()*6)+1;
        valueTwo.textContent = Math.floor(Math.random()*6)+1;
        valueThree.textContent = Math.floor(Math.random()*6)+1;

    },50);

    setTimeout(() => {

        clearInterval(spinAnimation);

        value1 = Math.floor(Math.random()*6)+1;
        value2 = Math.floor(Math.random()*6)+1;
        value3 = Math.floor(Math.random()*6)+1;

        valueOne.textContent = value1;
        valueTwo.textContent = value2;
        valueThree.textContent = value3;

        if(value1 == 6 && value2 == 6 && value3 == 6){
          jackpot(20);

        } else if(value1 == 1 && value2 == 1 && value3 == 1){
          jackpot(10);
        } else if(value2 == 3){
          reward(2);
        }
        else{
            win.textContent = "No win"
        }
        spinBtn.disabled = false;

        if(coins == 0 ){
        over();
    }

    },2000);
}

function reward(amount){
    coins += amount;
    userCoint.textContent = coins;
    win.textContent = `You won ${amount} pesos!`;
}
function jackpot(amount){
    coins += amount;
    userCoint.textContent = coins;
    win.textContent = `You hit the jackpot ${amount} pesos!`;
}

function over(){
    spinBtn.disabled = true;
    win.textContent = "Game Over"
}