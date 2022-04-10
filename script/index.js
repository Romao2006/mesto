const buttomOpenEditForm = document.querySelector('.profile__btn-edit');
const buttomCloseEditForm = document.querySelector('.popup__btn-close');
const buttomSubmitEditForm = document.querySelector('.popup__btn-close_type_edit');
const popupInfo = document.querySelector('.popup');
const nameInput = document.querySelector('.popup__input_name_name');
const aboutInput = document.querySelector('.popup__input_name_about');
const formEdit = document.querySelector('.popup__form');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');

const cardsList = document.querySelector(".cards__list");
const popupNewCard = document.querySelector('.popup_type_new-card');
const buttomOpenNewCardForm = document.querySelector('.profile__btn-add');
const buttomCloseAddForm = document.querySelector('.popup__btn-close_type_new-card');
const newCardForm = document.querySelector('.popup__form_type_new-card');
const newCardName = document.querySelector('.popup__input_name_card-name');
const newCardLink = document.querySelector('.popup__input_name_card-link');
const cardTemplate = document.querySelector('#card-template').content;

const preview = document.querySelector('.popup_type_preview');
const previewImage = document.querySelector('.popup__image');
const previewTitle = document.querySelector('.popup__title_type_preview');
const buttomClosePreview = document.querySelector('.popup__btn-close_type_preview');

buttomOpenEditForm.addEventListener("click", editButtonHandler);
buttomCloseEditForm.addEventListener("click", closeEditFormButtonHandler);
formEdit.addEventListener("submit", editFormSubmitHandler);
buttomOpenNewCardForm.addEventListener('click', openNewCardFormButtonHandler);
buttomCloseAddForm.addEventListener("click", closeNewCardFormButtonHandler);
newCardForm.addEventListener("submit", handleNewCardFormSubmit);
buttomClosePreview.addEventListener('click', closePreviewButtonHandler);

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
    nameInput.value = profileName.textContent;
    aboutInput.value = profileAbout.textContent;
    openPopup(popupInfo);
}

function openPopup(popup) {
    popup.classList.add('popup_opened');
}
function closePopup(popup) {
    popup.classList.remove('popup_opened');
}
function closeEditFormButtonHandler() {
    closePopup(popupInfo);
}

function editFormSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileAbout.textContent = aboutInput.value;
    closePopup(popupInfo);
}

function openNewCardFormButtonHandler() {
    openPopup(popupNewCard);
}

function closeNewCardFormButtonHandler() {
    closePopup(popupNewCard);
}

function handleNewCardFormSubmit(evt) {
    evt.preventDefault();
    insertCard(createCard({
        name: newCardName.value,
        link: newCardLink.value
    }));
    newCardName.value = '';
    newCardLink.value = '';
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

function closePreviewButtonHandler() {
    closePopup(preview);
}