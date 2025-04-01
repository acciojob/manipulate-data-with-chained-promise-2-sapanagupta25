const outputDiv = document.getElementById('output');

function delayedPromise(time, operation) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(operation());
        }, time);
    });
}

console.log("Script loaded successfully");

// Start with an initial promise that resolves after 3 seconds
delayedPromise(3000, () => [1, 2, 3, 4])
    .then(numbers => {
        console.log("Original Array:", numbers);
        return delayedPromise(1000, () => numbers.filter(num => num % 2 === 0)); // Filter even numbers
    })
    .then(evenNumbers => {
        console.log("Filtered Even Numbers:", evenNumbers);
        outputDiv.innerText = evenNumbers.join(','); // Display [2, 4]
        return delayedPromise(2000, () => evenNumbers.map(num => num * 2)); // Multiply by 2
    })
    .then(transformedNumbers => {
        console.log("Doubled Numbers:", transformedNumbers);
        outputDiv.innerText = transformedNumbers.join(','); // Display [4, 8]
    });

