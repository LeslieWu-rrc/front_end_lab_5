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

// Fetch Cat Breeds
async function fetchCatBreeds() {
  try {
    const response = await fetch("https://catfact.ninja/breeds");
    if (!response.ok) {
      throw new Error(`Failed HTTP ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("fetchCatBreeds failed", error);
  }
}

// Call the function and log the output
fetchCatBreeds().then(data => console.log(data));

// Set up a JavaScript function to get the selected value from the dropdown.
function getSelectedFactCount() {
  const selectElement = document.querySelector("#factCount");
  return parseInt(selectElement.value, 10);
}

