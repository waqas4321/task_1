

//   Palindrome Check ///


function isPalindrome(str) {

   str = str.toLowerCase();
    
  
    let left = 0;
    let right = str.length - 1;
    
    
    while (left < right) {

       if (str[left] !== str[right]) {
             return false;
        }
      left++;
      right--;
   }
        return true;
 }

 console.log(isPalindrome("radar")); 
console.log(isPalindrome("level")); 
console.log(isPalindrome("deified")); 
console.log(isPalindrome("A man, a plan, a canal, Panama"));
 console.log(isPalindrome("hello")); 
 console.log(isPalindrome("apple")); 




 //  Minimum and Maximum Numbers ///

function findMinMax(numbers) {
    if (numbers.length === 0) {
        return null; 
    }
     let min = numbers[0]; 
    let max = numbers[0]; 

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i]; 
        }
        if (numbers[i] > max) {
            max = numbers[i]; 
        }
    }

    return { min, max }; 
}
console.log(findMinMax([3, 1, 4, 1, 5, 9, 2, 6, 5])); 
console.log(findMinMax([-10, 0, 25, 30, -5])); 
console.log(findMinMax([5])); 
console.log(findMinMax([])); 





/// Missing Number Identification ///

function findMissingNumber(numbers) {
   
    numbers.sort((a, b) => a - b);

 
    for (let i = 0; i < numbers.length - 1; i++) {
          if (numbers[i + 1] - numbers[i] !== 1) {
            return numbers[i] + 1;
        }
    }
    return null;
}
console.log(findMissingNumber([11, 12, 14, 15, 16, 18, 19, 20])); 
console.log(findMissingNumber([1, 2, 3, 5, 6, 7]));
console.log(findMissingNumber([4, 6, 8, 10])); 
console.log(findMissingNumber([21, 22, 23])); 
console.log(findMissingNumber([])); 
