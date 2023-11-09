const email = document.getElementById("email");
const signupCard = document.querySelector(".sign-up-card");
const submitBtn = document.querySelector(".submit-btn");
const successCard = document.querySelector(".success-card");
const successBtn = document.querySelector(".success-btn");
const errorMsg = document.querySelector(".error-msg");

const userEmail = document.querySelector(".user-email");
let userInput;

const emailValidation = (email) => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
};

// Sign up Card
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  userInput = email.value.trim();
  // Checks the email validation
  if (!emailValidation(userInput)) {
    email.classList.add("error");
    errorMsg.style.display = "block";
  } else {
    email.classList.remove("error");
    errorMsg.style.display = "none";
    userEmail.innerHTML = userInput;
    signupCard.style.display = "none";
    successCard.style.display = "flex";
  }
});

// Success card
successBtn.addEventListener("click", (e) => {
  e.preventDefault();
  successCard.style.display = "none";
  signupCard.style.display = "flex";
  userEmail.innerHTML = "";
});
