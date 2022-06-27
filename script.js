"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
// querySelectorAll is used to select all the elemenst with same class name
const btnsOpenModal = document.querySelectorAll(".show-modal");
// fuctions

// function to open the modal window
const openModal = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

// fucntion to close the modal window
const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};

// main code block

// looping over the show modal btns at the event call the open modal fucntion
for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener("click", openModal);
}

// close modal window when clicked on close btn
btnCloseModal.addEventListener("click", closeModal);
// close the modal window when clicked on overlay
overlay.addEventListener("click", closeModal);

// adding the Esc key event to close the modal
document.addEventListener("keydown", function (e) {
    // close modal window when Esc key is pressed and when the modal window in active
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModal();
    }
    // open modal window when Enter key pressed and when the modal window is not active
    else if (e.key === "Enter" && modal.classList.contains("hidden")) {
        openModal();
    }
});

/*
const keyPressed = [];
document.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        console.log(keyPressed);
    } else {
        keyPressed.push(e.key);
    }
});*/
