 // check information
const form = document.getElementById('formulario')

form.addEventListener('submit', function(event) {
    const email = document.getElementById('email').value;
    const birthDate = document.getElementById('dateOfBith').value;
    const CurrentlyDate = new Date().toISOString().split("T")[0];

    // check Mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please, enter a valid email address.');
        event.preventDefault();
        return;
    }

    // Check birth Date
    if (!birthDate) {
        alert('Please, enter a valid date');
        event.preventDefault();
        return;
    }

    if (birthDate >= CurrentlyDate) {
        alert('The date of birth cannot be in the future.');
        event.preventDefault();
        return;
    }

});