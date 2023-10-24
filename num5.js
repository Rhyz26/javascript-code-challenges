//SET 1 NUMBER 5
//Given an Array containing integers,floats,and one character strings, write a function that takes an Array as a parameter and returns an Object with keys evens, odds, and chars. The value for evens is an array of sorted even numbers, the value for odds is a list of sorted odd numbers and chars is a list of sorted single-character strings.
//Caution: DO NOT use the sort array method

//let someArrayArray = [3.0, 'a', 7, 'x', '20', 'd', 4, 'f', 8]

//Expected output

//{evens:[4,8,20], odds: [3.0, 7], chars:['a', 'd', 'f', 'x']}

  

  function findEvensOddsAndChars(array) {
  // Create three empty arrays to store the evens, odds, and chars.
  const evens = [];
  const odds = [];
  const chars = [];

  // Iterate over the array and add each element to the appropriate array.
  for (const element of array) {
    if (typeof element === "number") {
      if (element % 2 === 0) {
        evens.push(element);
      } else {
        odds.push(element);
      }
    } else if (typeof element === "string" && element.length === 1) {
      chars.push(element);
    }
  }

  // Return an object with the three arrays as keys.
  return { evens, odds, chars };
}

const someArray = [3.0, "a", 7, "x", "20", "d", 4, "f", 8];

const result = findEvensOddsAndChars(someArray);

console.log(result);
// { evens: [4, 8, 20], odds: [3.0, 7], chars: ['a', 'd', 'f', 'x'] }
