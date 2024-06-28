let graph = {}
graph["you"] = ["alice", "bob", "claire"]
graph["bob"] = ["anuj", "peggy"]
graph["alice"] = ["peggy"]
graph["claire"] = ["thom", "jonny"] // thom will be hit in bfs, a grandparent of "you" - you => claire => thom
graph["anuj"] = []
graph["peggy"] = ["sam"] // same will be hit in dfg, a greatgrandparent of "you" but bob and all his parents are assessed before claire so... you => bob => peggy => sam
graph["thom"] = []
graph["jonny"] = []



/**
 * Depth-First-Search
 * 
 * DFS is much like BFS, however, it CANNOT find the shortest path, BFS does that. DFS goes
 * deep as fast as possible. However, DFS can be used to find the topological sort.
 * 
 * Another major difference between DFS and BFS is that BFS uses a queue, unlike DFS, who 
 * DOES NOT use a queue and instead of adding additional values to a queue, will 
 * instantaneously(with recursion) look deeper into the tree rather than queue'ing up the
 * closest neighbor.
 * 
 * Also because DFS works on Trees(no cycles), there is no need to keep track of the items/names you have already searched through
 */

// const depthFirstSearch = (name) => {
//   // identifier should help identify break to break the specific for statement
//   dfsMain: for (let i = 0; i < graph[name].length; i++) {
//     let person = graph[name][i];
//     if (person[person.length - 1] === 'm') {
//       console.log(`${person} sells mangos!!!`);
//       break dfsMain
//     } else if (graph[person].length){
//       depthFirstSearch(person)
//     };
//   };
//   return false;
// };


// console.log(depthFirstSearch('you'));

/**
 * Breadth-First-Search
 * 
 * Use breadth first search(wide before deep) to find person in social network who sells mangos
 *  - the person sells mangos if their name ends in 'm'
 * 
 */



// function breadthFirstSearch(name) {
//   let searchQueue = []; // create new queue for checking names
//   searchQueue = [...graph[name]]; // adds all out-neighbors to queue
//   let searched = new Set(); // set to track who has already been searched to not repeat - this is UNNECESSARY IN TREES, because in trees each node has only one parent, whereas graphs can have multiple parents
  
//   while (searchQueue.length > 0) {
//     let person = searchQueue.shift();
//     if (!searched.has(person) ) { // if person has not been previously searched, continue with assessment
//       if (person[person.length - 1] === 'm') { // success condition for mango seller
//         console.log(`${person} sells Mangos!!!`);
//         return true;
//       } else { // if first time searched name does not end in 'm'
//         searchQueue = [...searchQueue, ...graph[person]]; // add persons neighbors to end of queue for deeper search upon running out of direct neighbors
//         searched.add(person); // add person to set to prevent circular searching if same person is also someone elses neighbor
//       }
//     }; 
//   };
//   return false;
// };

// console.log(breadthFirstSearch('you'));

// Binary Search
// list must already be sorted
const list = [1,2,3,4,5];
const target = 1

// console.log(binarySearch(list, target));

// function binarySearch(arr, target) {
//   let leftIndex = 0 
//   let rightIndex = arr.length - 1

//   while (leftIndex <= rightIndex) {
//     let midIndex = Math.floor((leftIndex + rightIndex) / 2)
//     let guess = arr[midIndex]

//     if (guess === target ) {
//       return `Success target ${target} is at index: ${midIndex}`
//     } else if ( guess < target) {
//       leftIndex = midIndex + 1
//     } else {
//       // guess > target
//       rightIndex = midIndex - 1
//     }
//   }
//   // failure - target not found while while loop
//   return `target ${target} does not exist in array!`
// }




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
 * Quick Sort - uses divide and conquer - faster than selection sort and bubble sort
 * 
 * - uses recursion. base case is arrays with 1 or no items.
 * - if 2 items in array, then if need be, items can switch places like bubble sort
 * - if 3 or greater items in array. 1 item is designated the pivot, then subarrays are created,
 *    one subarray containing values less than the pivot, another subarray for values greater than pivot.
 *    The two subarrays are not sorted, just partitioned.
 * - BUT, since the base case for recursion is array of 1 or 0 items, the partitioned arrays will eventually
 *    be sorted due to recursion 
 */

// function quickSort(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   } else {
//     let pivot = arr.shift(); // shift/pop-off pivot number so its not included in the filter/ lesserPartition if the value exists more than once
//     // the pivot can be anything in the array. First, last or random. Random may be best choice per Grokking book
//     let lesserPartition = arr.filter((item) => item <= pivot);
//     let greaterPartion = arr.filter((item) => item > pivot);
//     return [...quickSort(lesserPartition), pivot, ...quickSort(greaterPartion)]
//   }
// }



// quick sort using traditional for loop

// function quickSort(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   } else {
//     let pivot = arr[0];
//     let lesserPartition = [];
//     let greaterPartion = [];

//     for (let i = 1; i < arr.length; i++) {
//       console.log(arr[i]);
//       if (arr[i] < pivot) {
//         lesserPartition.push(arr[i])
//       } else {
//         greaterPartion.push(arr[i])
//       }
//     }
//     return [...quickSort(lesserPartition), pivot, ...quickSort(greaterPartion)]
//   }
// }

// console.log(quickSort([10,5,2,3, 77, 50, 0, -8, 5, 75]));


/**
 * Merge Sort - is NOT the same as quick sort
 * - Merge Sort is much like quick sort, and in some cases faster than quick sort ===> however, quick sort is generally faster
 * - It also uses divide and conquer like quicksort
 * - The visualization for merge sort helps alot with the recombining last step - 
 *   https://www.freecodecamp.org/news/an-intro-to-advanced-sorting-algorithms-merge-quick-radix-sort-in-javascript-b65842194597/
 */


// function mergeSort(arr) {
//   // base case
//   if (arr.length <= 1) {
//     return arr
//   }
  
//   // split array in half with no pivot value
//   let midIndex = Math.floor(arr.length / 2)
//   let leftHalf = arr.slice(0, midIndex)
//   let rightHalf = arr.slice(midIndex, arr.length - 1)

//   mergeSort(leftHalf)
//   mergeSort(rightHalf)

//   let a = 0
//   let b = 0
//   let c = 0

//   // merge two halves 
//   while (a < leftHalf.length && b < rightHalf.length) {
//     if (leftHalf[a] < rightHalf[b]) {
//       arr[c] = leftHalf[a]
//       a += 1
//     } else {
//       arr[c] = rightHalf[b]
//       b += 1
//     }
//     c += 1
//   }

//   // for remaining items, include at end of array(once broken to arrays of 2 items, this is easily simplified visually)
//   while (a < leftHalf.length) {
//     arr[c] = leftHalf[a]
//     a += 1
//     c += 1
//   }
//   while (b < rightHalf.length) {
//     arr[c] = rightHalf[b]
//     b += 1
//     c += 1
//   }

//   return arr
// }

// console.log(mergeSort([21,22,23,28,1,5,8,333,10,98,4]));



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
// console.log(selectionSort([10,5,7,2,66,83,9]));

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
    // console.log(i);
      arr.forEach((element,idx) => {
    // console.log(item);
    if (arr[idx] > arr[idx + 1]) {
      let current = arr[idx];
      let next = arr[idx + 1];
      arr[idx] = next;
      arr[idx + 1] = current;
      // console.log(arr);
    }
  });
  }
}

let bubble_sort_list = [99,25,21,22,24,23,27,26,1]
// bubbleSort(bubble_sort_list)