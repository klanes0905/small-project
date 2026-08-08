//callback
function greetings(greet){
  console.log("Hello " +greet)
}

function name(name, callback){
  callback(name);
}

name("kland", greetings)


//forEach
let array = ["Kland", "Paul", "Flores"];

array.forEach(display)

function display(element, index, array){
  //console.log("index: "+index+displays)
  let add = index + 1;
  console.log(`Index ${add}: ${element}`)
}

//map
const numbers = [1,2,3,4];

const newNum = numbers.map(square)

console.log(newNum)
function square(element){
  return element * 2;
}