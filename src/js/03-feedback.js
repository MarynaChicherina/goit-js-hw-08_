import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
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

// function onInputForm (event){
//     const formData = new FormData(feedbackForm);
//     formData.forEach((value, name) => console.log(value, name));
// }


