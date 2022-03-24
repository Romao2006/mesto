
let editButton = document.querySelector('.profile__btn-edit');
let closeButton = document.querySelector('.popup__btn-close');
let submitButton = document.querySelector('.popup__btn-save');


let popup = document.querySelector('.popup');
let nameInput = document.querySelector('.popup__input_name_name');
let aboutInput = document.querySelector('.popup__input_name_about');

let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');

let form = document.querySelector('.popup__container');

function editButtonHandler() {
    popup.classList.add("popup_opened");
    nameInput.value = profileName.textContent;
    aboutInput.value = profileAbout.textContent;
}

function closeButtonHandler() {
    popup.classList.remove("popup_opened");
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileAbout.textContent = aboutInput.value;
    closeButtonHandler();
}

closeButton.addEventListener("click", closeButtonHandler);
editButton.addEventListener("click", editButtonHandler);
form.addEventListener("submit", formSubmitHandler);