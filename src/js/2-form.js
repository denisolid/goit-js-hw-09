let formData = {
    email: "",
    message: "",
}

const emailInputEl = document.querySelector('input[name="email"]');
const messageInputEl = document.querySelector('textarea[name="message"]');
const formEl = document.querySelector('.feedback-form');

window.addEventListener('load', () => {
    const savedData = localStorage.getItem('feedback-form-state');
    if (savedData) {
        const formData = JSON.parse(savedData);
        if (formData.email) {
            emailInputEl.value = formData.email;
        }
        if (formData.message) {
            messageInputEl.value = formData.message;
        }
    }
}
);

emailInputEl.addEventListener('input', () => {
    formData.email = emailInputEl.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

messageInputEl.addEventListener('input', () => {
    formData.message = messageInputEl.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

formEl.addEventListener('submit', (event) => {
    event.preventDefault();
    if (formData.email.trim() === "" || formData.message.trim() === "") {
        return alert("Fill please all fields");
    } else {
        console.log(formData);
        localStorage.removeItem('feedback-form-state');
        formData.email = "";
        formData.message = "";
        emailInputEl.value = "";
        messageInputEl.value = "";
    }
});

