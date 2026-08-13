//Global scope and Function scope

    // let a = 20;// this is global scope. can use anywhere
    // function abc(){
    //     let b = 89 // this is function scope. can use anywhere in function only 
    // }

//closure -> A closure is when an inner function remembers and can access variables from its outer function, even after the outer function has finished executing.

    function abc(){
        let a = 10
        return function(){
            console.log(a)
        }
    }
    abc()

    //A closure is also a HOF