// SET 1 NUMBER 2

// Write a JavaScript program that prompts a user to enter their year of birth and in turn prints a string in the console stating whether the user is a minor, a youth, or an elder. Anyone below 18 years is a minor,
//  anyone between 18 and 36 years is a youth and the rest are elders.
//1. anyone below 18 a < 18, you are a minor
//2. between 18 and 36 age >= 18 && age <= 36, your a youth
//3. age > 36 your an elder


let yearOfBirth = prompt("Enter your year of birth");
let age = 2023 - yearOfBirth;

if (age < 18) {
  console.log("Your a minor");
} else if (age >= 18 && age <= 36) {
  console.log("Your a youth");
} else if (age > 36) {
  console.log("Your an elder");
}
