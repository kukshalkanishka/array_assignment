const lib= require("./arrayLib.js");
const assert = require("assert");

//reverse numbers of an array

const reverse = lib.reverse;
assert.deepEqual(reverse([3]),[3]);
assert.deepEqual(reverse([0]),[0]);
//assert.deepEqual(reverse([2,4]),[4,2]);
//assert.deepEqual(reverse([2,3.2]),[3.2,2]);
assert.deepEqual(reverse([3,35,666]),[666,35,3]);
assert.deepEqual(reverse([4,6,7,9,4,6]),[6,4,9,7,6,4]);

//selects every second number of an array

const selectAlternates = lib.selectAlternates;
assert.deepEqual(selectAlternates([3]),[3]);
assert.deepEqual(selectAlternates([0]),[0]);
assert.deepEqual(selectAlternates([2,4]),[2]);
assert.deepEqual(selectAlternates([2,3.2]),[2]);
assert.deepEqual(selectAlternates([3,35,666]),[3,666]);
assert.deepEqual(selectAlternates([4,6,7,9,4,6]),[4,7,4]);

//------------------------(filter odd numberes)--------------------------//

const filterOddNumbers = lib.filterOddNumbers;
assert.deepEqual(filterOddNumbers([3]),[3]);
assert.deepEqual(filterOddNumbers([3,5]),[3,5]);
assert.deepEqual(filterOddNumbers([2,4]),[]);
assert.deepEqual(filterOddNumbers([2,3]),[3]);
assert.deepEqual(filterOddNumbers([2,5,8,]),[5]);
assert.deepEqual(filterOddNumbers([4,6,7,9,4,6]),[7,9]);

//------------------------(add numbers)-------------------------//
const addNumbers = lib.addNumbers;

assert.equal(addNumbers([3]),3);
assert.equal(addNumbers([0]),0);
assert.equal(addNumbers([2,4]),6);
assert.equal(addNumbers([2,3.2]),5.2);
assert.equal(addNumbers([3,35,666]),704);
assert.equal(addNumbers([4,6,7,9,4,6]),36);

//generate fibonacci series

const generateFibonacci = lib.generateFibonacci;
assert.deepEqual(generateFibonacci(1),[0]);
assert.deepEqual(generateFibonacci(2),[0,1]);
assert.deepEqual(generateFibonacci(3),[0,1,1]);
assert.deepEqual(generateFibonacci(6),[0,1,1,2,3,5]);
assert.deepEqual(generateFibonacci(10),[0,1,1,2,3,5,8,13,21,34]);

//----------------(test provide number after comparison)---------

const reduce = lib.reduce;
assert.equal(reduce([1],Math.min),1);
assert.equal(reduce([1],Math.max),1);
assert.equal(reduce([1,2],Math.min),1);
assert.equal(reduce([1,2,4,5],Math.max),5);

//---------------(find greatest number)-------------------//

const findGreatestNum = lib.findGreatestNum;
assert.equal(findGreatestNum([2]),2);
assert.equal(findGreatestNum([2,2]),2);
assert.equal(findGreatestNum([2,3]),3);
assert.equal(findGreatestNum([2,4,8]),8);
assert.equal(findGreatestNum([2,10,1,555]),555);

//---------------(find lowest number)-------------------//

const findLowestNum = lib.findLowestNum;
assert.equal(findLowestNum([2]),2);
assert.equal(findLowestNum([2,2]),2);
assert.equal(findLowestNum([2,3]),2);
assert.equal(findLowestNum([2,4,8]),2);
assert.equal(findLowestNum([2,10,1,555]),1);

//-----------------(test for find average of numbers)------------//

const calculateAverage = lib.calculateAverage;
assert.equal(calculateAverage([2]),2);
assert.equal(calculateAverage([2,2]),2);
assert.equal(calculateAverage([2,3]),2.5);
assert.equal(calculateAverage([2,4,8]),4.7);

//-----------------(test for map length of names)------------------//

const mapLengths = lib.mapLengths;
assert.deepEqual(mapLengths(["k"]),[1]);
assert.deepEqual(mapLengths(["kanishka"]),[8]);
assert.deepEqual(mapLengths(["kanishka", "dheeru"]),[8,6]);
assert.deepEqual(mapLengths(["kanishka", "dheeru", "naman"]),[8,6,5]);

//-----------------(Test for count odd numbers)--------------------//

const countOddNumbers = lib.countOddNumbers;
assert.deepEqual(countOddNumbers([1]),1);
assert.deepEqual(countOddNumbers([1,2]),1);
assert.deepEqual(countOddNumbers([3,3,3]),3);
assert.deepEqual(countOddNumbers([1,2,3,4,5]),3);

//-----------------(Test for count Even Numbers)--------------------//

const countvenNumbers = lib.countvenNumbers;
assert.deepEqual(countvenNumbers([2]),1);
assert.deepEqual(countvenNumbers([1,2]),1);
assert.deepEqual(countvenNumbers([2,2]),2);
assert.deepEqual(countvenNumbers([1,2,3,4,5]),2);

//-------------------(Test for countNumbers above a value)-------------//

