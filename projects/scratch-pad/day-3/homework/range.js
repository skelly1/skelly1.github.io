// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  BONUS: If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 * 
 * RUNNING YOUR CODE:
 * 
 * You can run the individual test by entering the following command:
 * 
 *   mocha -R spec -g "#range"
 */
function range(start, end) {
    // YOUR CODE GOES BELOW HERE //
    var integerArray = [];
    if (start < end) {
      for (var i = start; i < end + 1; i++) {
        integerArray.push(i);
    }
    } else if (start > end) {
        for (var i = start; i > end - 1; i--) {
            integerArray.push(i);
        }
}   return integerArray;
}

range(6, 2);
    

// function range(start, end) {
//     // YOUR CODE GOES BELOW HERE //
//     var integerArray = [];
//     var reverseArray = [];
//     if (start < end) {
//         for (var i = start; i <= end; i++) {
//             integerArray.push(i);
//         }   return integerArray
//     } else if (start < end) {
//         for (var i = end; i <= start; i--)
//             reverseArray.push(i);
//         }
//           return reverseArray;
// }

// range(6, 1)








// function range(start, end) {

// var integerArray = [];
//     if (start < end) {
//         var i = 0;
//         while (i > start && i <= end);
//         i++;
//             integerArray.push(i);
//     } else if (end > start) {
//         while (i < end && i > start);
//         i--;
//             integerArray.push(i);
//     }
// }
    
        
    
    
    
    
    // YOUR CODE GOES ABOVE HERE //






// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}