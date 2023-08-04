"use strict";
const logDetails = (uid, item) => {
    console.log(`${item} has a uid of ${uid}`);
};
const greet = (user) => {
    console.log(`${user.name} says hello`);
};
// now we can re-use our type
const greetAgain = (user, uid) => {
    console.log(`${user.name} with uid of ${uid} says hello`);
};
greetAgain({ name: "Urban", uid: 12 }, "12");
