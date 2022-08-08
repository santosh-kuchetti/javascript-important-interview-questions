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


// 4 - about 
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