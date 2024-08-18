//chapter 31 to 34

// 1 Write a program that displays current date and time in
// your browser.

var currentDate = new Date();
document.write(currentDate);

// 2. Write a program that alerts the current month in words.
// For example December.

var currentMonth = currentDate.getMonth() + 1;
var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
alert(`current moth is: ${months[currentMonth - 1]}`);

// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.

var currentDay = currentDate.getDay();

var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

alert(`first 3 letters of current day is: ${days[currentDay].slice(0, 3)}`);

// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.
//**************
var currentDate2 = new Date();
var dayOfWeek = currentDate2.getDay();

if (dayOfWeek === 0 || dayOfWeek === 6) {
  alert("It's Fun day");
}

// 5.Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.

var currentDayOfMonth = currentDate.getDate();

if (currentDayOfMonth < 16) {
  alert("First fifteen days of the month");
} else {
  alert("Last days of the month");
}

//6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

var currentDate3 = new Date();
var millisecondsSince1970 = currentDate3.getTime();
var minutesSince1970 = Math.floor(millisecondsSince1970 / (1000 * 60));
console.log(minutesSince1970);

// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

var currentHour = currentDate.getHours();

if (currentHour < 12) {
  alert("Its AM");
} else {
  alert("Its PM");
}

//8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.

var laterDate = new Date(2020, 12, 0);
console.log("laterDate:" + laterDate);

// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

var ramadanDate = new Date(2015, 5, 18);
var daysPastRamadan = Math.floor(
  (currentDate - ramadanDate) / (1000 * 60 * 60 * 24)
);
alert("Days past Ramadan: " + daysPastRamadan);

// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.
document.write("<br>");

var refDate = new Date("2015-01-01");

var elapsedSeconds = Math.floor((currentDate - refDate) / 1000);

console.log(
  "Seconds elapsed between reference date and the beginning of 2015: " +
    elapsedSeconds
);

// 11.Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.

var currentDateTime = new Date();
currentDateTime.setHours(currentDateTime.getHours() + 1);

document.write("<br>Current date and time after 1 hour: " + currentDateTime);

// 12.Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?

var date100YearsBack = new Date();
date100YearsBack.setFullYear(date100YearsBack.getFullYear() - 100);

alert("Date 100 years back: " + date100YearsBack);

// 13.Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.

var userAge = prompt("Please enter your age:");

var birthYear = new Date().getFullYear() - userAge;

alert("Your birth year is: " + birthYear);

// 14.Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,

// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge

// Define the variables
var customerName = "John Doe";
var currentMonth = "August 2024";
var numberOfUnits = 350;
var chargesPerUnit = 15.75;
var latePaymentSurcharge = 200.0;

var netAmountPayable = numberOfUnits * chargesPerUnit;

var grossAmountPayable = netAmountPayable + latePaymentSurcharge;

netAmountPayable = netAmountPayable.toFixed(2);
grossAmountPayable = grossAmountPayable.toFixed(2);
chargesPerUnit = chargesPerUnit.toFixed(2);
latePaymentSurcharge = latePaymentSurcharge.toFixed(2);
document.write("<h1>K-Electric Bill</h1>");
document.write("<p><strong>Customer Name:</strong> " + customerName + "</p>");
document.write("<p><strong>Current Month:</strong> " + currentMonth + "</p>");
document.write(
  "<p><strong>Number of Units:</strong> " + numberOfUnits + "</p>"
);
document.write(
  "<p><strong>Charges per Unit:</strong> Rs. " + chargesPerUnit + "</p>"
);
document.write(
  "<p><strong>Net Amount Payable (within Due Date):</strong> Rs. " +
    netAmountPayable +
    "</p>"
);
document.write(
  "<p><strong>Late Payment Surcharge:</strong> Rs. " +
    latePaymentSurcharge +
    "</p>"
);
document.write(
  "<p><strong>Gross Amount Payable (after Due Date):</strong> Rs. " +
    grossAmountPayable +
    "</p>"
);

//chapter 35 to 38

// 1.Write a function that displays current date & time in your
// browser.

document.write("<h1>chapter 35 to 38</h1>");
function displayDateTime() {
  var currentDate = new Date();
  document.write(currentDate);
}

displayDateTime();

// 2. Write a function that takes first & last name and then it
// greets the user using his full name.

function greetUser(firstName, lastName) {
  var fullName = firstName + " " + lastName;
  alert("Hello, " + fullName);
}

greetUser("John", "Doe");

// 3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.

function addNumbers(num1, num2) {
  return num1 + num2;
}

var num1 = parseInt(prompt("Enter first number:"));
var num2 = parseInt(prompt("Enter second number:"));
var sum = addNumbers(num1, num2);
alert("Sum of " + num1 + " and " + num2 + " is: " + sum);

//4. Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.

function calculate(num1, num2, operator) {
  let result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      result = "Invalid operator";
  }
  document.getElementById("result").textContent = `Result: ${result}`;

  return result;
}
calculate(10, 20, "+");

// 5.Write a function that squares its argument.

function square(num) {
  return num * num;
}

console.log(square(5));

// 6.Write a function that computes factorial of a number.

function factorial(nums) {
  if (nums === 0 || nums === 1) {
    return 1;
  } else {
    return nums * factorial(nums - 1);
  }
}

console.log(factorial(5));

// 7.Write a function that take start and end number as inputs
// & display counting in your browser.

function count(start, end) {
  for (let i = start; i <= end; i++) {
    document.write(i + " ");
  }
}

count(1, 10);

// 8.Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()

function calculateHypotenuse(base, perpendicular) {
  function calculateSquare(num) {
    return num * num;
  }

  var hypotenuse2 = calculateSquare(base) + calculateSquare(perpendicular);
  var hypotenuse = Math.sqrt(hypotenuse2);

  return hypotenuse;
}

console.log(calculateHypotenuse(3, 4)); // Output: 5

//9. Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:

// i. Arguments as value
// ii. Arguments as variables

function calculateArea(width, height) {
  return width * height;
}

console.log(calculateArea(5, 10)); // Output: 50

// 10.Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.

function isPalindrome(str) {
  var reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}

console.log(isPalindrome("madam")); // Output: true

// 11.Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

function capitalizeFirstLetterOfEachWord(str) {
  var words = str.split(" ");
  var capitalizedWords = words.map(function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return capitalizedWords.join(" ");
}

console.log(capitalizeFirstLetterOfEachWord("the quick brown fox")); // Output: "The Quick Brown Fox"

//12.Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'

function findLongestWord(str) {
  var words = str.split(" ");
  var longestWord = "";
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
}

console.log(findLongestWord("Web Development Tutorial")); // Output: "Development"

//13.Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of
// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'

function countLetterOccurrences(str, letter) {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      count++;
    }
  }
  return count;
}

console.log(countLetterOccurrences("JSResourceS.com", "o")); // Output: 3

//14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".

// Circumference of circle = 2πr
// Area of circle = πr2

function calcCircumference(radius) {
  var circumference = 2 * Math.PI * radius;
  console.log("The circumference is " + circumference);
}

function calcArea(radius) {
  var area = Math.PI * Math.pow(radius, 2);
  console.log("The area is " + area);
}

calcCircumference(5);

calcArea(5);








