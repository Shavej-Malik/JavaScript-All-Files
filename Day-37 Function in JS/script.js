//Function give us control of on our code to run. you can run your code with your choice.help to reuse code 
    // function pizza(){
    //     console.log("🍕")
    // }
//parameter and arguments
    // function abc(name,age){//here name and age is parameters

    // }
    // abc("Malik",21)//here name and age is arguments
//Rest parameters -> many arguments can accept at once time
    // function abc(a,b,...c){//here a=1,b=2,c=3,4,5,6 <- c is array
    //     console.log(a,b,c)
    // }
    // abc(1,2,3,4,5,6)
//hoisting -> we can use before declaration
    // console.log(a)//error will not come with var variable
    // var a=12
//function hoisting valid ✅
    // abc()
    // function abc(){
    //     console.log("Malik")
    // }
//variable hoisting valid ❌
    // abc()
    // var abc = ()=>{
    //     console.log("Malik")
    // }
//Paramters in JS-> [required, destructured, rest, default]
    // function abc(a,b,c){//here value of a,b,c are "required"
    //     console.log(a,b,c)
    // }
    // abc()

    // function abc({name, age}){//here "name"&"age" are in "destructured" form
    //     console.log(name,age)
    // }
    // abc({name:"Malik", age:21})

    // function abc(...val){//using "rest" operator and store arguments in an array
    //     console.log(val)
    // }
    // abc(1,2,3,4,5,6,7)

    // function abc(a=0, b=0,c=0){//we can set "default" value in parametrs
    //     console.log(a,b,c)
    // }
    // abc(1,2)
//Arguments in JS-> [positional, default, spread]
    // function abc(a,b,c,d){//here value store in order thats called "positional"
    //     console.log(a,b,c,d)
    // }
    // abc(1,2,null,4)

    // function abc(a,b,c,d){// "...arr" is spread 
    //     console.log(a,b,c,d)
    // }
    // var arr = [1,2,3,4]
    // abc(...arr)//all element goes in parameters in one time
//nested function
    // function abc(){
    //     function def(){//nested function
    //         console.log("def run")
    //     }
    //     def()
    // }
    // abc()

//scope chain 

    // function abc(){
    //     let a = 20 //this varible can use anywhere only in function
    // }

//(IIFE)-> Immidiately Invoked Function Expression

    // (function(){

    // })();

//Fat arrow function 

    // let fnc = ()=>{
    //     console.log("Malik")
    // }
    // fnc()

//HOF-> Higher order function => that function return function or accept a function

    // function abc(){
    //     return function (){

    //     }
    // }

    function abc(a){//"a" accepting a function

    }
    abc(function (){//this function called "Callback"

    })
