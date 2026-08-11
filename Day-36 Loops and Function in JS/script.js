//Ask 5 number from user. count hhow many are number is positive
    // let count = 0
    // for(let i=1;i<=5;i++){
    //     let user = +prompt("Enter your Number")
    //     if(user>0){
    //         count++
    //     }
    // }
    // console.log(`Total Positive number -> ${count}`)

//do..while Loop -> Always run ones time (Never use)
//  do{
//     console.log("Hello Friends")
//  }while(12>13)

//  let i=1
//  do{
//     console.log(i)
//     i++
//  }while(i<=10)


//Recursion -> calling self 
    // function abcd(n){
    //     if(n===0) return
    //     console.log(n)
    //     abcd(n-1)
    // }
    // abcd(10)

//Function in JavaScript -> code will not run automatically. code will run when we call,that is called function
//we can run that code unlimited time

    // function num(){
    //     for(let i=1;i<=20;i++){
    //         console.log(i)
    //     }
    // }
    // num()
    // num()

    // function doSomething(name,age,email){//That is called Parameter
    //     // console.log(name,age,email)  
    //     console.log(arguments)//we can access argument without (name,age,email)write in parameter with the help of arguments  
    // }
    // doSomething("Malik",21,"Malik@gmail.com") //That is called Argument

//we cannot do this
    // a(); //Cannot access 'a' before initialization
    // let a = function(){
    //     console.log("Hello")
    // }
//we can do this
    // a();//✅
    // function a(){
    //     console.log("Hello")
    // }
