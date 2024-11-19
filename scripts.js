document.addEventListener("DOMContentLoaded", () => {
    const toggleButtons = document.querySelectorAll(".toggle-btn");

    toggleButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const jobDescription = button.parentElement.nextElementSibling;

            if (jobDescription.style.display === "none" || !jobDescription.style.display) {
                jobDescription.style.display = "block";
                button.textContent = "-"; // Change button text to minus
            } else {
                jobDescription.style.display = "none";
                button.textContent = "+"; // Change button text to plus
            }
        });
    });
});
