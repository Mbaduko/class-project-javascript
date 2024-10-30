// Array of numbers from 1 to 20
const numbers = Array.from({length: 20}, (_, i) => i + 1);

// Task 1: Sum of all numbers in the array
function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}
document.getElementById("sumOutput").textContent = "Sum: " + sumArray(numbers);

// Task 2: Find the largest number in the array
function largestNumber(arr) {
    return Math.max(...arr);
}
document.getElementById("largestOutput").textContent = "Largest Number: " + largestNumber(numbers);

// Task 3: Sort array in ascending order
function sortArray(arr) {
    return arr.sort((a, b) => a - b);
}
document.getElementById("sortedOutput").textContent = "Sorted Array: " + sortArray([...numbers]);

// Task 4: Reverse array
function reverseArray(arr) {
    return arr.reverse();
}
document.getElementById("reverseOutput").textContent = "Reversed Array: " + reverseArray([...numbers]);

// Task 5: Get only even numbers from the array
function getEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}
document.getElementById("evenNumbersOutput").textContent = "Even Numbers: " + getEvenNumbers(numbers).join(", ");

// Task 6: Get only odd numbers from the array
function getOddNumbers(arr) {
    return arr.filter(num => num % 2 !== 0);
}
document.getElementById("oddNumbersOutput").textContent = "Odd Numbers: " + getOddNumbers(numbers).join(", ");

// Task 7: Calculate average of the array
function averageArray(arr) {
    return sumArray(arr) / arr.length;
}
document.getElementById("averageOutput").textContent = "Average: " + averageArray(numbers);

// Task 8: Remove duplicates from the array
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
document.getElementById("duplicatesOutput").textContent = "Unique Numbers: " + removeDuplicates(numbers);

// Task 9: Find median of the array
function medianArray(arr) {
    const sorted = arr.sort((a, b) => a - b);
    console.log(sorted);
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
}
document.getElementById("medianOutput").textContent = "Median: " + medianArray([...numbers]);

// Task 10: Multiply all elements in the array by 2
function multiplyByTwo(arr) {
    return arr.map(num => num * 2);
}
document.getElementById("multipliedOutput").textContent = "Multiplied by 2: " + multiplyByTwo(numbers).join(", ");

// Array of 20 names
const names = ["Alice", "Bob", "Charlie", "David", "Eva", "Frank", "Grace", "Hannah", "Ian", "Jack",
               "Kathy", "Leo", "Mia", "Nina", "Oscar", "Paul", "Quinn", "Rita", "Sam", "Tina"];

// Task 11: Print each name on a new line
function printNames(arr) {
    return arr.join('<br>');
}
document.getElementById('namesOutput').innerHTML = printNames(names);

// Task 12: Sort names alphabetically
function sortNames(arr) {
    return arr.sort();
}
document.getElementById("sortedNamesOutput").textContent = "Sorted Names: " + sortNames(names).join(", ");

// Task 13: Check if all numbers in an array are positive
function allPositive(arr) {
    return arr.every(num => num > 0);
}
document.getElementById("allPositiveOutput").textContent = "All numbers positive: " + allPositive(numbers);

// Task 14: Calculate the factorial of a number (e.g., 5)
function factorial(n) {
    return n <= 1 ? 1 : n * factorial(n - 1);
}
document.getElementById("factorialOutput").textContent = "Factorial of 5: " + factorial(5);

// Task 15: Count occurrences of each element in an array
function countOccurrences(arr) {
    return arr.reduce((countMap, num) => {
        countMap[num] = (countMap[num] || 0) + 1;
        return countMap;
    }, {});
}
document.getElementById("countOccurrencesOutput").textContent = "Occurrences: " + JSON.stringify(countOccurrences(numbers));

// Task 16: Check if a number is prime (e.g., 7)
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
document.getElementById("isPrimeOutput").textContent = "Is 7 prime: " + isPrime(7);

// Task 17: Convert an array of strings to uppercase
function toUpperCaseArray(arr) {
    return arr.map(str => str.toUpperCase());
}
document.getElementById("uppercaseStringsOutput").textContent = "Uppercase Strings: " + toUpperCaseArray(names).join(", ");

// Task 18: Find all prime numbers in an array
function findPrimes(arr) {
    return arr.filter(isPrime);
}
document.getElementById("findPrimesOutput").textContent = "Prime Numbers: " + findPrimes(numbers).join(", ");

// Task 19: Convert an array of numbers to their square roots
function squareRootsArray(arr) {
    return arr.map(num => Math.sqrt(num));
}
document.getElementById("squareRootsOutput").textContent = "Square Roots: " + squareRootsArray(numbers).join(", ");

// Continue adding more functions for tasks 20 to 50, following the same format.

// Task 13: Check if all numbers in an array are positive
function allPositive(arr) {
    return arr.every(num => num > 0);
}
document.getElementById("allPositiveOutput").textContent = "All numbers positive: " + allPositive(numbers);

