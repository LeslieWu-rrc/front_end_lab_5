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

async function displayCatFacts() {
  const factsContainer = document.querySelector("#factsContainer");
  // remove content
  factsContainer.innerHTML = "";

  // Get the number of items selected by the user
  const factCount = getSelectedFactCount();

  try {
    const response = await fetch(`https://catfact.ninja/facts?limit=${factCount}`);
    if (!response.ok) {
      throw new Error(`Failed ${response.status}`);
    }
    const data = await response.json();
    const facts = data.data; // According to the API return structure, assume that cat trivia is stored in the data attribute

    // loop the facts and add it to the page
    facts.forEach(factObj => {
      const factPara = document.createElement("p");
      factPara.textContent = factObj.fact;
      factsContainer.appendChild(factPara);
    });
  } catch (error) {
    console.error(error);
    factsContainer.innerHTML = "<p>An error occurred while loading data. Please try again later.</p>";
  }
}
