let emailInput = document.getElementById("email");
let submitBtn = document.getElementsByClassName("btn")[0];
let error = document.getElementsByClassName("error")[0];

function isValidEmail(email) {
  // Regular expression pattern for a valid email address
  const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  // Test the email against the pattern
  return emailPattern.test(email);
}

// Example usage:

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();

  if (emailInput.value) {
    const userInput = emailInput.value;
    if (isValidEmail(userInput)) {
      emailInput.classList.remove("input-error");
      emailInput.classList.add("form-input");
      error.style.display = "none";
    } else {
      emailInput.classList.remove("form-input");
      emailInput.classList.add("input-error");
      error.style.display = "block";
      emailInput.placeholder = "ash#loremcompany.com";
    }
  } else {
    emailInput.classList.remove("form-input");
    emailInput.classList.add("input-error");
    error.style.display = "block";
    emailInput.placeholder = "ash#loremcompany.com";
  }
});
