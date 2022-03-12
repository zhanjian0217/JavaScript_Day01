var a = 1;
var b = a;

console.log(b);

b = 2;

console.log(b);
console.log(a);
////////////////////////////////////////////////////////////////////////////////


var age;
console.log(age);



//////////////////////////////////////////////////////////////////////
var hi;
console.log(hi);
console.log(hello);

console.log(age);
var age = 123;
console.log(age);
// 這叫變數提升 Variable Hoisting ------> undefined

console.log(age); //var let 很像都是宣告     只是 let 不會做常數提升
let age = 123;
console.log(age);

const age = ["a", "b", "c"]; // 常數希望你定了就不要改 ，常數變數（常變數） 看成 “常數 ”
// 不是不能改，是常數不能 re-assign 不能重新指定成新的變數新的東西
age[0] = "x"; // 可以在同樣的容器裡面做變換
age.push("z"); //新增到array     // 新增也可以 因為是在同一個容器
console.log(age);




////////////////////////////////////////////////////////////////////////////////
console.log(typeof 123);
console.log(typeof "123");
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof []);
console.log(typeof symbol(hello)); // "symbol"
console.log(typeof null); //印出 “object”!!!
console.log(typeof typeof 123); // string 後面的 typeof 123 = "number" 字串
//array
//          判斷物件型別



////////////////////////////////////////////////////////////////////////////////
let a = 1;

// a = a + 1
// a += 1
a++;

console.log(a);

let a = 1;

//a++
//++a  先後順序

console.log(a++); //先印出a 之後自己在做運算 變成 2

console.log(a); //所以這邊印出 a 會印出 2




////////////////////////////////////////////////////////////////////////////////



let username = "weian";

console.log("my name is " + username + ",and I am 25 years old");

console.log(`my name is ${username},and I am 25 years old`);
//字串的串接 





//////////////////////////////////////////////////////////////////////////////////////////

let a = 123;
let b = String(123);
let c = Number("456");
let d = Boolean(-1);

let x = Number("ccc");

console.log(typeof x); //number
console.log(x); //// NaN = Not a Number
//轉換型別


////////////////////////////////////////////////////////////////////////////////
let age = 20;

if (age >= 18) {
  console.log("已成年");
} else {
  console.log("未成年");
}

// 底下這行的效果等同上面五行

age >= 18 ? console.log("已成年") : console.log("未成年"); //三元運算子





////////////////////////////////////////////////////////////////////////////////
var age = 10;

if (age > 18) {
  console.log("已成年");
} else if (age >= 12 && age < 18) {
  console.log("青少年");
} else {
  console.log("小朋友");
}







//////////////////////////////////////////////////////////////////////
let gender = 100;

switch (gender) {
  case 1:
    console.log("men");
    break;

  case 2:
    console.log("girl");
    break;

  default:
    console.log("不想說");
    break;
}

0 / undefined / null / 空字串 / NaN;












///////////////////////////////////////////

let year = prompt("請輸入年份");

// == -> !=
// === -> !==

// === 用三個等於，做明確判斷
if (year == null) {
  console.log("請輸入年份");
} else {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("閏年");
  } else {
    console.log("平年");
  }
}
///////////////////////////////////////////////////

for (var a = 1; a <= 10; a = a + 1 ) {
  console.log(a);
}


// 印出 1 ~ 10





///////////////////////////////////////////////////////////////
for (var a = 1; a <= 10; a += 2 ) {
  console.log(a);
}





// for (var a = 0 ; a < 10 ;  a += 2) {
//   console.log('*'.repeat(a + 1));
// }


// 印出 1 ~ 10 的單數














// && => AND
// || => OR
// !  => NOT






// alert("Hello")  （ 單行註解

/*

多行註解

*/
