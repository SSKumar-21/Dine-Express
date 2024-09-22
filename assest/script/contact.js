document.getElementById('submitButton').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Fetch the values from the form
    const userName = document.getElementById('userName').value;
    const userEmail = document.getElementById('userEmail').value;
    const subject = document.getElementById('subject').value;
    const messageBody = document.getElementById('messageBody').value;

    // Construct the mailto link
    const mailtoLink = `mailto:deekshaporwal716@gmail.com?subject=${encodeURIComponent(subject)}&body=Name: ${encodeURIComponent(userName)}%0AEmail: ${encodeURIComponent(userEmail)}%0A%0A${encodeURIComponent(messageBody)}`;

    // Open the user's email client with the mailto link
    window.location.href = mailtoLink;
});
