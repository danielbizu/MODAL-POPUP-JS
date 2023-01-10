// MODAL POPUP

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn-close");
const btnsOpenModal = document.querySelectorAll(".btn-open");

// OPEN MODAL

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

// CLOSE MODAL BUTTON (x)

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// ALLOW TO HAVE MORE THEN ONE BUTTON THAT OPENS THIS MODAL ON THE SAME PAGE

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

// CLOSE MODAL WHEN YOU CLICK ON THE OVERLAY

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// CLOSE MODAL USING ESCAPE KEY

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
