// function sayName() {
//     const name = 'Mitch';
//     console.log(name); // 'Mitch' - the variable 'name' is in scope at this point.
//   }
  
//   sayName();
  
//   //local scope
//   function sayName1() {
//     const name1 = 'Mitch';
//   }
  
//   sayName1();
  
//   //console.log(name1); // ReferenceError - the variable 'name' is no longer "in-scope".

// //  parent scope
// const name2= 'MitchParent';

// function sayName2() {
//   console.log(name2); // logs 'Mitch'!!
// }

// sayName2();
// console.log(name2); // logs 'Mitch'!!

// //shadowing
// const name3 = 'MitchShadow';

// function sayName3() {
//   const name3 = 'Tom';
//   console.log(name3); // logs "Tom"
// }

// sayName3();
// console.log(name3);

// let name4 = 'Alex';

// name4 = 'Izzi';

// const changeName = function() {
//   name4 = 'Mitch';
// };

// changeName();

// console.log(name4); // logs 'Mitch'

// //lexical scoping
// let num5= 10;

// const printNum = function() {
//   console.log(num5);
// }

// const func = function () {
//   let num5 = 3;
//   console.log(num5);
//   printNum();
//   console.log(num5);
// }

// func(); // console.logs --> 10
// console.log('num5',num5);

// let num6 = 10;

// const func2 = function () {
//   let num6 = 3;
//     const printNum = function() {
//       console.log(num6);
//     }
//   printNum();
// };

// func2(); 
// console.log('num6',num6);

// //block scope
// function countToTen() {
//     for (let i = 1; i <= 10; i++) {
//       console.log(i); // 1.. 2.. 3.. 4.. etc..
//     }
//    // console.log(i); // ReferenceError!!
//   }
  
//   countToTen();

//   function funcLeaked() {
//     if (true) {
//       nameFunc = 'mitch';
//     }
//   }
//   funcLeaked();
//   console.log('leaked function',nameFunc); // "mitch"

//   console.log(sayName); //"[Function sayName]"

// function sayName() {}

// sayName1(); //logs 'Name!' -- sayname is hoisted

// function sayName1() {
//   console.log('Name!');
// }

// //console.log(sayName4); // ReferenceError: sayName is not defined!!
// const sayName4 = function() {};

// const tutor = { firstName: 'Paul' };
// const { firstName } = tutor;
// console.log(firstName); // 'Paul'

// const tutors = ['Paul', 'Haz'];
// const [tutor1, tutor2] = tutors;
// console.log(tutor1); // 'Paul'
// console.log(tutor2); // 'Haz'

// const tutor3 = { nameTutor3: 'Shaq', ageTutor3: 25 };

// // const nameTutor3 = tutor3.name3;
// // console.log(nameTutor3); // Shaq

// const { nameTutor3 } = tutor3;
// console.log(nameTutor3);

// const { nameTutor3: name6 } = tutor3;

// console.log(name6); // Shaq

// // const { nameTutor3, pets7 } = tutor3;

// // console.log(name); // 'russ'
// // console.log(pets7); // undefined

// const tutor4 = { nameTutor4: "russ" };
// const { nameTutor4 = "default name", pets8 = [] } = tutor4;

// console.log(nameTutor4); // 'russ'
// console.log(pets8); // []

// const { nameTutor3: firstName3, ageTutor3: yearsLived } = tutor3;
// console.log(firstName3);
// console.log(yearsLived);

// const tutor5 = { nameTutor5: 'Shaq', ageTutor5: 25, petCountTutor5: { lizard: 3, cat: 1 } };

// const logName1 = (personObject) => {
//   const { nameTutor5 } = personObject;
//   console.log(nameTutor5);
// };

// logName1(tutor5);

// const tutor6 = { nameTutor6: 'Shaq', ageTutor6: 25 };

// const logName2 = ({ nameTutor6 }) => {
//   console.log(nameTutor6);
// };

// logName2(tutor6);

// const tutors7 = [
//   { name: 'Shaq', age: 25 },
//   { name: 'Izzi', age: 23 },
// ];

// // without array destructuring
// const shaqObj = tutors7[0];

// // with array destructuring
// const [shaqObj1] = tutors7;

// const [shaqObj2, izziObj2] = tutors7;

// const [, izziObj7] = tutors7;
// console.log(izziObj7); // { name: "Izzi", age: 23 }

// const cities = [
//   'cardiff',
//   'london',
//   'edinburgh',
//   'bristol',
//   'liverpool',
//   'manchester',
// ];

// const { 5: bestCity } = cities;
// console.log(bestCity);

// const arrayOfArrays = [
//   [1, 2, 3],
//   ['a', 'b', 'c'],
// ];

// const [[one]] = arrayOfArrays;
// console.log(one); // 1

// function copyArrayAndSquare(list) {
//   const output = [];

//   for (let i = 0; i < list.length; i++) {
//     output.push(list[i] ** 2);
//   }
//   return output;
// }

// function copyArrayAndTriple(list) {
//   const output = [];

