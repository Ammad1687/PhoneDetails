// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent the page from reloading on form submission

    // Get values from the form fields
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Check if both Name and Email fields are filled
    if (name && email) {
        // Display a thank you popup with the entered details
        alert(`Thank you for submitting the form!\nName: ${name}\nEmail: ${email}`);
    } else {
        // If any required fields are empty, show an alert
        alert('Please fill in all required fields.');
    }
}
