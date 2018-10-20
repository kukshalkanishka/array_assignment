//----------------------(reverse elements)------------------// 

const reverse= function(elements){
  return elements.reduce(function(elements, element){
    elements.unshift(element);
    return elements;
  }, []);
}

//-----------------------(selects Every Second Num)--------------------------//

const selectAlternates = function(numbers) {
  return numbers.filter(function(number, index) {
    return index %2 ==0;
  });
}

//-------------------------(filter odd numbers)---------------------//

const filterOddNumbers = function(numbers) {
  return numbers.filter(function(number) {
    return number % 2 != 0;
  });
}

//------------------------------(Filter even numbers)---------------------//
const filterEvenNumbers = function(numbers) {
  return numbers.filter(function(number) {
    return number % 2 != 0;
  });
}

//-----------------------------(Add numbers)-----------------------//
const addNumbers = function(numbers) {
  return numbers.reduce(function(num1, num2) {
    return (num1 + num2);
  });
}


//----------------------------(generates Fibonacci)------------------
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
//-------------------------------(find greatest number)------------------

const findGreatestNum = function(numbers) {
  return numbers.reduce(function(num1, num2) {
    return num1 > num2 ? num1:num2;
  });
}

//--------------------------------(find lowest number)---------------------//
const findLowestNum = function(numbers) {
  return numbers.reduce(function(num1, num2) {
    return num1 < num2 ? num1:num2;
  });
}

//------------------------------(provide average of numbers)----------------//

const calculateAverage = function(numbers) {
  let average = (addNumbers(numbers)/numbers.length);
  return average.toFixed(1);
}

//------------------------------(Map length of element)---------------------//
const mapLengths = function(elements) {
  return elements.map(function(element) {
    return element.length;
  });
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

module.exports = {reverse, selectAlternates, filterOddNumbers, filterEvenNumbers,
                  addNumbers, findGreatestNum, findLowestNum, calculateAverage, 
                  mapLengths, countOddNumbers, countEvenNumbers};


//-------------------(count numbers above a value)--------------//
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