//   for (let i = 0; i < list.length; i++) {
//     output.push(list[i] * 3);
//   }
//   return output;
// }

// const nums = [1, 2, 3, 4, 5, 6, 7];
// const squaredNums = copyArrayAndSquare(nums); // [1, 4, 9, 16, 25, 36, 49];
// const tripledNums = copyArrayAndTriple(nums); // [3, 6, 9, 12, 15, 18, 21];
// console.log(nums);
// console.log(squaredNums);
// console.log(tripledNums);

// // function copyArrayAndDoStuff(list, instructions) {
// //   const output = [];
// //   // we still create a variable that hold the new values

// //   for (let i = 0; i < list.length; i++) {
// //     // here we call instructions to do something to the current
// //     // array element and then push the returned value from instructions to our
// //     // output array
// //     output.push(instructions(list[i]));
// //   }
// //   return output;
// // }

// // const addList = copyArrayAndDoStuff([1,5,7,8],);
// // console.log(addList);

// function tripleNum(num) {
//   return num * 3;
// }

// const nums1 = [1, 2, 3, 4, 5];

// const tripledNum = nums1.map(tripleNum);
// console.log(tripledNum); // [3, 6, 9, 12, 15];

// const nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evenNums = nums2.filter(function(val) {
//   return val % 2 === 0;
// });

// console.log(evenNums); // [2, 4, 6, 8, 10];

function copyArrayAndDoStuff(list, instructions) {
  const output = [];

  for (let i = 0; i < list.length; i++) {
    output.push(instructions(list[i]));
  }
  // console.log(output);
  return output;
};

function processUsers(users, sendAlert) {
  const hackers = users.filter((user) => {
    return user.isHacker;
  });
  hackers.forEach((hacker) => {
    sendAlert(hacker);
  });
}

function makeCounter() {
  let count = 0;
  function innerCounter() {
  
    return ++count;
  }
  return innerCounter;
}

const counter = makeCounter();
//console.log(counter());
counter();
counter();
//console.log(counter());

function createMultiplier(mult) {
  function multiplyNum(num) {
    return num * mult;
  }
  return multiplyNum;
}

const multiplyBy5 = createMultiplier(5);
const result = multiplyBy5(9);
//console.log(result);

const add = (a, b) => a + b;

function createLimitedFunc(func, maxCalls) {
  function limitedFunc(a, b) {
    if (--maxCalls >=0){
    return func(a, b);
    }
  }
  return limitedFunc;
}
const add3TimesOnly = createLimitedFunc(add, 3);

// console.log(add3TimesOnly(10, 32));
// console.log(add3TimesOnly(4, 20));
// console.log(add3TimesOnly(50, 100));
// console.log(add3TimesOnly(34, 17));

function factorial(n){
  let total = 1;
  for ( n ; n >1 ; n--){
     total = total * n;

  };
 // console.log (total);
  return total;
};


factorial(5);

function recursiveFactorial (n) {
  if (n===1) 
    {
      return n;}
  return n*recursiveFactorial(n-1) ;
};
// console.log(recursiveFactorial(4));

 function countLength(str) {
  if (str === '') return 0;
  return 1 + countLength(str.slice(1));
}
//console.log(countLength('hello'));

//console.log('mans'.length);

function reverseString(str){
  if (str.length < 2) return str;
 return str.slice(-1)+reverseString(str.slice(0,-1));

};

//console.log(reverseString('hello how are you'));


//let  totalNested = 0;

//let  totalNested = 0;
function countNestedArrays(arr, value) {
  let  totalNested = 0;
 // console.log(totalNested);
  for (let i = 0; i < arr.length; i++) {
   // console.log(arr[i], value);
    
   // console.log('inner loop 1',total);
    if (Array.isArray(arr[i]) ===true) 
      {
        totalNested += 1+ countNestedArrays(arr[i],value);
       // console.log('inner loop',totalNested);
       
      };
      if (arr[i] === value) 
        {totalNested++;
         
        }
  
  }
 // console.log('outer loop',totalNested);
  return totalNested;
};

 //console.log('number of nested arr',countNestedArrays([1,2,[[3]],4],3));

 function countWhiteSpace(str) {
  if (str === '') return 0;
  return str[0] === ' '
    ? 1 + countWhiteSpace(str.slice(1))
    : countWhiteSpace(str.slice(1));
};
//console.log(countWhiteSpace('My name is mala kumari and i am a girl'));

function passedWhiteSpace(str, count = 0) {
  if (str === '') return count;
  if (str[0] === ' ') count++;
  return passedWhiteSpace(str.slice(1), count);
};

//console.log(passedWhiteSpace('My son name is Aditya'));

function helperWhiteSpace(str) {
  let count = 0;
  recursiveCount(str);
  return count;

  function recursiveCount(str) {
    if (str === '') return;
    if (str[0] === ' ') count++;
    return recursiveCount(str.slice(1));
  }
}

//console.log('helper count',helperWhiteSpace('aaaaa ffgg bhyy kkh ggh hhh yyy'));

