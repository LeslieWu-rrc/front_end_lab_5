function simulateAsyncOperation() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Async is completed");
    }, 1000); 
  });
}

// Call the function and process the result with then/catch
simulateAsyncOperation()
  .then(result => console.log(result))
  .catch(error => console.error(error));

console.log("This line of code will be called first, will not be blocked by the async.");
