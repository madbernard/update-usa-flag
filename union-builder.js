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

// function that is for even numbers of rows
// function that is for any numbers of rows
// function that adds above functions

var unionSize = 7/13 / 0.76;

// add some helper functions
