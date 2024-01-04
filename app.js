const inputs = document.querySelectorAll(".contact-input");

inputs.forEach(input => {
  input.addEventListener("focus", () => {
  	input.parentNode.classList.add("focus");
  });
  input.addEventListener("blur", () => {
  	input.parentNode.classList.remove("focus");
  });
});
