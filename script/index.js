const popupElement = document.querySelector('.popup');
const navButton = document.querySelector('.profile__btn-edit');
const closeButton = popupElement.querySelector('body .popup__btn-close');


const ESC_KEY = "Escape";
function openPopup() {
    popupElement.classList.add('popup_opened');
    document.addEventListener('keyup', onDocumentKeyUp)
}

function closePopup() {
    popupElement.classList.remove('popup_opened');
    document.removeEventListener('keyup', onDocumentKeyUp)
}


navButton.addEventListener('click', (event) => {
    openPopup()
});

closeButton.addEventListener('click', closePopup)

