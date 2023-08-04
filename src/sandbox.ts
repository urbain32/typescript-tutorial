// Type Aliases helps creating our own type so that we can use them in many place and reduce the codes
//example
type StringOrNum = string | number;
type objectWithNameAndUid = { name: string; uid: StringOrNum };

const logDetails = (uid: StringOrNum, item: string) => {
  console.log(`${item} has a uid of ${uid}`);
};

const greet = (user: objectWithNameAndUid) => {
  console.log(`${user.name} says hello`);
};
// now we can re-use our type

const greetAgain = (user: objectWithNameAndUid, uid: StringOrNum) => {
  console.log(`${user.name} with uid of ${uid} says hello`);
};
greetAgain({ name: "Urban", uid: 12 }, "12");
