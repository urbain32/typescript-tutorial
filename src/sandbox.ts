// Type Aliases helps creating our own type so that we can use them in many place and reduce the codes
//example
type StringOrNum = string | number;

const logDetails = (uid: StringOrNum, item: string) => {
  console.log(`${item} has a uid of ${uid}`);
};

const greet = (user: { uid: StringOrNum; name: string }) => {
  console.log(`${user.name} says hello`);
};
