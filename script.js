// ASYNC: NOW AND LATER

let value; //global variable 

let getValue = (num) => { // step 1: Create a function in app.js that will log a message to the console and return a number
    console.log(`The value is ${num}`); 
    value = num; //step 2: The value returned should be stored in a global variable
}


let multiplyVal = () => { // step 3: Create another function that will log the result of multiplying the global variable multiplied by 4
    let newValue = value * 4;
    console.log(`The new value is ${newValue}`);

}

setTimeout(() => { //step 4: function that calls the multiplyVal function after 2 seconds.
    // multiplyVal(value);
}, 2000);

// getValue(10);

//CALLBACKS

let getWords = () => { //step 1: create a function called getWords()...
    console.log('Hi');
    setTimeout(() => {
        console.log("you?")
    }, 3000);
    setTimeout(() => {
        console.log("are");
    }, 2000);
    setTimeout(() => {
        console.log("how");
    }, 1000);
}

// getWords(); //step 4: call function.

const countdown = (num, callback) => { //step 2: create another function on global scope with arguments num and callback.
    setTimeout(() => {
        console.log(num);
        if(num > 1) { //if else that loops through.
            num--;
            countdown(num, callback);
        } else {
            callback();
        }
    }, 1000);
}

const done = () => { // step 1: create function called done.
    console.log("Nailed it!");
}

// countdown(10, done); //

//PROMISES PROMISES ;)

const lunchTime = false;

let orderMeSomeFood = () => {
    return new Promise((resolve, reject) => {
        if(lunchTime === true) {
            order = {
                lunch: 'Pizza',
                drink: 'Coke'
            }
            resolve(order);
        } else {
            let uhOh = new Error('Nothing to order');
            reject(uhOh);
        }
    });
}
orderMeSomeFood().then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
});

