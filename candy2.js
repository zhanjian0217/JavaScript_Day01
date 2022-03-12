// # 程式語言：JavaScript

// # 題目：寫一小段程式，印出陣列裡缺的字

// # 範例：

// ["a", "b", "c", "d", "f", "g"] 印出 e
// ["O","Q","R","S"] 印出 P

// # 提示：

const arr = ["a", "b", "c", "d", "f", "g"]




for (let a = 0; a < arr.length - 1; a += 1) {
  number = arr[a].charCodeAt()
  if (number + 1 != arr[a+1].charCodeAt()){
    x = number + 1 ;
    console.log(String.fromCharCode(x));
  }
}








// console.log(s.charCodeAt(0));
