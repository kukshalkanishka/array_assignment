//----------------------(reverse elements)------------------// 

const reverseElements = function(elements, element){
    elements.unshift(element);
    return elements;
}

const reverse= function(elements){
  return elements.reduce(reverseElements, []);
}

//-----------------------(generate numbers series)--------------------------//

const generateNumbersSeries = function(numOfTerms) {
  let numbers = [];
  for(let number = 0; number<numOfTerms; number++) {
    numbers.push(number);
  }
  return numbers;
}

//------------------------(is index even)-----------------------------//

const isIndexEven = function(number) {
  return number[1] % 2 == 0;
}
const pickZerothElement = function(elements) {
  return elements[0];
}

//------------------------(select alternates)---------------------//

const selectAlternates = function(numbers) {
  let indexes = generateNumbersSeries(numbers.length);
  let zippedNumbers = zip(numbers,indexes);
  let zippedAlternates = zippedNumbers.filter(isIndexEven);
  return zippedAlternates.map(pickZerothElement);
}

//-------------------------(filter odd numbers)---------------------//

const isOdd = function(number) {
  return number % 2 != 0;
}

const filterOddNumbers = function(numbers) {
  return numbers.filter(isOdd);
}

//------------------------------(Filter even numbers)---------------------//

const isEven = function(number) {
  return number % 2 == 0;
}

const filterEvenNumbers = function(numbers) {
  return numbers.filter(isEven);
}

//-----------------------------(Add numbers)-----------------------//

const add = function(num1, num2) {
  return (num1 + num2);
}

const addNumbers = function(numbers) {
  return numbers.reduce(add);
}

//----------------------------(generates Fibonacci)------------------//

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

//-------------------------------(provides number after comparision)------------------------------

const reduce = function(elements, reduce){
  let  previousValue = elements[0];
  for (let element of elements){
    previousValue = reduce(element, previousValue);
  }

  return previousValue;
}

//-------------------------------(find greatest number)------------------

const findGreatestOfTwo = function(num1, num2) {
  return num1 > num2 ? num1:num2;
}

const findGreatestNum = function(numbers) {
  return numbers.reduce(findGreatestOfTwo);
}

//--------------------------------(find lowest number)---------------------//

const findLowestOfTwo = function(num1, num2) {
  return num1 < num2 ? num1:num2;
}

const findLowestNum = function(numbers) {
  return numbers.reduce(findLowestOfTwo);
}

//------------------------------(provide average of numbers)----------------//

const calculateAverage = function(numbers) {
  let average = (addNumbers(numbers)/numbers.length);
  return average.toFixed(1);
}

//------------------------------(Map length of element)---------------------//

const mapLength = function(element) {
  return element.length;
}

const mapLengths = function(elements) {
  return elements.map(mapLength);
}

//-------------------(count odd numbers)--------------//

const countOddNumbers = function(numbers) {
  let count = filterOddNumbers(numbers).length;
  return count;
}

//------------------(count even numbers)---------------//

const countEvenNumbers = function(numbers) {
  let count = filterEvenNumbers(numbers).length;
  return count;
}

//-------------------(count numbers above a value)--------------//

const countNumbersAbove = function(numbers,value) {

  const isGreater = function(number) {
    return number > value;
  }

  let numbersAboveValue = numbers.filter(isGreater);
  return numbersAboveValue.length;
}

//----------------------(count numbers below)--------------------//

const countNumbersBelow = function(numbers,value) {

  const isLesser = function(number) {
    return number < value;
  }

  let numbersBelowValue = numbers.filter(isLesser);
  return numbersBelowValue.length;
}

//---------------------(find first occurance)----------------------------//

const findFirstOccurance = function(element, elements) {
  let firstOccurance = elements.indexOf(element);
  return firstOccurance;
}

//------------------(checkOrderAscending)--------------------------//

const isOrderAscending = function(numbers) {
  let booleans = [];
  const compareNumbers = function(num1, num2) {
    booleans.push(num1 < num2); 
    return num2;
  }
  numbers.reduce(compareNumbers, 0); 
  let isAscending = booleans.every(function(state){
    return true === state;
  })
  return isAscending;
}

//-------------------(isOrderDescending)---------------------//

const isOrderDescending = function(numbers) {
  let accInfo = {previousValue : numbers[0], state : true};
  let comparisonInfo =  numbers.reduce(function(accInfo ,currentValue){
    if(accInfo.previousValue < currentValue){
      accInfo.state = false;
    }
    let state = accInfo.state;
    let previousValue = currentValue;
    return {previousValue, state};
  },accInfo);
  return comparisonInfo.state;
}


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
  let dividend = number;

  while(dividend > 0){
    extractedDigits.push(dividend % 10);
    dividend = Math.floor(dividend / 10);
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

exports.createUnion = createUnion;

//---------------------(find intersection)----------------------//

const findIntersections = function(list1, list2) {
  let list1Uniques = fetchUniques(list1);
  let list2Uniques = fetchUniques(list2);
  let filteredValues = [];

  for(element of list1Uniques) {
    let isIncluded = list2Uniques.includes(element);

    if(isIncluded) {
      filteredValues.push(element);
    }
  }

  return filteredValues;
}

//---------------------(find differences)--------------------//

const findDifferences = function(list1, list2) {
  let list1Uniques = fetchUniques(list1);
  let list2Uniques = fetchUniques(list2);
  let filteredValues = [];

  for(element of list1Uniques) {
    let isIncluded = !list2Uniques.includes(element);

    if(isIncluded) {
      filteredValues.push(element);
    }
  }

  return filteredValues;
}

//----------------------------(is subset)------------------//

const isSubset = function(superSet, subset) {
  const isIncluded = function(item){
    return superSet.includes(item);
  }
  return subset.every(isIncluded);
}

//----------------------------(zip)-----------------------------//

const zip = function(list1,list2) {
  let zippedElements = [];
  let highestIndex = Math.min(list1.length, list2.length);
  for(let index = 0; index< highestIndex; index++) {
    zippedElements[index] = [list1[index], list2[index]];
  }

  return zippedElements;
}

//----------------------(rotate elements by "value")----------------------//

const rotateElementsBy = function(rotateByIndex, elements) {
  let rotatedElements = elements;
  for(let i=0; i<rotateByIndex; i++) { 
    let element = rotatedElements.shift();
    rotatedElements.push(element);
  }

  return rotatedElements;
}

exports.rotateElementsBy = rotateElementsBy

//------------------------------(partition)------------------------------------//

const partition = function(elements, partitioner) {
  const createPartition = function(initializer,element) {
    let isLesser = partitioner >= element ? 0:1;
    initializer[isLesser].push(element);
    return initializer;
  }
  return elements.reduce(createPartition, [[],[]]);
}

module.exports = {reverse, selectAlternates, filterOddNumbers, filterEvenNumbers,
                  addNumbers, findGreatestNum, findLowestNum, calculateAverage, 
                  mapLengths, countOddNumbers, countEvenNumbers, countNumbersAbove,
                  countNumbersBelow, findFirstOccurance, isOrderAscending, 
                  extractDigits, countDigits, isOrderDescending, 
                  findIntersections, findDifferences, createUnion, fetchUniques,
                  isSubset, rotateElementsBy, zip, partition, reduce, generateFibonacci,
                  generateNumbersSeries};

