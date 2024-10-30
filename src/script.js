// Array of numbers from 1 to 20
const numbers = Array.from({ length: 20 }, (_, i) => i + 1);

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
    const sorted = arr.slice().sort((a, b) => a - b);
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
const namesArray = ["Alice", "Bob", "Charlie", "David", "Eva", "Frank", "Grace", "Hannah", "Ian", "Jack",
    "Kathy", "Leo", "Mia", "Nina", "Oscar", "Paul", "Quinn", "Rita", "Sam", "Tina"];

// 11. Print each name on a new line
function printNames() {
    const names = namesArray.join("<br>");
    document.getElementById("printNamesOutput").innerHTML = names;
}
printNames();

// 12. Sort names alphabetically
function sortNamesAlphabetically() {
    return namesArray.slice().sort();
}
const sortedNames = sortNamesAlphabetically();
document.getElementById("sortedNamesOutput").textContent = `Sorted Names: ${sortedNames.join(", ")}`;

// 13. Check if a specific name exists
const specificName = "Alice"; // Change this value to check for different names
function checkNameExists(name) {
    return namesArray.includes(name);
}
const exists = checkNameExists(specificName);
document.getElementById("nameExistsOutput").textContent = `${specificName} exists: ${exists}`;

// 14. Find the longest name
function findLongestName() {
    return namesArray.reduce((longest, current) => {
        return current.length > longest.length ? current : longest;
    }, "");
}
const longestName = findLongestName();
document.getElementById("longestNameOutput").textContent = `Longest name: ${longestName}`;

// 15. Find names that start with a specific letter
const specificLetter = "A"; // Change this value to check for different letters
function findNamesStartingWith(letter) {
    return namesArray.filter(name => name.startsWith(letter));
}
const namesStartingWith = findNamesStartingWith(specificLetter);
document.getElementById("namesStartingWithOutput").textContent = `Names starting with "${specificLetter}": ${namesStartingWith.join(", ")}`;

// 16. Convert all names to uppercase
function convertNamesToUppercase() {
    return namesArray.map(name => name.toUpperCase());
}
const uppercaseNames = convertNamesToUppercase();
document.getElementById("uppercaseNamesOutput").textContent = `Uppercase Names: ${uppercaseNames.join(", ")}`;

// 17. Remove a specific name
const nameToRemove = "Bob"; // Change this value to remove a different name
function removeName(name) {
    return namesArray.filter(n => n !== name);
}
const remainingNames = removeName(nameToRemove);
document.getElementById("removeNameOutput").textContent = `Remaining Names: ${remainingNames.join(", ")}`;

// 18. Count names containing the letter "a"
function countNamesWithALetter() {
    return namesArray.filter(name => name.includes("a")).length;
}
const count = countNamesWithALetter();
document.getElementById("countNamesWithALetterOutput").textContent = `Count of names containing "a": ${count}`;

// 19. Concatenate all names into a single string
function concatenateNames() {
    return namesArray.join(", ");
}
const concatenatedNames = concatenateNames();
document.getElementById("concatenatedNamesOutput").textContent = `Concatenated Names: ${concatenatedNames}`;

// 20. Reverse the order of the names
function reverseNames() {
    return namesArray.slice().reverse();
}
const reversedNames = reverseNames();
document.getElementById("reversedNamesOutput").textContent = `Reversed Names: ${reversedNames.join(", ")}`;

// 21. Create a JavaScript object representing a person
const person = {
    name: "John Doe",
    age: 30,
    occupation: "Software Developer"
};

// 22. Function to format person information
function formatPersonInfo(person) {
    return `Name: ${person.name}, Age: ${person.age}, Occupation: ${person.occupation}`;
}
document.getElementById("personInfoOutput").textContent = formatPersonInfo(person);

// 23. Function to add a new property to an existing object
function addProperty(obj, key, value) {
    obj[key] = value;
}
addProperty(person, "hobby", "Photography");
document.getElementById("addPropertyOutput").textContent = `Updated Person Info: ${formatPersonInfo(person)}`;

// 24. Function to remove a property from an existing object
function removeProperty(obj, key) {
    delete obj[key];
}
removeProperty(person, "age");
document.getElementById("removePropertyOutput").textContent = `Updated Person Info (Age Removed): ${formatPersonInfo(person)}`;

