
/**
 * 58. Length of Last Word
 */

function lengthOfLastWord(s) {
  const splitWords = s.trim().split(' ');
  const length = splitWords[splitWords.length - 1].length;
  return length;
}

console.log(lengthOfLastWord('   fly me   to   the moon  '));


/**
 * 28. Find the Index of the First Occurrence in a String
 */

function findTheIndexOfTheFirstOccurrenceInAString(haystack, needle) {
  const needlelength = needle.length;
  for (let i = 0; i < haystack.length; i++) {
    const needleAttempt = haystack.slice(i, (i + needlelength));
    if (needleAttempt === needle) {
      return i;
    }
  };
  // failure case
  return -1;
};

// console.log(findTheIndexOfTheFirstOccurrenceInAString("hello", "ll"))

/**
 * 2677. Chunk Array
 */

function chunkArray(arr, size) {
  if (!arr.length) return [];

  let solution = [];
  let chunkArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (chunkArray.length < size) {
      chunkArray.push(arr[i]);
    };
    if (chunkArray.length === size || chunkArray.length && i === arr.length -1) {
      solution.push(chunkArray);
      chunkArray = [];
    };
  };

  return solution;
}

// console.log(chunkArray([1,9,6,3,2], 3));


/**
 * 2727. Is Object Empty
 */

function isObjectEmpty(obj) {
  return Object.keys(obj).length ? false : true;
}

// console.log(isObjectEmpty({"x": 5, "y": 42}));


/**
 * 242. Valid Anagram
 */

function validAnagram(s, t) {
  // METHOD USING String & MAP, Much faster but doesnt beat many...91ms & beats 11.07%
  if (s.length !== t.length) return false;
  const letterCounts = new Map();

  for (let c in s) {
    const letter = s[c];
    letterCounts[letter] = (letterCounts[letter] || 0) + 1;
  }
  for (let c in t) {
    const letter = t[c];
    if (!letterCounts[letter]) {
      return false;
    }
    if (letterCounts[letter] > 0) {
      letterCounts[letter] -= 1
    }
  }
  return true;

  // METHOD USING ARRAYS, BUT SUPER SLOW...oof 1570ms & beats 5.04%
  // let sArray = s.split('');
  // let tArray = t.split('');

  // // if arrays are not the same length from init there is no chance to be anagram.
  // if (sArray.length !== tArray.length) {
  //   return false;
  // };
  // for (let i = 0; i < sArray.length; i++) {
  //   let tIndex = tArray.indexOf(sArray[i]);
  //   if (tIndex === - 1) {
  //     // letter does not exist, anagram fails
  //     return false;
  //   } else {
  //     // if letter found, set to null so that replicants do not deceive the validation
  //     tArray[tIndex] = null;
  //   }
  // }
  // // if for loop is passed without fail, success!
  // return true;
}

// console.log(validAnagram('rat', 'tar'));

/**
 * 345. Reverse Vowels of a String
 */

function reverseVowelsOfAString(s) {
  let solution = '';
  const vowels = {
    'a': 'a',
    'e': 'e',
    'i': 'i',
    'o': 'o',
    'u': 'u',
    'A': 'A',
    'E': 'E',
    'I': 'I',
    'O': 'O',
    'U': 'U'
  };
  let stringVowels = [];
  // loop through string and add vowels to array
  for (let i = 0; i < s.length; i++) {
    if (s[i] in vowels) {
      stringVowels.push(s[i]);
    };
  };

  // loop through array again, as vower encountered, push value from vowel array and replace in string(this removes the requirement to reverse the array)
  for (let i = 0; i < s.length; i++) {
    if (s[i] in vowels) {
      const lastVowel = stringVowels.pop();
      solution += lastVowel;
    } else {
      solution += s[i];
    };
  };
  return solution;
};

// console.log(reverseVowelsOfAString('leetcode'));

/**
 * 605. Can Place Flowers
 */

function canPlaceFlowers(flowerbed, n) {
  // 0's added to start and end to allow flowerbeds to be placed at start and end
  const maximizedFlowerbed = [0, ...flowerbed, 0];
  let additionalFlowerbeds = 0;
  // iterate through and place max flowerbeds allowed with no neighbor constraint
  for (let i = 0; i < maximizedFlowerbed.length; i++) {
    if (maximizedFlowerbed[i-1] === 0 && maximizedFlowerbed[i+1] === 0) {
      // only add to additional if flowerbed not already planted
      if (maximizedFlowerbed[i] !== 1) {
        additionalFlowerbeds += 1;
      };
      maximizedFlowerbed[i] = 1;
    };
  }
  return additionalFlowerbeds >= n ? true : false;
}

// console.log(canPlaceFlowers([1,0,0,0,1], 1));


/**
 * 1431. Kids With the Greatest Number of Candies
 */

function kidsWithTheGreatestNumberOfCandies(candies, extraCandies) {
  const maxBaseCandies = Math.max(...candies);
  let solution = new Array(candies.length).fill(false);

  for (let i = 0; i < candies.length; i++) {
    let newCandyCount = candies[i] + extraCandies;
    if (newCandyCount >= maxBaseCandies) {
      solution[i] = true;
    }
  }
  return solution;
}

// console.log(kidsWithTheGreatestNumberOfCandies([2,8,7], 1));

/**
 * 1768. Merge Strings Alternately
 */

function mergeStringsAlternately(word1, word2) {
  const maxLength = word1.length >= word2.length ? word1.length : word2.length
  let solution = ''

  for ( let i = 0; i < maxLength; i++) {
    if (i < word1.length) {
      solution += word1[i]
    }
    if (i < word2.length) {
      solution += word2[i]
    }
  }
  return solution
}

