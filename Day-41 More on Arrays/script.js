//write a HOF run twice that takes another function and executes it ttwo times

    // function runTwice(fn){
    //     fn()
    //     fn()
    // }
    // runTwice(function(){
    //     console.log("Hello")
    // })

//Destructuring in function

    // function abc({name,age}){
    //     console.log(name,age)
    // }
    // abc({name:"Malik", age:21})

//this keyword -> this is dynamic. Value can change of this keyword

    //console.log(this) //Window

    // function abc(){
    //     console.log(this)//Window
    // }
    // abc()

    // let obj = {
    //     name:"Malik",
    //     fnc:function(){
    //         console.log(this)//obj
    //     }
    // }
    // obj.fnc()

//given an array of numbers, use map() to create a new array where each number is squared

    // let arr = [2,3,4,5]
    // arr.map(function(val){//map() ka main purpose new array banana hota hai.
    //     console.log(val*val)
    // })

//use filter() to get even number form an array

    // let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    // let arr2 = arr.filter(function(val){
    //     return val%2===0
    // })
    // console.log(arr2)

//use reduce() to find the total salary from an array of number [1000,2000,3000]

    // let arr = [1000, 2000, 3000]
    // let arr2 = arr.reduce(function(acc, val){
    //     return acc+val
    // },0)
    // console.log(arr2)

//create an array of names and use some() and every() to test a condition (e.g all names longer than 3 character)

    // [some()]-> if anyone value matched then return true
    // let arr = ["Malik","Ritik","ali","Vishal","Kahif","Ma"]
    // let arr2 = arr.some(function(val){
    //     return val.length>3
    // })
    // console.log(arr2)

    //[every()]-> if all value matched then return true
    // let arr = ["Malik","Ritik","ali","Vishal","Kahif","Maa"]
    // let arr2 = arr.every(function(val){
    //     return val.length>=3
    // })
    // console.log(arr2)

// create an object user and test the behaviour of object freeze() and object.seal() by adding/changing keys

    let user = {
        name:"Malik",
        age:21,
        email:"malik@gmail.com"
    }
    // user.age=57//age changed
    Object.freeze(user)//now we cannot change any value  of user object
    user.age=57