import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');
const selectedFilters = {};
const STORAGE_KEY = 'feedback-form-state';

feedbackForm.addEventListener('submit', onFormSubmit);
feedbackForm.addEventListener('input', throttle(onFormInput, 500));

function onFormSubmit (event) {
    event.preventDefault();
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log(selectedFilters);   
}
function onFormInput (event) {
   selectedFilters.email = input.value;
   selectedFilters.message = textarea.value;

   localStorage.setItem(STORAGE_KEY, JSON.stringify(selectedFilters));
}

function onFormFillIn (event){
    const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (savedData){
        input.value = savedData.email;
        textarea.value = savedData.message;
    }
}



