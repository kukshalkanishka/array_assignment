//----------------------(reverse elements)------------------// 

const reverseElements = function(elements) {
  let index = elements.length -1;
  let reversedElements = [];
  for(element of elements) {
    reversedElements[index] = element;
    index--;
  }
    
  return reversedElements;
}
exports.reverseElements = reverseElements;

//----------------------(selects Every Second Num)--------------------------

const selectEverySecondNum = function(numbers) {
  let index = 0;
  let selectedNumbers = [];

  for(let position = 0; position < numbers.length; position += 2){
    selectedNumbers[index] = numbers[position];
    index++;
  }

  return selectedNumbers;
}

exports.selectEverySecondNum = selectEverySecondNum;
  
//-------------------------(filter)-----------------------------------//

const filterNumbers = function(numbers, choice){
  let filteredNumbers = [[],[]];

  for(let number of numbers){
    let index = number % 2;
    filteredNumbers[index].push(number);
    }

  return filteredNumbers[choice];
}

exports.filterNumbers = filterNumbers;

//-------------------------(filter odd numbers)---------------------//

const filterOddNumbers = function(numbers) {
  let oddChoice = 1;
  let filteredNumbers = filterNumbers(numbers,oddChoice);

  return filteredNumbers;
}

exports.filterOddNumbers = filterOddNumbers;

//-----------------------------(Add numbers)-----------------------//

const addNumbers = function(numbers) {
  let sum = 0;
  for(number of numbers) {
    sum = sum + +number;
  }

  return sum;
}

exports.addNumbers = addNumbers;

//----------------------------(generates Fibonacci)------------------
const generateFibonacci = function(totalNumOfTerms) {
  let series = [];
  series[0]=0;
  let firstNumber = 0;
  let secondNumber = 1;
  for (let termNumber = 1; termNumber < totalNumOfTerms; termNumber ++){
    let thirdNumber = firstNumber + secondNumber;
    secondNumber = firstNumber;
    firstNumber = thirdNumber;
    series.push(firstNumber);
  }

  return series;
}

exports.generateFibonacci = generateFibonacci;

//-------------------------------(provides number after comparision)------------------------------
const reduce = function(elements, reduceFunction){
  let  previousValue = elements[0];
  for (let element of elements){
    previousValue = reduceFunction(element, previousValue);
  }

  return previousValue;
}

exports.reduce = reduce;


//-------------------------------(find greatest number)------------------

const findGreatestNum = function(numbers) {
  let greatestNum = reduce(numbers, Math.max);
  return greatestNum;
}
exports.findGreatestNum = findGreatestNum;

//--------------------------------(find lowest number)---------------------//

const findLowestNum = function(numbers) {
  let greatestNum = reduce(numbers, Math.min);
  return greatestNum;
}
exports.findLowestNum = findLowestNum;

//------------------------------(provide average of numbers)----------------//

const provideAverage = function(numbers) {
  let sum = 0;
  for(let number of numbers){
    sum = sum + number;
  }

  let average = (sum/numbers.length).toFixed(1);

  return average;
}

exports.provideAverage = provideAverage;

//------------------------------(Map length of element)---------------------//
const mapLengths = function(elements) {
  let mappedLengths = [];
  for(let element of elements){
    mappedLengths.push(element.length);
  }

  return mappedLengths;
}

exports.mapLengths = mapLengths;

//------------------(count odd numbers)---------------//

const countOddNumbers = function(numbers) {
  let oddNumbers = filterOddNumbers(numbers);
  let count = oddNumbers.length; 

  return count;
}

exports.countOddNumbers = countOddNumbers;
