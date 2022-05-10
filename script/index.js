const buttonOpenEditForm = document.querySelector('.profile__btn-edit');
const popupInfo = document.querySelector('.popup');
const nameInput = document.querySelector('.popup__input_name_name');
const aboutInput = document.querySelector('.popup__input_name_about');
const formEdit = document.forms.edit;
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const cardsList = document.querySelector(".cards__list");
const popupNewCard = document.querySelector('.popup_type_new-card');
const buttonOpenNewCardForm = document.querySelector('.profile__btn-add');
const newCardForm = document.forms['new-card'];
const newCardName = document.querySelector('.popup__input_name_card-name');
const newCardLink = document.querySelector('.popup__input_name_card-link');
const cardTemplate = document.querySelector('#card-template').content;
const preview = document.querySelector('.popup_type_preview');
const previewImage = document.querySelector('.popup__image');
const previewTitle = document.querySelector('.popup__title_type_preview');
const popupList = Array.from(document.querySelectorAll('.popup'));

buttonOpenEditForm.addEventListener("click", editButtonHandler);
buttonOpenNewCardForm.addEventListener('click',() => openPopup(popupNewCard));
formEdit.addEventListener("submit", editFormSubmitHandler);
newCardForm.addEventListener("submit", handleNewCardFormSubmit);

popupList.forEach( popup => {
    popup.addEventListener('mousedown', function (evt) {
        if (
            evt.target.classList.contains('popup_opened') ||
            evt.target.classList.contains('popup__btn-close')
        ) {
            closePopup(popup)
        }
    })
})

renderCards()

function renderCards() {
    initialCards.forEach(item => insertCard(createCard(item)));
}

function insertCard(data) {
    cardsList.prepend(data);
}

function createCard(item) {
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    const cardImage = cardElement.querySelector('.card__image');
    cardImage.src = item.link;
    cardImage.alt = item.name;
    cardElement.querySelector('.card__caption').textContent = item.name;
    cardElement.querySelector('.card__btn-like').addEventListener('click', likeButtonHandler);
    cardImage.addEventListener('click', handlePreview);
    cardElement.querySelector('.card__btn-delete').addEventListener('click', deleteButtonHandler);
    return cardElement;
}

function editButtonHandler() {
    resetForm(popupInfo);
    nameInput.value = profileName.textContent;
    aboutInput.value = profileAbout.textContent;
    openPopup(popupInfo);
}

function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener("keydown", closePopupEsc);
}
function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener("keydown", closePopupEsc);
    resetForm(popup);
}

function closePopupEsc(evt) {
    if (evt.key === 'Escape') {
        const popupOpened = document.querySelector('.popup_opened');
        closePopup(popupOpened);
    }
}

function resetForm(popup) {
    const button = popup.querySelector('.popup__btn-save');
    const inputList = Array.from(popup.querySelectorAll('.popup__input'));
    const errorList = Array.from(popup.querySelectorAll('.error'));
    errorList.forEach( error => {
        error.textContent = '';
        error.classList.remove('error_active')
    });
    inputList.forEach( input => {
        input.value = ''
        input.classList.remove('popup__input_type_error')
    });
    if (button) {
        button.disabled = true;
        button.classList.add('popup__btn-save_disabled');
    }
}

function editFormSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileAbout.textContent = aboutInput.value;
    closePopup(popupInfo);
}


function handleNewCardFormSubmit(evt) {
    evt.preventDefault();
    insertCard(createCard({
        name: newCardName.value,
        link: newCardLink.value
    }));

    closePopup(popupNewCard);
}

function likeButtonHandler(evt) {
    evt.target.classList.toggle('card__btn-like_active');
}

function deleteButtonHandler(evt) {
    evt.target.closest('.card').remove();
}

function handlePreview(evt) {
    previewImage.src = evt.target.src;
    previewImage.alt = evt.target.alt;
    previewTitle.textContent = evt.target.alt;
    openPopup(preview);
}

