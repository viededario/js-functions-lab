/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. 
It should take two numbers as inputs and return the larger number. 
If they're equal, return either one.

Exercise 1 has been completed for you:
*/

const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
  console.log('Exercise 1 Result:', maxOfTwoNumbers(4, 4));
  



/*
Exercise 2: isAdult()

Write a function named isAdult. It should take an age (number) 
and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.

Complete the exercise in the space below:
*/

function isAdult(age) {
          if (age >= 18) {
            return 'Adult';
          } else {
            return 'Minor';
          }      
}
console.log(isAdult(28));





/*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as 
an argument. It should return true if the character is a vowel and 
false otherwise. For the purposes of this exercise, the character 
y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/

function isCharAVowel(vowel){
    if (vowel === 'a' || vowel === 'e' || vowel === 'i' || vowel === 'o' || vowel === 'u'){
        return true;
    }else {
        return false;
    }
}

console.log(isCharAVowel('y'));






/*
Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings: 
a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com') 
should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/

function generateEmail(name, domain){
        return `${name}@${domain}`;
}


console.log(generateEmail('Dario', 'generalassembly.com'));




/*
Exercise 5: greetUser()

Define a function called greetUser. It should take a name and a 
time of day (morning, afternoon, evening) and return a personalized 
greeting.

Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

Complete the exercise in the space below:
*/



function greetUser(name, time){
    return `Good ${time}, ${name}! `;
}

console.log( greetUser("Sam", "morning"));






/*
Exercise 6: maxOfThree()

Define a function, maxOfThree. It should accept three numbers 
and return the largest among them.

Example: maxOfThree(17, 4, 9) should return 17.

Complete the exercise in the space below:
*/

function maxOfThree(x, y, z){
    if (x > y && x > z){
        return x;
    }else if (y > x && y > z){
        return y;
    }else{
        return z;
    }
}
console.log(maxOfThree(9, 1, 8));




/*
Exercise 7: calculateTip()

Create a function called calculateTip. It should take two arguments: 
the bill amount and the tip percentage (as a whole number). 
The function should return the amount of the tip.

Example: calculateTip(50, 20) should return 10.

Complete the exercise in the space below:
*/


function calculateTip(billAmnt,tipPerc){
    let tipAmnt = billAmnt*(tipPerc/100)
    return tipAmnt;
}


console.log(calculateTip(50, 20));




/*
Exercise 8: convertTemperature()

Write a function named convertTemperature. 
It takes two arguments: a temperature and a string representing the 
scale ('C' for Celsius, 'F' for Fahrenheit). 
Convert the temperature to the other scale.

Example: convertTemperature(32, 'C') should return 89.6 (Fahrenheit).
Example: convertTemperature(32, 'F') should return 0 (Celsius).

Complete the exercise in the space below:
*/



function convertTemperature(temperature, scale){
    if (scale === "C"){
        return (temperature - 32 ) *(9/5)
    } else if (scale === "F"){
        return (tempersture * (9/5)) + 32
    } else {
        return "invalid";
    }
}



console.log( convertTemperature(32, "C"));






/*
Exercise 9: basicCalculator()

Create a function named basicCalculator. 
It should take three arguments: two numbers and a string representing 
an operation ('add', 'subtract', 'multiply', 'divide'). 
Perform the provided operation on the two numbers. 
In operations where the order of numbers is important, 
treat the first parameter as the first operand and the 
second parameter as the second operand.

Example: basicCalculator(10, 5, 'subtract') should return 5.

Complete the exercise in the space below:
*/



function basicCalculator(num1, num2, Calc){
       if (Calc === "add"){
        return num1 + num2;
        }else if (Calc === "substract"){
            return num1 - num2;
        }else if (Calc === "multiply"){
                return num1 * num2;
        }else if ( Calc === "divide"){
                return num1/num2;
            } else {
                return "error"
            }
        }
       
console.log(basicCalculator(10, 5, "f"));








/*
Exercise 10: calculateGrade()

Define a function called calculateGrade. 
It should take a numerical score and return the corresponding letter 
grade (A, B, C, D, F). 

For example, 90 and above yields an 'A', 80-89 is a 'B', 
and 70-79 is a 'C', 60-69 is a 'D' and anything lower than a 60 is an 'F'.

Example: calculateGrade(100) should return A.

Complete the exercise in the space below:
*/



function calculateGrade(grade){
      if (grade >= 90){
        return "A"}
        else if (grade >=80) {
            return "B"
        }else if (grade >= 70){
            return "C"
        }else if (grade >= 60){
            return "D"
        }else if (grade >= 0){
            return "F"
      }
      }
console.log(calculateGrade(100));





/*
Exercise 11: createUsername()

Define a function called createUsername. 
It should take a first name and a last name and return a username. 

The username should be a combination of the following:
- The first three letters of the first name.
- The first three letters of the last name.
- The total character count of the first and last name combined.

Example: createUsername('Samantha', 'Green') should return 'SamGre13'.

Complete the exercise in the space below:
*/




function createUsername(first,second){
    const firstPart= first.slice(0,3);
    const secondPart = second.slice(0,3);
    const totalChars= first.length + second.length;
    return firstPart + secondPart + totalChars;
}


console.log(createUsername("Vladimir", "Estegon"));




/*
Exercise 12: numArgs()

Challenge yourself with numArgs. 
This function should return the count of arguments passed to it when called.

Complete the exercise in the space below:
*/


function numArgs(x, y, z, a){
if (x >= a){
    return 'hi'
}else if (y >= z){
    return 'hmmmm'
}else if ( z >= x){ 
    return 'hello'
} else if (a >= y){
    return 'whatever'
}
}


console.log(numArgs(13, 27, 13, 55));







