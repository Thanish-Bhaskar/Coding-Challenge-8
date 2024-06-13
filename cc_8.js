//U08201790
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const eventDate = document.getElementById('eventDate').value;
    const mealPreferences = Array.from(document.querySelectorAll('input[name="mealPreference"]:checked')).map(checkbox => checkbox.value);

    if (!name || !email || !eventDate || mealPreferences.length === 0) {
        alert('Please fill out all fields.');
        return;
    }

    const registrationDetails = document.getElementById('registrationDetails');
    registrationDetails.innerHTML = `
        <h2>Registration Details</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Event Date:</strong> ${eventDate}</p>
        <p><strong>Meal Preferences:</strong> ${mealPreferences.join(', ')}</p>
    `;
});
