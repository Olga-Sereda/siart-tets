const buttons = document.querySelectorAll(".products__btn");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    toggleButtons(button);
  });
});

const minusButtons = document.querySelectorAll(".products__btn-minus");
minusButtons.forEach((button) => {
  button.addEventListener("click", function () {
    decreaseCount(button);
  });
});


const plusButtons = document.querySelectorAll(".products__btn-plus");
plusButtons.forEach((button) => {
  button.addEventListener("click", function () {
    increaseCount(button);
  });
});

function toggleButtons(button) {
    const card = button.closest(".products__buttons"); 
    const addToCartButton = card.querySelector(".products__btn");
    const minusButton = card.querySelector(".products__btn-minus");
    const plusButton = card.querySelector(".products__btn-plus");
    const countInput = card.querySelector(".products__count");

    addToCartButton.style.display = "none";

    minusButton.style.display = "block";
    plusButton.style.display = "block";
    countInput.style.display = "block";
}

function increaseCount(button) {
  const card = button.closest(".products__buttons");
  const countInput = card.querySelector(".products__count");
  let currentQuantity = parseInt(countInput.value);
  countInput.value = currentQuantity + 1;
}

function decreaseCount(button) {
  const card = button.closest(".products__buttons"); 
  const countInput = card.querySelector(".products__count");
  let currentQuantity = parseInt(countInput.value);

  if (currentQuantity > 1) {
    countInput.value = currentQuantity - 1;
  }
}
