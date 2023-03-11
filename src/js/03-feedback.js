import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const selectedFilters = {};

feedbackForm.addEventListener('input', throttle(onSubmit, 500));

function onSubmit (event) {
    event.preventDefault();
    const formData = new FormData(feedbackForm);
    formData.forEach((value, name) => console.log(value, name));
}

feedbackForm.addEventListener('change', evt => {
    selectedFilters[evt.target.name] = evt.target.value;
    console.log(selectedFilters);
});


