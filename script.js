// Grab the p id that contains the saved entries and save in a variable called saveEL
let saveEl = document.getElementById("save-el")


// Grab the h2 id that contains the count and save in a variable called countEL
let countEl = document.getElementById("count-el")

let count = 0

// Function to increase count by 1 on every click
function increment() {
    count += 1
    countEl.textContent = count
}

// Function to decrease count by 1 on every click and stop decreasing when it hits 0
function decrement() {
    if (count > 0) {
        count -= 1;
        countEl.textContent = count;
    }
}

function reset() {
    countEl.textContent = 0
    count = 0
}

// Save entries function and resetting count back to 0 after every save
function save() {
    saveEntries = count + "  "
    saveEl.textContent += saveEntries

    countEl.textContent = 0
    count = 0
}
