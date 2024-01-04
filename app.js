const inputs = document.querySelectorAll(".contact-input");

inputs.forEach(input => {
  input.addEventListener("focus", () => {
  	input.parentNode.classList.add("focus");

  	// will change font-size for the input label 
  	input.parentNode.classList.add("not-empty");
  });
  input.addEventListener("blur", () => {
  	// will remove font-size for the input label 
  	if(input.value == "") {
  	  input.parentNode.classList.remove("not-empty");
  	}
  	input.parentNode.classList.remove("focus");
  });
});

// TODO: add theme toggle