function createUser(name) {
	const newUser = {};
	newUser.username = name;
	newUser.basket = [];
	newUser.addToBasket = function (item) {
		newUser.basket.push(item);
	};
	return newUser;
}

const izzisAccount = createUser("Izzi");
const anatsAccount = createUser("Anat"); 
//console.log(izzisAccount.addToBasket === anatsAccount.addToBasket); // FALSE
izzisAccount.addToBasket ('Apple');

anatsAccount.addToBasket('tomatoto');
anatsAccount.addToBasket('potato');
//console.log(izzisAccount);
//console.log(anatsAccount);

const changeName = (newName) => {
	this.name = newName;
};

function createAccount(name) {
	const newUser = {};
	newUser.name = name;
	newUser.changeName = changeName;
	return newUser;
}

const davidsAccount = createAccount("David");

davidsAccount.changeName("Tom");

//console.log(davidsAccount.name); //'David'
//console.log(this.name); //'Tom'

const accountPrototype = {
	checkBalance: function () {
   // console.log('this balance in check balance',this.balance);
		return `£${this.balance}`;
	},
	depositMoney: function (amount) {
   // console.log('amount', amount);
		this.balance += amount;
    return this.balance;
   // console.log('this balance',this.balance);
	},
};

const myAccount = () => {
	//object instantiation with prototype
	const account = Object.create(accountPrototype);
	// object decoration (adding the properties)
	account.balance = 0;
	//return the object
 // console.log('my account balance',account.balance);
	return account;
};

Object.getPrototypeOf(myAccount()); // { checkBalance: [Function], depositMoney: [Function] }

//console.log(accountPrototype);
//console.log(Object.getPrototypeOf(myAccount()) === accountPrototype); // true

//  console.log(myAccount().checkBalance()); // £0.00
//  console.log(myAccount().depositMoney(1.99));
// console.log(myAccount().checkBalance()); // £1.99
// console.log(myAccount());
// console.log(accountPrototype);


//console.log(myAccount().__proto__);
//console.log(myAccount().__proto__ === accountPrototype); // true

class Mammel {
  constructor (name, favourite_food){
    this.name = name;
    this.warmblooded = true;
    this.favourite_food = favourite_food;
  }
  eat() {
    return (`${this.name} has favourite food ${this.favourite_food}`);
  }
} 

const mouse = new Mammel();

const rat = new Mammel('squiker','bread');

//console.log('mouse',mouse);
//console.log('rat',rat);
//console.log(' rat eats ',rat.eat());

class Mammal {
	constructor(name, favouriteFood) {
		this._name = name;
		this._warmBlooded = true;
		this._favouriteFood = favouriteFood;
	}

	get favouriteFood() {
		return this._favouriteFood;
	}

	set favouriteFood(newFood) {
		this._favouriteFood = newFood;
	}
}

const me = new Mammal("human", "Weetabix");
//console.log(me.favouriteFood); // will return Weetabix

class Dogs extends Mammel {
  constructor (name, owner){
    super(name, 'doggy treat');
    this.owner = owner;
  }
  barks (){
    return (`${this.name} barks`);
  };
  whine (){
    return (`${this.name} misses his owner ${this.owner} a lot`);
  };
};

const otiss = new Dogs('otis','Joshep');
//console.log(otiss);
//console.log(otiss.eat());
//console.log(otiss.barks());
//console.log(otiss.whine());

class BigDog extends Dogs {
  barks(){
    return (`${this.name} is a big dog and it barks loudly`);
  }
}

const wolf = new BigDog ('wolfdog','Jackson');
//console.log(wolf);
//console.log(wolf.barks());
//console.log(wolf.whine());
//console.log(wolf.eat());

const createCounter = () => {
	const counter = {};
	counter._count = 0; // counter._count, please don't access this directly!
	// ...
	return counter;
};
const count_counter = createCounter();

//console.log(count_counter);

class TimeSheet {
	#hoursWorked = 8;
	#hourlyRate;
	#shiftLength = 8;

	constructor(name, hourlyRate) {
		this.name = name;
		this.#hourlyRate = hourlyRate;
	}

  getTotalHours() {
		return `${this.name} has worked ${this.#hoursWorked} hours.`;
	};
  get totalPay(){
    return `£${this.#hoursWorked * this.#hourlyRate}`
  }

  set shiftsWorked(numOfShifts ){
    this.#hoursWorked = this.#shiftLength * numOfShifts;
    
 };

};
const davidsTimeSheet = new TimeSheet("David", 9.9);

//console.log(davidsTimeSheet.name); // "David" - public field
//console.log(davidsTimeSheet.hoursWorked); // undefined - private field
//console.log(davidsTimeSheet.getTotalHours());
//console.log(davidsTimeSheet.totalPay);
davidsTimeSheet.shiftsWorked =4;
//console.log(davidsTimeSheet.hoursWorked);




 





module.exports = { copyArrayAndDoStuff , processUsers };








  
  