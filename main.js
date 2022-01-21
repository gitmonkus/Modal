const grayContainer = document.querySelector(".gray-container");
const showBtn = document.querySelector(".show-btn");
const offerAccepted = document.querySelector(".offer-accepted");
const container = document.querySelector(".container");

showBtn.addEventListener("click", function () {
  showBtn.style.display = "none";
  grayContainer.style.display = "flex";
});

document.querySelector(".modal-btn").addEventListener("click", function () {
  grayContainer.style.display = "none";
  showBtn.style.display = "none";
  offerAccepted.textContent = "Offer Accepted!";
});

document.querySelector(".close-btn").addEventListener("click", closeBtn);

function closeBtn() {
  grayContainer.style.display = "none";
  showBtn.style.display = "block";
}

document.addEventListener("click", function (event) {
  if (event.target == grayContainer) {
    closeBtn();
  }
});

window.addEventListener("keyup", function (event) {
  if (event.key == "Esc" || event.key == "Escape") {
    closeBtn();
  }
});
