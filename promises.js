/*
    Promises in javascript is used to achieve the asynchronus nature.
    Since the javascrit is single threaded language, it executes line by line and won't stop for anything.
    To eleminate this nature and javascript to wait for some time to execute after some part of code we want, we can use promises.

*/

//Problem 1

// simple promise

let promise = Promise.resolve("Hey I am Santosh! how are you doing?");
promise.then((data) => {
  console.log("our data is", data);
});

/*
    we can see 
    our data is Hey I am Santosh! how are you doing?

*/

//Problem 2

// let's create a promise that will be executed with delay of 2 seconds

let promise1 = new Promise((res, rej) => {
  setTimeout(() => {
    res("Promises are important during network calls");
  }, 2000);
});

promise1
  .then((data) => {
    console.log("data is ", data);
  })
  .catch((err) => {
    console.log("error is ", err);
  });

/*
    we can see
    after 2 seconds,   data is  Promises are important during network calls
*/

// Problem 3

// let's solve some code snippets
// what is the order of execution of this code

console.log("before the promise starts");

let promise3 = new Promise((res, rej) => {
  setTimeout(() => {
    res("Delay of 2 seconds");
  }, 2000);
});

console.log("after the promise starts");

promise3.then((data) => {
  console.log(data);
});

console.log("after the promise ends");

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

    once we go to the reach the line 51, no asynchronus code is there so it executes the line no 51 and prints before the promise starts
    then it goes to line 53 and finds it as asynchronus code and shifts it to heap memory and starts its processing there
    after ot comes to the line 59 and its is synchronus and executes it and prints after the promise starts
    line 61 already in the processing state.
    it goes to the line 65 and its is synchronus and executes it and prints after the promise ends

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

// Problem 4

// what is the order of execution of this code

console.log("before");

const promise4 = new Promise((res, rej) => {
  console.log("inside");
  res("Nice to have you");
});

promise4
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

console.log("after");

/*
    consoles as,

    before
    inside
    after
    Nice to have you


    we feel like since line 128 is asynchronus, 'after' will be printed after 'before'. but not, even though the it encounters the async code,
     whatever the synchronus code it has inside will execute first, then it will go for next part.

     So, in this case, since line 129 is synchronus code, we will print this after 'before'.
     after that we will go for line 139, and print 'after'. after that the async code executes and promise resolves and "nice to have you" prints
*/

// Problem 5

// what is the order of execution of this code

console.log("before");

const promise5 = new Promise((res, rej) => {
  console.log("inside first");
  res("Nice to have you");
  console.log("inside second");
});

promise5
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

console.log("after");

/*
    consoles as,

    before
    inside first
    inside second
    after
    Nice to have you


    we feel like since line 128 is asynchronus, 'after' will be printed after 'inside first'. but not, even though the it encounters the async code,
     whatever the synchronus code it hasinside will execute first, then it will go for next part.

     So, in this case, since line 129 is synchronus code, we will print this after 'before'.
     after that we will execute whole synchronus code inside it, so we will print 'inside second' next, and print 'after'. after that the async code executes and promise resolves and "nice to have you" prints
*/

// Problem 6

// what is the order of execution of this code

console.log("start");

const fn = () => {
  new Promise((res, rej) => {
    console.log("inside");
    res("Nice to have you");
  });
};
console.log("middle");

fn()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

console.log("end");

/*
    start
    middle
    inside
    end
    Nice to have you


    since the fun is called at line 211, nothind inside fn function executes.
    So, after 'start', "middle" will prints and after that, fn function called, so line 205 is synchronus, "inside" will prints, 
    206 is async, so it will go for line 217, and prints "end" after that it executes async code, ad prints "Nice to have you"

*/

// Problem 7

// promise chaining

const job = () => {
  new Promise((res, rej) => {
    rej();
  });
};

const promise7 = job();

promise7
  .then(function () {
    console.log("success 1");
  })
  .then(function () {
    console.log("success 2");
  })
  .then(function () {
    console.log("success 3");
  })
  .catch(function () {
    console.log("error 1");
  })
  .then(function () {
    console.log("success 4");
  });

/*
    promise chaining is the concept that will be helpfull from callback hell

    now it will console like 

    error 1
    success 4

    job function returns a promise, that is it is rejected

    promise7 is now having a rejected promise

    since it is rejected, it will not go to the line 248,since not 248, will not go for 251, since not 251, it will not go for 254.
    since it is promise8 is rejected, it will go for catch and consoles "error 1". Since it is not returning anything, it will go to 260,
    and consoles "success 4"


*/

