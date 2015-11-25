//us flag star mapper -- for a given number of stars, how do they condense into a square
//height of "union" is 7/13, width of union is 0.76

//make set of arrays where two numbers, height and width, are
//reduce arrays to find array with minimum deviation (%) from 7/13 / 0.76
//return that array

//array sets can be:  even and odd rows where odd can be 1 more than even
//or where both even and odd are equal
//or where this test is done with half the total and then doubled (symmetry across horizontal center)
//or where first line or lines follow different pattern from middle lines

//https://madbernard.dreamwidth.org/2110.html
//http://www.usflag.org/flag.specs.html

// how to do this:
// create many small functions
// put all the vars at the top
// store the best fits in an array that I look up before re-running that query...  memoize?  Object?
// yes, store in object with key as the input number of states and value as the best pattern

// // function that is for even numbers of rows
//   start at num
  // for loop to get i''s
  // loop ends when num / i < i
  //   push columns: math.floor (num/i), rows: i
  //   push columns: i, rows: math.floor (num/i)

// above should get us all the multiples that come in under num?
/*
 maybe better to just get all numbers that multiplied together come in under num
 recursion

 then take that list of multiples and get the total stars in them
 no, have recursion also provide total as key, row and column as arrays in key
 then for each total see if there is another total that combined add up to num
 and see if those fit the bill
 ie see that the wider set of rows is an even #
 if num is prime, ie if no "total" key === num
 we're going to have to throw out the symmetry requirement
 http://www.usflag.org/the.31.star.flag.html
 http://www.usflag.org/the.43.star.flag.html
 One of the rows will be 1 longer or 1 shorter
 Find totals of + or - 1

 result will be columns in part a plus columns in part b,
*/

// function that is for any numbers of rows
// function that adds above functions

// In the USA flag, 1 equals the total length of the hoist,
// which is the shorter side of the flag, where it has grommets to raise it on a pole

var hoistLengthUSA = 7/13;
var flyLengthUSA = 0.76;

function unionSize (hoistLength, flyLength) {
  return hoistLength / flyLength;
}

var unionSizeUSA = unionSize(hoistLengthUSA, flyLengthUSA);
// add some helper functions
