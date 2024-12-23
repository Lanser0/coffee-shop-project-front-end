// action search
let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
}


// action menu
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
    navbar.classList.toggle('active');
}

// Select the form by its ID
document.getElementById('tableForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting traditionally
  
    const tableNumber = document.getElementById('tableNumber').value;
  
    // List of valid table numbers
    const validTableNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
    // Check if the entered table number is in the valid list
    if (validTableNumbers.includes(parseInt(tableNumber))) {
      // Redirect to the menu page with the table number as a query parameter
      window.location.href = `menu.html?table=${tableNumber}`;
    } else {
      // Show an error if the table number is not valid
      alert('Invalid table number. Please enter a number betwen 1 and 10.');
    }
  });

  
  

