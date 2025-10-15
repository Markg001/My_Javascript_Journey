console.log("Start");

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(response => response.json())
  .then(data => console.log("Data loaded"))
  .catch(err => console.log("Error"));

console.log("End");


console.log("A");
Promise.resolve().then(() => console.log("B"));
console.log("C");


async function test() {
  console.log("1");
  await Promise.resolve();
  console.log("2");
}
test();
console.log("3");