// Task 14: Calculate the factorial of a number (e.g., 5)
function factorial(n) {
    return n <= 1 ? 1 : n * factorial(n - 1);
}
document.getElementById("factorialOutput").textContent = "Factorial of 5: " + factorial(5);

// Task 15: Count occurrences of each element in an array
function countOccurrences(arr) {
    return arr.reduce((countMap, num) => {
        countMap[num] = (countMap[num] || 0) + 1;
        return countMap;
    }, {});
}
document.getElementById("countOccurrencesOutput").textContent = "Occurrences: " + JSON.stringify(countOccurrences(numbers));

// Task 16: Check if a number is prime (e.g., 7)
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
document.getElementById("isPrimeOutput").textContent = "Is 7 prime: " + isPrime(7);

// Task 17: Convert an array of strings to uppercase
function toUpperCaseArray(arr) {
    return arr.map(str => str.toUpperCase());
}
document.getElementById("uppercaseStringsOutput").textContent = "Uppercase Strings: " + toUpperCaseArray(names).join(", ");

// Task 18: Find all prime numbers in an array
function findPrimes(arr) {
    return arr.filter(isPrime);
}
document.getElementById("findPrimesOutput").textContent = "Prime Numbers: " + findPrimes(numbers).join(", ");

// Task 19: Convert an array of numbers to their square roots
function squareRootsArray(arr) {
    return arr.map(num => Math.sqrt(num));
}
document.getElementById("squareRootsOutput").textContent = "Square Roots: " + squareRootsArray(numbers).join(", ");

// Task 20: Sum of all even numbers in an array
function sumOfEvens(arr) {
    return arr.filter(num => num % 2 === 0).reduce((sum, num) => sum + num, 0);
}
document.getElementById("sumOfEvensOutput").textContent = "Sum of Even Numbers: " + sumOfEvens(numbers);

// Task 21: Check if a string is a palindrome
function isPalindrome(str) {
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    return cleanedStr === cleanedStr.split("").reverse().join("");
}
document.getElementById("isPalindromeOutput").textContent = "Is 'madam' a palindrome: " + isPalindrome("madam");

// Task 22: Find the second largest number in an array
function secondLargest(arr) {
    const sortedUnique = [...new Set(arr)].sort((a, b) => b - a);
    return sortedUnique.length >= 2 ? sortedUnique[1] : null;
}
document.getElementById("secondLargestOutput").textContent = "Second Largest: " + secondLargest(numbers);

// Task 23: Find the longest string in an array
function longestString(arr) {
    return arr.reduce((longest, str) => str.length > longest.length ? str : longest, "");
}
document.getElementById("longestStringOutput").textContent = "Longest String: " + longestString(names);

// Task 24: Reverse the words in a sentence
function reverseWords(sentence) {
    return sentence.split(" ").reverse().join(" ");
}
document.getElementById("reverseWordsOutput").textContent = "Reversed Words: " + reverseWords("Hello World");

// Task 25: Sort an array of numbers in descending order
function sortDescending(arr) {
    return arr.slice().sort((a, b) => b - a);
}
document.getElementById("sortDescendingOutput").textContent = "Descending Order: " + sortDescending(numbers).join(", ");

// Task 26: Find common elements between two arrays
function commonElements(arr1, arr2) {
    return arr1.filter(value => arr2.includes(value));
}
document.getElementById("commonElementsOutput").textContent = "Common Elements: " + commonElements(numbers, [3, 5, 7]).join(", ");

// Task 27: Check if a number is a perfect square
function isPerfectSquare(num) {
    return Number.isInteger(Math.sqrt(num));
}
document.getElementById("isPerfectSquareOutput").textContent = "Is 16 a perfect square: " + isPerfectSquare(16);

// Task 28: Find all unique values in an array
function uniqueValues(arr) {
    return [...new Set(arr)];
}
document.getElementById("uniqueValuesOutput").textContent = "Unique Values: " + uniqueValues(numbers).join(", ");

// Task 29: Convert a string to camelCase
function toCamelCase(str) {
    return str.replace(/[-_\s]+(.)?/g, (_, chr) => chr ? chr.toUpperCase() : '');
}
document.getElementById("camelCaseOutput").textContent = "Camel Case: " + toCamelCase("hello world");

// Task 30: Find the mode(s) of an array
function findMode(arr) {
    const count = {};
    arr.forEach(num => count[num] = (count[num] || 0) + 1);
    const maxFreq = Math.max(...Object.values(count));
    return Object.keys(count).filter(num => count[num] === maxFreq).map(Number);
}
document.getElementById("findModeOutput").textContent = "Mode(s): " + findMode(numbers).join(", ");

// Task 31: Calculate the sum of an array's elements
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}
document.getElementById("sumArrayOutput").textContent = "Sum: " + sumArray(numbers);

// Task 32: Check if a number is within a specified range
function isInRange(num, min, max) {
    return num >= min && num <= max;
}
document.getElementById("isInRangeOutput").textContent = "Is 5 in range 1-10: " + isInRange(5, 1, 10);

