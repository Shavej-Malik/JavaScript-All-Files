//Arrays-> can store variable more than one

    // let arr = [1,2,3,4,5,6,7]
    // let arr2 = []
    // let arr3 = new Array()

//function on array:- 
    //[push]
    // let arr = [1,2,3,4]
    // arr.push(5,6,7)
    // console.log(arr)

    //[pop]->remove from last
    // let arr = [1,2,3,4]
    // arr.pop()
    // console.log(arr)

    //[shift]-> remove from starting
    // let arr = [1,2,3,4]
    // arr.shift()
    // console.log(arr)

    //[unshift]-> add in starting
    // let arr = [1,2,3,4]
    // arr.unshift(0)
    // console.log(arr)

    //[indexOf]-> help to getting index of any element in array
    // let arr = [1,2,3,4]
    // let arr2=arr.indexOf(3)
    // console.log(arr2)

    //[array-destructuring]-> can get out value from array
    // let arr = [1,2,3,4]
    // let [a,b] = arr
    // console.log(a,b)

    //[filter]->it can filter some value from arrays.Filter create new array
    // let arr = [1,2,3,4]
    // let arr2 = arr.filter(function(val){
    //     return val<3
    // })
    // console.log(arr2)

    //[spread operator]-> 1st arr cpoy into 2nd arr without refrence. if we chamges into 2nd arr then changes will not in 1st arr
    // let arr = [1,2,3,4]
    // let arr2 = [...arr]
    // arr2.push(5)
    // console.log(arr2)

//Iteration over array using ->[For loop , each loop(Apply only on array)]

    // let arr = [1,2,3,4]
    // for(let i=0;i<4;i++){
    //     console.log(arr[i])
    // }

    // let arr = [1,2,3,4]
    // arr.forEach(function(val){
    //     console.log(val)
    // })

//Object :- key:value pair

    // let obj={
    //     name:"Malik",
    //     age:21,
    //     email:"malik@gmail.com"
    // };
    // console.log(obj.name,obj.age,obj.email)
    // delete obj.name
    // console.log(obj.name,obj.age,obj.email)