const countNumbersAbove = lib.countNumbersAbove;
assert.equal(countNumbersAbove(2,[]),0);
assert.equal(countNumbersAbove(2,[2]),0);
assert.equal(countNumbersAbove(1,[1,2]),1);
assert.equal(countNumbersAbove(2,[2,2]),0);
assert.equal(countNumbersAbove(2,[1,2,3,4,5]),3);

//-----------------(find first occurance test)-----------------------//

const findFirstOccurance = lib.findFirstOccurance;
assert.equal(findFirstOccurance(1,[1]),0);
assert.equal(findFirstOccurance(2,[1,2]),1);
assert.equal(findFirstOccurance(1,[1,2,1]),0);
assert.equal(findFirstOccurance(2,[2,2,1,1]),0);
assert.equal(findFirstOccurance(2,[]),(-1));

//-----------------(is order ascending)------------------------------------//

const isOrderAscending = lib.isOrderAscending;
assert.equal(isOrderAscending([1]),true);
assert.equal(isOrderAscending([1,2]),true);
assert.equal(isOrderAscending([1,2,1]),false);
assert.equal(isOrderAscending([2,2,1,1]),false);

//-----------------(is order descending)------------------------------------//

const isOrderDescending = lib.isOrderDescending;
assert.equal(isOrderDescending([1]),true);
assert.equal(isOrderDescending([2,1]),true);
assert.equal(isOrderDescending([1,2]),false);
assert.equal(isOrderDescending([2,2,1,1]),true);

//------------------------(is greater)---------------------------//

const isGreater = lib.isGreater;
assert.equal(isGreater(2,1),true);
assert.equal(isGreater(1,2),false);

//-----------------------(extract digits)--------------------//

const extractDigits = lib.extractDigits;
assert.deepEqual(extractDigits(2),[2]);
assert.deepEqual(extractDigits(12),[1,2]);
assert.deepEqual(extractDigits(122),[1,2,2]);
assert.deepEqual(extractDigits(12345),[1,2,3,4,5]);

//-----------------------(count digits)-------------------//

const countDigits = lib.countDigits;
assert.equal(countDigits(2),1);
assert.equal(countDigits(22),2);
assert.equal(countDigits(222),3);

//-----------------------(fetch uniques)-------------------//

const fetchUniques = lib.fetchUniques;
assert.deepEqual(fetchUniques([2]),[2]);
assert.deepEqual(fetchUniques([1,2,3,4]),[1,2,3,4]);
assert.deepEqual(fetchUniques([1,1,1]),[1]);
assert.deepEqual(fetchUniques([1,2,2,4,5,6,6]),[1,2,4,5,6]);

//-----------------------(fetch uniques from two arrays)----------------------//

const createUnion = lib.createUnion;
assert.deepEqual(createUnion([2],[1]),[2,1]);
assert.deepEqual(createUnion([1,2],[3,4]),[1,2,3,4]);
assert.deepEqual(createUnion([1,1],[1,1]),[1]);

//-----------------------(find intersection)----------------------//

const findIntersections = lib.findIntersections;
assert.deepEqual(findIntersections([2],[2]),[2]);
assert.deepEqual(findIntersections([1,2],[1,2]),[1,2]);
assert.deepEqual(findIntersections([1,1],[1]),[1]);
assert.deepEqual(findIntersections([1,1],[1,1]),[1]);
assert.deepEqual(findIntersections([1,1,2,2],[1,1,3,4]),[1]);
assert.deepEqual(findIntersections([1,1,2,2],[3,4]),[]);

//-----------------------(find intersection)----------------------//

const findDifferences = lib.findDifferences;
assert.deepEqual(findDifferences([2],[1]),[2]);
assert.deepEqual(findDifferences([1,2],[3,4]),[1,2]);
assert.deepEqual(findDifferences([1,1],[1,1]),[]);
assert.deepEqual(findDifferences([1,1,2,2],[1,1,3,4]),[2]);


//-----------------------(is subset)----------------------//

const isSubset = lib.isSubset;
assert.deepEqual(isSubset([1,2],[1,2]),true);
assert.deepEqual(isSubset([1,2,3,4,5],[3,4]),true);
assert.deepEqual(isSubset([],[]),true);
assert.deepEqual(isSubset([1,1,2,2,5,7],[100]),false);

//-----------------------(zip elements of two arrays)----------------------//

const zip = lib.zip;
assert.deepEqual(zip([1],[1]),[[1,1]]);
assert.deepEqual(zip([1,2],[3,4]),[[1,3],[2,4]]);
assert.deepEqual(zip([1,2,3,4],[6,6,6,6]),[[1,6],[2,6],[3,6],[4,6]]);
assert.deepEqual(zip([1,2],[1,2,3]),[[1,1],[2,2]]);
assert.deepEqual(zip([],[]),[]);

//----------------------(rotate elements by "value")----------------------//

const rotateElementsBy = lib.rotateElementsBy;
assert.deepEqual(rotateElementsBy(2, [1,2,3,4,5]), [3,4,5,1,2]);
assert.deepEqual(rotateElementsBy(4,[1,2,3,4,5]), [5,1,2,3,4]);

//-----------------------------(partition)------------------------------//

const partition = lib.partition;
assert.deepEqual(partition([1,2,3,4,5], 3),[[1,2,3],[4,5]]);
assert.deepEqual(partition([1,1,1,1,1],1),[[1,1,1,1,1],[]]);
assert.deepEqual(partition([],),[[],[]]);




