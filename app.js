// Important Note - No Built-in functions to be used
// Progression 1: Names and Input
// console.log("Progression 1: Names and Input")
// 1.1 Create a variable `Kalvian-1` with the driver's name.
// 1.2 Print `"The driver's name is XXXX"`.
// 1.3 Create a variable `Kalvian-2` with the navigator's name.
// 1.4 Print `"The navigator's name is YYYY"`.

var Kalvian1 = "Jamason"
console.log("The driver's name is", Kalvian1)

var Kalvian2 = "Christina"
console.log("The navigator's name is", Kalvian2)

// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.

// console.log("Progression 2: Control Statements - 1")

if (Kalvian1.length > Kalvian2.length){
  console.log(Kalvian1)
}else{ console.log(Kalvian2)}

// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String Kalvian - a and i are vowels. Print Kalvian a i a 1 4 5. 

const vowels = ['a','e','i','o','u']
inputString = "happybirthday"
let string =""
let letters =""
let index =""
let vowelCheck = false;
for(let i=0;i<inputString.length;i++){
  vowels.forEach(function(item){
    if (inputString[i]==item){
      vowelCheck = true;
      string = Kalvian1;
      letters += inputString[i] + " ";
      index += `${i}` + " ";
    }
  })
}
if (vowelCheck){ console.log(inputString,letters,index);}

// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters

let inputString2 = "VivaLaRevolution"
function isUpper(string){
  return string === string.toUpperCase();
}
function isLower(string){
  return string === string.toLowerCase();
}
let countUpper = 0
let countLower = 0

for(let i=0;i<inputString2.length;i++){
  if(isUpper(inputString2[i])){
    countUpper+=1;
  }
  if(isLower(inputString2[i])){
    countLower+=1;
  }
}
console.log("number of upper case characters:",countUpper)
console.log("number of lower case characters:",countLower)

// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "Kalvian"
let reqstr1 = "";
for(let i=0;i<Kalvian1.length;i++){
  reqstr1 += Kalvian1[i].toUpperCase() + " ";
}
console.log(reqstr1)
// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. Example "naivlaK"

let reqstr2 =""
for(let i = Kalvian2.length-1; i>=0;i--){
  reqstr2 += Kalvian2[i]
}
console.log(reqstr2)

// 3.3 Merge both the characters such that driver is followed by Navigator like "DriverName NavigatorName"
// - Now bring the NavigatorName to the start and send DriverName to the back like "NavigatorName DriverName"

console.log(Kalvian1, Kalvian2)

console.log(Kalvian2, Kalvian1)

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?

var result = Kalvian1.localeCompare(Kalvian2);
if(result<0){
  console.log("The driver's name goes first.")
}
else if(result>0){
  console.log("Yo, the navigator goes first definitely.")
}
else{
  console.log("What?! You both have the same name?")
}
// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.
var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."

let words = 0;
let etCount = 0;

for(let i=0;i<lorem.length;i++){
  if(lorem[i]==" "){
    words+=1;
  }
  if(lorem[i]=="e" && lorem[i+1]=="t"){
    etCount+=1;
  }
}

console.log(words)
console.log(etCount)

// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".

givenString = "Was it a car or a cat I saw" //enter any string here to check
noSpaceSrt = ""
givenString = givenString.toLowerCase()
for(let i=0;i<givenString.length;i++){
  if(givenString[i]!=" "){
    noSpaceSrt +=givenString[i]
  }
}
console.log(noSpaceSrt)
let check =true;

let n = noSpaceSrt.length -1

for(let i=0;i<noSpaceSrt.length;i++){
  
    if(noSpaceSrt[i]==noSpaceSrt[n-i]){
      // check = true;
      // console.log(noSpaceSrt[i],noSpaceSrt[n-i]) UNComment this to get LETTER BY LETTER CHECK
    }
    else{check =false;}
  
}


if(check){
  console.log("Yes it is a palindrome")
}else{console.log("No it is not a palindrome")}
// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin' 
