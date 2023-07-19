

document.addEventListener("DOMContentLoaded", function() {
    const newsletterForm = document.querySelector(".newsletter-form");

    newsletterForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const emailInput = newsletterForm.querySelector("input[type='email']");
        const email = emailInput.value;

        
        alert(`Thank you for subscribing with the email: ${email}`);

        // Reset the form after submission
        newsletterForm.reset();
    });
});
