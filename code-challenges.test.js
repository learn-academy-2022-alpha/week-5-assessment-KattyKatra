// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

//boilerplate

// describe("hello", () => {
//   it("returns a string that says hi", () => {
//     expect(hello()).toEqual("hi")
//   })
// })


// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

//Create function called codedMessage
//Input is array
//Output is new array with letters replaced
//a = 4, e = 3, i = 1, o = 0

describe("codedMessage", () => {
  it("takes in a string and converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.", () => {
    expect(codedMessage("Lackadaisical")).toEqual("L4ck4d41s1c4l")
    expect(codedMessage("Gobbledygook")).toEqual("G0bbl3dyg00k")
    expect(codedMessage("Eccentric")).toEqual("3cc3ntr1c")
  })
})

const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"


// b) Create the function that makes the test pass.

const codedMessage = (x) => {
  return x.replaceAll('a','4').replaceAll(/e|E/gi,'3').replaceAll('i','1').replaceAll('o','0');
}

// console.log(codedMessage(secretCodeWord1))
// console.log(codedMessage(secretCodeWord2))
// console.log(codedMessage(secretCodeWord3))


// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// a) Create a test with expects statement using the variable provided.

// Create Function named letterFilter
// Input is array of words and a single letter
// Output is a filtered array of words that contain the letter

describe("letterFilter", () => {
  it("takes in an array of words and a single letter and returns all the words that contain that particular letter", () => {
    expect(letterFilter(arrayOfWords1)).toEqual(["Apple", "Banana", "Orange"])
    expect(letterFilter(arrayOfWords2)).toEqual(["Cherry", "Blueberry", "Peach"])
  })
})

const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
const letterA = "a"
// Expected output: ["Apple", "Banana", "Orange"]
const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]


// b) Create the function that makes the test pass.

const letterFilter = (array, letter) => {
  return array.filter(array => array.includes(letter))
}
console.log(letterFilter(arrayOfWords1, letterA))
console.log(letterFilter(arrayOfWords2, letterE));

// Output one skips "Apple" but putting .toUpperCase or .toLowerCase breaks everything so Idk

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

// Create function fullHouse
//Input is an array of numbers with dupelicates
//Output is a true or false statement if array would equal full house (3 of a kind and a pair)

describe("fullHouse", () => {
  it("function that takes in an array of 5 numbers and determines whether or not the array is a “full house”", () => {
    expect(fullHouse(hand1)).toEqual(true)
    expect(fullHouse(hand2)).toEqual(false)
    expect(fullHouse(hand3)).toEqual(false)
  })
})

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false


// b) Create the function that makes the test pass.
const fullHouse = (array) => {
  array.forEach(element => {
    fullHouse[element] = (fullHouse[element] || 0) + 1
  })
  if (array[0] === array[2] && array[3] === array[4]) {
    return true
  } else if (array[0] === array[1] && array[2] === array[4]) {
    return true
  } else {
    return false
  }
}
console.log(fullHouse(hand1))

// Note incase I don't get back to it, I can get it to count the dupelicates but can't figure out how to do the true/false if statements. EDIT, Added conditionals and got a green!
