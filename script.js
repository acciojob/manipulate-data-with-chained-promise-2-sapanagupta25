//your JS code here. If required.
const output = document.getElementById("output");

// Step 1: Initial Promise that returns the array after a 3-second delay
const initialPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve([1, 2, 3, 4]);
  }, 3000);
});

// Step 2: Chaining Promises
initialPromise
  .then((array) => {
    // Step 2a: Filter out odd numbers after 1-second delay
    return new Promise((resolve) => {
      setTimeout(() => {
        const evenNumbers = array.filter((num) => num % 2 === 0);
        output.textContent = evenNumbers.join(", "); // Display result in output div
        resolve(evenNumbers);
      }, 1000);
    });
  })
  .then((evenNumbers) => {
    // Step 2b: Multiply even numbers by 2 after 2-second delay
    return new Promise((resolve) => {
      setTimeout(() => {
        const multipliedNumbers = evenNumbers.map((num) => num * 2);
        output.textContent = multipliedNumbers.join(", "); // Update result in output div
        resolve(multipliedNumbers);
      }, 2000);
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });
