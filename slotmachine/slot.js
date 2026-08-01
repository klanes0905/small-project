const valueOne = document.getElementById("val1");
const valueTwo = document.getElementById("val2");
const valueThree = document.getElementById("val3");
const userCoint = document.getElementById("userCoint");
const spinBtn = document.getElementById("btn");
const win = document.getElementById("win");
const hiddenBtn = document.getElementById("hiddentBtn");


let wins;
let prize;

let coins = localStorage.getItem("userCoins") !== null ? Number(localStorage.getItem("userCoins")) : 10;

if(coins <= 0 ){
    over();
}

userCoint.textContent = coins;
const symbols = [
    "🍒",
    "🍋",
    "⭐",
    "💎",
    "🍀",
    "7️⃣",
    "♊"
];

let random = Math.floor(Math.random()*symbols.length);
let random2 = Math.floor(Math.random()*symbols.length);
let random3 = Math.floor(Math.random()*symbols.length);

valueOne.textContent = symbols[random];
valueTwo.textContent = symbols[random2];
valueThree.textContent = symbols[random3];
console.log(random, random2, random3)


spinBtn.onclick = function(){
    wins= "";
    coins--;

    userCoint.textContent = coins;
    localStorage.setItem("userCoins", coins);

    win.textContent = wins;
    spinBtn.disabled = true;
    
    let spinAnimation = setInterval(() => {
        random = Math.floor(Math.random()*symbols.length);
        random2 = Math.floor(Math.random()*symbols.length);
        random3 = Math.floor(Math.random()*symbols.length);

        valueOne.textContent = symbols[random];
        valueTwo.textContent = symbols[random2];
        valueThree.textContent = symbols[random3];

    },50);

    setTimeout(() => {

        clearInterval(spinAnimation);

        random = Math.floor(Math.random()*symbols.length);
        random2 = Math.floor(Math.random()*symbols.length);
        random3 = Math.floor(Math.random()*symbols.length);

        valueOne.textContent = symbols[random];
        valueTwo.textContent = symbols[random2];
        valueThree.textContent = symbols[random3];

console.log(random, random2, random3)

        if(random == 6 && random2 == 6 && random3 == 6){
          jackpot(20);
        } else if(random == 1 && random2 == 1 && random3 == 1){
          jackpot(10);
        } else if(random == 5 && random2 == 5 && random3 == 5){
          reward(10);
        } else if(random == 4 && random2 == 4 && random3 == 4){
          reward(10);
        } else if(random == 3 && random2 == 3 && random3 == 3){
          reward(10);
        } else if(random == 2 && random2 == 2 && random3 == 2){
          reward(10);
        } else if(random == 1 ||random2 == 1|| random3 == 1){
          reward(2);
        }
        else{
            win.textContent = "No win"
        }
        if(coins <= 0 ){
          over();
        } else{
          spinBtn.disabled = false;
        }

    },2000);
}

function reward(amount){
    coins += amount;
    userCoint.textContent = coins;
    localStorage.setItem("userCoins", coins);
    win.textContent = `You won ${amount} pesos!`;
}
function jackpot(amount){
    coins += amount;
    userCoint.textContent = coins;
    localStorage.setItem("userCoins", coins);
    win.textContent = `You hit the jackpot ${amount} pesos!`;
}

function over(){
    spinBtn.disabled = true;
    win.textContent = "Game Over"
}

function add(){
  coins += 10;
  userCoint.textContent = coins;
  localStorage.setItem("userCoins", coins);
}