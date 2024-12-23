let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
}

// Extract the query string from the URL
const queryString = window.location.search;

// Parse the query string using URLSearchParams
const urlParams = new URLSearchParams(queryString);

// Get the table number from the query parameters
const tableNumber = urlParams.get('table');

// Check if the table number exists
if (tableNumber) {
  // Dynamically update the welcome message with the table number
  document.getElementById('tableDisplay').textContent = `Welcome to Menu, Table ${tableNumber}`;
} else {
  // Fallback message if no table number is provided
  document.getElementById('tableDisplay').textContent = `Welcome to Menu! Please Enter your table number.`;
}
