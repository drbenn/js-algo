// divide and conquer
// Merge Sort

const mergeArr = [4,2,1,3]




// Binary Search
// list must already be sorted
const list = [1,2,3,4,5];
const target = 5

// console.log(binarySearch(list, target));

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


/**
 * Selection Sort
 * 
 * Selection sort is an imporvement on bubble sort as selection sort takes the highest value from an
 * array and then adds it to the end of a new solution array. As the highest value has been removed 
 * from the original array, the next highest value will be the highest value in the work array and that
 * will then be unshifted to the new solution array.
 * 
 * It may actually be more performant to find the lowest value and then continually push to the solution
 * array instead of unshifting to the start of the array.
 */


function findSmallest(arr) {
  let smallestValue = arr[0];
  let smallestIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallestValue) {
      smallestValue = arr[i]
      smallestIndex = i
    }
  }
  return smallestIndex;
}

function selectionSort(arr) {
  let solution = []
  let modifiedArr = arr.map((item) => item = item ) // create deep copy of array
  for (let i = 0; i < arr.length; i++) {
    let smallestIndex = findSmallest(modifiedArr)
    // push smallest item to solution array
    solution.push(modifiedArr[smallestIndex]);
    // splice the item out of the array
    modifiedArr.splice(smallestIndex, 1)
  }
  return solution
}
console.log(selectionSort([10,5,7,2,66,83,9]));

/**
 * Bubble sort
 * 
 * Array of items is iterated over, where for each iteration, the values next to eachother are compared. 
 * If the first value is greater than the second, the two values switch places in the array. This is the innter
 * loop and main sort method of the opation.
 * 
 * In addition, there must be an outer loop. The outer loop will perform the operation arr.length times, and each time
 * the arr.length will go down by 1. This is because during the first iteration, the highest number is pushed to the last
 * index of the array. On the second iteration, you only need to iterate length -1 because the highest value has been moved
 * to the end, so on the second iteration you are pushing the secoend highest value to the new -1 end...on the 3rd iteration
 * the 3rd highest value is being moved to the third highest place...etc
 * 
 */

function bubbleSort(arr) {

  for (let i = arr.length; i > 0; i--) {
    console.log(i);
      arr.forEach((element,idx) => {
    // console.log(item);
    if (arr[idx] > arr[idx + 1]) {
      let current = arr[idx];
      let next = arr[idx + 1];
      arr[idx] = next;
      arr[idx + 1] = current;
      console.log(arr);
    }
  });
  }
}

let bubble_sort_list = [99,25,21,22,24,23,27,26,1]
// bubbleSort(bubble_sort_list)