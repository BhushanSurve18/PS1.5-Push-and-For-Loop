const { equal } = require('assert');
const express = require('express');
const res = require('express/lib/response');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.use(express.json());

// Exercise 1

let numbers = [2, 4, 6, 10, 5];

function multiplyNumber(numArray, multiplier){
  let result =[];
  for(let i=0; i < numArray.length; i++){
    result.push(numArray[i] * multiplier);
  }
  return result;
}

app.get("/numbers/multiply", (req,res)=>{ 
  let multiplier = req.query.multiplier
  let result = multiplyNumber(numbers, multiplier)
  console.log({result})
})

// Exercise 2

const students = [
  { name: 'Alice', grade: 'A' },
  { name: 'Bob', grade: 'B' },
  { name: 'Charlie', grade: 'A' },
  { name: 'David', grade: 'C' }
];

function filterStudentByGrade(studentArray, grade){
  let result = [];
  for(let i=0; i < studentArray.length; i++){
    if(studentArray[i].grade === grade){
      result.push(studentArray[i].name)
    }
  }
  return result;
}

app.get("/students/filter",(req,res)=>{
  let grade = req.query.grade;
  let result = filterStudentByGrade(students, grade)
  console.log(result)
})

// Exercise 3

const prices = [99, 150, 75, 120, 200];

function filterPrices(pricesArray,price){
let result =[]
for(i=0; i< pricesArray.length; i++){
  if(pricesArray[i]>price){
    result.push(pricesArray[i])
  }
}
return result
}

app.get("/prices/filter", (req,res)=>{
  let price = req.query.price
  let result = filterPrices(prices,price)
  console.log(result)
})

//Exercise 4

const ages = [12, 15, 22, 29, 34];

function addEvenAges(ageArray){
  let result= []
  for(i=0; i < ageArray.length; i++){
    if(ageArray[i] % 2 === 0){
      result.push(ageArray[i])
    }
  }
  return result;
}

app.get("/ages", (req,res)=>{
  let result = addEvenAges(ages)
  console.log(result)
})

// Exercise 5

const sports = ['Soccer', 'Basketball', 'Tennis'];

function combinedSports(sportsArray){
  let result=[]
  for(i=0; i < sportsArray.length; i++){
    result.push(sportsArray[i] + "?")
  }
  return result
}

app.get("/sports", (req,res)=>{

  let result = combinedSports(sports);
  console.log(result);
})

//Exercise 6

const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function addEvenNUmber(numbers1Array){
  let result =[]
  for (i=0; i < numbers1Array.length; i++){
    if(numbers1Array[i] % 2 === 0){
      result.push(numbers1Array[i])
    }
  }
  return result
}

app.get("/numbers/evenNumber", (req,res)=>{
  let result = addEvenNUmber(numbers1)
  console.log(result);
})

//Exercise 7


function addOddNUmber(numbers1Array){
  let result =[]
  for (i=0; i < numbers1Array.length; i++){
    if(numbers1Array[i] % 2 != 0){
      result.push(numbers1Array[i])
    }
  }
  return result
}

app.get("/numbers/oddNumber", (req,res)=>{
  let result = addOddNUmber(numbers1)
  console.log(result);
})

//Exercise 8

const names = ['John', 'Doe', 'Jane', 'Smith'];

function concatenatesName(namesArray){
  let result="";
  for(i=0; i < namesArray.length; i++){
    result =result + namesArray[i] + "-"
  }
  return result
}

app.get("/names/concatenates",(req,res)=>{
  let result = concatenatesName(names)
  console.log(result)
})

// Exercise 9

const strings = ['Hello', 'world', 'from', 'practice','set'];

function concatenatesStringse(stringsArray){
  let result="";
  for(i=0; i < stringsArray.length; i++){
    result =result + stringsArray[i] + " "
  }
  return result
}

app.get("/strings/concatenates",(req,res)=>{
  let result = concatenatesStringse(strings)
  console.log(result)
})

//Exercise 10

const strings1 = ['apple', 'banana', 'cherry'];

function concatenatesStrings1(stringsArray){
  let result="";
  for(i=0; i < stringsArray.length; i++){
    result =result + stringsArray[i] + ","
  }
  return result
}

app.get("/strings1/concatenates",(req,res)=>{
  let result = concatenatesStrings1(strings1)
  console.log(result)
})

//Exercise 11

const cars = [
  { make: 'Toyota', model: 'Camry', year: 2015 },
  { make: 'Honda', model: 'Accord', year: 2008 },
  { make: 'Tesla', model: 'Model 3', year: 2020 },
  { make: 'Ford', model: 'Fusion', year: 2009 }
];

function filtercarsByYear(carsArray, year){
 let result =[]
for(i=0; i< carsArray.length; i++){
  if(carsArray[i].year > 2010){
    result.push(carsArray[i])
  }
}
return result
}

app.get("/cars/year",(req,res)=>{
  let year = req.params.year;
  let result = filtercarsByYear(cars)
  console.log(result)
})

//Exercise 12

const temperatures = [0, 20, 37, 100];

function temperaturesInFahrenheit(temperaturesArray){
  let result =[]
  
  for(i=0; i <temperaturesArray.length; i++){
let newtemperature=""
  newtemperature = (temperaturesArray[i] * 9/5) + 32
 result.push(newtemperature)

  }
  return result
}

app.get("/temperatures",(req,res)=>{
  let result = temperaturesInFahrenheit(temperatures)
  console.log(result)
})

//Exercise 13

const scores = [10, 22, 25, 33, 40, 55];

function multilyNumbers(scoresArray, multiplier){
let result =[];
for (i=0; i < scoresArray.length; i++){
  if(scoresArray[i] % multiplier ===0){
    result.push(scoresArray[i])
  }
}
 return result
}

app.get("/scores/multiply",(req,res)=>{
let multiplier = req.query.multiplier
let result = multilyNumbers(scores, multiplier)
console.log(result)
})

//Exercise 14

const events = [
  { title: 'Concert', date: '2022-08-10', location: 'New York' },
  { title: 'Art Exhibition', date: '2022-09-12', location: 'Los Angeles' },
  { title: 'Tech Conference', date: '2022-10-05', location: 'c' }
];

function titlesOfEvents(eventsArray){
  let result =[]
  for(i=0;  i < eventsArray.length; i++){
    if(eventsArray[i].location === "New York"){
      result.push(eventsArray[i].title, eventsArray[i].location)
    }
  }
  return result
}

app.get("/events/location",(req,res)=>{
  let result = titlesOfEvents(events)
  console.log(result)
})

// Exercise 15

const ages1 = [20, 25, 30, 35];

function addedAges(ages1Array, number){
  let result =[]
  for(i=0; i < ages1Array.length; i++){
    result.push(ages1Array[i] + number)
  }
  return result;
}

app.get("/ages1/number",(req,res)=>{
  let number = parseInt(req.query.number)
  let result = addedAges(ages1, number)
  console.log(result)
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
