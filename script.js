const { Api } = require("@mui/icons-material");

// 1 - about arguments
function getUserId(...args) { // here we are using rest operator. IT will catch the list of elements in an array. Now args is [10]. These arguments are arrays but not the actual arrays. All functions are not allowed for it such as push, pop etc,. length property is there we can use for this args array 
    console.log(typeof args); // typeof [10]. typeof array in javascript is 'object'.
}

getUserId(10);
// 1. String 2. Number 3. object 4. NaN
/*
    The answer to this question is "object"

*/


// 2 - about object cloning
var Employee = {
    company: 'xyz',
    
}
var emp1 = Object.create(Employee);  // by using Object.create we are cloning the Employee object into the emp1
emp1.age = 21;
delete emp1.company;   // we are trying to remove company property from the emp1 object. But we can't remove the company property of emp1. from prototype inheritence we got the property 
console.log(emp1.company);
/*
    when we console the company property of emp1 object, we should get "undefined".
    But we will get "xyz".
    Because company property is not a direct property of emp1.
    emp1 got company property from the Employee prototype property
    thats's the reason even after we delete the company property, we can access it.
*/
console.log(emp1.hasOwnProperty('company'));  // false
/*
    company property is not a direct property of emp1.
    emp1 got company property from the Employee prototype property
    so it return false
*/
console.log(emp1.hasOwnProperty('age'));  // true
/*
    since we are explicitly putting the "age" property in the emp1 object
    age is emp1's own property.
    so it return true
*/


// 3 - about "this" in object
var myObject = {
    foo: 'bar',
    func: function(){
        var self = this; // this refers to myObject
        console.log("outer func: this.foo = " + this.foo);  // this.foo here means "myObject.foo". So it gives 'bar'.
        console.log("outer func: self.foo = " + self.foo);  // self.foo here means "myObject.foo" beacause self is refering to myObject. So it gives 'bar'.
        (function () {   // it is a function inside a function where this function is called by itself.
            console.log("inner func: this.foo = " + this.foo);  // "undefined". 'this' is no longer pointing to myObject. So, we are unable to access the foo. 'this' has no access to main object inside the another function
            console.log("inner func: self.foo = " + self.foo);  // since 'self' is a var variable, and var is a function scope, self can be accesable within the inner function also
        }()) // calling itself. it's a self calling function.
    }
}
myObject.func();


// 4 - about var and let
for (var i = 0; i < 5; i++){   // we are having a for loop where we are looping through this for loop for 5 times
    var btn = document.createElement('button');  // we are creating the button
    btn.appendChild(document.createTextNode('Button ' + i));  // we create the button with the text "Button" and "i" value
    btn.addEventListener('click', function () {   // adding an eventlistner to it so that when we click on it,  
        console.log(i)
    })
    document.body.appendChild(btn)  // appending that to the component
} 

/*
    it shows up 5 buttons like
    Button 0,Button 1,Button 2,Button 3,Button 4
    since we are using var to the variable i, it's a function scope and a global variable within function.
    once we create all the buttons, the i value is 5.
    So, whenever we click on any of the button, we will get the value 5 in the console.

*/

/*
    to rectify this issue, we can use let instead of var.
    var is a function scope and let is a block scope.
    var acts like a global variable but let is a block scope and it means it's a unique variable in every iteration.
    by this we can achieve it.
    on clicking Button 2, we will get 2 in the console.
    on clicking Button 3, we will get 3 in the console.
    on clicking Button 4, we will get 4 in the console.

*/



// CALLBACKS

/*
    callbacks are super usefull in writing asynchronus code in javascript

    ther are major isuues also while using Callbacks
    1. Callback Hell
    2. Inversion of control
*/

// we know javascript is single threaded synchronus language. It won't wait for anything. it simply executes the code.

console.log('hey Santosh')
console.log('how are you doing')
console.log('buddy..?')

/*
    it simply executes the three lines and we will get as

    hey Santosh'
    how are you doing
    buddy..?
*/

// 1. CALLBACK


// what if we want to wait for something lets say we want to execute 'how are you doing'  after 5 seconds. now here comes the use of callbacks

// we will write a callback function and wrap it in the settimeout.

console.log('hey Santosh')

setTimeout(
    function () {   // we wrote a callback function and we wrapped it in the setTimeout function. Now its the job of the setTimeout to execute the function after 5sec.
        console.log('how are you doing')   
    },5000
)

console.log('buddy..?')


/*
    the result will be like,
    hey Santosh
    buddy..?
    how are you doing  -> this will print after 5sec
 */


// so using a callback we can achieve asynchoronus thing in javascript.

/*
    So we can have a piece of code in function and pass it as a callback which can be executed in later point of time.
    By this way, using callback, we can achieve the asynchronus behaviour in javascript.
    Asynchronus is nothing but waiting for something.
*/

/*
    lwt say we have a E-commerce website, in it we create an order and proceed to payments.
    lets say we have an access to the two  backend APIs. 
    api.createOrder()
    api.proceedToPayment()

    In this case after we create order only we will be proceeding to the proceedToPayment. So in this case callback will be usefull.

    we will keep api.proceedToPayment() in a function and we will call it in the api.createOrder()

*/

const cart = ['shoes', 'shirts', 'watches'];
api.createOrder(cart, function () {
    api.proceedToPayment()
})

/*
    what this do is api.createOrder() will create the order first and then it is the responsibility of createOrder API to call the callback function
*/


/*
    Now lets say after the proceedToPayment operation, we have to show the order summary.
    lets say we have a api called api.showOrderSummary().
    it is also dependendent on api.proceedToPayment(). beacause after payment done, we have to show the summary. So we can keep it in a function and make it as a callback function in the api.proceedToPayment()
*/

api.createOrder(cart, function () {
    api.proceedToPayment(function () {
        api.showOrderSummary()
    })
})

/* now its the responsibility of the proceedToPayment API to complete the payment and call the function back so that we can execute  showOrderSummary api.
    this is how we will manage the apis depending on each other.

*/

/*
    We can observe a important issue in this process which is CALLBACK HELL
    in large codebase, when apis are dependent on one after the other, we will be fall into this callback hell.

    What is this CALLBACK HELL..?

    it means one back inside another call it has another callbackinside and it contains another callback inside and it repeats.

    This type of code is not managable and readable.
*/



// 2. INVERSION OF CONTROL

/*
    inversion of control means loosing control over our code.
    let's see how it happens.
*/

api.createOrder(cart, function () {
    api.proceedToPayment()
})

/*
    whats happening in this code is, we are creating an order and we are passing the callback function to the createOrder api. we are simply believing that 
    createOrderAPI will call back the function.
    This is dangerous.

    beacause we simply give the function callback and expecting createOrder api to call our function back.
    what if createOrder api is in another server?, what if it don't call back the proceedToPayment api?, what if it has bugs in it?,
    what if it calls the proceedToPayment function twice?

    beacause we don't know what is happeing in the createOrder api.
    we simply giving our function callback to the createOrder api. means we are giving our piece of code which is in the function to some other api. which is very Risky and not recommended.
    
    So, this is the isuue of Inversion of control.

    we can get rid of it by using promises

*/