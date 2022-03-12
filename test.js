const arr = ["a", "b", "c", "d", "f", "g"]


// console.log(arr.length);


for (let a = 0; a < arr.length - 1 ; a += 1) {
  
  number = arr[a].charCodeAt()
  result = arr[a+1].charCodeAt()

  if (number + 1 != result){
    x = number + 1 ;
    console.log(String.fromCharCode(x));
  }
}