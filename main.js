let myModal = new bootstrap.Modal("#staticBackdrop");
let paymentModal = new bootstrap.Modal("#payment-modal");

let freeButton = document.querySelector(".free-purchase");
let rareButton = document.querySelector(".rare-purchase");
let legendButton = document.querySelector(".legend-purchase");

let free_title = document.querySelector("#staticBackdropLabel");
let text_freeButton = document.querySelector(".modal-body p");
let label_freeButton = document.querySelector(".claim");

freeButton.addEventListener("click", () => {
    free_title.textContent = "Free Pokemon Egg";
    text_freeButton.textContent = "Do you want to claim it?";
    label_freeButton.textContent = "Claim";
    myModal.show();
});

const modalRare = rareButton.addEventListener("click", () => {
    free_title.textContent = "Rare Pokemon Egg";
    text_freeButton.textContent = "Do you want to buy it?";
    label_freeButton.textContent = "Purchase";
    paymentModal.show();
});

legendButton.addEventListener("click", () => {
    free_title.textContent = "Legendary Pokemon Egg";
    text_freeButton.textContent = "Do you want to buy it?";
    label_freeButton.textContent = "Purchase";
    paymentModal.show();
});





