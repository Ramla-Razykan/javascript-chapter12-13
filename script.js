// =============Question1: Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122). 
// var char = prompt("Enter a Character");
// document.write(`Character is ${char}</br>`);

// if (char == Number.parseInt(char)) {
//   document.write(`Input is a number </br> </br>`);
// } 
//else if (char == char.toUpperCase()) {
//   document.write(`Input is an uppercase letter </br></br>`);
// } 
//else if (char == char.toLowerCase()) {
//   document.write(`Input is an lowercase letter </br></br>`);
// } 
//else {
//   document.write(`Invalid Character! </br></br>`);
// }

// =============Question2: Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.
// var int1 = Number.parseInt(prompt("Enter First integer!"));
// var int2 = Number.parseInt(prompt("Enter Second integer!"));

// document.write(`First integer: ${int1} </br>`);
// document.write(`Second integer: ${int2}</br>`);

// if (int1 == int2) {
//   document.write(`First integer is equal to Second integer </br></br>`);
// } 
// else if (int1 > int2) {
//   document.write(`First integer is larger than Second integer </br></br> `);
// } 
// else {
//   document.write(`Second integer is larger than First integer </br></br>`);
// }

// =============Question3: Write a program that takes input a number from user & state whether the number is positive, negative or zero.
// var user_num = Number.parseInt(
//     prompt("Enter a number whether check number positive, negative or zero")
// );
// document.write(`User Number: ${user_num} </br>`);

// if (user_num > 0) {
//     document.write(`User number is positive </br></br>`);
// } 
// else if (user_num < 0) {
//     document.write(`User number is Negative </br></br>`);
// } 
// else {
//     document.write(`User number is Zero </br></br>`);
// }
// =============Question4:Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise
// Prompt the user for input
// var char = prompt("Enter a character:");

// // Convert the character to lowercase to handle both uppercase and lowercase inputs
// char = char.toLowerCase();

// // Check if the character is a vowel
// if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//     console.log(true);
// }
// else {
//     console.log(false);
// }

// =============Question5: Write a program that
// a. Store correct password in a JS variable.
// var correctPassword = "securePassword123";

// // b. Ask user to enter his/her password
// var userPassword = prompt("Please enter your password:");

// // c. Validate the two passwords:

// // i. Check if user has entered a password
// if (userPassword === null || userPassword === "") {
//     alert("Please enter your password.");
// } 
// else {
//     // ii. Check if both passwords are the same
//     if (userPassword === correctPassword) {
//         alert("Correct! The password you entered matches the original password.");
//     } 
//     else {
//         alert("Incorrect password.");
//     }
// }

// =============Question6: This if/else statement does not work. Try to fix it:
// ~~~~~Wrong statement
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

// ~~~~right statement
// var greeting;
// var hour = 13;
// if (hour < 18) {
//     greeting = "Good day";
// }
// else {
//     greeting = "Good evening";
// }

// =============Question7: 
// // Ask the user to enter time in 24-hour format
// var time = parseInt(prompt("Enter time in 24-hour format (e.g., 1900 for 7 PM):"));

// // Check if the input is a valid number and within the 24-hour format range
// if (isNaN(time) || time < 0 || time > 2359) {
//     alert("Invalid input! Please enter a valid time in 24-hour format.");
// } 
// else {
//     // Extract hours and minutes
//     var hours = Math.floor(time / 100);
//     var minutes = time % 100;
    
//     // Validate that minutes are within a correct range
//     if (minutes < 0 || minutes >= 60) {
//         alert("Invalid input! Please enter a valid time in 24-hour format.");
//     } 
//     else {
//         // Determine AM or PM
//         var period = "AM";
//         if (hours >= 12) {
//             period = "PM";
//         }
//         if (hours > 12) {
//             hours -= 12;
//         }
//         if (hours === 0) {
//             hours = 12; // Handle midnight and noon
//         }

//         // Display the time in 12-hour format
//         alert(`The time in 12-hour format is: ${hours}:${minutes.toString().padStart(2, '0')} ${period}`);
//     }
// }
