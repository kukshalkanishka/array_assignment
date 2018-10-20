//----------------------(reverse elements)------------------// 

const insertElement = function(elements, element) {
  elements.unshift(element);
  return elements;
}

const reverse= function(elements){
  return elements.reduce(insertElement, []);
}

//-----------------------(selects Every Second Num)--------------------------//

const selectAlternates = function(numbers) {
  return numbers.filter(function(number, index){
    return index %2 ==0;
  });
}

//-------------------------(filter odd numbers)---------------------//

const filterOddNumbers = function(numbers) {
  return numbers.filter(function(number){
    return number % 2 != 0;
  });
}

module.exports = {reverse, selectAlternates, filterOddNumbers};

//------------------------------(Filter even numbers)---------------------//
//
//const filterEvenNumbers = function(numbers) {
//  let evenChoice = 0;
//  let filteredNumbers = filterNumbers(numbers,evenChoice);
//
//  return filteredNumbers;
//}
//
//exports.filterEvenNumbers = filterEvenNumbers;
//
//
//
////-----------------------------(Add numbers)-----------------------//
//
//const addNumbers = function(numbers) {
//  let sum = 0;
//  for(number of numbers) {
//    sum = sum + +number;
//  }
//
//  return sum;
//}
//
//exports.addNumbers = addNumbers;
//
////----------------------------(generates Fibonacci)------------------
//const generateFibonacci = function(totalNumOfTerms) {
//  let series = [];
//  let firstNumber = -1;
//  let secondNumber = 1;
//  for (let termNumber = 0; termNumber < totalNumOfTerms; termNumber ++){
//    let sum = firstNumber + secondNumber;
//    series.push(sum);
//    firstNumber = secondNumber;
//    secondNumber = sum;
//  }
//
//  return series;
//}
//
//exports.generateFibonacci = generateFibonacci;
//
////-------------------------------(provides number after comparision)------------------------------
//const reduce = function(elements, reduce){
//  let  previousValue = elements[0];
//  for (let element of elements){
//    previousValue = reduce(element, previousValue);
//  }
//
//  return previousValue;
//}
//
//exports.reduce = reduce;
//
//
////-------------------------------(find greatest number)------------------
//
//const findGreatestNum = function(numbers) {
//  let greatestNum = reduce(numbers, Math.max);
//  return greatestNum;
//}
//exports.findGreatestNum = findGreatestNum;
//
////--------------------------------(find lowest number)---------------------//
//
//const findLowestNum = function(numbers) {
//  let greatestNum = reduce(numbers, Math.min);
//  return greatestNum;
//}
//exports.findLowestNum = findLowestNum;
//
////------------------------------(provide average of numbers)----------------//
//
//const calculateAverage = function(numbers) {
//  let sum = 0;
//  for(let number of numbers){
//    sum = sum + number;
//  }
//
//  let average = (sum/numbers.length).toFixed(1);
//
//  return average;
//}
//
//exports.calculateAverage = calculateAverage;
//
////------------------------------(Map length of element)---------------------//
//const mapLengths = function(elements) {
//  let mappedLengths = [];
//  for(let element of elements){
//    mappedLengths.push(element.length);
//  }
//
//  return mappedLengths;
//}
//
//exports.mapLengths = mapLengths;
//
////------------------(count elements)---------------//
//
//const countlements = function(elements) {
//  let count = elements.length; 
//
//  return count;
//}
//
//exports.countlements= countlements;
//
////-------------------(count odd numbers)--------------//
//
//const countOddNumbers = function(numbers) {
//  let oddNumber = filterOddNumbers(numbers);
//  let count = countlements(oddNumber);
//
//  return count;
//}
//
//exports.countOddNumbers = countOddNumbers;
//
////------------------(count even numbers)---------------//
//
//const countvenNumbers = function(numbers) {
//  let evenNumbers = filterEvenNumbers(numbers);
//  let count =  countlements(evenNumbers);
//
//  return count;
//}
//
//exports.countvenNumbers = countvenNumbers;
//
////--------------------( is value1 greater than value2)------------------------//
//
//const evaluateIsGreater = function(value1, value2) {
//  let isGreater = 0;
//  if(value1 > value2) {
//    isGreater = 1;
//  }
//
//  return isGreater;
//}
//
//const evaluateIsLesser = function(value1, value2) {
//  let isLesser = 0;
//  if(value1 < value2) {
//    isLesser = 1;
//  }
//
//  return isLesser;
//}
//
////---------------------(count reduced values)-------------------//
//const countReducedValues = function(elementToFind, elements, reducingFunction) {
//  let count = 0;
//  for (let element of elements) {
//    let incrementer = reducingFunction(element,elementToFind);  
//    count = count + incrementer;
//   }
//  
//  return count;
//}
//
//
////-------------------(count numbers above a value)--------------//
//
//const countNumbersAbove = function(numbers,value) {
//  let count = countReducedValues(value, numbers, evaluateIsGreater);
//  return count;
//}
//
//exports.countNumbersAbove = countNumbersAbove;
//
////----------------------(count numbers below)--------------------//
//
//const countNumbersBelow = function(value, numbers) {
//  let count = countReducedValues(value, numbers, evaluateIsLesser);
//  return count;
//}
//
////---------------------(find first occurance)----------------------------//
//
//const findFirstOccurance = function(element, elements) {
//  let firstOccurance = elements.indexOf(element);
//  return firstOccurance;
//}
//
//exports.findFirstOccurance = findFirstOccurance;
//
////---------------------------(is greater)------------------------------//
//
//const isGreater = function(value1, value2) {
//  let isGreater = value1 >= value2;
//  return isGreater;
//}
//
//exports.isGreater = isGreater;
//
////-------------------------(is lesser)-------------------------------//
//
//const isLesser = function(value1, value2) {
//  let isLesser = value1 <= value2;
//  return isLesser;
//}
//
////---------------------(compare value with succeeding values)---------------------------------//
//
//const compareWithSucceeder = function(numbers, comparisonType) {
//  let length = numbers.length;
//  for(let position = 0; position < (length -1); position++) {
//    let comparedResult = comparisonType(numbers[position],numbers[position +1]); 
//    if(!comparedResult) {
//      return false;
//    }
//  }
//  return true;
//}
//
////------------------(checkOrderAscending)--------------------------//
//
//const isOrderAscending = function(numbers) {
//  let isAscending = compareWithSucceeder(numbers, isLesser);
//
//  return isAscending;
//}
//
//exports.isOrderAscending = isOrderAscending;
//
//
////-------------------(isOrderDescending)---------------------//
//
//const isOrderDescending = function(numbers) {
//  let isDescending = compareWithSucceeder(numbers, isGreater);
//
//  return isDescending;
//}
//
//exports.isOrderDescending = isOrderDescending;
//
////----------------------(count digits)------------------------//
//
//const countDigits = function(number) {
//  let divisor = 10;
//  let counter = 0;
//  let remainder = 0;
//  while(number!=remainder){
//    remainder = number % divisor;
//    divisor*=10;
//    counter++;
//  }
//  return counter; 
//}
//
//exports.countDigits = countDigits;
//
////---------------------(extract digits)----------------------//
//
//const extractDigits = function(number) {
//  let extractedDigits = [];
//  let dividend = number;
//
//  while(dividend > 0){
//    extractedDigits.push(dividend % 10);
//    dividend = Math.floor(dividend / 10);
//  }
//
//  return extractedDigits.reverse();
//}
//
//exports.extractDigits = extractDigits;
//
////---------------------(fetch uniques)----------------------//
//
//const fetchUniques= function(elements) {
//  let uniqueElements = [];
//  for(element of elements){
//    let isIncluded = uniqueElements.includes(element);
//
//    if( !isIncluded){
//      uniqueElements.push(element);
//    }
//  }
//
//  return uniqueElements;
//}
//
//exports.fetchUniques = fetchUniques;
//
////---------------------(fetch uniques from two arrays)----------------------//
//
//const createUnion = function(list1, list2) {
//  let union = fetchUniques(list1.concat(list2));
//  return union;
//}
//
//exports.createUnion = createUnion;
//
////---------------------(find intersection)----------------------//
//
//const findItems= function(list1, list2, filterType) {
//  let list1Uniques = fetchUniques(list1);
//  let list2Uniques = fetchUniques(list2);
//  let filteredValues = [];
//
//  for(element of list1Uniques) {
//    let isIncluded = list2Uniques.includes(element);
//    if(filterType == "differences") {
//    isIncluded = !list2Uniques.includes(element);
//    }
//
//    if(isIncluded) {
//      filteredValues.push(element);
//    }
//  }
//
//  return filteredValues;
//}
//
//exports.findItems= findItems;
//
//
//const findIntersections = function(list1, list2) {
//  let intersections = findItems(list1, list2, "intersections");
//  return intersections;
//}
//
//exports.findIntersections = findIntersections;
//
//const findDifferences = function(list1, list2) {
//  let differences = findItems(list1, list2, "differences");
//  return differences;
//}
//
//exports.findDifferences = findDifferences;
//
////----------------------------(is subset)------------------//
//
//const isSubset = function(mainList, subset) {
//  for(value of subset){
//    let isIncluded = mainList.includes(value);
//    if(!isIncluded){
//      return isIncluded;
//    }
//  }
//  return true;
//}
//
//exports.isSubset = isSubset; 
//
////----------------------------(zip)-----------------------------//
//
//const zip = function(list1,list2) {
//  let zippedElements = [];
//  let highestIndex = Math.min(list1.length, list2.length);
//  for(let index = 0; index< highestIndex; index++) {
//    zippedElements[index] = [list1[index], list2[index]];
//  }
//  
//  return zippedElements;
//}
//
//exports.zip = zip;
//
////----------------------(rotate elements by "value")----------------------//
//
//const rotateElementsBy = function(rotateByIndex, elements) {
//  let rotatedElements = elements;
//  for(let i=0; i<rotateByIndex; i++) { 
//    let element = rotatedElements.shift();
//    rotatedElements.push(element);
//  }
//
//  return rotatedElements;
//}
//
//exports.rotateElementsBy = rotateElementsBy
//
////------------------------------(partition)------------------------------------//
//
//const partition = function(elements, partitioner) {
//  let partitioned = [[],[]]; 
//  for(element of elements) {
//    index = evaluateIsLesser(partitioner, element);
//    partitioned[index].push(element);
//  }
//
//  return partitioned;
//}
//
//exports.partition = partition;
