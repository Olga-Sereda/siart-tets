const inputs = document.querySelectorAll(".form__inputs-block input");
const clearButtons = document.querySelectorAll(".input__btn-clear");
const errorMessages = document.querySelectorAll(".input__label-error");

function toggleClearButton(event) {
    const clearButton = event.target.nextElementSibling;
    const errorLabel = document.getElementById(event.target.id + "-error");
    const labelOk = event.target
        .closest(".input__container")
        .querySelector(".input__label-ok");
    const iconOk = event.target
        .closest(".input__container")
        .querySelector(".input__icon-ok");


    (event.target.value.trim() !== "") ? clearButton.style.display = "block" : clearButton.style.display = "none";
  

    if (event.target.value.trim() !== "" && errorLabel) {
        errorLabel.style.display = "none"; 
        event.currentTarget.classList.remove("error")
    }

    if (event.target.value.toLowerCase().includes("инпут")) {
        clearButton.style.display = "none";
        if (labelOk) labelOk.style.display = "block"; 
        if (iconOk) iconOk.style.display = "inline"; 
        event.currentTarget.classList.add("green");
    } else {
        if (labelOk) labelOk.style.display = "none"; 
        if (iconOk) iconOk.style.display = "none"; 
        event.currentTarget.classList.remove("green");
    }

    if (event.currentTarget.type === "tel") event.currentTarget.value = event.target.value.replace(/[^0-9]/g, "");
}

function clearInput(event) {
  event.preventDefault();  
  
  const input = event.currentTarget.previousElementSibling;

  input.value = "";
  event.currentTarget.style.display = "none";
  input.focus();
}

inputs.forEach((input) => {
  input.addEventListener("input", toggleClearButton);
});

clearButtons.forEach((button) => {
  button.addEventListener("click", clearInput);
});


// Отправка формы
document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault(); 

  let isValid = true;

  inputs.forEach((input) => {
    if (!input.value.trim()) {
      const errorLabel = document.getElementById(input.id + "-error");
      if (errorLabel) {
        errorLabel.style.display = "block"; 
        input.classList.add("error")
      }
      isValid = false;
    }
  });

  const agreeCheckbox = document.getElementById("agree");
  const agreeLabel = document.querySelector(".label__agree");

  if (!agreeCheckbox.checked) {
    agreeLabel.classList.add("error");
    isValid = false;
  } else {
    agreeLabel.classList.remove("error");
  }


  if (isValid) {
    document.getElementById("modal").style.display = "flex";
    inputs.forEach((input) => {
        input.value = ''
    });

    clearButtons.forEach((button) => {
      button.style.display = "none";
    });

    agreeCheckbox.checked = !agreeCheckbox.checked;
  } 
});


function closeModal() {
    document.getElementById("modal").style.display = "none"; 
}

document.getElementById("closeModal").addEventListener("click", () => {
    closeModal();
});
document.getElementById("confirmModal").addEventListener("click", () => {
    closeModal();
});


window.addEventListener("click", (event) => {
  if (event.target === document.getElementById("modal")) {
    document.getElementById("modal").style.display = "none";
  }
});