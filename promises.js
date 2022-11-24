/*
    Promises in javascript is used to achieve the asynchronus nature.
    Since the javascrit is single threaded language, it executes line by line and won't stop for anything.
    To eleminate this nature and javascript to wait for some time to execute after some part of code we want, we can use promises.

*/

// simple promise

let promise = Promise.resolve('Hey I am Santosh! how are you doing?')
promise.then(data => {
    console.log('our data is', data )
})

/*
    we can see 
    our data is Hey I am Santosh! how are you doing?

*/

// let's create a promise that will be executed with delay of 2 seconds

let promise1 = new Promise((res, rej) => {
    setTimeout(() => {
        res('Promises are important during network calls')
    },2000)
})

promise1.then(data => {
    console.log('data is ', data)
}).catch(err => {
    console.log('error is ', err)
})

/*
    we can see
    after 2 seconds,   data is  Promises are important during network calls
*/


// let's solve some code snippets
// what is the order of execution of this code

console.log('before the promise starts');

let promise3 = new Promise((res, rej) => {
    setTimeout(() => {
        res('Delay of 2 seconds')
    },2000) 
})

console.log('after the promise starts');

promise3.then(data => {
    console.log(data)
})

console.log('after the promise ends');

/*
    before the promise starts
    after the promise starts
    after the promise ends
    // after 2 seconds it will print next line
    Delay of 2 seconds

    this is the concept of event loops in javascript.

    Event loopconcept is like,  if the javascript finds the line as synchronus, then it will start executing it, whenever it finds the
    asynchronus code, it will just shift that part to the heep memory or web API's and it will be processed there and javascript immidietly
    starts executing the next line and won't wait for anything, after all synchronus code exection is done,it asynchronus code in the heap memory
    accoring to their processing starts executing

    once we go to the reach the line 44, no asynchronus code is there so it executes the line no 44 and prints before the promise starts
    then it goes to line 46 and finds it as asynchronus code and shifts it to heap memory and starts its processing there
    after ot comes to the line 52 and its is synchronus and executes it and prints after the promise starts
    line 54 already in the processing state.
    it goes to the line 58 and its is synchronus and executes it and prints after the promise ends

    finally after all synchronus execution, it starts executing the asynchronus part of code accoring to its processing speed.




    console.log('before the promise starts');

    let promise3 = new Promise((res, rej) => {
        setTimeout(() => {
            res('Delay of 2 seconds')
        },0) 
    })

    console.log('after the promise starts');

    promise3.then(data => {
        console.log(data)
    })

    console.log('after the promise ends');



    even the code is like this, means the delay in promise is 0 seconds. so it has to executes immidietly, but we can see the same order of executon as above.

    before the promise starts
    after the promise starts
    after the promise ends
    Delay of 2 seconds

    since at line 87, javascript finds it as aasynchronus code, it will shift that part to heap memory and status executing next lines, so we will be 
    getting same order of execution as above problem.
*/

