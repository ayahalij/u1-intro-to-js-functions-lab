/*
Exercise 1: maxOfTwoNumbers()
*/
const maxOfTwoNumbers = (x, y) => {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
}
console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));


/*
Exercise 2: isAdult()
*/
 function isAdult(age) {
    if (age >= 18) {
        return "Adult"
    }
    else{
        return "Minor"
    }
 }
console.log('Exercise 2 Result:', isAdult(21));


/*
Exercise 3: isCharAVowel()
*/
function isCharAVowel(character) {
    if (character==="a"||character==="e"||character==="i"||character==="o"||character==="u") {
        return "true"
    }
    else{
        return "false"
    }
}
console.log('Exercise 3 Result:', isCharAVowel("a"));


/*
Exercise 4: generateEmail()
*/
function generateEmail(name, domain) {
    return `${name}@${domain}`  
}
console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));


/*
Exercise 5: greetUser()
*/
function greetUser(name,TimeOfDay) {
    return `Good ${TimeOfDay}, ${name}!`
}
console.log('Exercise 5 Result:', greetUser("Sam", "morning"));


/*
Exercise 6: maxOfThree()
*/
function maxOfThree(a,b,c) {
    if (a>=b && a>=c) {
        return a
    }
    else if( b>=a && b>=c){
        return b;
    }
    else{
        return c
    }
}
console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));


/*
Exercise 7: calculateTip()
*/
function calculateTip(bill,tip) {
    return (bill*tip)/100
}
console.log('Exercise 7 Result:', calculateTip(50, 20));


/*
Exercise 8: convertTemperature()
*/
function convertTemperature(TempNum, TempType) {
    if (TempType==="C"){
        return (TempNum*(9/5))+32
    }
    else if (TempType==="F"){
        return (TempNum -32)*(5/9)
    } 
}
console.log('Exercise 8 Result:', convertTemperature(32, "C"));


/*
Exercise 9: basicCalculator()
*/
function basicCalculator(FirstNum,SecondNum,operation) {
    if (operation==="add") {
        return FirstNum + SecondNum
    }
    else if (operation==="subtract") {
        return FirstNum - SecondNum
    }
    else if (operation==="multiply") {
        return FirstNum * SecondNum
    }
    else if (operation==="divide") {
        return FirstNum / SecondNum
    }
}
console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract"));


/*
Exercise 10: calculateGrade()
*/
function calculateGrade(GradeNum) {
    if (GradeNum >=90) {
        return "A"
    }
    else if (GradeNum<=89 && GradeNum>=80) {
        return "B"
    }
    else if (GradeNum<=79 && GradeNum>=70) {
        return "C"
    }
    else if (GradeNum<=69 && GradeNum>=60) {
        return "D"
    }
    else if (GradeNum <=60) {
        return "F"
    }
}
console.log('Exercise 10 Result:', calculateGrade(85));


/*
Exercise 11: createUsername()
*/
function createUsername(FName,LName) {
    const Part1 = FName.slice(0, 3)
    const Part2 = LName.slice(0, 3)
    const length = FName.length + LName.length
    return FName + LName + length
}
console.log('Exercise 11 Result:', createUsername("Samantha", "Green"));