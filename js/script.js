window.onload = function () {
    console.log("Welcome to the ACT Website!");
};

const yearElements = document.querySelectorAll(".year");
const currentYear = new Date().getFullYear();

yearElements.forEach(function (element) {
    element.textContent = currentYear;

function showFeedbackForm() {
    document.getElementById("feedbackForm").style.display = "block";
    document.getElementById("courseForm").style.display = "none";
}

function showCourseForm() {
    document.getElementById("courseForm").style.display = "block";
    document.getElementById("feedbackForm").style.display = "none";
}

function submitFeedback() {
    const feedback = document.getElementById("feedbackText").value;

    if (feedback === "") {
        alert("Please write your feedback before submitting.");
    } else {
        alert("Thank you for your feedback!");
        console.log("User Feedback:", feedback);
        document.getElementById("feedbackText").value = "";
    }
}

function submitCourse() {
    const course = document.getElementById("courseName").value;

    if (course === "") {
        alert("Please enter a course name.");
    } else {
        alert("Thank you for suggesting a course!");
        console.log("Suggested Course:", course);
        document.getElementById("courseName").value = "";
    }
}

});