// console.log(mergeStringsAlternately('ab', 'pqrs'));

/**
 * 643. Maximum Average Subarray I
 */


function maximumAverageSubarrayI(nums, k) {
  let kStarter = new Array(k).fill(1)
  console.log(kStarter);
  for (let i = 0; i  < nums.length; i++) {
    console.log(i);
    if (i <= k) {
      kStarter[i] = nums[i]
    }
  }
  console.log(kStarter);
}

// console.log(maximumAverageSubarrayI([1,12,-5,-6,50,3], 4));




/**
 * 238. Product of Array Except Self
 * 
 * To maintain O(n), must loop through two times to create a 
 */

const productOfArrayExceptSelf = (nums) => {
  const leftProducts = new Array(nums.length).fill(1)
  const rightProducts = new Array(nums.length).fill(1)
  const solution = []

  for (let i = 1; i < nums.length; i++) {
    leftProducts[i] = leftProducts[i - 1] * nums[i - 1]
  }

  for (let i = nums.length - 2; i >= 0; i--) {
    rightProducts[i] = rightProducts[i + 1] * nums[i + 1]
  }

  for (let i = 0; i < nums.length; i++) {
      solution[i] = leftProducts[i] * rightProducts[i]
  }

  return solution
}

// console.log(productOfArrayExceptSelf([1,2,3,4]));

/**
 * 217. Contains Duplicate
 */

function containsDuplicate(nums) {
  // Using Map instead of Object, Leetcode give 54ms runtime and beats 99.94%
  let existingItems = new Map()

  for (let i = 0; i < nums.length; i++) {
    if (existingItems.has(nums[i])) {
      return true
    } else {
      existingItems.set(nums[i], i)
    }
  }
  return false 
  // Using Object instead of Map, Leetcode give 79ms runtime and beats 61.79%...SAME AS MAP!!!!!
  // let examinedItems = {}
  // for (let i = 0; i < nums.length; i++) {
  //   if (nums[i] in examinedItems) {
  //     return true
  //   } else {
  //     examinedItems[nums[i]] = i
  //   }
  // }
  // return false
}

// console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));



/**
 *  121. Best Time to buy and sell stock
 * 
 * Solution is two use two-pointers method. Left pointer = buy day/index, right pointer = sell day/index
 */

function bestTimeToBuyAndSellStock(prices) {
  let leftPointer = 0 // left = buy date/index
  let rightPointer = 1 // right = sell date/index
  let maxProfit = 0
  // in while loop the right pointer drives the loop, and for each loop the right pointer increments by one
  while (rightPointer < prices.length) {
    // check if it is profiable transaction
    if (prices[leftPointer] < prices[rightPointer]) {
      // CALCULATE condition for potentially replace optimal solution(profit of current profitable trade)
      let profit = prices[rightPointer] - prices[leftPointer]
      // COMPARE if current trade profit is better than previous more profitable trade
      maxProfit = Math.max(maxProfit, profit)
    } else {
      // only update the left pointer if the current trade is not considered the maxProfit
      // increase to rightPointer NOT +1 like how NEETCODE does it
      leftPointer = rightPointer
    }
    // however, always update the right pointer to continue the analysis
    rightPointer += 1
  }
  return maxProfit
}

// console.log(bestTimeToBuyAndSellStock([1,2,4,2,5,7,2,4,9,0,9]))

/**
 * 1. Two Sum
 */

function twoSum(nums, target) {
  // Using Map instead of Object, Leetcode give 69ms runtime and beats 51.24%
  // let previousItems = new Map()
  // for (let i = 0; i < nums.length; i++) {
  //   // 1. check if 2nd number adding to total has already been added to map
  //   let secondNumberRequired = target - nums[i]
  //   if (previousItems && previousItems.has(secondNumberRequired)) {
  //     console.log(`Solution Found!!! Target ${target}, is found with index ${i} with value of ${nums[i]} and index ${previousItems.get(secondNumberRequired)} with value of ${secondNumberRequired}`);
  //     return [i,previousItems.get(secondNumberRequired)]
  //   } else {
  //     // add {value:index} to map for future use when checking remaining numbers
  //     previousItems.set(nums[i], i)
  //   }
  // }

  // Using Object instead of Map, Leetcode give 69ms runtime and beats 51.24%...SAME AS MAP!!!!!
  let previousItems = {};
  for (let i = 0; i < nums.length; i++) {
    // 1. check if 2nd number adding to total has already been added to object
    const secondNumberRequired = target - nums[i];
    if (secondNumberRequired in previousItems) {
      console.log(`Solution Found!!! Target ${target}, is found with index ${i} with value of ${nums[i]} and index ${previousItems[secondNumberRequired]})} with value of ${secondNumberRequired}`);
      return [i,previousItems[secondNumberRequired]]
    } else {
      // add {value:index} to object for future use when checking remaining numbers
      previousItems[nums[i]] = i;
      // console.log(previousItems);
    }
  }
}

// console.log(twoSum([2,7,11,15], 18));


/**
 * 412. fizzbuzz
 */

// function fizzbuzz(n) {
//   let solution = []

//   for (let i = 1; i < n + 1; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       solution.push('FizzBuzz')
//     } else if (i % 5 === 0) {
//       solution.push('Buzz')
//     } else if (i % 3 === 0) {
//       solution.push('Fizz')
//     } else {
//       solution.push(i.toString())
//     }
//   }
//   return solution
// }

// console.log(fizzbuzz(15));