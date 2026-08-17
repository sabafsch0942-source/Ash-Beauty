// Contact Form
const form = document.querySelector("#contact-form");
const confirmation = document.querySelector("#confirmation");

form.addEventListener("submit", (event) => {

    // Stop the page from refreshing
    event.preventDefault();

    // Get the user's name
    const name = document.querySelector("#name").value;

    // Show confirmation message
    confirmation.textContent =
        `Thanks, ${name}! Your message has been received.`;

    // Clear the form
    form.reset();
});
// Character Counter
const messageInput = document.querySelector("#message");
const charCount = document.querySelector("#char-count");

messageInput.addEventListener("input", () => {

    const length = messageInput.value.length;

    charCount.textContent = `${length} characters`;

    if (length > 200) {
        charCount.style.color = "red";
    } else {
        charCount.style.color = "black";
    }
});