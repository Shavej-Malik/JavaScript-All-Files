// 1.arithmetic Operators -> + - * / % **(power)
// 2.assignment Operators -> = += -= *= /= %= 
//   example -> let a = 12 // value of a is 12
// 3.comaprison Operator -> == === != !== > < >= <=
//  - == -> not strict compare //never use this 
//   example -> 12=='12' // true
//  - === -> strict compare // always use this
//   example -> 12==='12' // false
//  - != -> never use this
//   example -> 12 != '12' //false
//  - !== -> always use this
//   example -> 12 !== '12' //true
// 4.Logical Operator -> && || ! //copare Left and Right Side
//  - true && true -> true
//  - false && true -> false
//  - true && false -> false
//  - false && false -> false   
//  - true || true -> true
//  - false || true -> true
//  - true || false -> true
//  - false || false -> false   
//  - !(not) true -> false   false -> true
// 5.Ternary Operation -> condition ? do This : do That
//  - 12>13?console.log("True"):console.log("False")
// 6. Type Cehcking -> I.typeof II.instanceof
// 7.String operator -> + (adding to string)
//  - console.log("Shavej "+"Malik")
// 8.Spread / Rest Operator 
//  - spread -> used in array and object
//  let arr=[1,2,3,4,5]
//  let arr2=[...arr]//here will not come reference of arr. Copy will make into arr2 of arr bu when we will change into arr2 then changes will not do into arr2
//  - rest -> used in function
//  function abc(...arg){
//     // all will come in once time to using rest operator
//  }
//  abc(1,2,3,4,5,6)
//  9.Nullish Coalescing operator -> ?? if first value is null then jump onto second value
//  - null ?? console.log("Sorry")
//  10.Optional Chaining -> ?. use to keep safe from error

// Hoisting -> we can use variable before declerarion 
//  - console.log(b)
//    let b=10;

//  12<13?console.log("True"):console.log("False") //ternary oprator

//  console.log("Shavej "+"Malik")// add string

//12>13 ?? console.log("Sorry") // output -> false// nullish
//null ?? console.log("Sorry")//output -> Sorry //nullish

//Hoisting -> we can use variable before declerarion 
   console.log(b) //output -> undefined
   var b=10;
// variable break inti two part in hoisting
   var b=10; 
   var b;//declaration. This goes top of the file
   b=10;//initialization. This present here