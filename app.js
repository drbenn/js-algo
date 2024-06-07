// Binary Search
// list must already be sorted
const list = [1,2,3,4,5];
const target = 5

console.log(binarySearch(list, target));

function binarySearch(arr, target) {
  let leftIndex = 0 
  let rightIndex = arr.length - 1

  while (leftIndex <= rightIndex) {
    let midIndex = Math.floor((leftIndex + rightIndex) / 2)
    let guess = arr[midIndex]

    if (guess === target ) {
      return `Success target ${target} is at index: ${midIndex}`
    } else if ( guess < target) {
      leftIndex = midIndex + 1
    } else {
      // guess > target
      rightIndex = midIndex - 1
    }
  }
  // failure - target not found while while loop
  return `target ${target} does not exist in array!`

}




// function binarySearch(arr, target) {
//   let leftIndex = 0;
//   let rightIndex = arr.length - 1

//   while (leftIndex <= rightIndex) {
//     let midIndex = Math.floor((leftIndex + rightIndex) / 2);
//     let guess = arr[midIndex]

//     // success statement
//     if (guess === target) {
//       return `Success!! Target number ${target} is at index ${midIndex} of the array`
//     } else if (guess < target) {
//       leftIndex = midIndex + 1
//     } else if (guess > target) {
//       // really just an else statement, but elseif used to show logic
//       rightIndex = midIndex - 1
//     }
//   };
//   // while loop exhaustion failure statement
//   return `Target number ${target} does not exist in array!`
// };

