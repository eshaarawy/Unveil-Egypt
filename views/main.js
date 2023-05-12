const form = document.getElementById('search-form');
const input = document.getElementById('search-input');
const submitBtn = document.getElementById('submit-btn');

// Add event listener for Enter key press
input.addEventListener('keyup', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    submitBtn.click();
  }
});
