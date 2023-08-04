// Type Aliases

const logDetails = (uid: string | number, item: string) => {
  console.log(`${item} has a uid of ${uid}`);
};

const greet = (user: { uid: string | number; name: string }) => {
  console.log(`${user.name} says hello`);
};
