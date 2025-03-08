// Write your solution in this file!

// Global variable
var customerName = 'bob';

// Function to uppercase customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Function to set bestCustomer to 'not bob'
function setBestCustomer() {
  bestCustomer = 'not bob';
}

// Function to overwrite bestCustomer
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// Global constant
const leastFavoriteCustomer = 'John';

// Function to try changing leastFavoriteCustomer (will throw error)
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'Jane';  // This will throw an error because leastFavoriteCustomer is a constant
}

