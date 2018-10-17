const lib= require("./arrayFunctionslib.js");
const assertEqual = require("assert").equal;
const assert = require("assert").deepEqual;

//reverse numbers of an array

const reverseNumbers = lib.reverseElements;
assert(reverseNumbers([3]),[3]);
assert(reverseNumbers([0]),[0]);
assert(reverseNumbers([2,4]),[4,2]);
assert(reverseNumbers([2,3.2]),[3.2,2]);
assert(reverseNumbers([3,35,666]),[666,35,3]);
assert(reverseNumbers([4,6,7,9,4,6]),[6,4,9,7,6,4]);

//selects every second number of an array

const selectEverySecondNum = lib.selectEverySecondNum;
assert(selectEverySecondNum([3]),[3]);
assert(selectEverySecondNum([0]),[0]);
assert(selectEverySecondNum([2,4]),[2]);
assert(selectEverySecondNum([2,3.2]),[2]);
assert(selectEverySecondNum([3,35,666]),[3,666]);
assert(selectEverySecondNum([4,6,7,9,4,6]),[4,7,4]);

//------------------------(filter odd numberes)--------------------------//

const filterOddNumbers = lib.filterOddNumbers;
assert(filterOddNumbers([3]),[3]);
assert(filterOddNumbers([3,5]),[3,5]);
assert(filterOddNumbers([2,4]),[]);
assert(filterOddNumbers([2,3]),[3]);
assert(filterOddNumbers([2,5,8,]),[5]);
assert(filterOddNumbers([4,6,7,9,4,6]),[7,9]);

//------------------------(add numbers)-------------------------//
const addNumbers = lib.addNumbers;

assertEqual(addNumbers([3]),3);
assertEqual(addNumbers([0]),0);
assertEqual(addNumbers([2,4]),6);
assertEqual(addNumbers([2,3.2]),5.2);
assertEqual(addNumbers([3,35,666]),704);
assertEqual(addNumbers([4,6,7,9,4,6]),36);

//generate fibonacci series

const generateFibonacci = lib.generateFibonacci;
assert(generateFibonacci(1),[0]);
assert(generateFibonacci(2),[0,1]);
assert(generateFibonacci(3),[0,1,1]);
assert(generateFibonacci(6),[0,1,1,2,3,5]);
assert(generateFibonacci(10),[0,1,1,2,3,5,8,13,21,34]);

//----------------(test provide number after comparison)---------

const reduce = lib.reduce;
assertEqual(reduce([1],Math.min),1);
assertEqual(reduce([1],Math.max),1);
assertEqual(reduce([1,2],Math.min),1);
assertEqual(reduce([1,2,4,5],Math.max),5);

//---------------(find greatest number)-------------------//

const findGreatestNum = lib.findGreatestNum;
assertEqual(findGreatestNum([2]),2);
assertEqual(findGreatestNum([2,2]),2);
assertEqual(findGreatestNum([2,3]),3);
assertEqual(findGreatestNum([2,4,8]),8);
assertEqual(findGreatestNum([2,10,1,555]),555);

//---------------(find lowest number)-------------------//

const findLowestNum = lib.findLowestNum;
assertEqual(findLowestNum([2]),2);
assertEqual(findLowestNum([2,2]),2);
assertEqual(findLowestNum([2,3]),2);
assertEqual(findLowestNum([2,4,8]),2);
assertEqual(findLowestNum([2,10,1,555]),1);

//-----------------(test for find average of numbers)------------//

const provideAverage = lib.provideAverage;
assertEqual(provideAverage([2]),2);
assertEqual(provideAverage([2,2]),2);
assertEqual(provideAverage([2,3]),2.5);
assertEqual(provideAverage([2,4,8]),4.7);

//-----------------(test for map length of names)------------------//

const mapLengths = lib.mapLengths;
assert(mapLengths(["k"]),[1]);
assert(mapLengths(["kanishka"]),[8]);
assert(mapLengths(["kanishka", "dheeru"]),[8,6]);
assert(mapLengths(["kanishka", "dheeru", "naman"]),[8,6,5]);

