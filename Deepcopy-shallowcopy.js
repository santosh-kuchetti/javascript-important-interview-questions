// Deep Copy vs Shallow Copy

// DEEP COPY

let x = 10;
console.log('x is ',x)
let y = x;
y = 6;

console.log('y is ', y)

/*
    what is happening here is,
    in line no 5, variable x is initialised. So compiler allocates the memory location to the x and stores the value 10 in that memory location.
    in the line no 7, variable y is initialised with the value of x. So compiler allocates a new memory location to the y and stores the value x in that memory location.

    So x and y are stored in different memory locations. whenever we change the value of y, there won't any effect to the value of x.

    This is Deep Copy. So, deep copy means, after copying the values, there is no connection between the variables this is Deep copy

    And only on Premitive data types only we can make deep copy. such as

    Number
    String
    Boolean


*/

// SHALLOW COPY

let arr1 = [1, 2, 3, 4]
console.log(arr1)

let arr2 = arr1;

arr2.push(5)
console.log(arr1)
console.log(arr2)

/*
    what is happening here is,
    in line no 32 we variable arr1 is initialised with an array. Compiler allocates a new memory location to the variable arr1 and stores the [1,2,3,4] in that location
    and in line line no 35, we copied the value of 'arr1' into a new variable 'arr2'. 
    What happens here is these reference to the same location. since array is non-primitive data type. so 'arr2' also reference to the same memory location that 'arr1' is stored

    since arr1 and arr2 refering to the same memory location, which ever changes, both are effected.

    this is Shallow Copy. 
    So shallow copy means after the coping the values to other, since they refer to same memory location, so they have connection between them, whoever changes, both will be changed and effected.


*/

// now lets work on some code snippets

// make a deep copy for this

// qustion 1
/*
    function test1() {
        let arr1 = [1, 2, 3, 4];
        let arr2 = arr1;
        arr2.push(5);
        console.log(arr1);
        console.log(arr2);
    }
    test1()

*/
/*
    this is a scenario of shallow copy.
    Now what is happening here is,
    'arr1' is initialised with 'array' and 'arr2' is initialised with 'arr1' value. Since those are arrays, both are pointing to the same memory locaion
    So, which ever changes, both will be changed.

*/
//solution 1
function test1() {
    let arr1 = [1, 2, 3, 4];
    let arr2 = [...arr1];          // now the scenario is changed.  before it is refering to the same location. now it's not. we just spread the 'arr1' into a new array. Now its new array and new memory location. if 'arr2' changes, itonly effect 'arr2' but not 'arr1'
    arr2.push(5);                  // it won't effect the arr1. arr2 = [1,2,3,4,5] and arr1 = [1,2,3,4]
    arr1.push(6)                   // it won't effect the arr2. arr1 = [1,2,3,4,6] and arr2 = [1,2,3,4,5].
    console.log(arr1);
    console.log(arr2);
}
test1()


// make a Deep copy for this

// question 2
/*
    function test2() {
        let user1 = {
            name: 'Santosh',
            age: 22
        }

        let user2 = user1;
        user2.name = 'Devi'
        console.log('user1 is', user1)
        console.log('user2 is', user2)
    }
    test2()

*/

/* 
    this is similar to above question. 
    objects also references to same locations if copied. So its a shallow copy scenario
    we can do same thing like spreading
*/

// solution 2

function test2() {
    let user1 = {
        name: 'Santosh',
        age: 22
    }

    let user2 = {...user1};           // by spreading we are referencing to the same memory location of 'user1', we are just using its values and new memory location is created by this
    user2.name = 'Devi'
    console.log('user1 is', user1)    // user1 is { name: 'Santosh', age: 22 }
    console.log('user2 is', user2)    // user2 is { name: 'Devi', age: 22 }
}
test2()


// make a deep copy of this

// question 3

/*
    function test3() {
        let user1 = {
            name: 'Santosh',
            age: 22,
            location: {
                city: 'Srikakulam',
                state: 'Andra Pradesh'
            }
        }
        let user2 = user1;
        user2.location.city = 'Vizag'
        console.log(user1);
        console.log(user2);
    }
    test3()

*/

/* 
    this is similar to above question. 
    objects also references to same locations if copied. So its a shallow copy scenario
    
*/

/*
    spreading works but not to total object, if we spread the 'user1', it will be effected toonly not nested part,
     if we change the not nested part, then both won't be effected.
     But if we change the nested part in any of the 'user1' or 'user2', then both will be effected.

     So,to this case we shuold stringify it first and parse it back to object then everythimg works good for deep copy.

*/

//solution 3

function test3() {
    let user1 = {
        name: 'Santosh',
        age: 22,
        location: {
            city: 'Srikakulam',
            state: 'Andra Pradesh'
        }
    }
    let user2 = JSON.parse(JSON.stringify(user1))    // JSON.stringify(user1) will convert object into the string. and JSON.parse() will conver that string into object and we are not pointing to the same memory location.
    user2.location.city = 'Vizag'              // only user2.location.city will be changed but not user1.location.city
    console.log(user1);
    console.log(user2);
}
test3()