// Task 33: Capitalize the first letter of each word in a sentence
function capitalizeWords(sentence) {
    return sentence.replace(/\b\w/g, char => char.toUpperCase());
}
document.getElementById("capitalizeWordsOutput").textContent = "Capitalized: " + capitalizeWords("hello world");

// Task 34: Count vowels in a string
function countVowels(str) {
    return (str.match(/[aeiou]/gi) || []).length;
}
document.getElementById("countVowelsOutput").textContent = "Vowel Count: " + countVowels("hello world");

// Task 35: Merge two arrays and remove duplicates
function mergeUnique(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
}
document.getElementById("mergeUniqueOutput").textContent = "Merged Unique: " + mergeUnique(numbers, [5, 10, 15]).join(", ");

// Task 36: Generate an array of even numbers up to a given number
function generateEvens(n) {
    return Array.from({ length: Math.floor(n / 2) }, (_, i) => (i + 1) * 2);
}
document.getElementById("generateEvensOutput").textContent = "Even Numbers: " + generateEvens(10).join(", ");

// Task 37: Reverse the characters in each word of a sentence
function reverseCharactersInWords(sentence) {
    return sentence.split(" ").map(word => word.split("").reverse().join("")).join(" ");
}
document.getElementById("reverseCharactersOutput").textContent = "Reversed Characters: " + reverseCharactersInWords("hello world");

// Task 38: Convert an array of numbers to percentages
function toPercentages(arr) {
    return arr.map(num => `${(num * 100).toFixed(2)}%`);
}
document.getElementById("percentagesOutput").textContent = "Percentages: " + toPercentages([0.1, 0.5, 0.75]).join(", ");

// Task 39: Calculate the average of an array of numbers
function averageArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0) / arr.length;
}
document.getElementById("averageArrayOutput").textContent = "Average: " + averageArray(numbers);

// Task 40: Check if all elements in an array are unique
function allUnique(arr) {
    return new Set(arr).size === arr.length;
}
document.getElementById("allUniqueOutput").textContent = "All Unique: " + allUnique(numbers);

// Task 41: Find the minimum and maximum numbers in an array
function minMaxArray(arr) {
    return { min: Math.min(...arr), max: Math.max(...arr) };
}
const minMax = minMaxArray(numbers);
document.getElementById("minMaxOutput").textContent = "Min and Max: " + JSON.stringify(minMax);

// Task 42: Remove all falsy values from an array
function removeFalsy(arr) {
    return arr.filter(Boolean);
}
document.getElementById("removeFalsyOutput").textContent = "Truthy Values: " + removeFalsy([0, null, "hello", false, 42]).join(", ");

// Task 43: Flatten a nested array
function flattenArray(arr) {
    return arr.flat(Infinity);
}
document.getElementById("flattenArrayOutput").textContent = "Flattened Array: " + flattenArray([1, [2, [3, [4]]]]).join(", ");

// Task 44: Find the GCD of two numbers
function gcd(a, b) {
    while (b) [a, b] = [b, a % b];
    return a;
}
document.getElementById("gcdOutput").textContent = "GCD of 12 and 18: " + gcd(12, 18);

// Task 45: Check if a string contains only digits
function isDigitsOnly(str) {
    return /^\d+$/.test(str);
}
document.getElementById("isDigitsOnlyOutput").textContent = "Only digits: " + isDigitsOnly("12345");

// Task 46: Calculate the LCM of two numbers
function lcm(a, b) {
    return (!a || !b) ? 0 : Math.abs((a * b) / gcd(a, b));
}
document.getElementById("lcmOutput").textContent = "LCM of 4 and 5: " + lcm(4, 5);

// Task 47: Find the longest word in a sentence
function longestWord(sentence) {
    return sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
}
document.getElementById("longestWordOutput").textContent = "Longest Word: " + longestWord("The quick brown fox jumps over the lazy dog");

// Task 48: Count Consonants
function countConsonants(str) {
    const consonants = str.match(/[^aeiou]/gi);
    return consonants ? consonants.length : 0;
}
const task48Output = countConsonants("Hello World! This is a test.");
document.getElementById("countConsonantsOutput").innerText = `Number of consonants: ${task48Output}`;

// Task 49: Find the Intersection of Two Arrays
function findIntersection(arr1, arr2) {
    return arr1.filter(value => arr2.includes(value));
}
const task49Output = findIntersection([1, 2, 3, 4], [3, 4, 5, 6]);
document.getElementById("findIntersectionOutput").innerText = `Intersection: ${task49Output}`;

// Task 50: Check if a String is an Anagram
function isAnagram(str1, str2) {
    const sortString = (str) => str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
    return sortString(str1) === sortString(str2);
}
const task50Output = isAnagram("listen", "silent");
document.getElementById("isAnagramOutput").innerText = `Are they anagrams? ${task50Output}`;