// 25. Function to list all properties and values of a JavaScript object
function listProperties(obj) {
    return Object.entries(obj).map(([key, value]) => `${key}: ${value}`).join(", ");
}
document.getElementById("listPropertiesOutput").textContent = `Person Properties: ${listProperties(person)}`;

// 26. Function to merge two objects into one
const additionalInfo = { address: "123 Main St", phone: "555-1234" };
function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}
const mergedPerson = mergeObjects(person, additionalInfo);
document.getElementById("mergeObjectsOutput").textContent = `Merged Person Info: ${listProperties(mergedPerson)}`;

// 27. Function to check if a property exists in an object
function propertyExists(obj, key) {
    return key in obj;
}
const occupationExists = propertyExists(mergedPerson, "occupation");
document.getElementById("propertyExistsOutput").textContent = `Occupation exists: ${occupationExists}`;

// 28. Function to clone an object without referencing the original one
function cloneObject(obj) {
    return JSON.parse(JSON.stringify(obj));
}
const clonedPerson = cloneObject(mergedPerson);
document.getElementById("cloneObjectOutput").textContent = `Cloned Person Info: ${listProperties(clonedPerson)}`;

// 29. Function to loop through an array of objects and print a specific property
const peopleArray = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 28 },
    { name: "Charlie", age: 22 }
];
function printPropertyFromArray(arr, property) {
    return arr.map(obj => obj[property]).join(", ");
}
document.getElementById("printPropertyFromArrayOutput").textContent = `Names in Array: ${printPropertyFromArray(peopleArray, "name")}`;

// 30. Function to update a specific property of an object based on user input
function updateProperty(obj, key, value) {
    if (key in obj) {
        obj[key] = value;
    }
}
updateProperty(clonedPerson, "name", "Jane Doe");
document.getElementById("updatePropertyOutput").textContent = `Updated Cloned Person Info: ${listProperties(clonedPerson)}`;

// Previous code...

const sampleString = "Hello, World!";
const stringWithNumbers = "Hello 123, World 456!";
const stringToInsert = " Beautiful";

// 31. Function to reverse a string
function reverseString(str) {
    return str.split("").reverse().join("");
}
document.getElementById("reverseStringOutput").textContent = `Input: "${sampleString}" | Reversed String: "${reverseString(sampleString)}"`;

// 32. Function to count the number of vowels in a given string
function countVowels(str) {
    return (str.match(/[aeiouAEIOU]/g) || []).length;
}
document.getElementById("countVowelsOutput").textContent = `Input: "${sampleString}" | Number of Vowels: ${countVowels(sampleString)}`;

// 33. Function to convert a string to uppercase without using built-in methods
function toUpperCaseWithoutBuiltIn(str) {
    let upperStr = '';
    for (let i = 0; i < str.length; i++) {
        const charCode = str.charCodeAt(i);
        if (charCode >= 97 && charCode <= 122) {
            upperStr += String.fromCharCode(charCode - 32);
        } else {
            upperStr += str[i];
        }
    }
    return upperStr;
}
document.getElementById("toUpperCaseOutput").textContent = `Input: "${sampleString}" | Uppercase String: "${toUpperCaseWithoutBuiltIn(sampleString)}"`;

// 34. Function to find the length of a string without using .length
function stringLength(str) {
    let length = 0;
    while (str[length] !== undefined) {
        length++;
    }
    return length;
}
document.getElementById("stringLengthOutput").textContent = `Input: "${sampleString}" | Length of String: ${stringLength(sampleString)}`;

// 35. Function to replace all spaces with hyphens in a string
function replaceSpacesWithHyphens(str) {
    return str.replace(/ /g, '-');
}
document.getElementById("replaceSpacesOutput").textContent = `Input: "${sampleString}" | Hyphenated String: "${replaceSpacesWithHyphens(sampleString)}"`;

// 36. Function to extract the first 10 characters from a string
function extractFirst10Characters(str) {
    return str.slice(0, 10);
}
document.getElementById("extractFirst10Output").textContent = `Input: "${sampleString}" | First 10 Characters: "${extractFirst10Characters(sampleString)}"`;

