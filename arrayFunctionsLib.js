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


//------------------------------(Filter even numbers)---------------------//

const filterEvenNumbers = function(numbers) {
  let evenChoice = 0;
  let filteredNumbers = filterNumbers(numbers,evenChoice);

  return filteredNumbers;
}

exports.filterEvenNumbers = filterEvenNumbers;



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
  let firstNumber = -1;
  let secondNumber = 1;
  for (let termNumber = 0; termNumber < totalNumOfTerms; termNumber ++){
    let sum = firstNumber + secondNumber;
    series.push(sum);
    firstNumber = secondNumber;
    secondNumber = sum;
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

const calculateAverage = function(numbers) {
  let sum = 0;
  for(let number of numbers){
    sum = sum + number;
  }

  let average = (sum/numbers.length).toFixed(1);

  return average;
}

exports.calculateAverage = calculateAverage;

//------------------------------(Map length of element)---------------------//
const mapLengths = function(elements) {
  let mappedLengths = [];
  for(let element of elements){
    mappedLengths.push(element.length);
  }

  return mappedLengths;
}

exports.mapLengths = mapLengths;

//------------------(count elements)---------------//

const countElements = function(elements) {
  let count = elements.length; 

  return count;
}

exports.countElements= countElements;

//-------------------(count odd numbers)--------------//

const countOddNumbers = function(numbers) {
  let oddNumber = filterOddNumbers(numbers);
  let count = countElements(oddNumber);

  return count;
}

exports.countOddNumbers = countOddNumbers;

//------------------(count even numbers)---------------//

const countEvenNumbers = function(numbers) {
  let evenNumbers = filterEvenNumbers(numbers);
  let count =  countElements(evenNumbers);

  return count;
}

exports.countEvenNumbers = countEvenNumbers;

//--------------------( is value1 greater than value2)------------------------//

const evaluateIsGreater = function(value1, value2) {
  let isGreater = 0;
  if(value1 > value2) {
    isGreater = 1;
  }

  return isGreater;
}

const evaluateIsLesser = function(value1, value2) {
  let isLesser = 0;
  if(value1 < value2) {
    isLesser = 1;
  }

  return isLesser;
}

//---------------------(count reduced values)-------------------//
const countReducedValues = function(elementToFind, elements, reducingFunction) {
  let count = 0;
  for (let element of elements) {
    let increamenter = reducingFunction(element,elementToFind);  
    count = count + increamenter;
   }
  
  return count;
}


//-------------------(count numbers above a value)--------------//

const countNumbersAbove = function(value, numbers) {
  let count = countReducedValues(value, numbers, evaluateIsGreater);
  return count;
}

exports.countNumbersAbove = countNumbersAbove;

//----------------------(count numbers below)--------------------//

const countNumbersBelow = function(value, numbers) {
  let count = countReducedValues(value, numbers, evaluateIsLesser);
  return count;
}

//---------------------(find first occurance)----------------------------//

const findFirstOccurance = function(element, elements) {
  let firstOccurance = elements.indexOf(element);
  return firstOccurance;
}

exports.findFirstOccurance = findFirstOccurance;

//---------------------------(is greater)------------------------------//

const isGreater = function(value1, value2) {
  let isGreater = value1 >= value2;
  return isGreater;
}

exports.isGreater = isGreater;

//-------------------------(is lesser)-------------------------------//

const isLesser = function(value1, value2) {
  let isLesser = value1 <= value2;
  return isLesser;
}

//---------------------(compare value with succeeding values)---------------------------------//

const compareWithSucceeder = function(numbers, comparisonType) {
  let length = numbers.length;
  for(let position = 0; position < (length -1); position++) {
    let comparedResult = comparisonType(numbers[position],numbers[position +1]); 
    if(!comparedResult) {
      return false;
    }
  }
  return true;
}

//------------------(checkOrderAscending)--------------------------//

const isOrderAscending = function(numbers) {
  let isAscending = compareWithSucceeder(numbers, isLesser);

  return isAscending;
}

exports.isOrderAscending = isOrderAscending;


//-------------------(isOrderDescending)---------------------//

const isOrderDescending = function(numbers) {
  let isDescending = compareWithSucceeder(numbers, isGreater);

  return isDescending;
}

exports.isOrderDescending = isOrderDescending;

//----------------------(count digits)------------------------//

const countDigits = function(number) {
  let divisor = 10;
  let counter = 0;
  let remainder = 0;
  while(number!=remainder){
    remainder = number % divisor;
    divisor*=10;
    counter++;
  }
  return counter; 
}

exports.countDigits = countDigits;

//---------------------(extract digits)----------------------//

const extractDigits = function(number) {
  let extractedDigits = [];
  let divident = number;

  while(divident > 0){
    extractedDigits.push(divident % 10);
    divident = Math.floor(divident / 10);
  }

  return extractedDigits.reverse();
}

exports.extractDigits = extractDigits;

//---------------------(fetch uniques)----------------------//

const fetchUniques= function(elements) {
  let uniqueElements = [];
  for(element of elements){
    let isIncluded = uniqueElements.includes(element);

    if( !isIncluded){
      uniqueElements.push(element);
    }
  }

  return uniqueElements;
}

exports.fetchUniques = fetchUniques;

//---------------------(fetch uniques from two arrays)----------------------//

const createUnion = function(list1, list2) {
  let union = fetchUniques(list1.concat(list2));
  return union;
}

//---------------------(find intersection)----------------------//
//
exports.createUnion = createUnion;

const complement = function(input){
  return !input;
}

const provide = function(input){
  return input;
}

const find = function(list1, list2, selector) {
  let list1Uniques = fetchUniques(list1);
  let list2Uniques = fetchUniques(list2);
  let searchedValues = [];

  for(element of list1Uniques) {
    let isIncluded = list2Uniques.includes(element);
    complemented = selector(isIncluded);
    if(complemented) {
      searchedValues.push(element);
    }
  }

  return searchedValues;
}

exports.find = find;


const findIntersections = function(list1, list2) {
  let intersections = find(list1, list2, provide);
  return intersections;
}

exports.findIntersections = findIntersections;

const findDifferences = function(list1, list2) {
  let differences = find(list1, list2, complement);
  return differences;
}

exports.findDifferences = findDifferences;

//----------------------------(is subset)------------------//

const isSubset = function(mainList, subset) {
  for(value of subset){
    isIncluded = mainList.includes(value);
    if(!isIncluded){
      return isIncluded;
    }
  }
  return isIncluded;
}

exports.isSubset = isSubset; 

//----------------------------(zip)-----------------------------//

const zip = function(list1,list2) {
  let zippedElements = [];
  let highestIndex = Math.min(list1.length, list2.length);
  for(let index = 0; index< highestIndex; index++) {
    zippedElements[index] = [list1[index], list2[index]];
  }
  
  return zippedElements;
}

exports.zip = zip;

//----------------------(rotate elements by "value")----------------------//

const rotateElementsBy = function(value, elements) {
  let rotatedElements = [];
  let initialization = elements.indexOf(value) +1;
  for(let i=initialization; i<elements.length; i++){
    rotatedElements.push(elements[i]);
  }
  for(let i=0; i< initialization; i++) {
    rotatedElements.push(elements[i]);
  }

  return rotatedElements;
}

exports.rotateElementsBy = rotateElementsBy

//------------------------------(partition)------------------------------------//

const partition = function(elements, partitioner) {
  let partitioned = [[],[]]; 
  for(element of elements) {
    index = evaluateIsLesser(partitioner, element);
    partitioned[index].push(element);
  }

  return partitioned;
}

exports.partition = partition;