//-----------------(Test for count odd numbers)--------------------//

const countOddNumbers = lib.countOddNumbers;
assert(countOddNumbers([1]),1);
assert(countOddNumbers([1,2]),1);
assert(countOddNumbers([3,3,3]),3);
assert(countOddNumbers([1,2,3,4,5]),3);

//-----------------(Test for count Even Numbers)--------------------//

const countEvenNumbers = lib.countEvenNumbers;
assert(countEvenNumbers([2]),1);
assert(countEvenNumbers([1,2]),1);
assert(countEvenNumbers([2,2]),2);
assert(countEvenNumbers([1,2,3,4,5]),2);

//-------------------(Test for countNumbers above a value)-------------//

const countNumbersAbove = lib.countNumbersAbove;
assertEqual(countNumbersAbove(2,[]),0);
assertEqual(countNumbersAbove(2,[2]),0);
assertEqual(countNumbersAbove(1,[1,2]),1);
assertEqual(countNumbersAbove(2,[2,2]),0);
assertEqual(countNumbersAbove(2,[1,2,3,4,5]),3);

//-----------------(find first occurance test)-----------------------//

const findFirstOccurance = lib.findFirstOccurance;
assertEqual(findFirstOccurance(1,[1]),0);
assertEqual(findFirstOccurance(2,[1,2]),1);
assertEqual(findFirstOccurance(1,[1,2,1]),0);
assertEqual(findFirstOccurance(2,[2,2,1,1]),0);
assertEqual(findFirstOccurance(2,[]),(-1));

//-----------------(is order ascending)------------------------------------//

const isOrderAscending = lib.isOrderAscending;
assertEqual(isOrderAscending([1]),true);
assertEqual(isOrderAscending([1,2]),true);
assertEqual(isOrderAscending([1,2,1]),false);
assertEqual(isOrderAscending([2,2,1,1]),false);

//-----------------(is order descending)------------------------------------//

const isOrderDescending = lib.isOrderDescending;
assertEqual(isOrderDescending([1]),true);
assertEqual(isOrderDescending([2,1]),true);
assertEqual(isOrderDescending([1,2]),false);
assertEqual(isOrderDescending([2,2,1,1]),true);

//------------------------(is greater)---------------------------//

const isGreater = lib.isGreater;
assertEqual(isGreater(2,1),true);
assertEqual(isGreater(1,2),false);

//-----------------------(extract digits)--------------------//

const extractDigits = lib.extractDigits;
assert(extractDigits(2),[2]);
assert(extractDigits(12),[1,2]);
assert(extractDigits(122),[1,2,2]);
assert(extractDigits(12345),[1,2,3,4,5]);

//-----------------------(count digits)-------------------//

const countDigits = lib.countDigits;
assertEqual(countDigits(2),1);
assertEqual(countDigits(22),2);
assertEqual(countDigits(222),3);

//-----------------------(fetch uniques)-------------------//

const fetchUniques = lib.fetchUniques;
assert(fetchUniques([2]),[2]);
assert(fetchUniques([1,2,3,4]),[1,2,3,4]);
assert(fetchUniques([1,1,1]),[1]);
assert(fetchUniques([1,2,2,4,5,6,6]),[1,2,4,5,6]);

//-----------------------(fetch uniques from two arrays)----------------------//

const createUnion = lib.createUnion;
assert(createUnion([2],[1]),[2,1]);
assert(createUnion([1,2],[3,4]),[1,2,3,4]);
assert(createUnion([1,1],[1,1]),[1]);

//-----------------------(find intersection)----------------------//

const findIntersections = lib.findIntersections;
assert(findIntersections([2],[2]),[2]);
assert(findIntersections([1,2],[1,2]),[1,2]);
//assert(findIntersections([1,1],[1]),[1]);
//assert(findIntersections([1,1],[1,1]),[1]);
//assert(findIntersections([1,1],[1,1]),[1]);