// 37. Function to find and replace a word in a string
function findAndReplaceWord(str, target, replacement) {
    const regex = new RegExp(target, 'g');
    return str.replace(regex, replacement);
}
document.getElementById("findAndReplaceOutput").textContent = `Input: "${sampleString}" | Replaced String: "${findAndReplaceWord(sampleString, "World", "Everyone")}"`;

// 38. Function to split a string into an array of words
function splitStringIntoArray(str) {
    return str.split(" ");
}
document.getElementById("splitStringOutput").textContent = `Input: "${sampleString}" | Array of Words: [${splitStringIntoArray(sampleString).join(", ")}]`;

// 39. Function to remove all numbers from a string
function removeNumbersFromString(str) {
    return str.replace(/[0-9]/g, '');
}
document.getElementById("removeNumbersOutput").textContent = `Input: "${stringWithNumbers}" | String without Numbers: "${removeNumbersFromString(stringWithNumbers)}"`;

// 40. Function to insert another string starting at position 7
function insertStringAtPosition(originalStr, stringToInsert, position) {
    return originalStr.slice(0, position) + stringToInsert + originalStr.slice(position);
}
document.getElementById("insertStringOutput").textContent = `Input: "${sampleString}" | String After Insertion: "${insertStringAtPosition(sampleString, stringToInsert, 7)}"`;


// 41. Change background color
function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
    document.getElementById('task41-answer').textContent = `Background color changed to ${color}.`;
}

// 42. Hide an HTML element
function hideElement() {
    const element = document.getElementById('task42-element');
    element.style.display = 'none';
    document.getElementById('task42-answer').textContent = 'Element has been hidden.';
}

// 43. Create a new paragraph
function createParagraph() {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'This is a new paragraph.';
    document.body.appendChild(newParagraph);
    document.getElementById('task43-answer').textContent = 'A new paragraph has been created and added to the body.';
}

// 44. Remove all list items
function removeListItems() {
    const list = document.getElementById('task44-list');
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
    document.getElementById('task44-answer').textContent = 'All list items have been removed.';
}

// 45. Change text content of a specific element
function changeTextContent(newText) {
    const element = document.getElementById('task45-element');
    element.textContent = newText;
    document.getElementById('task45-answer').textContent = `Text content changed to: ${newText}.`;
}

// 46. Toggle a CSS class
function toggleCSSClass() {
    const element = document.getElementById('task46-element');
    element.classList.toggle('highlight');
    document.getElementById('task46-answer').textContent = 'CSS class has been toggled.';
}

// 47. Count the number of divs
function countDivs() {
    const divCount = document.querySelectorAll('div').length;
    document.getElementById('task47-answer').textContent = `Number of divs on the page: ${divCount}.`;
}

// 48. Get input field value
function displayInputValue() {
    const inputValue = document.getElementById('task48-input').value;
    document.getElementById('task48-answer').textContent = `Input value: ${inputValue}.`;
}

// 49. Create a table with borders
function createTable() {
    const table = document.createElement('table');
    
    // Apply styles for the table and cells
    table.style.border = '1px solid black';
    table.style.borderCollapse = 'collapse';
    
    for (let i = 0; i < 3; i++) {
        const row = table.insertRow();
        for (let j = 0; j < 3; j++) {
            const cell = row.insertCell();
            cell.textContent = (i * 3) + (j + 1); // Populate with numbers
            cell.style.border = '1px solid black'; // Add border to each cell
            cell.style.padding = '10px'; // Optional: add padding for better appearance
        }
    }
    
    // Clear previous table if exists
    const answerParagraph = document.getElementById('task49-answer');
    answerParagraph.innerHTML = 'A table with 3 rows and 3 columns has been created.<br>';
    
    // Append the table to the answer paragraph
    answerParagraph.appendChild(table);
}


// 50. Validate form
function validateForm() {
    const name = document.getElementById('task50-name').value;
    const email = document.getElementById('task50-email').value;
    const password = document.getElementById('task50-password').value;
    if (name && email && password) {
        document.getElementById('task50-answer').textContent = 'Form is valid.';
    } else {
        document.getElementById('task50-answer').textContent = 'Please fill out all fields.';
    }
}
