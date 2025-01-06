// console.log("Hello Northcoder");
// console.log(3 + 3);
// let container = 'fruit';

// console.log(typeof container); // "string"

// container = 2;

// console.log(typeof container); // "number"

// container = true;

// console.log(typeof container); // "boolean"
// const fruit = 'banana';
// fruit.age = 28; // write - ignored
// console.log(fruit.age); // read - undefined

// const name = 'sam';
// name[0] = 'S'; // write - ignored
// console.log(name); // read - 'sam'

// const str = '123';
// console.log(str.length); // 3
// str.length = 100;
// console.log(str.length); // 3

// const jonnyLocker = {};
// jonnyLocker.pen = 'biro'; // write
// console.log(jonnyLocker.pen); // read - 'biro'
//  console.log(jonnyLocker);
// const itemName = 'pen';
// jonnyLocker[itemName] = 'parker fountain pen';
// console.log(jonnyLocker); // { pen: "parker fountain pen" }
// jonnyLocker[itemName] = 'bog standardard bic';
// console.log(jonnyLocker); // { pen: "bog standardard bic" }
// const sam = { name: 'Sam' };
// const samDoppelganger = sam;
// sam.age = 30;
// console.log(samDoppelganger === sam); // true
// console.log(sam); // { name : 'Sam', age: 30 }
// console.log(samDoppelganger); // { name : 'Sam', age: 30 }
// const paul = { name: 'Paul' };
// const paulTwin = { name: 'Paul' };
// console.log(paul === paulTwin); // false

// //Arrays
// const samsFilingCabinet = [];
// const mitchsFilingCabinet = [];
// console.log(samsFilingCabinet === mitchsFilingCabinet); // false
// mitchsFilingCabinet.push('p45');
// console.log(mitchsFilingCabinet); // ['p45'];
// console.log(samsFilingCabinet); // [];
// const samsFilingCabinet1 = ['books'];
// const mitchsFilingCabinet1 = samsFilingCabinet1;
// console.log(samsFilingCabinet1 === mitchsFilingCabinet1); // true
// console.log(mitchsFilingCabinet1); // ['books']
// console.log(samsFilingCabinet1); // ['books']

// const people = [
//   'Sam',
//   'Mauro',
//   'Harriet',
//   'Mitch',
//   { name: 'Jonny', isVerbose: true },
// ];
// const tutors = [...people];
// console.log(people === tutors); // false
// console.log(people[4] === tutors[4]); // true
// const haz = { name: 'Haz', age: 30, hobbies: ['theatre'] };
// const hazClone = { ...haz };
// console.log(haz === hazClone); // false
//----------------------

// const arr = [1,2,4,35,2]
// console.log(arr);
// const dupArr = arr.filter((ele,index)=> arr.indexOf(ele) !== index);
// console.log('duplicate arr',dupArr);

// const maxNumber = arr.reduce((prev,curr)=> prev>curr? prev :curr);
// console.log('max number',maxNumber);



// const minNumber = Math.min(...arr);
// console.log('min number', minNumber);

// const indexMaxNumber = arr.indexOf(maxNumber);
// arr[indexMaxNumber]= minNumber;
// const secondLargestNumber = Math.max(...arr);
// console.log('second largest Number',secondLargestNumber);

// const arr1 = [1,2,3,5,7,8,10];
// const minNumber1 = Math.min(...arr1);
// const maxNumber1 = Math.max(...arr1);

//      const missingNumberArr = [];
//      for (i= minNumber1; i<maxNumber1; i++){
//         if (arr1.indexOf(i) <0){
//             missingNumberArr.push(i)
//         }
//      };
//      console.log('missing number arr ',missingNumberArr);
     
//      const evenNumberArr = arr1.filter((item)=>{ return item%2===0});
//      console.log('even number arr1',evenNumberArr);

//      const oddNumberArr = arr1.filter((item)=>{ return item%2===1});
//      console.log('odd number arr1',oddNumberArr);

//      const sumArr = arr1.reduce((prev,curr) => {
//                     return prev+curr
//      });
//      console.log('sum of arr1', sumArr);

//      const n = 6;
//      let fact =1;
//      if (n < 1 ) 
//         { console.log (`factorial of ${n} not possible`)}
//     else  {
//         for (let i=1 ; i<n ; i++){
//             fact = fact*i
//         };
//         console.log(`factorial of ${n} is`, fact);
//     };
   
//     function primeNumber(number1){
   
