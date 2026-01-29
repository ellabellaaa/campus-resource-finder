function updateCopyright() {
    const yearElements = document.querySelectorAll('.current-year');
    const currentYear = new Date().getFullYear();
    
    yearElements.forEach(element => {
        element.textContent = currentYear;
    });
}

function setupFormValidation() {
    const contactForm = document.getElementById('contactForm');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        let errors = [];
        
        if (name === '') {
            errors.push('Name is required');
            document.getElementById('name').style.borderColor = 'red';
        } else {
            document.getElementById('name').style.borderColor = '';
        }
        
        if (email === '') {
            errors.push('Email is required');
            document.getElementById('email').style.borderColor = 'red';
        } else if (!email.includes('@')) {
            errors.push('Please enter a valid email');
            document.getElementById('email').style.borderColor = 'red';
        } else {
            document.getElementById('email').style.borderColor = '';
        }
        
        if (message === '') {
            errors.push('Message is required');
            document.getElementById('message').style.borderColor = 'red';
        } else {
            document.getElementById('message').style.borderColor = '';
        }

        if (errors.length > 0) {
            alert('Please fix these errors:\n\n' + errors.join('\n'));
        } else {
            alert('Thank you! Your message has been sent.');
            contactForm.reset();
        }
    });
}

function setupMobileMenu() {
    if (window.innerWidth > 768) return;
    
    const nav = document.querySelector('nav');
    if (!nav) return;
    
    const menuButton = document.createElement('button');
    menuButton.textContent = '☰ Menu';
    menuButton.style.cssText = `
        background: #1c5d99;
        color: white;
        border: none;
        padding: 10px;
        margin: 10px 0;
        border-radius: 5px;
        cursor: pointer;
    `;
    
    nav.parentNode.insertBefore(menuButton, nav);
    
    nav.style.display = 'none';
    
    menuButton.addEventListener('click', function() {
        if (nav.style.display === 'none') {
            nav.style.display = 'flex';
            nav.style.flexDirection = 'column';
            menuButton.textContent = '✕ Close';
        } else {
            nav.style.display = 'none';
            menuButton.textContent = '☰ Menu';
        }
    });
}

function showFeedbackForm() {
    document.getElementById('feedbackForm').style.display = 'block';
    document.getElementById('courseForm').style.display = 'none';
}

function showCourseForm() {
    document.getElementById('courseForm').style.display = 'block';
    document.getElementById('feedbackForm').style.display = 'none';
}

function submitFeedback() {
    const feedback = document.getElementById('feedbackText').value;
    
    if (feedback === '') {
        alert('Please write your feedback before submitting.');
    } else {
        alert('Thank you for your feedback!');
        document.getElementById('feedbackText').value = '';
    }
}

function submitCourse() {
    const course = document.getElementById('courseName').value;
    
    if (course === '') {
        alert('Please enter a course name.');
    } else {
        alert('Thank you for suggesting a course!');
        document.getElementById('courseName').value = '';
    }
}

window.onload = function() {
    console.log('ACT Website loaded');
    
    updateCopyright();
    setupFormValidation();
    setupMobileMenu();
};