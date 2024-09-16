document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Thank you, ${name}! We have received your message and will get back to you soon.`);
    } else {
        alert("Please fill in all the fields.");
    }

    // You could integrate this part with your server or email service later on.
});