//     if (number1<2){
//         console.log(`${number1} is not a prime number`)
//     }
//     else {
//         for (let i=2; i<number1-1; i++){
//             if (number1%i===0){
//                 console.log(`${number1} is not a prime number`);
//               //  count = count +1;
//                 return number1;
//             }
//         };
//       //  if (count===0){
//         console.log(`${number1} is a prime number`);
//         return number1;
//       //  };
//     };

// };
// primeNumber(20);
// primeNumber(-4);
// primeNumber(11);

// function vowelCheck(str){
//     const lowerString = str.toLowerCase();
//     let count =0;
//     let vowelArr = ['a','e','i','o','u'];
//     for (let letter of lowerString){
//         if (vowelArr.includes(letter)){
//             count = count+1;
//         }
//     };
//     console.log(`string ${str} contains ${count} number of vowels`)
// };
// vowelCheck('a');
// vowelCheck('Apple');
// vowelCheck('bt');

// function reverseString(str1){
//     const stringArr = str1.split('');
//     const reverseStringArr = stringArr.reverse();
//     const reverseString1 = reverseStringArr.join('');
//     console.log(`reverse string of ${str1} is : `,reverseString1);
//     return reverseString1;
// };
// reverseString('Apple');
// reverseString('I am a girl');

// function palidromestr(str2){
//     const str2Arr = str2.split('');
//     const reverseStr2Arr = str2Arr.reverse();
//     const reverseStr2 = reverseStr2Arr.join('');
//     if (str2 === reverseStr2){
//         console.log(str2,' string is polidrom');

//     }
//     else {
//         console.log(str2 ,'string is not palidrom');
//     };
//     return reverseStr2;
// };
// palidromestr('madam');
// palidromestr('apple');

// let a= 10;
// let b= 20;
// let x = a;
//  a = b;
// b = x;


// console.log(a,b, 'swaped value');

// let c = 30;
// let d = 40;
// console.log(c,d, ' original value');
// [c,d] = [d,c];
// console.log( c,d , 'swaped value');

// const arr3= [1,4,6,8];
// const arr4 = [2,8,5,10];
// console.log ('arr3', arr3, 'arr4', arr4);
// const mergedArr = arr3.concat(arr4);
// console.log('merged array is ',mergedArr);
// const sortedArr = mergedArr.sort((a,b) => (a-b));
// console.log('sorted arr is ', sortedArr);
// const mergedArrSpread = [...arr3,...arr4];
// console.log('merged array spread is', mergedArrSpread);

// function factorOfInteger (int){
//     if (int<1)
//     { console.log('factor of this integer is not possible')}
//     else {
//         console.log('factor of integer', int , 'is');
//         for( let i=1 ; i<int+1 ; i++){
//             if (int%i===0){
//                 console.log(i);
//             }

//         }
//     };
// };
// factorOfInteger(20);
// factorOfInteger(11);
// factorOfInteger(-5);


// function calculatorExample (cal1, cal2, operator){
//     let result =0;
//     if (operator ==='+'){
//         result = cal1+ cal2;
//     }
//     else if  (operator ==='-'){
//         result = cal1- cal2;
//     }
//     else if (operator ==='/'){
//         result = cal1/ cal2;
//     }
//     else if (operator ==='*'){
//         result = cal1* cal2;
//     }
//     else {
//       console.log('operator is not defined');
//     };
//     console.log(result);

// };
// calculatorExample(30,45,'+');

// arr1Compare = [1,3,5,6];
// arr2Compare = [3,5,6,1];
// let count = 0;
// if (arr1Compare.length !== arr2Compare.length){
//     console.log('arr1 is not equal to arr2');
//     count = count +1;
// }
// else {
//     arr1Compare.every((currEle)=>{ 
//         if (arr2Compare.includes(currEle)=== false){
//             console.log('arr1 is not equal to arr2');
//             count = count +1;
//         }

//     })
//     if (count === 0){
//     console.log ('arr1 is equal to arr2');
//     };
// };

// const arrInter1 = [1,3,5,5,6,7]
// const arrInter2 = [2,3,5,8,9];
// const arrInterSection = arrInter1.filter((ele)=>{
//     return arrInter2.includes(ele);
// }

// );
// const distinctArr = [...new Set(arrInterSection)];

// console.log('arr intersection is ',distinctArr);

// const arrUnion1 = [1,2,4,6,8];
// const arrUnion2 = [2,4,5,6,7,9];
// const arrUnionAll = [...arrUnion1,...arrUnion2];
// const distinctUnionArr = [...new Set(arrUnionAll)];
// console.log('arr union is ',distinctUnionArr);

