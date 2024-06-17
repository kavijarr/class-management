document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let isValid = true;
    
    // Validate First Name
    const firstName = document.getElementById('firstName');
    if (firstName.value.trim() === '') {
        firstName.classList.add('is-invalid');
        isValid = false;
    } else {
        firstName.classList.remove('is-invalid');
    }

    // Validate Last Name
    const lastName = document.getElementById('lastName');
    if (lastName.value.trim() === '') {
        lastName.classList.add('is-invalid');
        isValid = false;
    } else {
        lastName.classList.remove('is-invalid');
    }

    // Validate Birthday
    const birthday = document.getElementById('birthday');
    if (birthday.value === '') {
        birthday.classList.add('is-invalid');
        isValid = false;
    } else {
        birthday.classList.remove('is-invalid');
    }

    // Validate Gender
    const gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        document.querySelector('.d-flex.align-items-center').classList.add('is-invalid');
        isValid = false;
    } else {
        document.querySelector('.d-flex.align-items-center').classList.remove('is-invalid');
    }

    // Validate Email
    const email = document.getElementById('email');
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email.value)) {
        email.classList.add('is-invalid');
        isValid = false;
    } else {
        email.classList.remove('is-invalid');
    }

    // Validate Phone Number
    const phone = document.getElementById('phone');
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone.value)) {
        phone.classList.add('is-invalid');
        isValid = false;
    } else {
        phone.classList.remove('is-invalid');
    }

    // Validate Grade
    const grade = document.getElementById('grade');
    if (grade.value === '') {
        grade.classList.add('is-invalid');
        isValid = false;
    } else {
        grade.classList.remove('is-invalid');
    }

    // If all validations pass, submit the form
    if (isValid) {
        alert('Form submitted successfully!');
        // Here you can add code to actually submit the form data
        // For example, using AJAX or a form submission
    }
});

// Remove invalid class on input
const inputs = document.querySelectorAll('input, select');
inputs.forEach(input => {
    input.addEventListener('input', () => {
        input.classList.remove('is-invalid');
    });
});
