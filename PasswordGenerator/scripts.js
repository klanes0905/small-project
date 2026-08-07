const lengthNum = document.getElementById("lengthNum");
const addLow = document.getElementById("addLow");
const addHigh = document.getElementById("addHigh");
const addNum = document.getElementById("addNum");
const addSpecial = document.getElementById("addSpecial");
const generate = document.getElementById("generate");
const output = document.getElementById("output");

const low = "abcdefghijklmnopqrstuvwxyz";
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const num = "0123456789";
const special = "!@#$%^&*(){}";

generate.onclick = function(e){
    e.preventDefault();
    generatePass();
}

function generatePass(){

    let allowedChar = "";
    let result = "";

    if(addLow.checked){
        allowedChar += low;
    }
    if(addHigh.checked){
        allowedChar+= upper;
    }
    if(addNum.checked){
        allowedChar+=num;
    }
    if(addSpecial.checked){
        allowedChar+=special;
    }

    if(allowedChar.length === 0){
        output.textContent = `Pick one or more to generate the random password`;
    }
    else if(lengthNum.value){
        for(let i = 0; i < lengthNum.value; i++ ){
            let random = Math.floor(Math.random()*allowedChar.length);
            output.textContent = `Result: ${result += allowedChar[random]}`
        }
    } 
    else{
        output.textContent = `Please input a number`;
    }
    return output;
}


lengthNum.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        submit.click();
    }
});