// celsius to fahrenheit
//fahrenheit = celsius*1.8+32;
// fahrenheit to celsius 
// // celsius = 5/9*(fahrenheit-32)

// let result =0;
// let result1 = 0;

// function celsiusToFahrenheit( num1){
//      result = (num1*1.8+32).toFixed(2);
//     return result;
// };

// function fahrenheitToCelsius (num2){
//      result1 = (5/9*(num2-32)).toFixed(2);
//     return result1;
// };
// celsiusToFahrenheit( 60);
// fahrenheitToCelsius (60);
// console.log(result, result1);

// //kilometer to miles
//  // miles = 1.6*kilometer
//  //kilometer = (5/8)*miles
//  const distance = 10;
//  const milesToKilo = 1.6*distance;
//  const kiloToMiles = (5/8)*distance;
//  console.log(distance,'kilo to miles',kiloToMiles, 'miles to kilo' , milesToKilo);

//  let str = 'banana is a fruit';
//  let strUpperFirst = str.slice(0,1).toUpperCase()+str.slice(1);
//  console.log(str, strUpperFirst);
//  let strArr = str.split(' ');
//  const strArrUpperFirst = strArr.map((currWord) => {
//          return currWord.slice(0,1).toUpperCase()+ currWord.slice(1);
//  });
  
//  const strUpper = strArrUpperFirst.join(' ');
//  console.log(strUpper);

//  //fibonacci sequence
//  //0,1,1,2,3,5,8,12
//  //0-a,1-b a+b
//  let a1 =0;
//  let b1=1;
//  let fibonacciSeq = [0];
//  for (let i=0; i<15; i++){
//        sum= a1+b1;
//     a1 = b1;
//     b1 = sum;
//     fibonacciSeq.push(sum);
//  };
//  console.log('fibonacci ',fibonacciSeq);

//  //find no of occurance of a letter in a string

//  const strOccur = 'Hello World';
//  const letterOccur = 'l';
//  let strLength = strOccur.length;
//  let countOccur =0;

//  for (let i=0; i<strLength; i++){
//     if (strOccur[i] === letterOccur){
//        countOccur = countOccur+1;
//     }
//  };
//  console.log('no of ccurance',countOccur);

//  function table (num){
//     console.log('table of ',num ,'is');
//     for (let i=1; i<10; i++){
//         const numTable = i*num;
//         console.log(i,'*',num ,'=', numTable);
//     }
//  };
//  table(5);
//  table (11);

//  //Armstrong number abcd = an+bn+cn+dn
//  //371 = 3*3*3+7*7*7+1*1*1=27+341+1 

//  function armStrong(num4){
//     let temp = num4;
//     let sumArmStrong =0;
//     let lengthNum = num4.toString().length;
//    // console.log(num4, temp, sumArmStrong, lengthNum);
//      while (temp >0){
//          digit = temp%10;
//         sumArmStrong +=(digit)**lengthNum;
//         temp = Math.floor(temp/10);
//     //    console.log (digit , sumArmStrong, temp);
//       //  console.log('.......');
//     };
//     if (sumArmStrong === num4){
//         console.log (num4,'is a armstrong number')
//     }
//     else {
//         console.log(num4, 'is not a armstrong number');
//     }
//  }

//  armStrong(371);
//  armStrong (21);

//------------------------------- 
 const phoneBook = {
    anat: '07986538201',
    paul: '07891867541',
    foluso: '0789573421',
  };
  const namePhoneBook = 'paul';
  
  console.log(phoneBook.namePhoneBook); // evaluates to undefined
  console.log(phoneBook[namePhoneBook]); // evaluates to "07891867541"

  const person = {
    name: 'Anat',
    age: 24,
  };

  console.log('name of person',person.name);
  console.log('name of job',person.job);

  const letters = ['a', 'b', 'c'];
console.log(letters[0]); // evaluates to 'a'
console.log(letters[1]); // evaluates to 'b'
console.log(letters[5]);
   letters.push('d','e','f');
   console.log(letters[5]);
   console.log(letters);
   letters.pop();
   console.log(letters);
   letters.shift();
   console.log(letters);
   letters.unshift('z');
   console.log(letters);

const items = ['apple', 'banana', 'strawberry'];
console.log(items.length); // will be 3
items[3] = 'kiwi'; // this will insert an item "kiwi" at index position 3
console.log(items.length); // will now be 4

