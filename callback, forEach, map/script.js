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

//filter()

const num = [1,2,3,4,5,6,7,8,9,10];

const evenNums = num.filter(evenNum);
const oddNums = num.filter(oddNum);

console.log(evenNums);
console.log(oddNums);

function evenNum(element){
  return element % 2 === 0;
}

function oddNum(element){
  return element % 2 === 1;
}

//filter sample 2
const ages = [16, 17, 18, 20, 21, 25];
const news = ages.filter(below);

console.log(news);

function below(element){
  return element > 18;
}

//filter sample 3
const fruits = ["apple", "orange", "banana", "pomegranate"];
const longNames = fruits.filter(longName);
const shortNames = fruits.filter(shortName);

console.log(longNames);
console.log(shortNames);

function longName(element){
  return element.length > 6;
}
function shortName(element){
  return element.length <= 6;
}
