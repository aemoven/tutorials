// Fetch API requires a discussion of...
// Callbacks, Promises, Thenables, and Async/Await

// 2nd parameter of Fetch is an object

const requestJoke = async () => {
    const response = await fetch(`https://api.chucknorris.io/jokes/random?`);

    const jsonResponse = await response.json();

    console.log(jsonResponse.value);
}

requestJoke();

/* const jokeObject = {
    id: "x5M799Ufib",
    joke: "I wish I could clean mirrors for a living. It's just something I can see myself doing."
};

const postData = async (jokeObj) => {
    const response = await fetch("https://httpbin.org/post", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(jokeObj)
    });

    const jsonResponse = await response.json();

    console.log(jsonResponse.headers);
}

postData(jokeObject); */

/* const getDadJoke = async () => {
    const response = await fetch("https://icanhazdadjoke.com/", {
        method: "GET",
        headers: {
            Accept: "application/json"
        }
    });
    const jsonJokeData = await response.json();

    console.log(jsonJokeData);
};

getDadJoke(); */

// workflow function

/* const getAllUserEmails = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonUserData = await response.json();

    const userEmailArray = jsonUserData.map(user => {
        return user.email;
    });

    postToWebPage(userEmailArray);
};

const postToWebPage = (data) => {
    console.log(data);
}

getAllUserEmails(); */

// Promises

// Async / Await

/* const myUsers = {
    userList: []
};

//async function myCoolFunction() { }
const myCoolFunction = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonUserData = await response.json();
    return jsonUserData;
};

myCoolFunction();

const anotherFunc = async () => {
    data = await myCoolFunction();
    myUsers.userList = data;
};

anotherFunc();
console.log(myUsers.userList); */

// 3 states: Pending, Fulfilled, Rejected

/* const users = fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        return response.json();
    })
    .then(data => {
        data.forEach(user => {
            console.log(user);
        });
    }); */

/* const myPromise = new Promise((resolve, reject) => {
    const error = false;
    if (!error) {
        resolve("Yes! Resolved the promise!");
    }
    else {
        reject("No! Rejected the promise!");
    }
});

const myNextPromise = new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve("myNextPromise resolved!");
    }, 3000);
});

myNextPromise
    .then(value => {
        console.log(value);
    });

myPromise
    .then(value => {
        console.log(value);
    }); */

/* console.log(myPromise);

myPromise
    .then(value => {
        return value + 1;
    })
    .then(newValue => {
        console.log(newValue);
    })
    .catch(err => {
        console.error(err);
    }); */


// Callbacks

/* function firstFunction(parameters, callback) {
    // do stuff
    callback();
}

// AKA "callback hell"
firstFunction(para, function () {
    // do stuff
    secondFunction(para, function () {
        // do stuff
        thirdFunction(para, function () {
            // do stuff
        })
    })
}); */