const bestTrilogies = [
    ['fellowship', 'twin towers', 'return of the king'],
    ['a new hope', 'empire strikes back', 'return of the jedi'],
    ['godfather I', 'godfather II', 'godfather III'],
  ];
  const episode4 = bestTrilogies[1][0]; // 'a new hope'
  console.log(episode4);  

  const a = 10;
const b = 20;

if (a + b) {
  console.log(`The sum of ${a + b} is bigger than zero`);
}

console.log(Number.isInteger(a) && a >= 0);
console.log(Number.isInteger(a) || a >= 0);

const str = '';
if (!str) {
  console.log('hello northcoders!');
}

//Ternary Operator
const score = 6;
const result = score >= 5 ? 'Pass' : 'Fail';
console.log(result); // "Fail"

console.log("hello" === "hello"); // true
console.log("hello" === "goodbye"); // false
console.log("hello" !== "hello"); // false
console.log("hello" !== "goodbye"); // true

const a1 = true;
const b1 = false;
const c1 = 10 > 5;
console.log('a1',a1,'b1',b1,'c1',c1)
console.log('!a1',!a1); // false
console.log('!b1',!b1); // true
console.log('!!a1',!!a1); // true
console.log('!c1',!c1); // false

const names = ['Harry', 'Sally', 'Bob'];
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

const namesWord = 'Harry';
for (let i = 0; i < namesWord.length; i++) {
    console.log(namesWord[i]);
  };

const namesWord2 = 'Peter';
console.log(namesWord2);
for (const item of namesWord2) {  
    const upperLetter = item.toUpperCase();
    console.log(upperLetter);
  };
  
  const person1 = { name: 'Noel', age: 42, favouriteAnimal: 'Owl' };
for (const key in person1) {
  console.log('key',key);
  console.log('person1',person1[key]);
};

function add(a, b) {
    return a + b;
  };

  const addFunction = add (20,25);
  console.log('add function',addFunction);

  function sayHello(name) {
    //1, function name added to variable environment, then //3 'name' is given value passed in as argument
    const str = 'hello ' + name; //4
    return str; //5
  };

  const sayHelloName = sayHello('samson');
  console.log(sayHelloName);
  
  const name1 = 'philippa';
const name2 = 'izzi';
const multipleNames = { name1: name1, name2: name2 };



console.log(multipleNames); // logs {name1: 'philippa', name2: 'izzi'}

console.log(multipleNames.name1); // philippa
console.log(multipleNames.name2); // izzi
    
function createGreeting(...names) {
    let greeting = `Hello ${names[0]}`;
    for (let i = 1; i < names.length; i++) {
      if (i === names.length - 1) {
        greeting += ` and ${names[i]}`;
      } else {
        greeting += `, ${names[i]}`;
      }
    }
    return greeting;
  }
  
  
  function  createGreeting1(...nameGreeting){
    let greeting = 'Hello '+ nameGreeting[0];
    for (let i= 1; i<nameGreeting.length; i++){
        if (i === nameGreeting.length-1){
            greeting = greeting + ' and '+ nameGreeting[i];
        }
        else {
            greeting = greeting + ' , '+ nameGreeting[i];
        }
    }
    return greeting;
  };

  const greeting = createGreeting1('Vel', 'Jim', 'Liam');
  console.log(greeting); // Hello Vel, Jim and Liam

  const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const wordFilter = words.filter((word) => word.length > 6);

console.log(wordFilter);
console.log(words);

const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);

}

numbers.forEach((item) => console.log (item*2));

const tripleNumber = numbers.forEach((number )=>{
    return number*3;
});
console.log(tripleNumber);

const tripleNumberMap = numbers.map((number )=>{
    return number*3;
});
console.log(tripleNumberMap);
console.log(numbers);

const arrExample = ['apple','banana','pear','grapes','orange','mango','guava'];
const filterArrExample = arrExample.filter((fruit) =>{ return fruit.length===5});
    
   

console.log(filterArrExample);

const people = [
    { name: 'Charlie', age: 24, home: 'Leeds' },
    { name: 'Kit', age: 40, home: 'Sheffield' },
    { name: 'Noah', age: 18, home: 'Liverpool' },
    { name: 'Gigi', age: 18, home: 'Leeds' },
    { name: 'Karolina', age: 30, home: 'Stockport' },
  ];

  const leedsPeople = people.filter((peop) =>{
    return peop.home==='Leeds';
  });
  console.log(leedsPeople);


  



     
     



