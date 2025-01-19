function validateForm() {
    let isValid = true;

    // Clear previous errors
    document.querySelectorAll('.error').forEach(el => el.textContent = '');

    // 1. Validate Email
    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = 'Invalid email format';
        isValid = false;
    }

    // 2. Validate Age
    const age = document.getElementById('age').value;
    if (isNaN(age) || age < 1 || age > 120) {
        document.getElementById('ageError').textContent = 'Age must be a number between 1 and 120';
        isValid = false;
    }

    // 3. Validate Password Match
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match';
        isValid = false;
    }

    // 4. Validate Zip Code
    const zipCode = document.getElementById('zipCode').value;
    const zipCodeRegex = /^\d{5}(-\d{4})?$/;
    if (!zipCodeRegex.test(zipCode)) {
        document.getElementById('zipCodeError').textContent = 'Invalid zip code format';
        isValid = false;
    }

    // 5. Validate Terms and Conditions
    const terms = document.getElementById('terms').checked;
    if (!terms) {
        document.getElementById('termsError').textContent = 'You must agree to the terms and conditions';
        isValid = false;
    }

    // 6. Validate URL
    const url = document.getElementById('url').value;
    const urlRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
    if (!urlRegex.test(url)) {
        document.getElementById('urlError').textContent = 'Invalid URL format';
        isValid = false;
    }

    // 7. Validate Date (not in the future)
    const date = document.getElementById('date').value;
    const currentDate = new Date().toISOString().split('T')[0];
    if (date > currentDate) {
        document.getElementById('dateError').textContent = 'Date cannot be in the future';
        isValid = false;
    }

    // 8. Validate File Size (Max 2MB)
    const file = document.getElementById('file').files[0];
    if (file && file.size > 2 * 1024 * 1024) {
        document.getElementById('fileError').textContent = 'File size must be less than 2MB';
        isValid = false;
    }

    // 9. Validate Country Selection
    const country = document.getElementById('country').value;
    if (!country) {
        document.getElementById('countryError').textContent = 'Please select a country';
        isValid = false;
    }

    // 10. Validate Password Strength
    const passwordStrengthRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordStrengthRegex.test(password)) {
        document.getElementById('passwordError').textContent = 'Password must be at least 8 characters long and include uppercase, lowercase, numeric, and special characters';
        isValid = false;
    }

    return isValid;
}