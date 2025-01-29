// ---- Index Page (index.html) ----
if (document.querySelector('.event')) {
    // Event Listings - Click "See More" to redirect to event details page with event ID in URL
    const eventLinks = document.querySelectorAll('.event a'); // Select all "See More" links

    eventLinks.forEach((link, index) => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default link behavior
            const eventId = index + 1; // Generate event ID (you can replace this with dynamic IDs)
            window.location.href = `event-details.html?id=${eventId}`; // Redirect to event-details.html with event ID in the URL
        });
    });
}

// ---- Login Page (login.html) ----
if (document.querySelector('form[action="/login"]')) {
    // Login Form - Simple validation and redirection after login
    document.querySelector('form').addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent form submission for validation

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Simple validation for empty fields
        if (!email || !password) {
            alert('Please fill in both fields.');
        } else {
            // Handle actual login process here (e.g., send data to server via AJAX)
            console.log('Login successful');
            // Redirect to homepage or dashboard after successful login
            window.location.href = 'index.html';
        }
    });
}

// ---- Registration Page (register.html) ----
if (document.querySelector('form[action="/register"]')) {
    // Registration Form - Simple validation and redirection after registration
    document.querySelector('form').addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent form submission for validation

        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Simple validation for empty fields
        if (!username || !email || !password) {
            alert('Please fill in all fields.');
        } else {
            // Handle registration process here (e.g., send data to server via AJAX)
            console.log('Registration successful');
            // Redirect to login page after successful registration
            window.location.href = 'login.html';
        }
    });
}

// ---- Event Details Page (event-details.html) ----
if (document.querySelector('.event-details')) {
    // Extract the event ID from the URL query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = urlParams.get('id'); // Get the ID from the URL

    // Example event data (you can replace this with actual data from a server/database)
    const eventData = {
        1: {
            title: "Event Title 1",
            description: "This event is a wonderful gathering for enthusiasts to network, learn, and share ideas. There will be speakers, workshops, and more.",
            schedule: [
                "10:00 AM - Registration",
                "11:00 AM - Opening Remarks",
                "1:00 PM - Workshops",
                "5:00 PM - Closing Remarks"
            ]
        },
        2: {
            title: "Event Title 2",
            description: "A second event for learning, collaboration, and growth.",
            schedule: [
                "9:00 AM - Registration",
                "10:00 AM - Workshop",
                "12:00 PM - Networking",
                "4:00 PM - Closing Remarks"
            ]
        }
    };

    // If the event ID is valid, display the event details
    if (eventId && eventData[eventId]) {
        const event = eventData[eventId];
        document.querySelector('h1').textContent = event.title;
        document.querySelector('.event-details').innerHTML = `
            <h2>Event Description</h2>
            <p>${event.description}</p>

            <h3>Event Schedule</h3>
            <ul>
                ${event.schedule.map(item => `<li>${item}</li>`).join('')}
            </ul>

            <a href="register.html">Register Now</a>
        `;
    } else {
        // Handle case where the event ID is invalid
        document.querySelector('.event-details').innerHTML = `
            <p>Event details could not be found. Please check the event ID or try again later.</p>
        `;
    }
}
