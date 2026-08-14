//print hello with the help of function

    // function sayHello(){
    //     console.log("Hello JavaScript")
    // }
    // sayHello()

//crate a function add(a,b) return and print sum

    // function add(a,b){
    //     return a+b
    // }
    // console.log(add(2,5))

//write a function with a default parameter name ="Guest" that prints "Hi <name>"

    // function guest(name="Guest"){
    //     console.log(`Hi ${name}`)
    // }
    // guest("Friends")

//use rest parameters to make a functon that adds unlimted values

    // function add(...num){
    //     let sum=0
    //     num.forEach(function(val){
    //         sum +=val
    //     })
    //     console.log(sum)
    // }  
    // add(1,2,3)

//create an IIFE thats print "I run instantly!"

    // (function(){
    //     console.log("I run instantly!")
    // })()

//create an array of 5 fruits. Add one at the end and remove from the beginning

    // let arr = ["Banana","Litchi","Guava","Apple","Grapes"]
    // arr.push("Pine Apple")
    // arr.shift()
    // arr.unshift("Mango")
    // console.log(arr)

//use a for loop to print all element of an array

    // let arr = [1,2,3,4,5,6,7,8,9]
    // for(let i=0;i<arr.length;i++){
    //     console.log(arr[i])
    // }

//Create an object person with keys name,age,city and print each key's value

    // let obj = {
    //     name:"Malik",
    //     age:21,
    //     city:"Saharanpur",
    // }
    // for(let key in obj){
    //     // console.log(key)
    //     console.log(obj[key])
    // }

//use setTimeour() to log "Time's up!" after 2 second

    setTimeout(function(){
        console.log("Time's up!")
    },2000)