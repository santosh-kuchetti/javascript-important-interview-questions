/*
    hoisting is very important concept in javascript

    Hoisting is the concept of putting all the declaration to the top of the current scope.

    lets see how it works with different scenarios


*/

// 1. Hoisting in case of Functions

test()
function test() {
    console.log('hey I am Santosh.. Good to see you here')
}

test()

/*
    we can see 
    hey I am Santosh.. Good to see you here
    hey I am Santosh.. Good to see you here

    it print two times

    in line no 14 we declare a function. but even if we call the function before it intialised, it executed.
    This is because of Hoisting.

    all the functions declared in the program are hoisted to the top of the code. we can access it anywhere from the code.

    and only named functions can be Hoisted to the top. but the anonymos functions that are given the reference to any variable can't be hoisted ans accessed before it's initialising

    wel()                      this will give the error like we can't access the function before initialising
    const wel = function(){
        console.log('hey welcome)
    }

    but the arrow functions won't be hoisted. this is very important.


*/


// 2. Hoisting in case of variables

//2.1   VAR

function varTest() {
    console.log('x is ', x)
    var x = 10;
    console.log('x is', x)
}

varTest()

/*
    we can see 
    x is  undefined
    x is 10

    the variables declared are hoisted to the top of the scope.
    and one more thing about the variables that are declared with var, can be accesed before its initialisation.
    since var is declared at line no 40, it will be hoisted to top of the block and initialised with undefined.
    since we can access the variables defined with var, at line no 39, we get undefined.

    since we initialise x with a value 10 at line no 40, from now on x = 10.
    so at line no 41, we get x as 10.

    
*/

// 2.2    LET
function letTest() {
    console.log('x is ', x)
    let x = 10;
    console.log('x is', x)
}

letTest()

/*
    we will get an error like 
    ReferenceError: Cannot access 'x' before initialization

    even though the variable x that is defined with let variable hoisted to the top, it can't be accesed before initialstion. it's not like var.
*/

// 2.3    CONST
function constTest() {
    console.log('x is ', x)
    const x = 10;
    console.log('x is', x)
}

constTest()

/*
    we will get an error like 
    ReferenceError: Cannot access 'x' before initialization

    even though the variable x that is defined with const variable hoisted to the top, it can't be accesed before initialstion. it's not like var.

    and one more thing about const is we can't just define the variable with const we must initialise it

    const x;  this is wrong statement. we must initialise a value to it when we are using const.

*/



//  let's see some code snippets so that we can understand the Hoisting much better

function varHoisting1() {
    var x = 10;
    var x;
    console.log('x is', x)
    var x = 14;
    console.log('x is', x)
}
varHoisting1()

/*
    if we see x is defined two times in the code. we may think its an error, but it's not when in case of var.

    variable with var can be defined any number of times, but it's recent value will be updated to it.

    var will be acted as global variable within the scope, we can define the variable any number of times the instance is sale in the scope 

    in line no 106, the variable x is initialised with value 10.
    but in line no 107, it is defined again but not initialised with any value. So the value remains 10 only. So we get at line no 108 as 10.

    but at line no 109, we initialise the value again as 14. So the recent value became 14. So we get the value 14 at line no 110.
    
*/


function varHoisting2() {
    var x = 1;
    {
        var x = 2;
        console.log('x is', x)
    }
    console.log('x is', x)
}
varHoisting2()

/*
    we get 
    x is 2
    x is 2

    since the var is of global scope, in line no 130 we initialise the variable x with value 1. 
    and since it has the global scope any where we initialise it, it has one instance only
    So, at line no 132, x is updated to 2.
    So we get x as 2 in line no 133 and 135.

*/

function letHoisting2() {
    let x = 1;
    {
        let x = 2;
        console.log('x is', x)
    }
    console.log('x is', x)
}
letHoisting2()

/*
    we get 
    x is 2
    x is 1

    observe the difference between the two scenarios of above code and this

    there var is of global scope, means within the whole function scope, var has single instance

    but the variables defined with the let has the local scopes
    for the variable x that is defined in the line no 152, it has the function scope and it has ites local scope,
    but for the variable x that is defined in the line no 154, it has the scope in between 153 to 156. both are different instances.

    so at line no 155, we get x as 2
    and at line no 157 we get x as 1
*/
/*
    function letHoisting2() {
        let x = 1;

        let x = 2;
        console.log('x is', x)

        console.log('x is', x)
    }
    letHoisting2()

    this scenario is different again 
    we will get an error here, like we can't re- declare the same variable using 'let' within the same local scope.

*/

var cost = 10;
function getCost() {
    if (cost == undefined) {
        var cost = 6;
        return cost;
    } else {
        return 10
    }
}

console.log('cost is ', getCost())

/*
    we will get 
    cost is 6.

    its quite surprising when we tackle this question for the first time.

    most of people may think like the cost will be 10, but it's not

    in line no 193, we initialise the variable cost with the value 10. 
    whenever we enter into the function, now any variable that is defined has to check first in the function scope.
    the priority will be the function scope. If the variable is not present in the local scope, then we will go for global scope.
    
    in line 196, var cost is defined so it will be hoisted to the top of it's local scope and assigned with undefined since it is var.

    So when when we check condition at line no 195, it checks the it's local scope first whether the variable cost is there are not
    and its there since the line no 196 cost variable is hoisted to the top of the scope. and its value is undefined at first. so the condition is true.
    so we will return cost as 6.

*/