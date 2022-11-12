var age = parseInt(userInput[0]); // string or number 
// age --> Tell Me whether below 10 or teenage or adult (20 - 35) or mid (35 - 50) or  oldage (50 - 75)

// 0 to 150 ---> 
// Test Case: 
// 75
// 1
// 150
// invalid values ---> -10 or 175 or 9999

if (age > 0 && age < 10) {
  console.log('Below 10');
} else if (age >= 10 && age < 20) {
  console.log("Teenage");
} else if (age >= 20 && age < 35) {
  console.log("Adult");
} else if (age >= 35 && age < 50) {
  console.log("Mid Age");
} else if (age >= 50 && age < 75) {
  console.log('Old Age');
} else if (age >= 75 && age < 150) {
  console.log('Very Old Age');
} else {
  console.log("Invalid Value")
}
//     for(var i = 0; i < 10; i++) {
//     console.log(i); // 
//   }

// var batchName = "B42WEENG"; // GNEEW24B
//   // length of the string ---> 
//   // 0 1 2 3 4 5 6 7
//   // B 4 2 W E E N G
//   var l = batchName.length;
//   for(var i = l-1; i >= 0; i-- ) {
//     console.log(batchName[i]);
//   }

var arr = ['B', '4', '2', 'W', 'E', 'E', 'N', 'G'];

console.log(arr.join(' ')); // B 4 2 W E E N G


// get values a, b, c of the quadratic equation
const line1Arr = userInput[0].split(' ');

//    0    1    2
// [ '1', '5', '6' ]

const a = parseInt(line1Arr[0]);
const b = parseInt(line1Arr[1]);
const c = parseInt(line1Arr[2]);

// X = {-b + √(b² - 4ac) } / 2a

const val1 = (-b + Math.sqrt((b * b) - (4 * a * c))) / (2 * a);

console.log(val1.toFixed(2));


// x = {-b-√(b² -4ac)} / 2a

const val2 = (-b - Math.sqrt((b * b) - (4 * a * c))) / (2 * a);

console.log(val2.toFixed(2));