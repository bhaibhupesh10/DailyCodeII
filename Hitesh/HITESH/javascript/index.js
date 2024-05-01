// Counter function using closure
function createCounter() {
    let count = 9;

    // Inner function (closure) that can access the count variable
    function increment() {
        count++;
        return count;
    }

    // Returning the inner function
    return increment;
}

// Create a counter instance
const counter = createCounter();

// Example usage
console.log(counter(), counter(), counter()); // Output: 1