// Problem 8

// promise chaining

const job1 = (state) => {
  return new Promise(function (res, rej) {
    if (state) {
      res("success");
    } else {
      rej("error");
    }
  });
};

const promise8 = job1(true);

promise8
  .then(function (data) {
    console.log(data);
    return job1(false);
  })
  .catch(function (error) {
    console.log(error);
    return "Error caught";
  })
  .then(function (data) {
    console.log(data);
    return job1(true);
  })
  .catch(function (error) {
    console.log(error);
  });

/*
    it consoles as 

    success
    error
    Error caught

    297, since we pass state as true, job1 will return success promise. Since the promise is success, it goes to line 300 and prints "success".
    and in line 302 we are calling job1 again and now we are passing state as false, so it will return reject promise.
    So, it will go to line 304, and prints "error". Then in line 306, we are returning "Error caught". That means we are returning a string. So it will consider as success but not a failed promise.
    so, we will go next and in line 309, we prints "Error caught". in line 310, we are calling again the job1 and passing state as true.
    it will return a successs promise but there is no then so thats it it won't go for line 312.
    

  */

// Problem 9

// promise chaining

const job2 = (state) => {
  return new Promise(function (res, rej) {
    if (state) {
      res("success");
    } else {
      rej("error");
    }
  });
};

const promise9 = job1(true);

promise9
  .then(function (data) {
    console.log(data);
    return job2(true);
  })
  .then(function (data) {
    if (data !== "victory") {
      throw "defeat";
    }
    return job2(true);
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error);
    return job2(false);
  })
  .then(function (data) {
    console.log(data);
    return job2(true);
  })
  .catch(function (error) {
    console.log(error);
    return "Error caught";
  })
  .then(function (data) {
    console.log(data);
    return new Error("test");
  })
  .then(function (data) {
    console.log("Success: ", data.message);
  })
  .catch(function (error) {
    console.log("Error: ", error.message);
  });

/*
    consoles as

    success
    defeat
    error
    Error caught
    Success: test


    line 346, it returns success promise. Since it is success promise , it will go to line 349 and in line 350, it prints "Success"
    in line 351, job2 is calles again and state is passed as true, so it returns success promise. So, it goes to line 353.
    in line 354, since the the data is not equals to victory, it throws an error. So, that means it is returning a rejected promise.
    So, it won't even go to line 357.
    Since it is rejected promise, it goes to line 362 and line 363, it prints "defeat". in line 364, job2 is called and state is passed as false.
    so it returns a rejected promise. Since it is a rejected promise, we will go to line 370. in line 371, we prints "error".
    in line 372, it returns a string. That means it's like a success promise and go to line 374, in line 375, it prints "Error caught".
    in line 376, new Error("test") it does not means it is throwing an error.it is like a console. So, it is returning a string again.
    So, it acts like success promise and goes to line 378 and in line 379, it prints "Success: test"

  */

// Problem 10

/*
  create a promise called firstPromise which will resolve to a text called 'test'
   and then we have to create another promise called second promise
  which will resolve our first promise that we have created earlier,
   then we will resolve our second promise and ouput of which we have to pass to the first promise
  and then print the first promise

*/

const firstPromise = new Promise((res, rej) => {
  res("test");
});

const secondPromise = new Promise((res, rej) => {
  res(firstPromise);
});

secondPromise
  .then((res) => {
    return res;
  })
  .then((res) => {
    console.log(res);
  });

/*
    it says like we need to create a prommise Called firstPromise. So we did in line 418. that resolves a text.lets say 'test'
    we need to create another promise called secondPromise which will resolve first promise.
    So in line 422 we create a secondpromise. it is resolving first promise.we are invoking the firsrPromise throgh the secondPromise like res(firstPromise). this means firstPromise is a Sucess Promise. 
    So, it is res(pendingPromise). So in line 427, res is a promise. So we will return that promise.

     and in line 431, we are conoling the result.

*/

// Problem 11

// rewrite the example code using 'async/await' instead of '.then/catch'

/*
  function loadJson(url){
    return fetch(url).then(res=>{
        if(res.status == 200){
            return res.json()
        }else{
            throw new Error(res.status)
        }
    })
  }

  loadJson("https://fakeurl.com/no-such-user.json").catch((err)=> console.log(err))

*/

async function loadJson(url) {
  const response = await fetch(url);
  if (response.status == 200) {
    let json = await response.json();
    return json;
  }
  throw new Error(res.status);
}

loadJson("https://fakeurl.com/no-such-user.json").catch((err) =>
  console.log(err)
);
